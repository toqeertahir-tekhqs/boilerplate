import Loading from "components/global/loading";
import PageNotFound from "components/global/pageNotFound";
import Header from "components/Header/index.tsx";
import DailyReward from "modules/DailyStreakReward";
import ProfileDashboard from "modules/Dashboard/index";
// import Games from "modules/games";
// import InviteFriends from "modules/inviteFriends";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RootState } from "store/store";
import Footer from "../../components/Footer";
import CreateAccount from "../../modules/Auth/CreateAccount";
import Login from "../../modules/Auth/Login";
import ClaimReward from "../../modules/DailyRewards";
import Earn from "../../modules/DailyStreakReward";
import Dashboard from "../../modules/Dashboard";

const RouterConfig = () => {
  const token = useSelector((state: RootState) => state?.states?.token);
  return token ? (
    <div className="p-1 app-container">
      <Router>
        <Header />
        <main className="content min-h-[680px] mt-5 mx-2">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/games" element={<Games />} /> */}
              <Route path="/earn" element={<Earn />} />
              <Route path="/claim-rewards" element={<ClaimReward />} />
              <Route path="/daily-reward" element={<DailyReward />} />
              {/* <Route path="/invite-friends" element={<InviteFriends />} /> */}
              <Route path="/dashboard" element={<ProfileDashboard />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  ) : (
    <div className="p-1">
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};
export default RouterConfig;
