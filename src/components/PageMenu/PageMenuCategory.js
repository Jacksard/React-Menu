import React from 'react';
import './PageMenuCategory.css';

const Category = (props) => {

const categoryList = props.data.map((cat)=>
<li className="categoryLi" key={cat}><button className="categoryButton" onClick={()=>props.updateCategory(cat)}>{cat.toUpperCase()}</button></li>
)
    return (
            <div>{categoryList}</div>
    )
}

export default Category;