import React from 'react';
import './styles/App.css';
import './styles/Responsive.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer1';



const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App