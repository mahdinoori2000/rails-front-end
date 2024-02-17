import { Routes, Route } from 'react-router';
import GreetingsPage from './routes/GreetingsPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<GreetingsPage />} />
      </Routes>
    </main>
  );
}

export default App;
