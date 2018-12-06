import React from 'react';
import { render } from 'react-testing-library';
import MainBody from '../../components/MainBody';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<MainBody />);    
  })
});
