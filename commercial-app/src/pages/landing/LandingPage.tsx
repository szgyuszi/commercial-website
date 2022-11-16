import { useNavigate, Link } from "react-router-dom";
import shareVideo from "../../assets/video.mp4";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-black -z-10">
      <video
        src={shareVideo}
        loop
        controls={false}
        muted
        autoPlay
        className="w-screen h-screen object-cover blur-md -z-10"
      />
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay z-50">
        <div className="p-5">
          <h1 className="text-center text-black text-8xl">Screend</h1>
        </div>
        <button
          type="button"
          className="cursor-pointer shadow-2xl text-xl bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 mb-4"
          onClick={() => navigate("/sign-up")}
        >
          Sign up
        </button>
        <Link className="text-lg" to="/login">
          Already have an account? Login!
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
