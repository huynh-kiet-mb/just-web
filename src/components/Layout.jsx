import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

const Layout = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-screen h-screen bg-[#000000cb]">
      {isLogin ? <Header /> : null}
      <Body isLogin={isLogin} />
    </div>
  );
};

export default Layout;
