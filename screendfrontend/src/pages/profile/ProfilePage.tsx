import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";
import MasonryLayout from "../../common/MasonryLayout";
import { userState } from "../../context-manager/features/userSlice";

import { useAppSelector } from "../../context-manager/hooks";
import { getPostsByUserId } from "../../utils/fetch";
import { Post, UserContextInterface } from "../../utils/modal";

const ProfilePage = () => {
  const user: UserContextInterface = useAppSelector(userState);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    // fetch posts
    const getPosts = async () => {
      setLoading(true);
      const res = await getPostsByUserId(user.id ? user.id : id ? id : 0);
      console.log(res);
      if (res.error) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setPosts(res);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="w-full h-screen">
      <section className="w-full h-1/6 flex justify-center items-end bg-gradient-to-r from-green-400 to-teal-600 drop-shadow-lg">
        <div className="relative top-24 border-4 border-white border-solid rounded-full p-2 bg-white">
          <img
            className="rounded-full "
            src={user.userImg ? user.userImg : ""}
            alt={user.name ? user.name : ""}
          />
        </div>
      </section>
      <section className="mt-28 w-full flex justify-center items-center">
        <p className="text-3xl">{user.name}</p>
      </section>
      <section className="w-full h-auto flex justify-center items-center mt-6 flex-col">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <p className="text-5xl mb-3">Your posts</p>
            <section className="flex flex-row">
              <MasonryLayout posts={posts} />
            </section>
          </>
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
