import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TodoProvider } from "./context/TodoProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TodoProvider>
  </React.StrictMode>
);
