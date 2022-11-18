import Masonry from "react-masonry-css";
import { Post } from "../../../utils/modal";
import PostCard from "./PostCard";

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

interface PropsType {
  posts: Post[];
}

const MasonryLayout = ({ posts }: PropsType) => (
  <Masonry
    className="flex animate-slide-fwd m-2"
    breakpointCols={breakpointColumnsObj}
  >
    {posts?.map((post) => {
      return <PostCard key={post.postId} post={post} />;
    })}
  </Masonry>
);

export default MasonryLayout;
