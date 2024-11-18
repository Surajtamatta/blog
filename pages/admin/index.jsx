import React,{useRef} from 'react'
import BlogEditor from './editor/BlogEditor'

const Admin = () => {
    var refdiv=useRef(null);
    var rte;
  
    function btnclick(){
      alert(rte.getHTMLCode());
    }
  
    setTimeout(function(){
      rte=new window.RichTextEditor(refdiv.current);
      rte.setHTMLCode("Hello World!");
    },0)
  
  return (
    <div>
        <div ref={refdiv}></div>
        
        <hr/>
        <div><button onClick={btnclick}>Show HTML Code</button></div>
        
    </div>
  )
}

export default Admin