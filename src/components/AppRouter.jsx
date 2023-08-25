import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/routes";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
  console.log("isLoading", isLoading);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={ <PostIdPage/> } />
        <Route path="/error" element={<Error />}></Route> */}
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            element={<route.element />}
            path={route.path}
            // exact={route.exact}
          />
        ))}
        <Route path="/*" element={<Navigate to="/posts" replace />}></Route>
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/posts/:id" element={ <PostIdPage/> } />
        <Route path="/error" element={<Error />}></Route> */}

        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            element={<route.element />}
            path={route.path}
          />
        ))}

        <Route path="/*" element={<Navigate to="/login" replace />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
