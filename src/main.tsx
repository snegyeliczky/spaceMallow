import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LaunchDetail from "./components/LaunchDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Something went wrong... :(</h1>,
  },
  {
    path: "launch/:launchId",
    element: <LaunchDetail />,
    errorElement: <h1>Something went wrong with the launch... :(</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
