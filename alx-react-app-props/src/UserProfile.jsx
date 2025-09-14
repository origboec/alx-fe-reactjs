import { useUser } from './UserContext';

function UserProfile() {
  const userData = useUser();

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;



