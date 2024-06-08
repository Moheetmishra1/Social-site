import {salesPrices} from "../Profiles.js"
import "../CSS/SalesList.css"
import PriceCard from "./PriceCard.jsx";

export default function SalesList(){
console.log(salesPrices);

    return (
        <div className="slideProduct">
            {
                salesPrices.map((a,index)=>{

                    return (
                        <PriceCard key={index} {...a} />
                    )
                })
            }
        
        </div>
    )
}