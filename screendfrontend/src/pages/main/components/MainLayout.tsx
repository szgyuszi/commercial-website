import { useEffect, useState } from "react";
import LoadingSpinner from "../../../common/LoadingSpinner";
import MasonryLayout from "../../../common/MasonryLayout";
import Sidebar from "../../../common/Sidebar";
import { categoryState } from "../../../context-manager/features/categorySlice";
import { useAppSelector } from "../../../context-manager/hooks";
import { getPosts, getPostsByCategoryId } from "../../../utils/fetch";
import { Post } from "../../../utils/modal";

const MainLayout = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const filterByCategoryId = useAppSelector(categoryState);

  const getData = async () => {
    const res = await getPosts();
    setPosts(res);
  };

  const getPostsByCategory = async () => {
    const res = await getPostsByCategoryId(`${filterByCategoryId}`);
    if (res.error) {
      return;
    }
    setPosts(res);
  };

  useEffect(() => {
    setLoading(true);
    if (filterByCategoryId !== 0) {
      getPostsByCategory().then(() => setLoading(false));
    } else {
      getData().then(() => setLoading(false));
    }
  }, [filterByCategoryId]);

  return (
    <div className="flex flex-row justify-start items-start ">
      <Sidebar />
      <section className="w-full">
        {loading ? <LoadingSpinner /> : <MasonryLayout posts={posts} />}
      </section>
    </div>
  );
};

export default MainLayout;
