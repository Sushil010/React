import React from 'react'

const ProductList = () => {

    const Product=[
        {id:1,name:"Phone",price:"$2394"},
        {id:2,name:"Laptop",price:"$2344"},
        {id:3,name:"Headphone",price:"$3234"},
    ]




  return (
    <div>

        {Product.map(pros=>(
            <div key={pros.id}>
                <div>
                    <h1>ItemName: {pros.name}</h1>
                    <h1>Price: {pros.price}</h1>
                </div>
            </div>
        ))}


    </div>
  )
}

export default ProductList