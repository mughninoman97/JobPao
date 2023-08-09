import JobseekerCard  from "./JobseekerCard";
const Jobseekers=() => {
    return(
        <>
       
         <section className="pt-20 lg:pt-[80px] pb-10 lg:pb-20 h-full bg-[#F3F4F6]">
        <h1 className="text-4xl font-bold text-center ">We are having tie ups with top companies</h1>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <JobseekerCard
            image="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123"
            CardTitle=" Application Developer"
            Company="Amazon"
            btnHref="/#"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle=" Java Developer"
            Company="Zomato"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="Software enginerr"
            Company="Mercedes Benz"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="Full Stack engineer"
            Company="Oracle"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="Front end Enginerr"
            Company="Wipro"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="Backend Developer"
            Company="Tower Research"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="ReactJS Developer"
            Company="JP Morgan"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            CardTitle="Devops enginerr"
            Company="LTI"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <JobseekerCard
            
            CardTitle="AI/ML enginerr"
            Company="Brigdesoft"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          
         
       
          <button className=" inline-block rounded-lg border border-sky-500  text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white ml-[609px] ">Load More</button>
        </div>
      </section>
     
        </>
        
    )
}
export default Jobseekers;

       
      
   