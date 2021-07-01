import './App.scss';
import Sidebar from './containers/Sidebar/Sidebar';
import Home from './containers/Home/Home';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
