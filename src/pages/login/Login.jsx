import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const Login = () => {
  const [visiblePass, setVisiblePass] = useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="w-1/2 h-1/2 bg-[#1b1b1bde] 
                rounded-xl flex flex-col pt-14 px-20 justify-start items-center gap-4 text-[#FFFFFF]"
      >
        <h1>Logo</h1>
        {/* Email */}
        <div
          className="w-full bg-[#474747] text-xl 
                         p-2 border-2 rounded-md flex gap-3 items-center "
        >
          <EmailIcon />

          <input
            type="email"
            className="w-full bg-inherit text-xl focus:outline-none"
            required
          />
        </div>
        <div
          className="w-full bg-[#474747] text-xl 
                         p-2 border-2 rounded-md flex gap-3 justify-center"
        >
          <LockIcon />
          <input
            type={visiblePass ? "text" : "password"}
            className="w-full bg-inherit focus:outline-none"
            required
          />
          <div onClick={() => setVisiblePass(!visiblePass)}>
            {visiblePass ? (
              <VisibilityIcon sx={{ cursor: "pointer" }} />
            ) : (
              <VisibilityOffIcon sx={{ cursor: "pointer" }} />
            )}
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="px-1 flex flex-row w-full justify-between">
            <div className="flex gap-1">
              <input type="checkbox" />
              <p className="text-[14px]">Remember me</p>
            </div>
            <a href="#" className="text-[14px]">Forgot password!</a>
          </div>
        </div>
        <div className="w-full cursor-pointer
         flex p-3 border-b-4 border-r-4 text-base font-bold
       border-violet-300 hover:border-none  rounded-md 
         justify-center bg-blue-600 hover:bg-blue-500">
          Login
        </div>
        <p>Not register?  <a href="#">Create an account!</a> </p>
      </div>
    </div>
  );
};

export default Login;
