import React from 'react';

import Card from './Card';

import imageUrl from '../assets/img/cover.jpg';

function ProfileSummary(props) {
  return (
    <div
      className={
        'flex-fill col-3 d-none d-md-flex mx-1 px-0 flex-column Sidebar'
      }
      style={{
        position: 'relative'
      }}
    >
      <Card>
        <div>
          <a
            className={'ProfileCard__bg d-block'}
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
            href={'/#userId'}
          />
        </div>
      </Card>
      <Card>
        <a className={'ProfileCard__avatarLink'} href={`${'userId'}`}>
          <img
            className={'ProfileCard__avatarImage'}
            src={
              'https://pbs.twimg.com/profile_images/1033982006768611328/yLW4Nkip_400x400.jpg'
            }
          />
        </a>
        <div className={'ProfileCard__userFields'}>
          <p className={'d-block font-weight-bold'}>Mohammad Aziz</p>
          <p className={'d-block'}>@iAziz786</p>
        </div>
        <div className={'d-flex p-4 justify-content-around'}>
          <div>
            <p className={'d-block'}>Tweets</p>
            <p className={'d-block'}>1234</p>
          </div>
          <div>
            <p className={'d-block'}>Following</p>
            <p className={'d-block'}>12</p>
          </div>
          <div>
            <p className={'d-block'}>Followers</p>
            <p className={'d-block'}>234</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProfileSummary;
