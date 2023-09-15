import StepsCard from "./StepsCard";
const Steps = () => {
    return(
        <>
        <div className="flex justify-evenly mt-8 bg-[#F3F4F6]">
        <StepsCard num="1" src = {'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png'} heading="COMPLETE PROFILE" para = "make your account and provide necessary details" />
        <StepsCard num="2" src = {'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png'} heading="APPLY FOR JOB" para = "Apply for the job that aligns with your relevant skills"/>
        <StepsCard num="3" src = {'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png'} heading="INTERVIEW" para = "Have an interview with the company"/>
        <StepsCard num="4" src = {'https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png'} heading="DREAM JOB" para = "Get the offer"/>
        </div>
        </>
    )
}
export default Steps; 