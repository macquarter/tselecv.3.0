import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import Home from '../Home';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAdmin, setIsEditMode } = useAdmin();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    if (!adminStatus) {
      navigate('/admin');
    } else {
      setIsEditMode(true);
    }
  }, [navigate, setIsEditMode]);

  const adminStatus = localStorage.getItem('isAdmin') === 'true';
  if (!adminStatus && !isAdmin) return null;

  // Render the main Home page, but since isEditMode is true, 
  // the Editable components will be active.
  return <Home />;
}
