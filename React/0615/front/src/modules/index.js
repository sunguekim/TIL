import {combineReducers} from 'redux'
import auth, { authSaga } from './auth';
import loading from './loading'
import user, { userSaga } from './user'
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write'
import post , {postSaga} from './post';
import posts, {postsSaga} from './posts';
import comment,{commentSaga} from './comment'

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    write,
    post,
    posts,
    comment
});

export function* rootSaga(){
    yield all([authSaga(),userSaga(),writeSaga(),postSaga(),postsSaga(),commentSaga]);
}

export default rootReducer;