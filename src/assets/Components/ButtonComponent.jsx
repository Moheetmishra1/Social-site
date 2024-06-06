import '../CSS/ButtonComponent.css';


export default function ButtonComponent({children,className,onclick= ()=>{}}){
   
    return (
        <button className= {`${className} "commonButton"`} onClick={onclick} >{children}</button>
    )
} 

