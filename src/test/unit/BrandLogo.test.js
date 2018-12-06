import React from 'react';
import { render } from 'react-testing-library';
import BrandLogo from '../../components/BrandLogo';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<BrandLogo />);    
  })
});
