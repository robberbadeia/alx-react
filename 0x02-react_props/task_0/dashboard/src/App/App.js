import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications.js";
import Login from "../Login/Login.js";

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
