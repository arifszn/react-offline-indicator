import React from 'react';
import { hasBrowserCompatibility } from '../utils';

const PING_URL = 'https://httpbin.org/get';
const TIMEOUT = 5000;
const INTERVAL = 5000;

const ping = (url, timeout) => {
  return new Promise((resolve) => {
    const success = () => resolve(true);
    const error = () => resolve(false);

    const xhr = new XMLHttpRequest();

    xhr.onerror = error;
    xhr.ontimeout = error;
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {
        if (xhr.status) {
          success();
        } else {
          error();
        }
      }
    };

    xhr.open('GET', url);
    xhr.timeout = timeout;
    xhr.send();
  });
};

export const useOfflineStatus = () => {
  const [offlineStatus, setOfflineStatus] = React.useState(
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
      ? !navigator.onLine
      : false
  );

  React.useEffect(() => {
    let intervalId = null;

    window.addEventListener('offline', () => {
      setOfflineStatus(true);
    });

    window.addEventListener('online', () => {
      setOfflineStatus(false);
    });

    if (
      typeof navigator !== 'undefined' &&
      !hasBrowserCompatibility(navigator.userAgent)
    ) {
      intervalId = setInterval(async () => {
        const isOnline = await ping(PING_URL, TIMEOUT);

        setOfflineStatus(!isOnline);
      }, INTERVAL);
    }

    return () => {
      window.removeEventListener('offline', () => {
        setOfflineStatus(true);
      });

      window.removeEventListener('online', () => {
        setOfflineStatus(false);
      });

      intervalId && clearInterval(intervalId);
    };
  }, []);

  return offlineStatus;
};
