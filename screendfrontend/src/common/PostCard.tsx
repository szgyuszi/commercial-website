import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { Post, UserContextInterface } from "../utils/modal";
import { useAppSelector } from "../context-manager/hooks";
import { userState } from "../context-manager/features/userSlice";

interface PropsType {
  post: Post;
}

const PostCard = ({ post }: PropsType) => {
  const [postHovered, setPostHovered] = useState(false);
  const currentUser: UserContextInterface = useAppSelector(userState);
  const navigate = useNavigate();

  const handleLike = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/post/${post.postId}`)}
        className=" relative cursor-pointer w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:scale-105"
      >
        {post.postImg && (
          <img
            className="rounded-lg w-full "
            src={post.postImg}
            alt="user-post"
          />
        )}
        {postHovered && (
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: "100%" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div
                  onClick={handleLike}
                  className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                >
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 w-full">
              <div className="bg-gray-900 text-white px-4 py-2 rounded">
                {post.postTitle}
              </div>
            </div>
          </div>
        )}
      </div>
      {post.userName && (
        <Link
          to={
            currentUser.id === post.userId
              ? "/my-profile"
              : `/user/${post.userId}`
          }
          className="flex gap-2 mt-2 items-center"
        >
          <img
            className="w-9 h-9 bprder-solid border-1 border-black rounded-full object-cover drop-shadow"
            src={post.userImg}
            alt="user-profile"
          />
          <p className="font-semibold capitalize">{post.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default PostCard;
