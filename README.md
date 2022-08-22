<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/185791904-7180800a-f9fc-400c-a9c5-e989fd57ed63.png" width="50%">

  <h4 align="center">⚡ Offline detector and indicator for your React app.</h4>

  <p align="center">
    <a href="https://www.npmjs.com/package/react-offline-indicator">
      <img src="https://img.shields.io/npm/v/react-offline-indicator"/>
    </a>
    <a href="https://www.npmjs.com/package/react-offline-indicator">
      <img src="https://img.shields.io/npm/dt/react-offline-indicator"/>
    </a>
    <img src="https://img.shields.io/bundlephobia/min/react-offline-indicator"/>
    <a href="https://github.com/arifszn/react-offline-indicator/issues">
      <img src="https://img.shields.io/github/issues/arifszn/react-offline-indicator"/>
    </a>
    <a href="https://github.com/arifszn/react-offline-indicator/stargazers">
      <img src="https://img.shields.io/github/stars/arifszn/react-offline-indicator"/>
    </a>
    <a href="https://github.com/arifszn/react-offline-indicator/blob/main/package-lock.json">
      <img src="https://img.shields.io/snyk/vulnerabilities/github/arifszn/react-offline-indicator"/>
    </a>
    <a href="https://github.com/arifszn/react-offline-indicator/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/arifszn/react-offline-indicator/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/arifszn/react-offline-indicator"/>
    </a>
    <a href="https://www.buymeacoffee.com/arifszn">
      <img src="https://img.shields.io/badge/sponsor-buy%20me%20a%20coffee-yellow?logo=buymeacoffee"/>
    </a>
    <a href="https://twitter.com/intent/tweet?url=https://github.com/arifszn/react-offline-indicator&hashtags=javascript,reactjs,opensource,js,webdev,developers">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Freact-offline-indicator"/>
    </a>
  </p>

  <p align="center">
    <a href="https://arifszn.github.io/react-offline-indicator">Demo</a>
    ·
    <a href="https://github.com/arifszn/react-offline-indicator/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/react-offline-indicator/discussions">Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://arifszn.github.io/react-offline-indicator">
    <img src="https://user-images.githubusercontent.com/45073703/185794080-d88abdc1-3714-4bb9-96bf-4f7143e0502b.png" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="50%" alt="Shadow"/></a>
</p>

Just wrap your react components with `ReactOfflineIndicator`. When there is no internet connection, it will display offline page. When it comes back online, previous page will be restored.

## Installation

Install via <a href="https://www.npmjs.com/package/react-offline-indicator">NPM</a>.

```sh
npm install react-offline-indicator
```

Or via <a href="https://yarnpkg.com/package/react-offline-indicator">Yarn</a>.

```sh
yarn add react-offline-indicator
```

## Usage

```jsx
import ReactOfflineIndicator from 'react-offline-indicator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactOfflineIndicator>
    <App />
  </ReactOfflineIndicator>
);
```

A hook `useOfflineStatus` indicating offline status is also available.

```jsx
import { useOfflineStatus } from 'react-offline-indicator';

function App() {
  const isOffline = useOfflineStatus();

  return isOffline ? 'Offline' : 'Online';
}
```

## Support

<p>You can show your support by starring this project.</p>
<a href="https://github.com/arifszn/react-offline-indicator/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/react-offline-indicator?style=social" alt="Github Star">
</a>

## Contribute

To contribute, see the [contributing guide](https://github.com/arifszn/react-offline-indicator/blob/main/CONTRIBUTING.md).

## License

[MIT License](https://github.com/arifszn/react-offline-indicator/blob/main/LICENSE)
