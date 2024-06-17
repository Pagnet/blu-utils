import { useCallback } from 'react';
import * as Sentry from '@sentry/react';

interface CaptureExceptionOptions {
  component: string;
  clientId: string;
}

const useSentryException = (): ((
  error: Error,
  options: CaptureExceptionOptions,
) => void) => {
  const captureException = useCallback(
    (error: Error, { component, clientId }: CaptureExceptionOptions) => {
      Sentry.withScope((scope: Sentry.Scope) => {
        scope.setTag('component', component);
        scope.setTag('clientId', clientId);
        Sentry.captureException(error);
      });
    },
    [],
  );

  return captureException;
};

export default useSentryException;
