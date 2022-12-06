import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterBy } from "../context-manager/features/categorySlice";
import { useAppDispatch } from "../context-manager/hooks";
import { getCategories } from "../utils/fetch";

interface category {
  id: number;
  name: string;
}

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const secondaryItems = [
    { name: "About", href: "/" },
    { name: "Apps", href: "/" },
    { name: "Legal", href: "/" },
    { name: "Privacy", href: "/" },
  ];

  const [categories, setCategories] = useState<category[] | null>(null);

  useEffect(() => {
    const getCategoriesData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    getCategoriesData();
  }, []);

  return (
    <main className="sticky top-20 bg-slate-100 w-1/6 max-[640px]:hidden h-screen flex flex-col justify-start items-start">
      <div className="sticky top-20 h-5/6 w-full">
        <div className="text-center w-full p-4 bg-slate-200 text-3xl text-teal-800">
          Discover
        </div>
        <div className="text-start w-full p-4 text-xl border-b-2 border-slate-200 border-solid">
          Categories:
        </div>
        {categories?.map((item) => {
          return (
            <div
              className="text-start w-full px-8 py-6 text-2xl hover:bg-slate-200 hover:cursor-pointer transition-all duration-300 ease-in-out"
              key={item.id}
              onClick={() => dispatch(filterBy(item.id))}
            >
              {item.name}
            </div>
          );
        })}
        <div className="flex mt-80 justify-between items-end w-full p-4">
          {secondaryItems.map((item) => {
            return (
              <Link
                to={item.href}
                key={item.name}
                className=" hover:bg-slate-200 hover:cursor-pointer transition-all duration-300 ease-in-out p-2 text-lg"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
