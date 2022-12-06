import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";
import MasonryLayout from "../../common/MasonryLayout";
import { getPageProfileById, getPostsByUserId } from "../../utils/fetch";
import { Post, UserContextInterface } from "../../utils/modal";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserContextInterface | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const getProfile = async () => {
    const res = await getPageProfileById(id!);
    if (res.error) {
      setError(true);
      return;
    }
    setUser(res);
  };

  const getPosts = async () => {
    const res = await getPostsByUserId(id!);
    if (res.error) {
      setError(true);
      return;
    }
    setPosts(res);
  };

  useEffect(() => {
    setLoading(true);
    getProfile();
    getPosts();
    setLoading(false);
  }, []);

  return (
    <main className="w-full h-screen">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <section className="w-full h-1/6 flex justify-center items-end bg-gradient-to-r from-green-400 to-teal-600 drop-shadow-lg">
            <div className="relative h-40 w-40 top-24 border-4 border-white border-solid rounded-full p-2 bg-white">
              <img
                className="rounded-full h-full w-full bg-cover overflow-hidden "
                src={user?.userImg!}
                alt={user?.name!}
              />
            </div>
          </section>
          <section className="mt-28 w-full flex justify-center items-center">
            <p className="text-3xl">{user?.name}</p>
          </section>
          <section className="w-full h-auto flex justify-center items-center mt-6 flex-col">
            <p className="text-5xl mb-3 flex items-center justify-center">
              {user?.name}'s posts{" "}
              <span className="ml-2 text-xl"> [{posts.length}]</span>
            </p>
            <div
              className="w-[80%]
            "
            >
              <MasonryLayout posts={posts} />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Profile;
