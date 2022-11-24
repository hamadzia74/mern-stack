/** @format */

import { Routes, Route } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import WEB_PAGES from "../pages";
import PATH from "../utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.CALCULATEVALUES}
        element={<PublicRoute element={<WEB_PAGES.CALCULATEVALUES.INDEX />} />}
      />   
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
