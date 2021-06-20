import React, { useState } from "react";
import { useHistory } from "react-router";


function ColorForm({ addColor }) {

  const [formData, setFormData] = useState({ 
      name: "", 
      hex:"#ffffff" 
    });
  const history = useHistory()

  function handleChange(evt) {
   const { name, value } = evt.target;
    setFormData(formData => ({ 
        ...formData, 
        [name]: value 
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor({ [formData.name]: formData.hex});
    history.push("/colors")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name:</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value:</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={formData.hex}
          />
        </div>
        <input type="Submit" value="Add color" readOnly/>
      </form>
    </div>
  );
}

export default ColorForm;