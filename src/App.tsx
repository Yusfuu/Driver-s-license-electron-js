import Login from './pages/Login';
import Dashboard, { Home } from './pages/Dashboard';
import Final from './pages/Final';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const { pathname } = useLocation();

  const path = pathname.replace('/index', '') || '/';

  return (
    <>
      <Routes location={path}>
        <Route path='/' element={<Dashboard />}>
          <Route path='home' element={<Home />} />
          <Route path='forms' element={<h1>Forms</h1>} />
        </Route>
      </Routes>
      {/* <Final /> */}
    </>
  );
};

export default App;
