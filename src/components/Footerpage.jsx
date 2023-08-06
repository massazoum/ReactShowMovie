import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const isopen = useSelector((state) => state.MoviePop.isOpenPop);

  return (
    <div>
      {!isopen && (
      <footer className="bg-primary text-light py-4">
        {' '}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5>About</h5>
              <p>
                {' '}
                Welcome to our movie site! We are dedicated to providing you with the latest and greatest movies
                from various genres. Whether you're a fan of action, romance, comedy, or thrillers, we have something
                for everyone. Our goal is to create an immersive movie experience and keep you entertained with
                captivating stories and exceptional performances. Feel free to browse through our vast collection
                of movies and discover new favorites. Sit back, relax, and enjoy the magic of cinema!
              </p>
            </div>
            <div className="col-lg-3" />
            <div className="col-lg-3">
              <h5>Contact</h5>
              <p>Email: zoumaniguimassa12@gmail.com</p>
              <p>Phone: +224 627196928</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          MassaZoum. All rights reserved.
        </div>
      </footer>
      )}
    </div>
  );
};

export default Footer;
