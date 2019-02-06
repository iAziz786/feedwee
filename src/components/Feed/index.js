import React from 'react';
import { Link } from 'react-router-dom';
import FeedStyle from './Feed.module.scss';
import TweetFooter from '../TweetFooter';

import text from '../../assets/scss/_text.module.scss';
import '../../assets/scss/_spacing.scss';

const Feed = React.memo(function Feed(props) {
  const { feed } = props;
  return (
    <div className={`${FeedStyle.Feed} ${FeedStyle.border}`}>
      <div className={'py-2 px-3 ml-5'}>
        <div className={text.small}>someone liked your tweet</div>
        <div className={FeedStyle.author}>
          <Link
            to={`/${feed.creator.username}`}
            className={FeedStyle['author-link']}
          >
            {feed.creator && feed.creator.name}{' '}
            <p className={FeedStyle['author-username']}>
              @{feed.creator && feed.creator.username}
            </p>
          </Link>
        </div>
        <div className={FeedStyle.content}>
          <p>{feed.body}</p>
        </div>
        <TweetFooter />
      </div>
    </div>
  );
});

export default Feed;
