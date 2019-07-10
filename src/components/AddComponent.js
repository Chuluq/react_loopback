import React from "react";

function AddComponent(props) {
  return(
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"  
          name="nameUse" 
          value={props.data.nameUse}
          onChange={props.handleChange}
          placeholder="name use"                
        /><br />

        <input
          type="text" 
          name="prefix" 
          value={props.data.prefix}
          onChange={props.handleChange}
          placeholder="prefix"
        /><br />
        
        <input 
          type="text"
          name="familyName" 
          value={props.data.familyName}
          onChange={props.handleChange}
          placeholder="family name"
        /><br />
        
        <input 
          type="text"
          name="givenName" 
          value={props.data.givenName}
          onChange={props.handleChange}
          placeholder="given name"
        /><br />
        
        <input 
          type="text"
          name="sufix" 
          value={props.data.sufix}
          onChange={props.handleChange}
          placeholder="sufix"
        /><br />
        
        <input 
          type="text"
          name="fullName" 
          value={props.data.fullName}
          onChange={props.handleChange}
          placeholder="full name"
        /><br />

        <br />
        <button className="btn" type="submit">Submit</button>
      </form>
    </main>
  )
}

export default AddComponent;