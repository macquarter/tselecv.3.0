/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ContentManager from './pages/admin/ContentManager';
import NewsManager from './pages/NewsPage';
import DownloadsManager from './pages/Downloads';

// Protected Route Wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAdmin();
  const adminStatus = localStorage.getItem('isAdmin') === 'true';
  
  if (!adminStatus && !isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return <AdminLayout>{children}</AdminLayout>;
}

export default function App() {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          {/* Public Route (Login) */}
          <Route path="/login" element={<AdminLogin />} />
          
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Protected Admin Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/dashboard/content" element={<ProtectedRoute><ContentManager /></ProtectedRoute>} />
          <Route path="/dashboard/news" element={<ProtectedRoute><NewsManager /></ProtectedRoute>} />
          <Route path="/dashboard/downloads" element={<ProtectedRoute><DownloadsManager /></ProtectedRoute>} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}
