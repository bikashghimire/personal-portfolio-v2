import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Experience from '../Experience';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the portfolio data
vi.mock('@/data/portfolio', () => ({
  experience: [
    {
      id: 1,
      company: 'Test Company',
      position: 'Software Developer',
      duration: '2020 - 2024',
      location: 'Helsinki, Finland',
      description: 'Test description',
      technologies: ['React', 'TypeScript', 'Node.js'],
      achievements: ['Achievement 1', 'Achievement 2'],
    },
  ],
}));

describe('Experience', () => {
  it('renders experience section with title', () => {
    customRender(<Experience />);

    expect(screen.getByText('Professional Journey')).toBeInTheDocument();
    expect(screen.getByText(/five years of growth/i)).toBeInTheDocument();
  });

  it('renders experience items', () => {
    customRender(<Experience />);

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('renders job duration and location', () => {
    customRender(<Experience />);

    expect(screen.getByText('2020 - 2024')).toBeInTheDocument();
    expect(screen.getByText('Helsinki, Finland')).toBeInTheDocument();
  });

  it('renders job description', () => {
    customRender(<Experience />);

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    customRender(<Experience />);

    expect(screen.getByText('Key Achievements')).toBeInTheDocument();
    expect(screen.getByText('Achievement 1')).toBeInTheDocument();
    expect(screen.getByText('Achievement 2')).toBeInTheDocument();
  });

  it('renders technologies', () => {
    customRender(<Experience />);

    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });
});

