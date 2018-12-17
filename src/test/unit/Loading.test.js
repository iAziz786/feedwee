import React from 'react';
import { render } from 'react-testing-library';
import Loading from '../../components/Loading';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<Loading />);
  });
});
