import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

export default class ArticleEditor extends Component{
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
            <div className="div-article">
                <h3>Article Editor</h3>
                <Editor
                 editorState={editorState}
                 toolbarClassName="toolbarClassName"
                 wrapperClassName="wrapperClassName"
                 editorClassName="editorClassName"
                 onEditorStateChange={this.onEditorStateChange}
                />
            </div>
          </div>
        )

   }


}
