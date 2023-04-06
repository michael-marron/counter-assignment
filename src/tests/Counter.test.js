// import necessary react testing library helpers here
// import the Counter component here

import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const zeroCount = screen.getByTestId('count');
  expect(zeroCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrButton = screen.getByTestId('incrementButton');
  fireEvent.click(incrButton);
  const screenCount = screen.getByTestId('count');
  expect(screenCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrButton = screen.getByTestId('decrementButton');
  fireEvent.click(decrButton);
  const screenCount = screen.getByTestId('count');
  expect(screenCount).toHaveTextContent('-1');
});
