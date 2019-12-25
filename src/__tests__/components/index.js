import React from 'react';
import { render as rtlRender, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from '../../store/reducers';

import { App } from '../../components/app';
import { Form } from '../../components/form';

const render = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...options
  } = {}
) => {
  return rtlRender(<Provider store={store}>{ui}</Provider>, options);
};

test('Render <App /> without crashing', () => {
  jest.mock('react-redux', () => ({
    useSelector: () => ({
      dates: [],
      values: []
    })
  }));

  jest.mock('react', () => ({
    useEffect: jest.fn()
  }));

  const { getByTestId } = render(<App />, {
    initialState: { chartData: { values: [] }, filters: {} }
  });
  const appNode = getByTestId('app');

  expect(appNode).toBeInTheDocument();
});

test('Render <Form /> without crashing', () => {
  const { getByTestId } = render(<Form />);
  const formNode = getByTestId('form');
  const buttonNode = getByTestId('month');
  const selectNode = getByTestId('select');

  expect(formNode).toBeInTheDocument();

  expect(buttonNode).toHaveStyleRule('background-color', '#fff');

  fireEvent.click(buttonNode);

  expect(buttonNode).toHaveStyleRule('background-color', '#007bff');

  expect(selectNode.value).toBe('price')
});
