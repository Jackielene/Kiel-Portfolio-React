import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  const routing = useRoutes(routes);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {routing}
    </Suspense>
  );
}

export default App;
