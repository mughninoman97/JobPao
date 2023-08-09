const FooterCard =(props) => {
    return(
        <>
        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font text-white tracking-widest text-md font-bold mb-3">{props.category}</h2>
        <nav className="list-none mb-10">
          <li className=" hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">
            <a className="text-white">{props.first}</a>
          </li>
          <li  className="hover:text-white cursor-pointer hover:translate-x-2  transition-all duration-300 ease-in-out">
            <a className="text-white ">{props.second}</a>
          </li>
          <li className="hover:text-white cursor-pointer hover:translate-x-2  transition-all duration-300 ease-in-out">
            <a className="text-white ">{props.third}</a>
          </li>
          <li>
            <a className="text-white cursor-pointer hover:text-white hover:translate-x-2  transition-all duration-300 ease-in-out">{props.fourth}</a>
          </li>
          <li className="hover:text-white cursor-pointer hover:translate-x-2  transition-all duration-300 ease-in-out">
            <a className="text-white">{props.fifth}</a>
          </li>
          <li className="hover:text-white  cursor-pointer hover:translate-x-2  transition-all duration-300 ease-in-out">
            <a className="text-whitet">{props.sixth}</a>
          </li>
        </nav>
      </div>
        </>
    )
}
export default FooterCard;