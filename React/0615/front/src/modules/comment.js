import { createAction, handleActions } from 'redux-actions';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';

const [
    WRITE_COMMENT,
    WRITE_COMMENT_SUCCESS,
    WRITE_COMMENT_FAILURE,
]=createRequestActionTypes('comment/WRITE_COMMENT');



export const writeComment = createAction(WRITE_COMMENT,({postId,text})=>({
    postId,text
}));


const wirteCommentSaga =createRequestSaga(WRITE_COMMENT,commentAPI.writeCommnet);


export function* commentSaga(){
    yield takeLatest(WRITE_COMMENT,wirteCommentSaga)
    
}

const intitialState={
    comment:null,
    postError:null
}

const comment = handleActions(
    {
        [WRITE_COMMENT_SUCCESS]:(state,{payload:comment})=>({
            ...state,
            comment,
        }),
        [WRITE_COMMENT_FAILURE]:(state,{payload:postError})=>({
            ...state,
            postError
        })
    },
    intitialState
)

export default comment;