import React from 'react';
import Test from './components/Test'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <Test />
);