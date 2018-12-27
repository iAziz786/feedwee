import React from 'react';
import { render } from 'react-testing-library';
import Notifications from '../../components/Notifications';

describe('<Notifications />', () => {
  it('should render the component', () => {
    render(<Notifications />);
  });
});
