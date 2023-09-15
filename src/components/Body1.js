const Body1 = () => {
    return(
        <>
       <section className="bg-[#F3F4F6] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
           <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Get your Dream Job ASAP</h1>
             <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Are you a Software Developer, Product Manager, or Data Scientist This is the perfect platform for you</p>
          </div>
          {/* <div className="flex flex-wrap flex-row justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
      
                <button className="  text-white bg-indigo-500 border-0 py-2 p-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find the job</button>
                <button className=" mx-auto  text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find the talent</button>
              </div>
            </div > */}
           <div className="flex mx-auto justify-center ">
            <button className=" mr-6 text-white hover:bg-slate-600 hover:font-bold hover:border-dashed-black bg-indigo-500 rounded-md px-4 pt-2 pb-2 " >Find the Job</button>
            <button className=" text-white  hover:bg-slate-600 hover:font-bold hover:border-dashed-black bg-indigo-500  rounded-md px-4 hover:text-black">Find the Talent</button>
           </div>
      </div>
</section> 

        </>
    )
}

export default Body1;



{/* <div classNameName="h-">   
<div>    
    <h1 classNameName="pl-[588px] text-3xl ">Get your Dream Job ASAP</h1>
     <p classNameName="pl-[450px] pt-8 text-2xl">Are you a Software Developer, Product Manager, or Data Scientist</p>
     <p classNameName="pl-[532px] pt-6 text-md ">This is the perfect platform for you</p>
</div>

<div classNameName="flex justify-center mr-8">
    <button classNameName="px-4 mr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50">Find the job</button>
 <button classNameName="px-4 mr-4 bg-cyan-500 shadow-lg shadow-cyan-500/50">Hire the talent</button>
</div>

</div> */}