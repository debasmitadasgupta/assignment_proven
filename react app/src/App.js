import logo from './logo.svg';
import './App.css';
import { Routes} from './Routers/Routes';
import Notifications from 'react-notify-toast';

function App() {
  return (
    <div className="App">
<Routes/>
<Notifications/>
    </div>
  );
}

export default App;
