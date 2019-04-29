import React from 'react';
import { Link } from 'react-router-dom';
import Timeago from 'react-timeago';
import FeedStyle from './Feed.module.scss';
import TweetFooter from '../TweetFooter';
import { SecondaryText, Dot } from './style';

import text from '../../assets/scss/_text.module.scss';
import '../../assets/scss/_spacing.scss';

function Feed(props) {
  const { feed } = props;
  return (
    <div className={`${FeedStyle.Feed} ${FeedStyle.border}`}>
      <div className={'py-2 px-3 ml-5'}>
        <div className={FeedStyle.author}>
          <Link
            to={`/${feed.creator.username}`}
            className={FeedStyle['author-link']}
          >
            {feed.creator && feed.creator.name}{' '}
            <SecondaryText>
              @{feed.creator && feed.creator.username}
            </SecondaryText>
            <Dot>.</Dot>
            <SecondaryText>
              <Timeago date={feed.createdAt} />
            </SecondaryText>
          </Link>
        </div>
        <div className={FeedStyle.content}>
          <p>{feed.body}</p>
        </div>
        <TweetFooter />
      </div>
    </div>
  );
}

export default Feed;
