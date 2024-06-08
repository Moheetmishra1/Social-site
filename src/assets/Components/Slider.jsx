import ButtonComponent from "../Components/ButtonComponent";
import "../CSS/Slider.css"
import { artistsList } from "../Profiles.js";
import Sliderz from "./Sliderz";

export default function Slider(){

console.log(artistsList);
    return (
        <div className="slider-Box">
            <div className="optionsSlider">
                <ButtonComponent className="artists" >Artists</ButtonComponent>
                <ButtonComponent className="photographers" >Photographers</ButtonComponent>
                </div>
            
            <div className="slider">
                
                {artistsList.map((a,index)=>{

                    return (
                        <Sliderz key={index} {...a} />
                    ) 
                })}
                
            </div>
        
        </div>
    )
}