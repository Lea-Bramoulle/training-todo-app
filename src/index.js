// == Import : npm
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from 'src/components/App';

import store from './store';

const container = document.getElementById('root');

const jsxToRender = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(container);

root.render(jsxToRender);
