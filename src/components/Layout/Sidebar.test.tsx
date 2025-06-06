import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders navigation items', () => {
    render(<Sidebar activeSection="dashboard" onSectionChange={() => {}} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Planification')).toBeInTheDocument();
  });
});
