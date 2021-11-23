import React from 'react';
import  { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { getPosts } from './actions/posts';

import NavBar from './components/NavBar'
import Create from './components/Form'
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
        <Route path="/create" element={<Create/>} />
        <Route path="/about" element={<Create/>} />
      </Routes>
  </BrowserRouter>
   <Posts setCurrentId={setCurrentId} />
 </Container>
  );
};

export default App;