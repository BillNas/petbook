import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPet } from '../actions/posts';

const CreateForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((post) => post._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({ title: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(createPet(postData));
      clear();
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Describe your photo" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter some tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')  })} />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload your image</Form.Label>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
    </Button>
      </Form>
    </Container>
  );
};

export default CreateForm;