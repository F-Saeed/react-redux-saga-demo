import { call, put } from 'redux-saga/effects';
import { getPost } from '../../ducks/post';
import { requestGetPost } from './request';

function* handleGetPost(action) {
  try {
    const responsePromise = yield call(requestGetPost, action.id);
    const response = yield responsePromise;
    const { data } = response;
    console.log(data);
    yield put(getPost(data));
  } catch (error) {
    console.log(error);
  }
}

export default handleGetPost;
