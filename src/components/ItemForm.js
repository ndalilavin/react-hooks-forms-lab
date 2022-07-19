import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };

  function handleItemName(event) {
    setItemName(event.target.value);
  }
  console.log(itemName)

  function handleItemCategory(event){
    setItemCategory(event.target.value);
  }
  console.log(itemCategory)

  function handleSubmit(event){
    event.preventDefault();

    onItemFormSubmit(newItem)

  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
