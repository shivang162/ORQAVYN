import './styles/tokens.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/scene.css';
import './styles/sections.css';
import './styles/chat.css';
import './styles/components.css';
import './styles/intro.css';
import './styles/responsive.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
