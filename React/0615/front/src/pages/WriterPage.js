import React from 'react';
import Responsive from '../components/common/Responsive';
import TagBoxContainer from '../container/write/TagBoxContainer';
import EditorContainer from '../container/write/EditorContainer'
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';


const WriterPage = () => {
    return (
    
            <Responsive>
                <EditorContainer/>
                <TagBoxContainer/>
                <WriteActionButtonsContainer/>
            </Responsive>
      
    )
}

export default WriterPage;