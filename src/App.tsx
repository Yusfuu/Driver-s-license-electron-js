import Final from './pages/Final';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import { Landing } from './pages/Landing';
import { Dashboard, Chart } from './pages';
import { IndexDashboard } from './components/Dashboard/IndexDashboard';

const App = () => {
  const { pathname } = useLocation();

  const path = pathname.replace('/index', '') || '/';

  return (
    <>
      <Routes location={path}>
        <Route path='/' element={<Dashboard />}>
          <Route path='home' element={<IndexDashboard />} />
          <Route path='charts' element={<Chart />} />
        </Route>
        <Route path='/admin' element={<Landing />}>
          <Route path='quiz' element={<Quiz />} />
          <Route path='submit' element={<Final />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
