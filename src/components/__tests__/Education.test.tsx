import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Education from '../Education';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the portfolio data
vi.mock('@/data/portfolio', () => ({
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science',
      institution: 'Test University',
      duration: '2016 - 2020',
      location: 'Helsinki, Finland',
      coursework: ['Computer Science', 'Mathematics'],
      achievements: ['Graduated with honors', 'Dean\'s List'],
    },
  ],
}));

describe('Education', () => {
  it('renders education section with title', () => {
    customRender(<Education />);

    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText(/academic foundation/i)).toBeInTheDocument();
  });

  it('renders education items', () => {
    customRender(<Education />);

    expect(screen.getByText('Bachelor of Science')).toBeInTheDocument();
    expect(screen.getByText('Test University')).toBeInTheDocument();
  });

  it('renders duration and location', () => {
    customRender(<Education />);

    expect(screen.getByText('2016 - 2020')).toBeInTheDocument();
    expect(screen.getByText('Helsinki, Finland')).toBeInTheDocument();
  });

  it('renders coursework', () => {
    customRender(<Education />);

    expect(screen.getByText('Key Coursework')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Mathematics')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    customRender(<Education />);

    expect(screen.getByText('Achievements')).toBeInTheDocument();
    expect(screen.getByText(/graduated with honors/i)).toBeInTheDocument();
    expect(screen.getByText(/dean's list/i)).toBeInTheDocument();
  });
});

