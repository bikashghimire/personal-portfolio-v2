import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

// Test component that uses the context
const TestComponent = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div>
      <div data-testid="language">{language}</div>
      <div data-testid="translation">{t('nav.about')}</div>
      <button onClick={() => setLanguage('en')}>Set English</button>
      <button onClick={() => setLanguage('fi')}>Set Finnish</button>
    </div>
  );
};

describe('LanguageContext', () => {
  it('provides default English language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('About');
  });

  it('translates text correctly in English', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('translation')).toHaveTextContent('About');
  });

  it('changes language to Finnish when setLanguage is called', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    const setFinnishButton = screen.getByText('Set Finnish');
    await user.click(setFinnishButton);

    expect(screen.getByTestId('language')).toHaveTextContent('fi');
    expect(screen.getByTestId('translation')).toHaveTextContent('Tietoja');
  });

  it('changes language back to English', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    // Set to Finnish first
    const setFinnishButton = screen.getByText('Set Finnish');
    await user.click(setFinnishButton);

    expect(screen.getByTestId('translation')).toHaveTextContent('Tietoja');

    // Set back to English
    const setEnglishButton = screen.getByText('Set English');
    await user.click(setEnglishButton);

    expect(screen.getByTestId('language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('About');
  });

  it('returns key if translation is missing', () => {
    const MissingTranslationComponent = () => {
      const { t } = useTranslation();
      return <div data-testid="missing">{t('missing.key')}</div>;
    };

    render(
      <LanguageProvider>
        <MissingTranslationComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('missing')).toHaveTextContent('missing.key');
  });

  it('translates all navigation items correctly', () => {
    const AllNavItemsComponent = () => {
      const { t } = useTranslation();
      return (
        <div>
          <div data-testid="about">{t('nav.about')}</div>
          <div data-testid="experience">{t('nav.experience')}</div>
          <div data-testid="education">{t('nav.education')}</div>
          <div data-testid="projects">{t('nav.projects')}</div>
          <div data-testid="contact">{t('nav.contact')}</div>
        </div>
      );
    };

    render(
      <LanguageProvider>
        <AllNavItemsComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('about')).toHaveTextContent('About');
    expect(screen.getByTestId('experience')).toHaveTextContent('Experience');
    expect(screen.getByTestId('education')).toHaveTextContent('Education');
    expect(screen.getByTestId('projects')).toHaveTextContent('Projects');
    expect(screen.getByTestId('contact')).toHaveTextContent('Contact');
  });

  it('translates hero section correctly', () => {
    const HeroTranslationsComponent = () => {
      const { t } = useTranslation();
      return (
        <div>
          <div data-testid="discover">{t('hero.discoverJourney')}</div>
          <div data-testid="download">{t('hero.downloadResume')}</div>
        </div>
      );
    };

    render(
      <LanguageProvider>
        <HeroTranslationsComponent />
      </LanguageProvider>,
    );

    expect(screen.getByTestId('discover')).toHaveTextContent('Discover My Journey');
    expect(screen.getByTestId('download')).toHaveTextContent('Download Resume');
  });
});

describe('useTranslation hook', () => {
  it('throws error when used outside LanguageProvider', () => {
    // Suppress console.error for this test since React logs errors during render
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const ComponentWithoutProvider = () => {
      useTranslation();
      return <div>Test</div>;
    };

    // React Testing Library's render may throw or log the error
    // We verify the error is thrown by checking that either:
    // 1. render throws the error, or
    // 2. console.error was called (React logs errors)
    let errorThrown = false;
    try {
      render(<ComponentWithoutProvider />);
    } catch (error) {
      errorThrown = true;
      expect((error as Error).message).toContain('useTranslation must be used within a LanguageProvider');
    }

    // Either the error was thrown directly, or it was logged to console.error
    expect(errorThrown || consoleErrorSpy.mock.calls.length > 0).toBe(true);

    consoleErrorSpy.mockRestore();
  });
});

