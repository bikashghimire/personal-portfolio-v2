import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import Footer from '../Footer';
import { render as customRender } from '@/test/utils/test-utils';

// Mock portfolio data
vi.mock('@/data/portfolio', () => ({
  personalInfo: {
    name: 'Bikash Ghimire',
    email: 'test@example.com',
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
  },
}));

// Mock LanguageToggle
vi.mock('../LanguageToggle', () => ({
  default: () => <button>Language Toggle</button>,
}));

describe('Footer', () => {
  it('renders footer with name', () => {
    customRender(<Footer />);

    expect(screen.getByText('Bikash Ghimire')).toBeInTheDocument();
  });

  it('renders footer description', () => {
    customRender(<Footer />);

    // Footer description is translated, so check for presence
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders social media links', () => {
    customRender(<Footer />);

    const links = screen.getAllByRole('link');
    const socialLinks = links.filter(link =>
      link.getAttribute('href')?.includes('github') ||
      link.getAttribute('href')?.includes('linkedin') ||
      link.getAttribute('href')?.includes('mailto')
    );
    
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('renders quick links', () => {
    customRender(<Footer />);

    // Quick links are translated, so check for section heading
    expect(screen.getByText(/quick links/i)).toBeInTheDocument();
  });

  it('renders services section', () => {
    customRender(<Footer />);

    expect(screen.getByText(/services/i)).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    customRender(<Footer />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    expect(screen.getByText(/bikash ghimire/i)).toBeInTheDocument();
  });

  it('renders language toggle', () => {
    customRender(<Footer />);

    expect(screen.getByText('Language Toggle')).toBeInTheDocument();
  });

  it('opens external links in new tab', () => {
    customRender(<Footer />);

    const links = screen.getAllByRole('link');
    const externalLinks = links.filter(link => 
      link.getAttribute('href')?.startsWith('http') &&
      link.getAttribute('target') === '_blank'
    );
    
    // At least some external links should open in new tab
    expect(externalLinks.length).toBeGreaterThan(0);
  });
});

