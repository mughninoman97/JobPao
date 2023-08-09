import ClientCard from "./ClientCard"
const ClientsSay = () => {
    return(
        <>
          <h1 className="text-center text-3xl mt-8">OUR TESTIMONIALS</h1>
       <section className="text-gray-600 body-font bg-[url('https://d383au3bye3rv1.cloudfront.net/static/images/optimized/sky.jpg')]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-center -m-4">
      
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        
           <ClientCard src={'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/santosh_nain.jpeg?123'} para = {'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'} name={'ALPER KAMU'} position = {'Senior Product Manager'}/>
      </div>
     
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
           <ClientCard  src ={'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/tarun_dugar.jpeg?123'} para = {'Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'} name={'Tony Stark'} position = {'Senior Software Engineer'}/>
      </div>
      <div>
    
      </div>
      </div>
      
      </div>
    
  
</section>
       
        </>
    )
}
export default ClientsSay;

{/* <ClientCard  />

<div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300"/>
            son bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.          <p className="leading-relaxed"></p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p className="text-gray-500">UI Develeoper</p>
        </div>

        <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305"/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p className="text-gray-500">CTO</p>
        </div> */}