import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TaskPage } from "./TaskPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskPage />
  </StrictMode>
);
