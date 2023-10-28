import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Season from "./pages/Season";
import FragranceDetails from "./pages/FragranceDetails";
import Searched from "./pages/Searched";
import Requests from "./pages/Requests.Jsx";
import Learn from "./pages/Learn";
import Recommended from "./pages/Recommended";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/:season" element={<Season />} />
      <Route path="/details/:id" element={<FragranceDetails />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/recommended" element={<Recommended />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
