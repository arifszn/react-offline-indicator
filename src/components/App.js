import React from 'react';
import { useOfflineStatus } from '../hooks/useOfflineStatus';
import './App.css';

const ReactOfflineStatus = ({ children }) => {
  const isOffline = useOfflineStatus();

  return !isOffline ? (
    children
  ) : (
    <React.Fragment>No Internet Connection!</React.Fragment>
  );
};

export default ReactOfflineStatus;
