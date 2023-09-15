import React, { Children } from "react"
// import { ReactDOM } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Employers from "./components/NavComp/Employers"
import Jobseekers from "./components/NavComp/Jobseekers"
import Pricing from "./components/NavComp/Pricing"
import Error from "./components/Error"
import About from "./components/NavComp/About"
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Companies from "./components/NavComp/Companies"
import Thank from "./components/Thank"

// const container = React.createElement(
//     "div",
//     {
//         id:"title"
//     }
// )
const HeaderComp = () => {
    return <h1>Namaste react func com</h1>
}
// Header 
//     -Logo 
//     -List items 
//     -cart 
// Body 
//     -search bar 
//     -List 
//         -Cards 
//             -Image
//             -name 
// Footer 
//  -links 
//  -copyright


const AppLayout = () => {
    return (
        <>
        
        <Header/>
        {/* Outlet */}
        <Outlet />
        <Footer/>
        </>


    )
}
const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [ {
            
            path:"/",
            element:<Body/>,
           
    
        },
        {
            path:"/about",
            element:<About/>,
            errorElement:<Error/>
    
        },
        {
            path:"/employers",
            element:<Employers/>
    
        },
        {
            path:"/jobseekers",
            element:<Jobseekers/>
    
        },
        {
            path:"/pricing",
            element:<Pricing/>
    
        },
        {
            path:"/companies",
            element:<Companies/>
    
        },
        {
            path:"/thank",
            element:<Thank/>
    
        },

        ]

    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={AppRouter} />)  