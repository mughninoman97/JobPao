import FooterCard from "./FooterCard";
import { Link } from "react-router-dom";
const Footer =() => {
    return(
        <>
        
        <footer className="text-white body-font bg-slate-600">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
     
      <FooterCard category={'Jobs by location'} first={'Jobs in Hyd'} second={'Jobs in Bangalore'} third={'Jobs in Delhi'} fourth={'Remote Jobs'} />
      <FooterCard category={'Technology Jobs'} first={'Android Developer Jobs'} second={'Frontend Developer Jobs'} third={'iOS Development Jobs'} fourth={'Frontend Developer Jobs'} fifth={'Backend Developer Jobs'} sixth={'DevOps Jobs'}/>
      <FooterCard category={'Top Companies hiring'} first={' Meesho Jobs'} second={'Paytm Jobs'} third={'Vedantu Jobs'} fourth={'MX Player Jobs'} fifth={'Truemeds India Jobs'}/>
      <FooterCard category={'Popular Collection'} first={'Video Editing Jobs'} second={'Content Writing Jobs'} third={'Funded Startups Jobs'} fourth={'Data Science Jobs'} fifth={'Internet of Things (IoT) Jobs'} />
      <FooterCard category={'Startup Jobs'} first={'Startups in Hyd'} second={'Startups in Bangalore'} third={'Startups in Delhi'} fourth={'Remote Jobs'} fifth={'Backend Developer Jobs'} sixth={'DevOps Jobs'}/>
      <FooterCard category={'Management Jobs'} first={'Marketing and Sales Jobs'} second={'Digital Marketing Jobs'} third={'UX & Graphic Design Jobs'} fourth={'Product Based Company Jobs'} fifth={'Product Manager Jobs'} sixth={'Product Based Company Jobs'}/>

      
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Enter your email</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
       <Link to="/thank"> <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button> </Link>
        <p className="text-white text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Subscribe to our newsletter for latest updates
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-gray-500">
          <svg fill="currentColor"  className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor"  className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor"  className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg className="decoration-slate-100 w-5 h-5" fill="currentColor" stroke="currentColor"  viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 GetTheJob —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@Abdul Mughni Noman Production</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">All rights Reserved</span>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;