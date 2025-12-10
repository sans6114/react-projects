import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { GiftsApp } from './GifApp';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GiftsApp />
        {/* <MyCounterApp /> ---> ejemplo de custom hook */}
    </StrictMode>
);
