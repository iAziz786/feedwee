import React from 'react';
import { render } from 'react-testing-library';
import Messages from '../../components/Messages';

describe('<Messages />', () => {
  it('should render the component', () => {
    render(<Messages />);
  });
});
