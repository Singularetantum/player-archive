import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const expectedUnavailableMsg = 'The player is not available.';
const inputPlaceholderText = /Enter player's id/;
const submitBtnText = /GO/;

test('check if type "fabio" renders correct profile', async () => {
  const query = 'fabio';
  const {getByPlaceholderText, getByText} = render(<App />);

  const searchInput = getByPlaceholderText(inputPlaceholderText);
  fireEvent.change(searchInput, { target: { value: query } });
  fireEvent.click(getByText(submitBtnText));
  const expectedTeam = await screen.findByText('Juventus');
  const expectedAge = await screen.findByText('33');
  const expectedRole = await screen.findByText('centre-back');

  expect(searchInput).toBeInTheDocument();
  expect(expectedTeam).toBeInTheDocument();
  expect(expectedAge).toBeInTheDocument();
  expect(expectedRole).toBeInTheDocument();
});

test('check if type "giorgio" renders unavailable message', async () => {
  const query = 'giorgio';
  const {getByPlaceholderText, getByText} = render(<App />);

  const searchInput = getByPlaceholderText(inputPlaceholderText);
  fireEvent.change(searchInput, { target: { value: query } });
  fireEvent.click(getByText(submitBtnText));
  const unavailableMsg = await screen.findByText(expectedUnavailableMsg);

  expect(searchInput).toBeInTheDocument();
  expect(unavailableMsg).toBeInTheDocument();
});

test('check if type "francesco" renders unavailable message', async () => {
  const query = 'francesco';
  const {getByPlaceholderText, getByText} = render(<App />);

  const searchInput = getByPlaceholderText(inputPlaceholderText);
  fireEvent.change(searchInput, { target: { value: query } });
  fireEvent.click(getByText(submitBtnText));
  const unavailableMsg = await screen.findByText(expectedUnavailableMsg);

  expect(searchInput).toBeInTheDocument();
  expect(unavailableMsg).toBeInTheDocument();
});
