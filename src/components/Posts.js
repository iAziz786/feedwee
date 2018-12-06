import React from 'react';
import {} from 'react-router-dom';
import PropTypes from 'prop-types';
import Feed from './Feed/';
import WriteTweet from './WriteTweet';

const feeds = [
  { id: 'sdifoasf', content: 'Some aghsdgContent', author: 'someone' },
  { id: 'sdifoiasdfasasf', content: 'Some aghsdgContent', author: 'someone' },
  { id: 'sdifof', content: 'Somasdfe Content', author: 'not me' },
  {
    id: 'sdifosiasdfsdfasf',
    content: 'Some asdafContent',
    author: 'Mohammad Aziz'
  },
  { id: 'sdifoasssss', content: 'Somesf Content', author: 'Hacker' },
  { id: 'sdifsadfasdddof', content: 'Somasdfe Content', author: 'not me' },
  { id: 'sdifossdfasf', content: 'Some asdafContent', author: 'Mohammad Aziz' },
  { id: 'sdifoassssssssss', content: 'Somesf Content', author: 'Hacker' }
];

const Posts = React.memo(function Posts(props) {
  return (
    <div className={'flex-fill col-12 col-md-8 p-0 Feeds'}>
      <WriteTweet />
      {props.feeds.map(feed => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </div>
  );
});

Posts.feeds = PropTypes.array;

export default () => <Posts feeds={feeds} />;
