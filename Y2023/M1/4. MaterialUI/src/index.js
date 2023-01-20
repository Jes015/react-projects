import React from "react";
import {createRoot} from 'react-dom/client';
import MyApp from './components/App'

const root = document.getElementById('root')
const app = createRoot(root);

app.render(<MyApp />);