import React from 'react';
import { render } from 'react-testing-library';
import Feed from '../../components/Feed';

describe('<Feed />', () => {
  it('render Feed component', () => {
    render(<Feed feed={{}} />);
  });

  // it('throw when feed prop is not provided', () => {
  //   expect(render(<Feed />)).toThrowError();
  // })
});