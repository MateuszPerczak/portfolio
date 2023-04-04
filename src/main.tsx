import AppProvider from "@components/appProvider/AppProvider";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
);
