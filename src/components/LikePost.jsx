import React, { useState } from 'react';

export default function LikePost({ render }) {
  const [likePostCounter, setPostCounter] = useState(0);

  const handlePostCount = () => {
    setPostCounter(likePostCounter + 1);
  };

  return <div>{render({ likePostCounter, handlePostCount })}</div>;
}
