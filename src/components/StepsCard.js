const StepsCard = (props ) => {
    return(
        <>
        <div className="p-5 border-2 shadow-md w-60 h-72">
        <img className="w-20 h-20 mb-8 ml-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"src={props.src} alt="" />
        <h3 className="text-xl">STEP {props.num}: {props.heading} </h3>
      
    
        <p className="mt-4">{props.para}</p>
        </div>
        </>
    )
}
export default StepsCard;
 /* width: 15%; /* Adjust this value to control the width of each card */
    /* padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) */ 