import { useState, useEffect } from "react";
import { getPosts } from "../../../utils/fetch";
import { Post } from "../../../utils/modal";
import LoadingSpinner from "./LoadingSpinner";
import MasonryLayout from "./MasonryLayout";

function MainPage() {
  const [posts, setposts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      return await getPosts();
    };
    getData().then((data) => {
      setposts(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        <MasonryLayout posts={posts} />
      </div>
    );
  }
}

export default MainPage;
