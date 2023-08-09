

import React from "react";
import SingleCard from "./SingleCard";

const Companies = () => {
  return (
    <>
    
      <section className="pt-20 lg:pt-[80px] pb-10 lg:pb-20 h-full bg-[#F3F4F6]">
        <h1 className="text-4xl font-bold text-center ">We are having tie ups with top companies</h1>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <SingleCard
            image="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123"
            CardTitle=" Creative Card Component designs graphic elements"
            titleHref="/#"
            btnHref="/#"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/dream11.png?123"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/curefit.png?123"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://img.naukimg.com/logo_images/groups/v2/240936.gif"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://img.naukimg.com/logo_images/groups/v2/233334.gif"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://img.naukimg.com/logo_images/groups/v2/398058.gif    "
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </section>
    </>
  );
};

export default Companies;