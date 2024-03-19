import React, {useState} from "react"

function ShoppingList(){
    const[items, setItems] = useState(["Milk", "chocolate", "strawberry"]);
    const[newItem, setNewItem] = useState("");

    function handleInputChange(event){
        setNewItem(event.target.value);
    }

    function addItem(){

        if(newItem.trim() !== ""){
        setItems(t => [...t, newItem]);
        setNewItem("");
        }
    }

    function deleteItem(index){

        const updatedItems = items.filter((element, indexx) => indexx !== index);
        setNewItem(updatedItems);

    }
    function moveItemUp(index){
        if(index > 0){
            const updatedItems = [...items];
            [updatedItems[index], updatedItems[index - 1] ] = [updatedItems[index - 1], updatedItems[index]];
            setItems(updatedItems);
        }

    }
    function moveItemDown(index){
        if(index < items.length - 1){
            const updatedItems = [...items];
            [updatedItems[index], updatedItems[index + 1] ] = [updatedItems[index + 1], updatedItems[index]];
            setItems(updatedItems);
        }

    }

    return(
        <div className="shopping-list">

            <h1>My Shopping Cart</h1>
            <div>
                <input type="text" placeholder="Enter a item..." value={newItem} onChange={handleInputChange} />
            
            <button className="add-button" onClick={addItem}>
                Add 
            </button>
            
            </div>

            <ul>
                {items.map((item,index) => 
                <li key={index}>
                    <span className="text"> {item} </span>
                    <button className="delete-button" onClick={() => deleteItem(index)}>
                        Delete
                    </button>

                    <button className="move-button" onClick={() => moveItemUp(index)}>
                        Up
                    </button>

                    <button className="move-button" onClick={() => moveItemDown(index)}>
                        Down
                    </button>
                </li>
                
                )}
            </ul>

        </div>

    )
}

export default ShoppingList