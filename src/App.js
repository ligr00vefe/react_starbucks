import { Outlet, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';

import GlobalStyle from './components/style/GlobalStyle';

const Layout = () => {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Outlet />

      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
