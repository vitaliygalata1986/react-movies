import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function Main() {
  return (
    <>
      <Header />
      <main className="container content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { Main };
