import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import LoadingSpinner from "../../common/LoadingSpinner";
import { useAppSelector } from "../../context-manager/hooks";
import { userState } from "../../context-manager/features/userSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState<string>("");
  const [fields, setFields] = useState();
  const [category, setCategory] = useState<string>("");
  const [imageAsset, setImageAsset] = useState<string | null>(null);
  const [wrongImageType, setWrongImageType] = useState(false);

  const navigate = useNavigate();

  const user = useAppSelector(userState);

  const categories = [
    { id: 1, name: "Nature" },
    { id: 2, name: "Abstract" },
    { id: 3, name: "Ninja" },
  ];

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  const savePost = () => {
    console.log("save");
  };

  return (
    <main className="flex flex-col justify-start items-center lg:h-screen">
      {fields && (
        <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in ">
          Please add all fields.
        </p>
      )}
      <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 h-2/3 w-full lg:mt-16">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full lg:h-4/5">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full lg:h-[100%]">
            {loading && <LoadingSpinner />}
            {wrongImageType && <p>It&apos;s wrong file type.</p>}
            {!imageAsset ? (
              <label>
                <div className="flex flex-col items-center justify-center h-full cursor-pointer">
                  <div className="flex flex-col justify-center items-center mt-5">
                    <p className="font-bold mb-2 text-2xl">
                      <AiOutlineCloudUpload className="w-12 h-12" />
                    </p>
                    <p className="text-2xl">Click to upload</p>
                  </div>

                  <p className="mt-32 text-gray-400">
                    Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or
                    TIFF less than 20MB
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full">
                <img src={""} alt="uploaded-pic" className="h-full w-full" />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your title"
            className="outline-none lg:text-4xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2"
          />
          {user && (
            <div className="flex gap-2 mt-2 mb-2 items-center bg-white rounded-lg ">
              <img
                src={user.userImg!}
                className="w-10 h-10 rounded-full"
                alt="user-profile"
              />
              <p className="font-bold">{user.name}</p>
            </div>
          )}

          <div className="flex flex-col">
            <div>
              <p className="mb-2 font-semibold lg:text-3xl text-xl">
                Choose Category
              </p>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="outline-none w-4/5 lg:text-2xl text-base border-b-2 border-gray-200 py-2 px-4 rounded-md cursor-pointer"
              >
                <option
                  value="others"
                  className="lg:text-2xl sm:text-bg bg-white"
                >
                  ...
                </option>
                {categories.map((item) => (
                  <option
                    key={item.id}
                    className="lg:text-2xl text-base border-0 outline-none capitalize bg-white text-black "
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end items-end mt-5">
              <button
                type="button"
                onClick={savePost}
                className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none mb-10"
              >
                Save Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddPost;
