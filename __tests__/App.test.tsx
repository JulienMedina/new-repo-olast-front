//* Test de rendu de composant

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/components/App/App';
import '@testing-library/jest-dom/extend-expect';

// Test qui vérifie que le composant App rend un titre
describe('render App', () => {
  it('should render App', () => {
    render(<App />);
    expect(screen.getByText("Bienvenue sur O'Last !")).toBeInTheDocument();
  });

  // Test qui vérifie que le composant App rend un input
  it('should render input', () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText('Chercher un jeu ...')
    ).toBeInTheDocument();
  });

  // Test qui vérifie que le composant App rend un bouton
  it('should render the start button', () => {
    render(<App />);
    const startButton = screen.getByRole('button', { name: 'Start !' });
    expect(startButton).toBeInTheDocument();
  });

  // Test qui vérifie que le composant App rend un bouton qui peut être cliqué
  it('should handle button click', () => {
    render(<App />);
    const startButton = screen.getByRole('button', { name: 'Start !' });
    fireEvent.click(startButton);
    expect(startButton).toBeInTheDocument();
  });
});
