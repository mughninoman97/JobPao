import { useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <header className="text-white body-font bg-slate-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-[-77px]">        
  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="h-[108px] w-[156px] mt-8 " src="data:image/png;base64,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" alt="" />
            
            <span className="ml-3 text-xl"></span>
          </a>
          <nav className="md:ml-auto md:mr-auto mt-[72px] flex flex-wrap items-center text-base justify-center">
            <Link to="/about" className="mr-5 hover:text-gray-900 text-bold text-xl">About</Link>
            <Link to="/jobseekers" className="mr-5 hover:text-gray-900 text-bold text-xl">For Job seekers</Link>
            <Link to="/companies"className="mr-5 hover:text-gray-900 text-bold text-xl">For Companies</Link>
            <Link to="/pricing" className="mr-5 hover:text-gray-900 text-bold text-xl">Pricing</Link>
          </nav>
          
        {isLoggedIn ? ( <button className='bg-slate-200 mt-16 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-black hover:bg-opacity-90 lg:px-8 xl:px-10' onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : <button className='bg-slate-200 inline-flex items-center justify-center rounded-full mt-16 py-4 px-10 text-center text-base font-normal text-black hover:bg-opacity-90 lg:px-8 xl:px-10' onClick={() => setIsLoggedIn(true)}>Login</button>}
          
        </div>
      </header>
    )
}

export default Header;


//  <img height={"100px"} classNameName="h-{100px}" src="data:image/png;base64,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" alt="" />

{/* <div classNameName="flex justify-between ">
<Title/>
<div>
<ul classNameName="flex py-8">
<li classNameName="px-2">Home</li>
<li  classNameName="px-2">About</li>
<li  classNameName="px-2">Contact</li>
<li  classNameName="px-2">Services</li>
</ul>
</div>
</div> */}