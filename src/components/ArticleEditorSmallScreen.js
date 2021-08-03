
import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

export default class ArticleEditorSmallScreen extends Component{
   state ={
        		editorState: EditorState.createEmpty(),
        	}
 onEditorStateChange =(editorState)=>{
 	this.setState(
 		{editorState,});
 };
   render(){
   	 const {editorState}= this.state;
        return (
         <div>
            <div className="div-articleSmall" >
                <h3>Article Editor</h3>
                <Editor
  toolbarHidden
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
/>
            </div>
          </div>
        )

   }


}






















