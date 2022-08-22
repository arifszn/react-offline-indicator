import ReactOfflineIndicator from '../../src';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="fade-in h-screen w-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <ReactOfflineIndicator>
        <Home />
      </ReactOfflineIndicator>
    </div>
  );
}

export default App;
