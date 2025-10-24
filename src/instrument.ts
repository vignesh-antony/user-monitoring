import * as Sentry from "@sentry/react";
import { useEffect } from "react";
import {
  useLocation,
  createRoutesFromChildren,
  useNavigationType,
  matchRoutes,
} from "react-router";

Sentry.init({
  dsn: "https://9dd6874578e0d756aed653a36b016a7f@o4510244748722176.ingest.us.sentry.io/4510244749901824",
  environment: "development",
  sendDefaultPii: true,
  integrations: [
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/reqres\.in\/api/],
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});
