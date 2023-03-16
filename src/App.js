import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import createApp from '@shopify/app-bridge';

import Home from './Pages/Home';
import About from './Pages/About';
import {Provider, TitleBar} from '@shopify/app-bridge-react'
const config = {
  // The client ID provided for your application in the Partner Dashboard.
  apiKey: "246f4f78014ed307ad0637416793df40",
  // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
  host: new URLSearchParams(window.location.search).get("host"),
  forceRedirect: true
};

const app = createApp(config);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home app={app} />
  },
  {
    path: "about",
    element: <About app={app} />
  },
]);





function App() {
  return (
    <Provider config={config}>
      <TitleBar title="App Shopify Testing"/>
      <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
