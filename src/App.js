import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/greetings' element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
