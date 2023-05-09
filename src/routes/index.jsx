import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Education } from '../pages/Education';
import { Skills } from '../pages/Skills';
import { Contact } from '../pages/Contact';
import { Error } from '../pages/Error';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Container } from '../components/Container';

export const AppRoutes = () => {
  return (
    <Router>
      <Header />

      <Container>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/About'} element={<About />} />
          <Route path={'/Education'} element={<Education />} />
          <Route path={'/Skills'} element={<Skills />} />
          <Route path={'/Contact'} element={<Contact />} />
          <Route path={'#'} element={<Error />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};
