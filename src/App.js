import Header from './Components/Header';
import Footer from './Components/Footer'
import './App.css';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { useState } from 'react';

function App() {


  const [addItem, setAddItem] = useState([]);

  const addNote=(note)=>{
    //alert("hello");

    return setAddItem((prevData)=>{
      return[...prevData, note]
      
    });
  };

 

  const onDelete=(id)=>{

    setAddItem((preNote)=>{
      return preNote.filter((element,index)=>{
        return index !== id;
      })

    })

  };

  return (
    <>
    <Header/>
    <CreateNote passNote={addNote} />
    
    {addItem.map((val,index)=>{
      return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>

    })}
    
    <Footer/>
    </>
  );
}

export default App;
