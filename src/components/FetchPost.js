import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from '../redux/ducks/post';

const FetchPost = () => {
  const idRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getPost(1));
  };

  return (
    <>
      <input type='text' ref={idRef} name='id' />
      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default FetchPost;
