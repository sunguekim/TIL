import Router from 'koa-router';
import checkLoggedIn  from '../../lib/checkLoggedIn'
import * as commentCtrl from './comments.ctrl'

const comment  = new Router;


comment.post('/write',checkLoggedIn,commentCtrl.write);

export default comment;