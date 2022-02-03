import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

//"@material-ui/core/Button"
//"@material-ui/icons/Add": "^4.11.2",

const CreateNote = (props) => {

  const [expand, setExpand] = useState(false);

  const expandIt=()=>
  {
    setExpand(true);
  };

  const contract=()=>{
    setExpand(false);
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    //const value = event.terget.value;
    //const name=event.target.name;
    //console.log(event.target);
    //console.log(event.target.value);
    //console.log(event.target.name);
    const {name, value}=event.target;

   /*
    const nm={
      [name]:value
    };
     console.log(nm);
    */

     
    setNote((prevData) => {
      return { ...prevData,
        [name]:value

        };
        
    });
    
  };

  const addEvent=()=>{
      props.passNote(note);
      //to empty the fiels title and Wrtie a content adter the has been added
      setNote({
        title: "",
        content: "",
      });

  }

  return (
    <>
      <div className="main_note" onDoubleClick={contract}>
        <form action="">
          {expand? //expand agr true tao show the tilte else don't show it
          <input
            type="text"
            placeholder="Title"
            onChange={InputEvent}
            value={note.title}
            name="title"
          /> : null}
          
          <textarea
            id=""
            cols="10"
            rows="4"
            placeholder="Wrtie a Notes.."
            onChange={InputEvent}
            value={note.content}
            name="content"
            onClick={expandIt}
          ></textarea>
          
          {expand?        //expand agr true tao show the button else don't show it
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button> :null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
