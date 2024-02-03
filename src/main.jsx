import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import { CategoryProvider } from "./context/CategoryProvider.jsx";

import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
