import React, { Component } from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';


function Layout (props :any) {

        return (
           
            <div>
               <Head>
                <title>Home</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
                </Head>
                <Navbar/>
                
                <style jsx>
                     {
                         `
                         div{
                             font-family: Poppins;
                         }
                         `
                     }
                 </style>
                {props.children}
                <Footer/>
            </div>
           
        )
    
}

export default Layout
