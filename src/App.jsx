import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu } from "./pages";
import Header from "./components/shared/Header";
import FullScreenLoader from "./components/shared/FullScreenLoader"
import useLoadData from "./hooks/useLoadData";

function Layout() {
  const isLoading = useLoadData();
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  const { isAuth } = useSelector(state => state.user);

  if (isLoading) return <FullScreenLoader />

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/auth" element={isAuth ? <Navigate to="/" replace /> : <Auth />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tables"
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

function ProtectedRoutes({ children }) {
  const { isAuth } = useSelector(state => state.user);

  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
