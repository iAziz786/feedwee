import React from 'react';
import { render } from 'react-testing-library';
import Status from '../../components/Status';

describe('Status', () => {
  it('should render the component', () => {
    render(<Status />);
  });
});
