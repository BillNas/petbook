import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Card, Button } from 'react-bootstrap';
import { BsFillTrashFill,BsFillHandThumbsUpFill } from 'react-icons/bs';
import { deletePet,likePost} from '../../../actions/posts';
const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	return (
		<Card
			style={{
				width: '18rem'
			}}
			className='m-2'
		>
			<Card.Img
				variant='top'
				src={
					post.selectedFile ||
					'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
				}
			/>{' '}
			<Card.Body>
				<Card.Title> {post.title} </Card.Title> <Card.Text><b>{post.tags.map((tag) => `#${tag} `)} </b></Card.Text> {' '}
				<Card.Subtitle className='mb-2 text-muted'> {moment(post.createdAt).fromNow()} </Card.Subtitle>{' '}
				<Button  style={{color: "blue"}}  size="small" variant="light" onClick={() => dispatch(likePost(post._id))}><BsFillHandThumbsUpFill /> LIKE {post.likeCount} </Button> {' '}
				<Button size='small'variant="danger" onClick={() => dispatch(deletePet(post._id))}>
					<BsFillTrashFill/> DELETE{' '}
				</Button>{' '}
			</Card.Body>{' '}
			{' '}
		</Card>
	);
};

export default Post;
