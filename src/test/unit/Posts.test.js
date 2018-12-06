import React from 'react';
import { render } from 'react-testing-library';
import Posts from '../../components/Posts';

describe('MainBody', () => {
  it('should render the component', () => {
    render(<Posts />);    
  })
});
