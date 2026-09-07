import React from 'react'



interface ChaiCardProp{
    name:string;
    price:number;
    isSpecial?:boolean
}

export default function ChaiCard({name, price , isSpecial = false}:ChaiCardProp) {
  return (
    <div>
      <article>
        <h2>
            {name} {isSpecial && <span>***</span>}
        </h2>
        <p>{price}</p>
      </article>
    </div>
  )
}
