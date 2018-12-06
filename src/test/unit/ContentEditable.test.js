import React from 'react';
import { render } from 'react-testing-library';
import ContentEditable from '../../components/ContentEditable';

describe('<ContentEditable />', () => {
  it('should render ContentEditable component', () => {
    render(<ContentEditable />);
  });
});