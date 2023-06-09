import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/moviepopup.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import close from '../images/close.png';
import { clossePopup } from '../reducers/Moviepopup';
import { fectchcomment, fetchLike } from '../reducers/likecommentAPI';
import { addComment } from '../reducers/comment1';
import { fetchSowByindex } from '../reducers/MovieAPI';

// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

const Popmovie = () => {
  const isopen = useSelector((state) => state.MoviePop.isOpenPop);
  const showMovie = useSelector((state) => state.MoviePop.showMovie);
  const d = useSelector((state) => state.reactionA.listComment);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // const handleInput = (event) => {

  // };
  const handleFormSubmit = async (event) => {
    try {
      dispatch(fectchcomment({
        item_id: event.currentTarget.id,
        username: name,
        comment: description,
      }));
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qctDKoMCylhLoPut4xt1/comments?item_id=${showMovie.id}`);
      const data = await response.json();
      dispatch(addComment(data));
    } catch (error) {
    // Handle any error that occurred during the API request
      console.error('Failed to fetch comments:', error);
    }
  };

  const handleInputtext = (event) => {
    setName(event.currentTarget.value);
    console.log(d);
  };

  const handleInputtextarray = (event) => {
    setDescription(event.currentTarget.value);
  };

  const handleclose = () => {
    // window.location.reload();
    dispatch(clossePopup());
    dispatch(fetchSowByindex());
    dispatch(fetchLike());
  // console.log(CommentAPI)
  };

  return (
    <div className="Popmain1 m-2">
      {isopen && (
      <div className="Popmain ">
        <div card mb-3 position-absolute top-50 start-50 translate-middle>
          <button className="ClosseBtn1" type="button" onClick={handleclose}>
            {' '}
            <img src={close} width="30px" height="30px" alt="" />
            {' '}
          </button>
          <div className="row g-0">

            <div className="col-md-4">
              <img src={showMovie.image.original} className="img-fluid rounded-start imgePOP" alt="" />

            </div>
            <div className="col-md-8 ">

              <div className="SidePop2">
                <div className="card-body">
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <h2 className="card-title">{showMovie.name}</h2>
                    <button className="ClosseBtn" type="button" onClick={handleclose}>
                      {' '}
                      <img src={close} width="30px" height="30px" alt="" />
                      {' '}
                    </button>
                  </div>
                  {showMovie.summary}
                </div>
                <h3>
                  Comment[
                  {d.length}
                  ]
                </h3>
                <div className="commentDIV">
                  {
  Array.isArray(d)
  && d.map((element) => (
    <div key={element.username}>
      <h4>
        Name :
        {element.username}
      </h4>
      <h4>
        Comment:
        {element.comment}
      </h4>
      <h4>
        Date :
        {element.creation_date}
      </h4>
      <div className="linecomment" />
    </div>
  ))
}

                </div>
                <Form style={{ marginLeft: '10px', marginRight: '10px' }}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="name" onChange={handleInputtext} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" name="description" rows={3} onChange={handleInputtextarray} />
                  </Form.Group>
                  <Button variant="outline-dark" id={showMovie.id} onClick={handleFormSubmit}>Comment</Button>
                  {' '}
                </Form>
              </div>
            </div>

          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Popmovie;
