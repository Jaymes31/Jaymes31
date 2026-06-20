import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Library from './pages/Library';
import Pricing from './pages/Pricing';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Auth from './pages/Auth';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route 
              path="/programs" 
              element={
                <ProtectedRoute requireSubscription>
                  <Programs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/programs/:id" 
              element={
                <ProtectedRoute requireSubscription>
                  <ProgramDetail />
                </ProtectedRoute>
              } 
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
