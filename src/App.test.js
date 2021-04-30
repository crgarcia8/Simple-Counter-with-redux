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

test('Show text "count value:"', () => {
  const countElement = screen.getByText(/count value:/i);
  expect(countElement).toBeInTheDocument();
});
test('Show count initial in 0', () => {
  const countElement = screen.getByText(/count value: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('Show count 1 when click in "Adicionar Valor"', () => {
  expect(screen.getByText(/count value: 0/i)).toBeInTheDocument();
  const linkElement = screen.getByText(/adicionar valor/i);
  fireEvent.click(linkElement);
  expect(screen.getByText(/count value: 1/i)).toBeInTheDocument();
});
