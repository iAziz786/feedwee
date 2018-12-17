import React from 'react';
import { render } from 'react-testing-library';
import TweetModal from '../../components/TweetModal';

describe('TweetModal', () => {
  it('should render the component', () => {
    render(<TweetModal />);
  });
});
