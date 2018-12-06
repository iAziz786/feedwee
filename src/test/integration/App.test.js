import React from 'react';
import { render } from 'react-testing-library';
import App from '../../components/App';

describe('Card', () => {
  it('should render the component', () => {
    render(<App />);    
  })
});
