import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';
import HomePage from './components/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
