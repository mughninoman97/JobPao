const ClientCard = (props) => {
    return(
    <>
    
         <div className="h-full text-center">
         <img alt="testimonial" className="w-20 h-20 mb-8 ml-16 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={props.src}/>
          <p className="leading-relaxed">{props.para}</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{props.name}</h2>
          <p className="text-gray-500">{props.position}</p>
        </div>

    </>)
}
export default ClientCard

