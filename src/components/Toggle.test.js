import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from './Toggle'; // Adjust the import path as necessary

describe('Toggle component', () => {
  test('renders with initial Off state', () => {
    render(<Toggle />);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveTextContent('Off');
  });

  test('changes to On state when clicked', () => {
    render(<Toggle />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent('On');
  });

  test('toggles back to Off state when clicked again', () => {
    render(<Toggle />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // First click to turn On
    fireEvent.click(toggleButton); // Second click to turn Off
    expect(toggleButton).toHaveTextContent('Off');
  });
});