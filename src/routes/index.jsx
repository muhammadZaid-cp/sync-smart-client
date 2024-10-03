import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "../pages/auth/Login";
import PrivateRoute from "./privateRoute";
import Signup from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import OnBoarding from "../pages/OnBoarding";
import CustomizeAssistant from "../pages/CustomizeAssistant";
import Home from "../pages/Home";
import LayoutWrapper from "../components/layouts/LayoutWrapper";
import Operations from "../components/dashboard/operations";
import Settings from "../components/dashboard/operations/settings";
import DeleteOperation from "../components/dashboard/operations/delete";
import Profile from "../components/dashboard/profile";
import Password from "../components/dashboard/profile/password";

export const AppRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/auth/signin" element={<Signin />} />
          <Route exact path="/auth/signup" element={<Signup />} />
          <Route exact path="/onboarding" element={<OnBoarding />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/customize" element={<CustomizeAssistant />} />
            <Route path="/" element={<LayoutWrapper />}>
              <Route path="/operations" element={<Operations />} />
              <Route path="/operations/settings" element={<Settings />} />
              <Route path="/operations/delete" element={<DeleteOperation />} />
              <Route path="/account/profile" element={<Profile />} />
              <Route path="/account/password" element={<Password />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
