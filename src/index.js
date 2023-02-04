import * as React from 'react';
import './index.css';
import './index.scss';
import image from './image.jpg';
import { createRoot } from 'react-dom/client';

const Main = () => {
  return (
    <div>
      <h1>BTS</h1>
      <img src={image} alt='img' />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
