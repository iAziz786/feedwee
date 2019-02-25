import React from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Feeds = Loadable({
  loader: () => import('./Feeds'),
  loading: Loading
});

class Posts extends React.PureComponent {
  render() {
    return (
      <div className={'flex-fill p-0 Feeds'}>
        <Feeds />
      </div>
    );
  }
}

Posts.feeds = PropTypes.array;

export default Posts;
