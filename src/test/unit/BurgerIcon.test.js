import React from 'react';
import { render } from 'react-testing-library';
import BurgerIcon from '../../components/BurgerIcon';

describe('Card', () => {
  it('should render the component', () => {
    render(<BurgerIcon />);    
  })
});
