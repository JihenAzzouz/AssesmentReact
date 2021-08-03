import './App.css';
import ArticleEditor from './components/ArticleEditor';
import ArticleEditorSmallScreen from './components/ArticleEditorSmallScreen';
import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Editor } from 'react-draft-wysiwyg';



const divStyle = {  

  textAlign: 'center',
  padding: '69px 20px 200px 20px',
  backgroundColor:'#D6ECF8', 

};
const App = () => {
  
  return (
  <div className="App">  
      <header className="App-header">
        <h2>React Article Editor 
        </h2>
      </header>

      <MediaQuery minWidth={1201}>
        <div><ArticleEditor/></div>
        <button>Publish ></button>
      </MediaQuery>

      <MediaQuery minWidth={376} maxWidth={1200}>
        <div style={divStyle}>
        <div >
          <ArticleEditorSmallScreen/>
        </div>
        </div>
      </MediaQuery>


      <MediaQuery maxWidth={375}>
        <div style={divStyle}>
        <ArticleEditorSmallScreen/>
        </div>
      </MediaQuery>
</div>

  )
}

export default App