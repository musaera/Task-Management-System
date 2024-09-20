import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'; // Import Provider dari React-Redux
import { store } from './app/store'; // Import store Redux

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Bungkus App dengan Provider untuk memberikan akses store Redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);