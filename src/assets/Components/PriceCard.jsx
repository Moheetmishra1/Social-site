import "../CSS/PriceCard.css"

export default function PriceCard({pic,title,price}){


    return (
        <div className="slidePrice" >
            <img src={pic} alt=""/>
            <p>{title}</p>
            <div className="rate"><p className="pricePainting">{price}</p> <p className="startPrice">⭐⭐⭐⭐⭐</p></div>
        </div>
    )
}