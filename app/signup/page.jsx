import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
      <div className="flex min-h-screen flex-row items-center justify-center gap-20 bg-white">
        <div>
          <Image src="/logo.svg" width={500} height={500} alt="logo" />
        </div>
        <div className="gap-y-4">
          <div className="gap-y-4 mb-9">
            <p className="text-center font-bold text-5xl sm:text-lg md:text-2xl">
              Sign Up to your account
            </p>
            <p className=" text-lg sm:text-lg md:text-xs font-light text-center text-gray-400">
             Please enter your details
            </p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2lg">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2lg">Email Address</span>
            </label>
            <input
              type="password"
              placeholder="Enter your Email Address here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-block my-2 bg-troy border-transparent hover:bg-troy2 hover:border-transparent mt-5">
            <Link href={"/dashboard"}>Get Started</Link>
          </button>
  
          <p className="text-sm text-light mt-3 text-gray-500">
            Already have an account?,{" "}
            <span className="text-primary font-bold"><Link href={"/"}>Sign In</Link></span>
          </p>
        </div>
      </div>
    );
  }
  