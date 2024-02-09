import React from 'react';

export const Avatar = ({ url }) => {
  return (
    <div className="avatar">
      {url ? (
        <img src={url} alt="Avatar" />
      ) : (
        <div className="blank-avatar"></div>
      )}
    </div>
  );
};

export default Avatar;