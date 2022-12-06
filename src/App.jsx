

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'
// import ModalWindow from './components/Modal/Modal';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
      {/* <ModalWindow>
        <this.Form1 />
        <this.Form2 />
      </ModalWindow> */}
    </div>
  );
}

export default App;
