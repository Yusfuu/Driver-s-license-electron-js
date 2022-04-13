import { Home } from './pages/Dashboard';
import { Chart, Dashboard } from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const { pathname } = useLocation();
  const path = pathname.replace('/index', '') || '/';

  return (
    <Routes location={path}>
      <Route path='/' element={<Dashboard />}>
        <Route path='home' element={<Home />} />
        <Route path='charts' element={<Chart />} />
      </Route>
    </Routes>
  );
};

export default App;
