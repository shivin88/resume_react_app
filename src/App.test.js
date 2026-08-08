import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
  };
});

test('renders Shivin Goyal resume application', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Shivin/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

