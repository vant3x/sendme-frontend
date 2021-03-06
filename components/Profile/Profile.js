import React from "react";
import ProfileForm from "./ProfileForm";

const Profile = ({ user }) => {
  return (
    <div className="containers">
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;
