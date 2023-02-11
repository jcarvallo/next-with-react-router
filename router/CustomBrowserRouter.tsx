/* eslint-disable */
import React from "react";
import { Router } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { createNextHistory } from "./createNextHistory";
import { Update } from "history";
import { MemoryHistoryInstance } from "./createNextHistory";

interface CustomBrowserRouterProps {
  asPath: string;
  children: React.ReactNode;
}
function CustomBrowserRouter({ children, asPath }: CustomBrowserRouterProps) {
  if (process.browser) {
    const historyRef = React.useRef<MemoryHistoryInstance>();

    if (historyRef.current == null) {
      historyRef.current = createNextHistory(asPath);
      historyRef.current.listen((update) => dispatch(update));
    }

    const history = historyRef.current;

    const [state, dispatch] = React.useReducer(
      (_: Update, action: Update) => action,
      {
        action: history.action,
        location: history.location,
      }
    );

    return (
      <Router
        navigationType={state.action}
        location={state.location}
        navigator={history}
      >
        {children}
      </Router>
    );
  } else {
    return <StaticRouter location={asPath}>{children}</StaticRouter>;
  }
}

export default CustomBrowserRouter;
