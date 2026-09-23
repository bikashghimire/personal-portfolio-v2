import { describe, expect, it } from 'vitest';
import { processMessage } from '../chatbot-engine';

describe('chatbot engine', () => {
  it('does not treat ordinary possessive words as greetings', () => {
    const response = processMessage('Tell me about his experience');

    expect(response.text).toContain('professional roles');
    expect(response.text).not.toContain("portfolio assistant");
  });

  it('answers every suggested portfolio topic', () => {
    expect(processMessage("What are Bikash's skills?").text).toContain("Bikash's skills");
    expect(processMessage('Tell me about his experience').text).toContain('professional roles');
    expect(processMessage('What projects has he built?').text).toContain('projects');
    expect(processMessage("What's his education?").text).toContain("education");
    expect(processMessage('How can I contact him?').text).toContain('reach Bikash');
  });
});
