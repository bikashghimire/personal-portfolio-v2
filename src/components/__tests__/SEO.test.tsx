import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import SEO from '../SEO';

// Mock portfolio data
vi.mock('@/data/portfolio', () => ({
  personalInfo: {
    name: 'Bikash Ghimire',
    title: 'Software Developer',
    bio: 'Test bio',
    email: 'test@example.com',
    location: 'Helsinki, Finland',
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
    twitter: '',
  },
  projects: [
    {
      title: 'Test Project',
      description: 'Test description',
      demo: 'https://demo.com',
      github: 'https://github.com/test',
      image: '/test.png',
      technologies: ['React', 'TypeScript'],
    },
  ],
}));

describe('SEO', () => {
  beforeEach(() => {
    // Clear document head before each test
    document.head.innerHTML = '';
  });

  afterEach(() => {
    // Clean up after each test
    document.head.innerHTML = '';
  });

  it('renders without crashing', () => {
    const { container } = render(<SEO />);
    expect(container).toBeDefined();
  });

  it('adds person JSON-LD script to document head', () => {
    render(<SEO />);

    const personScript = document.getElementById('ld-person') as HTMLScriptElement | null;
    expect(personScript).toBeInTheDocument();
    expect(personScript?.type).toBe('application/ld+json');
    
    if (personScript?.textContent) {
      const json = JSON.parse(personScript.textContent);
      expect(json['@type']).toBe('Person');
      expect(json.name).toBe('Bikash Ghimire');
      expect(json.jobTitle).toBe('Software Developer');
    }
  });

  it('adds projects JSON-LD script to document head', () => {
    render(<SEO />);

    const projectsScript = document.getElementById('ld-projects') as HTMLScriptElement | null;
    expect(projectsScript).toBeInTheDocument();
    expect(projectsScript?.type).toBe('application/ld+json');
    
    if (projectsScript?.textContent) {
      const json = JSON.parse(projectsScript.textContent);
      expect(json['@type']).toBe('ItemList');
      expect(json.itemListElement).toBeDefined();
    }
  });

  it('cleans up scripts on unmount', () => {
    const { unmount } = render(<SEO />);

    expect(document.getElementById('ld-person')).toBeInTheDocument();
    expect(document.getElementById('ld-projects')).toBeInTheDocument();

    unmount();

    expect(document.getElementById('ld-person')).not.toBeInTheDocument();
    expect(document.getElementById('ld-projects')).not.toBeInTheDocument();
  });

  it('updates script content on re-render', () => {
    const { rerender } = render(<SEO />);

    const personScript = document.getElementById('ld-person');
    expect(personScript).toBeInTheDocument();

    rerender(<SEO />);

    // Script should still exist and be updated
    const updatedScript = document.getElementById('ld-person');
    expect(updatedScript).toBeInTheDocument();
  });
});

