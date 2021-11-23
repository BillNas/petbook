import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import {Spinner,Container,Row,Col} from 'react-bootstrap';


const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
  
    return (
      !posts.length ? <Spinner animation="border" role="status">
      
    </Spinner> : (
        <Container >
          <Row xs={2} md={4} lg={3}>
          {posts.map((post) => (
            <Col>
              <Post key={post._id}  post={post} setCurrentId={setCurrentId} />
            </Col>
          ))}
          </Row>
        </Container>
      )
    );
  };
  
  export default Posts;