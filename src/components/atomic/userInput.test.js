import { render, screen, fireEvent } from '@testing-library/react';
import UserInput from './userInput'; // Adjust the import path as necessary

describe('UserInput Component', () => {
  test('renders the input with the correct label', () => {
    render(<UserInput label="Username: " defaultValue="" />);
    expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
  });

  test('allows the user to enter text', () => {
    render(<UserInput label="Username: " defaultValue="" />);
    const input = screen.getByLabelText(/Username:/i);
    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(input.value).toBe('John Doe');
  });

  test('displays the default value if provided', () => {
    render(<UserInput label="Username: " defaultValue="Jane Doe" />);
    const input = screen.getByLabelText(/Username:/i);
    expect(input.value).toBe('Jane Doe');
  });
});