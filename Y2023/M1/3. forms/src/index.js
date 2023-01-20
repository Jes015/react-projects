import react from 'react';
import client from 'react-dom/client'
import App from './components/App'

const root=document.getElementById('root');
const app = client.createRoot(root);
app.render(<App />)