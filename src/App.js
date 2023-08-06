import React from 'react';
import Header from './components/Headerpage';
import Footer from './components/Footerpage';
import ListMovie from './components/listsMovie';
import Popmovie from './components/Moviepopup';

function App() {
  return (

    <div className="App">
      <Header />
      <Popmovie />
      <ListMovie />
      <Footer />
    </div>
  );
}

export default App;
