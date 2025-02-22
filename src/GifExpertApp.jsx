import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  
  function onAddCategory(newCategory){
    if(categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories]);
  }

  return (

    <>
        <h1>Gif Expert App</h1>
        <AddCategory onNewValue={ onAddCategory } />
        
        {
          categories.map(category => (<GifGrid key={category} category={category} />))
        }
    </>
  )
}
