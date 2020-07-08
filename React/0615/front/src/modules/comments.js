import { createAction, handleActions } from 'redux-actions';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import * as commentAPI from '../lib/api/comment';
import { takeLatest } from 'redux-saga/effects';



const [
    READ_COMMENT,
    READ_COMMENT_SUCCESS,
    READ_COMMENT_FAILURE,
]=createRequestActionTypes('comment/READ_COMMENT')

export const readComment= createAction(READ_COMMENT,id=>id)

const readCommentSaga = createRequestSaga(READ_COMMENT,commentAPI.readComment)

export function* commentsSaga(){
    yield takeLatest(READ_COMMENT,readCommentSaga)
}

const intitialState={
    comment:null,
    postError:null
}

const comment = handleActions(
    {
        [READ_COMMENT_SUCCESS]:(state,{payload:comment,meta:response})=>({
            ...state,
            comment,
        }),
        [READ_COMMENT_FAILURE]:(state,{payload:postError})=>({
            ...state,
            postError
        })
    },
    intitialState
)

export default comment;