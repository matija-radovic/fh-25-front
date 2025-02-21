import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components";
import Main from "./pages/main";
import Test from "./pages/test";
import FinalForm from "./components/FinalForm/FinalForm";

// TODO: promeniti ruter po dogovoru za formu
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Main />}>
        <Route path="/prijava" element={<FinalForm />} />
      </Route>
      <Route path="/test" element={<Test />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
