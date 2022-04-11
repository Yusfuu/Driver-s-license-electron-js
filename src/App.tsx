import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div>
      <h1 className='font-bold underline text-sm'>Hello world!</h1>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
