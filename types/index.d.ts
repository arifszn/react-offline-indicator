// Type definitions for React Offline Indicator
// Project https://github.com/arifszn/react-offline-indicator
// Author: Ariful Alam <arifulalamszn@gmail.com>

import { Component } from 'react';

export interface ReactOfflineIndicatorProps {}

declare class ReactOfflineIndicator extends Component<
  ReactOfflineIndicatorProps,
  any
> {}

export default ReactOfflineIndicator;

/**
 * Hook indicating offline status.
 */
declare function useOfflineStatus(): boolean {};

export { useOfflineStatus };
