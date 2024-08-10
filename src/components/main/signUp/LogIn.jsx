import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="signUp flex flex-col lg:flex-row items-center my-12 gap-10">
        <div className="img w-full lg:w-1/2">
          <img src="images/Side Image.png" alt="Side" className="w-full" />
        </div>
        <div className="flex flex-1 items-center justify-center flex-col gap-10 w-full lg:w-1/2">
          <form className="flex flex-col w-full px-4 sm:px-8">
            <h2 className="text-[24px] sm:text-[36px] font-medium mb-4">
              Log in to Exclusive
            </h2>
            <p className="text-sm sm:text-base">Enter your details below</p>
            <div className="flex flex-col gap-5 inputs my-6 sm:my-10 w-full">
              <input
                className="border-b-[1px] rounded-sm border-gray-400 p-2"
                type="email"
                placeholder="Email or Phone Number"
              />
              <input
                className="border-b-[1px] rounded-sm border-gray-400 p-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-10 gap-3 sm:gap-0">
              <button className="bg-[#DB4444] text-center py-3 sm:py-4 px-[48px] text-white rounded-md w-full sm:w-auto">
                Log In
              </button>
              <span className="text-[#DB4444] cursor-pointer">
                Forget Password?
              </span>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5">
              <p className="text-sm sm:text-base">Don't have an account?</p>
              <Link to="/sign-up" className="text-[#DB4444]">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
