import React from 'react';
import { render } from 'react-testing-library';
import Suggestions from '../../components/Suggestions';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<Suggestions />);    
  })
});
