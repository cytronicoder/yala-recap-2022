import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/A look back at.../i);
  expect(header).toBeInTheDocument();
});

test('renders photo gallery', () => {
  render(<App />);
  const photoGallery = screen.getByTestId('photo-gallery');
  expect(photoGallery).toBeInTheDocument();
});

test('renders download all photos button', () => {
  render(<App />);
  const downloadAllPhotosButton = screen.getByText(/Download All Photos/i);
  expect(downloadAllPhotosButton).toBeInTheDocument();
});
