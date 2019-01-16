import React, { PureComponent } from 'react';

import ProfileStyle from './Profile.module.scss';
import ProfileDetails from '../ProfileDetails';

class Profile extends PureComponent {
  render() {
    return (
      <div className={`container`}>
        <div className={'row'}>
          <div className={`${ProfileStyle['container']} col-12 col-md-8`}>
            <div>
              <img
                className={ProfileStyle['cover-image']}
                alt={'Cover'}
                src={
                  'https://pbs.twimg.com/profile_banners/988128199/1454833767/1500x500'
                }
              />
            </div>
            <ProfileDetails />
          </div>
          <div className={'d-none d-md-block col-4'}>
            <div>
              <p>Sidebar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
