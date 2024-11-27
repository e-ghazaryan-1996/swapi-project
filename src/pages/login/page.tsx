import useSocialAuth from "@/hooks/useSocialAuth";
import { facebook, google } from "@/services/firebase.service";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { handleSocialAuth, error } = useSocialAuth();

  const handleFacebookLogin = () => {
    handleSocialAuth(facebook);
  };

  const handleGoogleLogin = () => {
    handleSocialAuth(google);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md px-8 py-10">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <p className="text-gray-600 text-center">Sign in with one of the following providers</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={handleFacebookLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full flex items-center space-x-2"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </button>
            <button
              onClick={handleGoogleLogin}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full flex items-center space-x-2"
            >
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
