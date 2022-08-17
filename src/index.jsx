import React from 'react';
import PropTypes from 'prop-types';
import { useOfflineStatus } from './hooks/useOfflineStatus';
import './css/index.css';

const ReactOfflineStatus = ({ children }) => {
  const isOffline = useOfflineStatus();

  return !isOffline ? (
    children
  ) : (
    <React.Fragment>No Internet Connection!</React.Fragment>
  );
};

ReactOfflineStatus.propTypes = {
  children: PropTypes.node,
};

export default ReactOfflineStatus;
