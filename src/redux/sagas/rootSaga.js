import { takeLatest } from 'redux-saga/effects';
import { GET_POST } from '../ducks/post';
import handleGetPost from './handlers/handleGetPost';

export function* watcherSaga() {
  yield takeLatest(GET_POST, handleGetPost);
}
