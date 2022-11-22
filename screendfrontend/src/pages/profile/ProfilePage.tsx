import React, { useState, useEffect } from "react";
import { userState } from "../../context-manager/features/userSlice";

import { useAppSelector } from "../../context-manager/hooks";
import { Post, UserContextInterface } from "../../utils/modal";

const ProfilePage = () => {
  const user: UserContextInterface = useAppSelector(userState);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // fetch posts
  }, []);

  return (
    <main>
      <section></section>
    </main>
  );
};

export default ProfilePage;
