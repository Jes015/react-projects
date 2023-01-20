import React from "react";
import {createRoot} from "react-dom/client";
import App from './components/App'

const mountPoint = document.getElementById('root')
const root = createRoot(mountPoint);

root.render(<App />)