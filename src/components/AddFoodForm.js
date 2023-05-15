import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ setTheseFoods, theseFoods, setThoseFoods, thoseFoods }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameInput = (e) => setName(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const handleCalories = (e) => setCalories(e.target.value)
    const handleServings = (e) => setServings(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFood = { name, image, calories, servings }

        setTheseFoods([newFood, ...theseFoods])
        setThoseFoods([newFood, ...thoseFoods])
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);


    }


    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input name='name' value={name} type="text" onChange={handleNameInput} />

            <label>Image</label>
            {/* render antd <Input /> type="text" here */}
            <Input name='image' value={image} type="text" onChange={handleImage} />

            <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input name='calories' value={calories} type="number" onChange={handleCalories} />

            <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input name='servings' value={servings} type="number" onChange={handleServings} />

            <button type="submit">Create</button>
        </form>
    );
}

export default AddFoodForm;
