import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center gap-20 bg-white">
      <div>
        <Image src="/logo.svg" width={500} height={500} alt="logo" />
      </div>
      <div className="gap-y-4">
        <div className="gap-y-4 mb-9">
          <p className="text-center font-bold text-5xl sm:text-lg md:text-2xl">
            Log in to your account
          </p>
          <p className=" text-lg sm:text-lg md:text-xs font-light text-center text-gray-400">
            Welcome back! Please enter your details
          </p>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-2lg">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-2lg">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex flex-row gap-4 items-center my-2">
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" checked="" className="checkbox" />
            <p className="text-xs">Remember for 40 days</p>
          </div>
          <p className="text-xs text-primary font-bold">Forgot Password</p>
        </div>
        <button className="btn btn-block my-2 bg-troy border-transparent hover:bg-troy2 hover:border-transparent">
          Sign in
        </button>

        <p className="text-sm text-light mt-3 text-gray-500">
          Don't have an account,{" "}
          <span className="text-primary font-bold">
            
            <Link href={"/signup"}>Sign Up</Link></span>
        </p>
      </div>
    </div>
  );
}
