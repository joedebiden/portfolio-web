import Index from "./index";
import Projet from "./projet";
import Parcours from "./parcours";

export default createBrowserRouter([
  {
    path: "/",
    Component: Index,
  },
  {
    path: "/projet",
    Component: Projet,
  },
  {
    path: "/parcours",
    Component: Parcours,
  }
]);