import * as Sentry from '@sentry/react';

interface CaptureExceptionOptions {
  component: string;
  clientId: string;
}

const useSentryException = (
  error: Error,
  { component, clientId }: CaptureExceptionOptions,
): void => {
  Sentry.withScope((scope: Sentry.Scope) => {
    scope.setTag('component', component);
    scope.setTag('clientId', clientId);
    Sentry.captureException(error);
  });
};

export default useSentryException;
