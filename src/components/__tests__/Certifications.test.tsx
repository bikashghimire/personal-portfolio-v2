import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Certifications from '../Certifications';
import { render as customRender } from '@/test/utils/test-utils';

// Mock the portfolio data
vi.mock('@/data/portfolio', () => ({
  certifications: [
    {
      id: 1,
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      tags: ['Cloud', 'AWS'],
      image: '/cert1.png',
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      tags: ['Frontend', 'React'],
      image: '/cert2.png',
    },
  ],
}));

describe('Certifications', () => {
  it('renders certifications section with title', () => {
    customRender(<Certifications />);

    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText(/professional certifications/i)).toBeInTheDocument();
  });

  it('renders certification cards', () => {
    customRender(<Certifications />);

    expect(screen.getByText('AWS Certified Developer')).toBeInTheDocument();
    expect(screen.getByText('React Developer Certification')).toBeInTheDocument();
  });

  it('renders issuer and date', () => {
    customRender(<Certifications />);

    expect(screen.getByText(/amazon web services/i)).toBeInTheDocument();
    // Date might be formatted or split across elements, use a more flexible matcher
    expect(screen.getByText(/2023/)).toBeInTheDocument();
    expect(screen.getByText(/meta/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();
  });

  it('renders certification tags', () => {
    customRender(<Certifications />);

    expect(screen.getByText('Cloud')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders view certificate links', () => {
    customRender(<Certifications />);

    const viewLinks = screen.getAllByText('View Certificate');
    expect(viewLinks.length).toBeGreaterThan(0);
    
    viewLinks.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('target', '_blank');
      expect(link.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});

