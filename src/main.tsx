import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SWRConfig
    value={{
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      // Do not use a global cache, this avoids requests being cached and deduplicated between tests
      provider: () => new Map(),
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>
);
