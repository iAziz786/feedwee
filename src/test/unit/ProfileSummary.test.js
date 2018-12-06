import React from 'react';
import { render } from 'react-testing-library';
import ProfileSummary from '../../components/ProfileSummary';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<ProfileSummary />);    
  })
});
