import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <Auth0Provider
    domain="dev-pt6emn7345g61mkv.us.auth0.com"
    clientId="pwRdxYXjORN0hWfdWq7f1UYSBaWwHGev"
    authorizationParams={{redirect_uri: window.location.origin}}
  >
    <App />
  </Auth0Provider>

</React.StrictMode>

);
reportWebVitals();