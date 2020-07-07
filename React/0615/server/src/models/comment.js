import mongoose from 'mongoose';


const {Schema} = mongoose;

const commentSchema = new Schema({
    postId:{type:mongoose.Schema.Types.ObjectId,required:true},
    username:{type:String, required:true},
    parentComment:{type:mongoose.Schema.Types.ObjectId,ref:'comment'},
    text:{type:String,required:[true,'text is required']},
    isDeleted:{type:Boolean},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date},
},{
    toObject:{virtuals:true}
});

commentSchema.virtual('childComments')
    .get(function () {
        return this._childComments;})
    .set(function(){
        return this._childComments=value;
    });

const Comment = mongoose.model('Comment',commentSchema);
export default  Comment;