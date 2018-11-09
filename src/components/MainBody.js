import React from 'react';
import Card from './Card';

import '../assets/scss/Main.scss'
import '../assets/scss/ProfileCard.scss'

import imageUrl from '../assets/img/tim-gouw-83023-unsplash.jpg';

const MainBody = React.memo(function MainBody(props) {
  return (
    <div className={'container-fluid d-flex mt-2 border-primary Main'}>
      <div
        className={
          'flex-fill col-3 d-none d-md-flex mx-1 px-0 flex-column Sidebar'
        }
        style={{
          position: 'relative'
        }}
      >
        <Card className={''}>
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
          <a
            className={'ProfileCard__avatarLink'}
            href={`${'userId'}`}>
            <img
              className={'ProfileCard__avatarImage'}
              src={
                'https://pbs.twimg.com/profile_images/1033982006768611328/yLW4Nkip_400x400.jpg'
              }
            />
          </a>
          <div className={'ProfileCard__userFields'}>
            <span className={'d-block font-weight-bold'}>Mohammad Aziz</span>
            <span className={'d-block'}>@iAziz786</span>
          </div>
          <div className={'d-flex p-4 justify-content-around'}>
            <div>
              <span className={'d-block'}>Tweets</span>
              <span className={'d-block'}>1234</span>
            </div>
            <div>
              <span className={'d-block'}>Following</span>
              <span className={'d-block'}>12</span>
            </div>
            <div>
              <span className={'d-block'}>Followers</span>
              <span className={'d-block'}>234</span>
            </div>
          </div>
        </Card>
      </div>
      <div className={'flex-fill col-12 col-md-8 mx-1 border-pink Feeds'}>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
      <div
        className={'d-none d-lg-block flex-fill col-3  mx-1 border-orange Aside'}
      >
        <Card>
          Right Sidebar
        </Card>
      </div>
    </div>
  )
});

export default MainBody;
