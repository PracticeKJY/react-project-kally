import { NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from '@/firebase/auth';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DarkFilter from '@/components/DarkFilter/DarkFilter';

export default function Layout({ children }) {
  const { isLoading, error, user } = useAuthState();

  return (
    <>
      <DarkFilter />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
