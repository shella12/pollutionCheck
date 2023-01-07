import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('testing home component', () => {
  it('should render the home component', () => {
    const home = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});