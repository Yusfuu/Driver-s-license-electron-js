import React from 'react';
import { createRoot } from 'react-dom/client';
import Mamamiya from './components/Mamamiya';
import './index.css';

const App = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <h1 className=' font-bold underline text-sm'>
      <Mamamiya />
      </h1>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
