import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles/templateMovie.css';
import like from './images/like.png';
import { openPopup } from '../reducers/Moviepopup';
import { fetchSowByindex } from '../reducers/MovieAPI';
import { fetchID, fetchLike } from '../reducers/likecommentAPI';
import { fetchgetcomment, addComment } from '../reducers/comment1';

const ListMovie = () => {
  const ShowList = useSelector((state) => state.ShowList.ShowList);
  const isopen = useSelector((state) => state.MoviePop.isOpenPop);
  const Likess = useSelector((state) => state.reaction.likess);
  const dispatch = useDispatch();
  const newArray = ShowList.slice(50, 78);

  useEffect(() => {
    dispatch(fetchSowByindex());
    dispatch(fetchLike());
  }, [dispatch]);

  const handleShowpopup = async (event) => {
    try {
      const name = event.currentTarget.id;
      const number = parseInt(name);

      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/comments?item_id=${number}`);
      const data = await response.json();

      dispatch(fetchgetcomment.fulfilled(data)); // Manually dispatch the fulfilled action with the fetched data
      dispatch(addComment(data));
      const select = ShowList[number - 3];
      dispatch(openPopup(select));
      console.log(data);
    } catch (error) {
    // Handle any error that occurred during the API request
      console.error('Failed to fetch comments:', error);
    }
  };
  const handleLike = (event) => {
    const name = event.currentTarget.id;
    dispatch(fetchID(name))
      .then(() => {
        dispatch(fetchLike());
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  const updateLikes = (showId) => {
    const item = Array.isArray(Likess) ? Likess.find((item) => item.item_id === showId.toString()) : null;
    return item ? item.likes : 0;
  };

  return (
    <div className="mainMovie">
      <div className="container ">
        {!isopen && (
          <div className="row">
            {newArray.map((show) => {
              const likes = updateLikes(show.id);

              return (
                <div className="col-lg-3 col-md-5 mb-4" key={show.id}>
                  <div className="card">
                    <div className="image-container">
                      <img
                        src={show.image.original}
                        height="300px"
                        className="card-img-top"
                        alt={show.name}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{show.name}</h5>
                      <div className="btnDiv">
                        <div style={{ display: 'flex', flexDirection: 'row', justifContent: 'spaceBetween' }}>
                          <h3>{likes}</h3>
                          <button
                            type="button"
                            id={show.id}
                            onClick={handleLike}
                            className="btnT mr-2"
                          >
                            <img src={like} width="100%" height="100%" alt="like button" className="likeLogo" />
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        id={show.id}
                        onClick={handleShowpopup}
                        className="bntMore"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListMovie;
