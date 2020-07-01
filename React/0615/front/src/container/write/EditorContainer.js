import React,{useEffect,useCallback} from 'react'; 
import Editor from '../../components/write/Editor';
import {useSelector,useDispatch} from 'react-redux';
import {changeField,initialize} from '../../modules/write';

const EditorContainer = ()=>{
    const disPatch = useDispatch();
    const {title,body} = useSelector(({write})=>({
        title:write.title,
        body:write.body,
    }));
    const onChangeField = useCallback(payload=>disPatch(changeField(payload)),[
        disPatch,
    ])
    useEffect(()=>{
        return ()=>{
            disPatch(initialize());
        }
    },[disPatch]);
    return <Editor onChangeField={onChangeField} title={title} body={body}/>
}

export default EditorContainer;

