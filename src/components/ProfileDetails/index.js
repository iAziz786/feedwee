import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLink, FiMapPin, FiGift, FiCalendar } from 'react-icons/fi';

import ProfileSummaryStyle from './ProfileDetails.module.scss';

class ProfileDetails extends Component {
  render() {
    return (
      <div className={`${ProfileSummaryStyle['main-wrapper']}`}>
        <div>
          <div>
            <Link to={'/aziz/photo'}>
              <div>
                <img
                  src={
                    'https://pbs.twimg.com/profile_images/1073073237016272897/QJUZCLvh_x96.jpg'
                  }
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={`${ProfileSummaryStyle['names-wrapper']}`}>
          <p className={`${ProfileSummaryStyle['user-name']}`}>Mohammad Aziz</p>
          <p className={`${ProfileSummaryStyle['username']}`}>@iAziz786</p>
        </div>
        <div className={`${ProfileSummaryStyle['bio-wrapper']}`}>
          <p>Trying to become an original</p>
        </div>
        <div className={`${ProfileSummaryStyle['other-wrapper']}`}>
          <div className={'d-flex flex-wrap'}>
            <div className={`${ProfileSummaryStyle['other-detail']}`}>
              <div className={'d-flex align-items-center'}>
                <FiMapPin />
                <p>West Bengal, India</p>
              </div>
            </div>
            <div className={`${ProfileSummaryStyle['other-detail']}`}>
              <div className={'d-flex align-items-center'}>
                <FiLink />
                <a href={'https://aziz.now.sh'}>aziz.now.sh</a>
              </div>
            </div>
            <div className={`${ProfileSummaryStyle['other-detail']}`}>
              <div className={'d-flex align-items-center'}>
                <FiGift />
                <p>Born May 19, 1996</p>
              </div>
            </div>
            <div className={`${ProfileSummaryStyle['other-detail']}`}>
              <div className={'d-flex align-items-center'}>
                <FiCalendar />
                <p>Joined December 2012</p>
              </div>
            </div>
          </div>
        </div>
        <div className={'d-flex flex-wrap'}>
          <div style={{ marginRight: '20px' }}>
            <Link
              to={'/aziz/following'}
              className={`${ProfileSummaryStyle['follow-detail']}`}
            >
              <span>123</span> Following
            </Link>
          </div>
          <div>
            <Link
              to={'/aziz/followers'}
              className={`${ProfileSummaryStyle['follow-detail']}`}
            >
              <span>321</span> Followers
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDetails;
