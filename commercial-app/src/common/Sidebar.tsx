import { useState, useEffect } from "react";
import { getCategories } from "../utils/fetch";

interface category {
  id: number;
  name: string;
}

const Sidebar = () => {
  const [categories, setCategories] = useState<category | null>(null);

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getCategoriesData();
  }, []);

  return (
    <main className="sticky top-20 bg-gray-200 w-1/6 max-[640px]:hidden h-screen flex justify-start items-start">
      <div>Discover</div>
    </main>
  );
};

export default Sidebar;
