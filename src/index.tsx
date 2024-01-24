import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApplicationProvider } from "./contexts/useApplication";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/main";
import Rank from "./pages/rank";
import Mission from "./pages/mission";
import Dojo from "./pages/dojo";
import Profile from "./pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/rank",
        element: <Rank />,
      },
      {
        path: "/mission",
        element: <Mission />,
      },
      {
        path: "/dojo",
        element: <Dojo />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApplicationProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ApplicationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
