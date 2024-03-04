import { Suspense, lazy, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Loader from "./components/Loader.jsx";
// page imports
const HomePage = lazy(() => import("./pages/Home.jsx"));
const UserPages = lazy(() => import("./pages/UserPages.jsx"));
const BuyQuiz = lazy(() => import("./pages/BuyQuiz.jsx"));
const Score = lazy(() => import("./pages/Score.jsx"));

function Router() {
  const { pathname } = useLocation();
  // const { token } = useSelector((state) => state?.user.token, shallowEqual);
  // Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const routes = [
    {
      path: "/",
      element: "",
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/user-pages",
          element: <UserPages />,
        },
        {
          path: "/buy-quiz",
          element: <BuyQuiz />,
        },
        {
          path: "/score",
          element: <Score />,
        },
      ],
    },
  ];

  const renderedRoutes = useRoutes(routes);

  return <Suspense fallback={<Loader />}>{renderedRoutes}</Suspense>;
}

export default Router;