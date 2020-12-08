import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import getConfig from 'next/config'


interface IProps {
  children: ReactNode;
  // any other props that come into the component
  posts: any
}

function News({posts} : IProps) {



    const article = posts.articles;

    const [currentPage , setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);
    const totalPost = article.length;
    console.log("total" ,totalPost)

    const indexoflastpost = currentPage * postPerPage;
    console.log(indexoflastpost);
    const indexoffirstpost = indexoflastpost - postPerPage;
    console.log(indexoffirstpost);

    const currentPost = article.slice(indexoffirstpost , indexoflastpost);
    console.log(currentPost);


    const pageNum =[];

    const totalPos = Math.ceil( totalPost / postPerPage);
   
    for(let i= 1; i <= totalPos; i++){
        pageNum.push(i);

        
    }

    const page = (pageNum:any) => setCurrentPage(pageNum)

    return (
      <div>

        <Head>
        <title>NEWS API</title>
        </Head>
        <Layout>
        <div className="flex justify-items-center justify-center flex-row flex-wrap ">
        <div className="container  justify-center  m-10 p-10">
            <h1 className="text-2xl font-bold">
                News From NEWS.ORG API
            </h1>
      <ul className="ul list-disc list-inside">
       {currentPost.map(
           (art:any) => (
            
            <div className="mt-5 w-1/3   md:w-1/3 lg:w-1/3 w3-card-4 w3-round-xlarge w3-leftbar h-30 w3-border-green w3-rightbar w3-white w3-bar w3-bar-left w3-padding">
              
            <img className=" w3-left img6  " src={art.urlToImage}/>
            
                <a href={art.url} target="_blank"><p className="ml-5 text-center font-bold">{art.title}</p></a>
         
         </div>
         
           ))}
      </ul>

      <ul className="pagination mt-20 w3-bar justify-items-center justify-center">
      {pageNum.map((post :any) => (
          
          <li className=" justify-items-center w3-bar-item w3-hover-green w3-border  justify-center  cursor-pointer"><a onClick={() => page(post)} ><b>{post}</b></a></li>
          
       
        ))}
         </ul>


      <style jsx>
          {
              `
              body{
                  font-family:Poppins;
              }
              img{
                  width:150px;
                  border-radius:1rem;
              }
              `
          }
      </style>
      
      
      </div>
      </div>
      </Layout>
      
      </div>
    )
  }
  


  export async function getServerSideProps(context:any) {
    
    
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a9bf737b903c464d87c862696c4a7212");
    const posts = await res.json()
    const New = process.env.API
    console.log("NEWS" , New)

    

    
  
    return {
      props: {
        posts,
        
      },
    }
  }
  
  export default News;