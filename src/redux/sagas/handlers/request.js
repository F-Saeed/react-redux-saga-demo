import axios from 'axios';

export function requestGetPost(id) {
  return axios.request({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
}
