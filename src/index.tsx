import App from "./Components/App/App";
import { createRoot, Root } from "react-dom/client";
import "./i18n";
import { StrictMode } from "react";

const rootElement: HTMLDivElement = document.querySelector("#root")!;

const root: Root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
