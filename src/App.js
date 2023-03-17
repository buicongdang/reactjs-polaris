import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import {Provider, NavigationMenu, Loading} from '@shopify/app-bridge-react';

import createApp from '@shopify/app-bridge';
import '@shopify/polaris/dist/styles.css'
import translations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPage from './ErrorPage'
const config = {
  apiKey: "246f4f78014ed307ad0637416793df40",
  host: new URLSearchParams(window.location.search).get("host"),
  forceRedirect: true
};

const app = createApp(config);
const router = createBrowserRouter([
  {
    path: "/",
    element : <Home app={app} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element : <About app={app} />
  },
  {
    path: "contact",
    element : <Contact app={app} />
  },
]);

function App() {
  const loading = true;
  const loadingComponent = loading ? <Loading /> : null;
  return (
    <Provider config={config}>
      <AppProvider i18n={translations}>
        <NavigationMenu
            navigationLinks={[
              {
                label: 'Home',
                destination: '/'
              },
              {
                label: 'About',
                destination: '/about'
              },
              {
                label: 'Contact',
                destination: '/contact'
              },
            ]}
            matcher={(link, location) => link.destination === location.pathname}
          />
          {loadingComponent}
          <RouterProvider router={router} />
      </AppProvider>
        
    </Provider>
  );
}

export default App;
