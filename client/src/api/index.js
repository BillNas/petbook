import axios from 'axios';

const url = "http://localhost:5000/api/pets"

export const fetchPosts = () => axios.get(url)
export const createPet = (newPost) => axios.post(url,newPost)
export const deletePet = (id) => axios.delete(`${url}/${id}`);