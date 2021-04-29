import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';

let globalUnmount;

beforeEach(() => {
  const { result, unmount } = render(<Provider store={store}>
    <App />
  </Provider>);
  globalUnmount = unmount;
})
afterEach(() => {
  globalUnmount();
  globalUnmount = null;
})

test('Show text "Count:"', () => {
  const countElement = screen.getByText(/count:/i);
  expect(countElement).toBeInTheDocument();
});
test('Show count initial in 0', () => {
  const countElement = screen.getByText(/count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('Show count 1 when click in "Adicionar Valor"', () => {
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  const linkElement = screen.getByText(/adicionar valor/i);
  fireEvent.click(linkElement);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});

test('Show count 5 when 5 clicks in "Adicionar Valor"', () => {
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  const linkElement = screen.getByText(/adicionar valor/i);
  fireEvent.click(linkElement);
  fireEvent.click(linkElement);
  fireEvent.click(linkElement);
  fireEvent.click(linkElement);
  expect(screen.getByText(/count: 5/i)).toBeInTheDocument();
});
