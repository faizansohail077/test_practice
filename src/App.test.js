import React from 'react';
import { render } from '@testing-library/react';
import Name from './Name'
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('title', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/hello/i)
  expect(linkElement).toBeInTheDocument()
});
test('chceking from another component', () => {
  const { getByText } = render(<Name />)
  const element = getByText(/faizan/i)
  expect(element).toBeInTheDocument()
})