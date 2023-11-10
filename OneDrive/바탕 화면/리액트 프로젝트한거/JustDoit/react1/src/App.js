import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import ReactModal from "react-modal";
import Home from './components/Home/Home';
// App 요소를 정의
ReactModal.setAppElement("#root");
function App() {
  return (
<Router>
<Routes>
  <Route path='/' element={<Home/>}/>
  </Routes>  
</Router>
  );
}

export default App;
