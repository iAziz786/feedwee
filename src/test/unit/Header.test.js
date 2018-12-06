import React from 'react';
import { render } from 'react-testing-library';
import Header from '../../components/Header';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<Header />);    
  })
});
