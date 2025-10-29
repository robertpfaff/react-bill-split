import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bill Splitter title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Bill Splitter/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders bill amount input', () => {
  render(<App />);
  const billInput = screen.getByLabelText(/Bill Amount/i);
  expect(billInput).toBeInTheDocument();
});

test('renders tip percentage input', () => {
  render(<App />);
  const tipInput = screen.getByLabelText(/Tip/i);
  expect(tipInput).toBeInTheDocument();
});
