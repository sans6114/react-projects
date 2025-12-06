import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { GiftsApp } from './GiftsApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GiftsApp />
  </StrictMode>,
)
