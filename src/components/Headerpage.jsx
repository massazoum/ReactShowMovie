import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';

const Header = () => {
  const isopen = useSelector((state) => state.MoviePop.isOpenPop);
  const ShowList = useSelector((state) => state.ShowList.ShowList);
  const newArray = ShowList.slice(50, 78);
  const nbrMovie = newArray.length;
  return (
    <div>
      {!isopen && (
      <header className="bg-primary text-light py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="mb-0"><img src={logo} alt="" width="200px" height="120px" /></div>
            </div>
            <div className="col-md-9">
              <nav className="navbar navbar-expand-lg navbar-dark justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#"><h2>Home</h2></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <h2>
                          Movies [
                          {nbrMovie}
                          ]
                        </h2>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><h2>TV Shows</h2></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><h2>Actors</h2></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      )}
    </div>
  );
};

export default Header;
