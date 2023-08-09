
const JobseekerCard = ({
   
    Button,
    Company,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) =>{
    return(

<>

<div className="overflow-hidden bg-white rounded-lg flex flex-col ">
 
  <div className="p-8 sm:p-9 md:p-7 xl:p-9">
    <h3>
      <a
        href={titleHref ? titleHref : "/#"}
        className="mb-2 block text-4xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
      >
        {CardTitle}
      </a>
      <h3 className="text-xl">{Company}</h3>
    </h3>
    <p className="text-base leading-relaxed mb-7 text-body-color">
      {CardDescription}
    </p>

    {Button && (
      <a
        href={btnHref ? btnHref : "#"}
        className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-sky-600"
      >
        {Button}
      </a>
    )}
  </div>
</div>

</>
)}
export default JobseekerCard;