import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

interface IProps {
    children: ReactNode;
    // any other props that come into the component
    posts: any
  }

function Page({posts} : IProps) {

    const [currentPage , setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(7);
    const totalPost = posts.length;
    
    
    const indexoflastpost = currentPage * postPerPage;
    console.log(indexoflastpost);
    const indexoffirstpost = indexoflastpost - postPerPage;
    console.log(indexoffirstpost);

    const pageNum =[];
    const currentPost = posts.slice(indexoffirstpost , indexoflastpost);

    console.log(currentPost);

    const totalPos = Math.ceil( totalPost / postPerPage);
   
    for(let i= 1; i <= totalPos; i++){
        pageNum.push(i);

        
    }

    const page = (pageNum:any) => setCurrentPage(pageNum)
    
    return (
    
            <Layout>
              <Head>
                <title>
                  Posts List API
                </title>
              </Head>
                <div className="w3-container w3-padding w3-margin">
      <ul className="list-none ">
        {currentPost.map((post :any) => (
         <li>{post.id} &nbsp;&nbsp; <Link href="/Posts/[id]" as={`/Posts/${post.id}`}><b className="cursor-pointer text-blue-500">{post.title}</b></Link></li>
        ))}
      </ul>

      <ul className="w3-bar ">
      {pageNum.map((post :any) => (
          
          <li className="cursor-pointer mt-10 w3-bar-item w3-border w3-hover-green" ><a onClick={() => page(post)} ><b>{post}</b></a></li>
          
       
        ))}
         </ul>
      
         </div>
      
         </Layout>
      
    )
  }
  
 
  export async function getServerSideProps() {
    

    
    const res = await fetch('http://localhost:3000/api/user')
    const posts = await res.json()
    console.log("yes");

    const ln = posts.lenght;

    

    
  
    return {
      props: {
        posts,
        
      },
    }
  }
  
  export default Page;