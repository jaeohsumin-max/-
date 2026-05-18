import { createBrowserRouter } from "react-router-dom";

import HomePage from "../page/HomePage";
import CourseDetail from "../page/CourseDetail";
import CourseList from "../page/CourseList";
import D from "../page/D";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/detail",
    element: <CourseDetail />,
  },
  {
    path: "/list",
    element: <CourseList />,
  },
  {
    path: "/d",
    element: <D />,
  },
]);

export default router;
