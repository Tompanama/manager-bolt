import React, { useEffect, useState } from 'react';
import type { Post } from '../../types';

const days = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];

const SimpleCalendar: React.FC = () => {
  const [currentDate] = useState(new Date());
  const [posts, setPosts] = useState<Post[]>([]);
  const [selected, setSelected] = useState<Date | null>(null);

  useEffect(() => {
    fetch('/api/posts.json')
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  const start = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = end.getDate();
  const blanks = (start.getDay() + 6) % 7; // adjust for Monday start

  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const postsForDate = (d: number) =>
    posts.filter((p) => p.scheduledDate && new Date(p.scheduledDate).getDate() === d);

  return (
    <div>
      <div className="grid grid-cols-7 text-center mb-2">
        {days.map((d) => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: blanks }).map((_, i) => (
          <div key={`b${i}`} />
        ))}
        {dates.map((d) => (
          <button
            key={d}
            onClick={() => setSelected(new Date(currentDate.getFullYear(), currentDate.getMonth(), d))}
            className={`p-2 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 ${selected?.getDate() === d ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
          >
            {d}
          </button>
        ))}
      </div>
      {selected && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Posts le {selected.toLocaleDateString('fr-FR')}</h3>
          <ul className="space-y-1 text-sm">
            {postsForDate(selected.getDate()).map((p) => (
              <li key={p.id} className="border p-2 rounded">
                {p.content.slice(0, 40)}...
              </li>
            ))}
            {postsForDate(selected.getDate()).length === 0 && <li>Aucun post</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleCalendar;
