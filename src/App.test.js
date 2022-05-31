import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpace } from './App';


test('button has correct intial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Disabled button has gray background and revers to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle('background-color: gray');
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle('background-color: red');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });
  const button = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: blue');
});

describe('spaces before camelcase capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpace('Red')).toBe('Red')
  });
  test('works for one capital letter', () => {
    expect(replaceCamelWithSpace('MidnightBlue')).toBe('Midnight Blue')
  });
  test('works for multiple capital letters', () => {
    expect(replaceCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red')
  });
});
