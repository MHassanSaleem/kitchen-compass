import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders Header component with logo and text', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const linkElement = screen.getByText(/Kitchen Compass/i);
  const logoElement = screen.getByAltText('logo');

  expect(linkElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
});

test('renders Header component with link', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const linkElement = screen.getByRole('link', { name: /Kitchen Compass/i });

  expect(linkElement).toHaveAttribute('href', '/');
});
