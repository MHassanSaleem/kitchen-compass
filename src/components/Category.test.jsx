// Category.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Category from './Category';

test('renders Category component with all categories', () => {
  render(
    <Router>
      <Category />
    </Router>
  );

  const italianLink = screen.getByRole('link', { name: /Italian/i });
  const indianLink = screen.getByRole('link', { name: /Indian/i });
  const chineseLink = screen.getByRole('link', { name: /Chinese/i });
  const germanLink = screen.getByRole('link', { name: /German/i });

  expect(italianLink).toBeInTheDocument();
  expect(indianLink).toBeInTheDocument();
  expect(chineseLink).toBeInTheDocument();
  expect(germanLink).toBeInTheDocument();
});

test('Category links have correct paths', () => {
  render(
    <Router>
      <Category />
    </Router>
  );

  const italianLink = screen.getByRole('link', { name: /Italian/i });
  const indianLink = screen.getByRole('link', { name: /Indian/i });
  const chineseLink = screen.getByRole('link', { name: /Chinese/i });
  const germanLink = screen.getByRole('link', { name: /German/i });

  expect(italianLink).toHaveAttribute('href', '/cuisine/Italian');
  expect(indianLink).toHaveAttribute('href', '/cuisine/Indian');
  expect(chineseLink).toHaveAttribute('href', '/cuisine/Chinese');
  expect(germanLink).toHaveAttribute('href', '/cuisine/German');
});
