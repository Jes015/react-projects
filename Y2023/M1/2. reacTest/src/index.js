import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './components/App'

const rootM = document.getElementById('root')
const Appe = createRoot(rootM);

Appe.render(<App />)