import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(linkElement).toBeInTheDocument();
  expect(div.innerHTML).toContain('Hi there!');
  ReactDOM.unmountComponentAtNode(div);
});
