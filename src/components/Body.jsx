import { Navigate, Route, Routes } from "react-router-dom";
import { HomeRoutes, LoginRoutes } from "../utils/routes";

const Body = ({ isLogin }) => {
  return (
    <div>
      <Routes>
        {isLogin
          ? HomeRoutes.length > 0
            ? HomeRoutes.map((route) => (
                <>
                  <Route
                    key={route.path}
                    path={route.path}
                    exc
                    element={<route.element />}
                  />
                  {/* <Route key={0} path="*" element={<Navigate to="/" />} /> */}
                </>
              ))
            : null
          : LoginRoutes.length > 0
          ? LoginRoutes.map((route) => (
              <>
                <Route
                  key={route.path}
                  path={route.path}
                  exc
                  element={<route.element />}
                />
                <Route key={1} path="*" element={<Navigate to="/login" />} />
              </>
            ))
          : null}
      </Routes>
    </div>
  );
};

export default Body;
