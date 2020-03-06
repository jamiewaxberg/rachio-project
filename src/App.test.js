import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getByTestId } from '@testing-library/dom'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const devicesHeader = getByText(/Devices/i);
  expect(devicesHeader).toBeInTheDocument();
});

