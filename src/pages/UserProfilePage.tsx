import * as React from 'react';
import UserProfileTabs from '../components/user/UserProfileTabs';
import ProfileHeaderContainer from '../containers/user/ProfileHeaderContainer';

const UserProfilePage = () => {
  return (
    <div>
      <ProfileHeaderContainer/>
      <UserProfileTabs/>
    </div>
  );
};

export default UserProfilePage;