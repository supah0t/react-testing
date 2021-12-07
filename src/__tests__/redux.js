import React from 'react';
import { render, screen, fireEvent, userEvent } from '../utils/test-utils';
import '@testing-library/jest-dom'

import Counter from '../features/counter/Counter';


test('can render redux', () => {
  render(<Counter />);

  fireEvent.click(screen.getByText('+'));

  expect(screen.getByTestId('count-value')).toHaveTextContent('1');
})
