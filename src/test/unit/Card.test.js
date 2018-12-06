import React from 'react';
import { render } from 'react-testing-library';
import Card from '../../components/Card';

describe('Card', () => {
  it('should render the component', () => {
    render(<Card />);    
  })
});
