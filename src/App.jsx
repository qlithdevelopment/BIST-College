import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layouts
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import BlogPosts from './pages/admin/BlogPosts';
import Notices from './pages/admin/Notices';
import Queries from './pages/admin/Queries';
import Gallery from './pages/admin/Gallery';
import Settings from './pages/admin/Settings';

// Public Pages
import About from './pages/About';
import CourseScience from './pages/courses/Science';
import CourseCommerce from './pages/courses/Commerce';
import AdmissionProcedure from './pages/admission/Procedure';
import AdmissionFees from './pages/admission/Fees';
import AdmissionRules from './pages/admission/Rules';

// Routes
import AuthRoute from './routes/AuthRoute';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Course Routes */}
            <Route path="/courses/science" element={<CourseScience />} />
            <Route path="/courses/commerce" element={<CourseCommerce />} />
            
            {/* Admission Routes */}
            <Route path="/admission/procedure" element={<AdmissionProcedure />} />
            <Route path="/admission/fees" element={<AdmissionFees />} />
            <Route path="/admission/rules" element={<AdmissionRules />} />
            
            {/* Auth Routes - accessible only when not logged in */}
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            
            {/* Protected Routes - accessible only when logged in */}
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/blog" element={<BlogPosts />} />
                <Route path="/dashboard/notices" element={<Notices />} />
                <Route path="/dashboard/queries" element={<Queries />} />
                <Route path="/dashboard/gallery" element={<Gallery />} />
                <Route path="/dashboard/settings" element={<Settings />} />
              </Route>
            </Route>
            
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;