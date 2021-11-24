import React from 'react';
import  { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { getPosts } from './actions/posts';

import NavBar from './components/NavBar'
import Create from './components/Form'
import Auth from './components/Auth/Auth'
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return(
    <Container>
  <BrowserRouter>
   <NavBar />
   <Routes>
        <Route exact path="/create" element={<Create/>} />
        <Route exact path="/" element={<Posts/>} />
        <Route exact path="/auth" element={<Auth/>} />
      </Routes>
  </BrowserRouter>

 </Container>
  );
};

export default App;