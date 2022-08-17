import React from 'react';

export const useOfflineStatus = () => {
  const [offlineStatus, setOfflineStatus] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('offline', () => {
      setOfflineStatus(true);
    });
    window.addEventListener('online', () => {
      setOfflineStatus(false);
    });

    return () => {
      window.removeEventListener('offline', () => {
        setOfflineStatus(true);
      });
      window.removeEventListener('online', () => {
        setOfflineStatus(false);
      });
    };
  }, []);

  return offlineStatus;
};
