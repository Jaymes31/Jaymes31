import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Pricing />} /> {/* For MVP, redirect signup to pricing */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
