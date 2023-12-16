import ProfileHeaderContainer from '../containers/user/ProfileHeaderContainer';
import ProfileDetailsContainer from '../containers/user/ProfileDetailsContainer';

const UserProfilePage = () => {
  return (
    <div>
      <ProfileHeaderContainer/>
      <ProfileDetailsContainer/>
    </div>
  );
};

export default UserProfilePage;