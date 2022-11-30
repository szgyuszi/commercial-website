import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";
import { AiOutlineHeart, AiOutlineCloudDownload } from "react-icons/ai";
import { getPostById, getPostsByCategoryId } from "../../utils/fetch";
import { Post } from "../../utils/modal";
import MasonryLayout from "../../common/MasonryLayout";

const PostItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const getPost = async () => {
    setLoading(true);
    const res = await getPostById(id!);
    if (res.error) {
      return;
    }
    setPost(res);
    setLoading(false);
    return res;
  };

  const getPostByCategory = async (id: string) => {
    const res = await getPostsByCategoryId(id);
    if (res.error) {
      return;
    }
    setPosts(res);
  };

  useEffect(() => {
    getPost().then((res) => {
      getPostByCategory(res.categoryId);
    });
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div
        className="flex xl:flex-row flex-col mt-10 m-auto bg-white shadow-lg"
        style={{ maxWidth: "1500px", borderRadius: "32px" }}
      >
        <div className="flex justify-center items-center md:items-start flex-initial">
          <img
            className="rounded-t-2xl rounded-b-lg w-80 max-h-max "
            src={post?.postImg}
            alt="user-post"
          />
        </div>
        <div className="w-full p-5 flex-1 xl:min-w-620">
          <div>
            <h1 className="text-7xl font-bold break-words mt-3">
              {post?.postTitle}{" "}
              <span className="text-3xl text-gray-500">
                by {post?.userName}
              </span>
            </h1>
          </div>
          <Link
            to={`/user/${post?.userId}`}
            className="flex gap-2 mt-5 items-center bg-white rounded-lg "
          >
            <div className="w-14 h-14 rounded-full">
              <img
                src={post?.userImg}
                className="w-14 h-14 rounded-full"
                alt="user-profile"
              />
            </div>

            <p className="font-bold">{post?.userName}</p>
          </Link>
          <div className="mt-4 flex flex-row justify-start items-center">
            <div className="p-2 flex flex-row justify-start items-center hover:text-red-500 cursor-pointer">
              <AiOutlineHeart className="w-10 h-10 ml-2 mr-2 " />
              <p>{post?.postLikes}</p>
            </div>
            <div className="p-2 flex flex-row justify-start items-center hover:text-teal-900 cursor-pointer">
              <AiOutlineCloudDownload className="w-10 h-10 ml-6 mr-2 " />
              <p>Save</p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full mt-10 flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-teal-600 rounded-lg shadow-xl">
        <p className="mt-6 text-white text-5xl">More you like..</p>
        {posts.length ? (
          <div className="w-[85%] mt-6 mb-20 p-2">
            <MasonryLayout
              posts={posts.filter((p) => p.postId !== post?.postId)}
            />
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </section>
    </>
  );
};
export default PostItem;
