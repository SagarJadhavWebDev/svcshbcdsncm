import React, { ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'isomorphic-unfetch';
import getConfig from 'next/config'

interface IProps {
    children: ReactNode;
    // any other props that come into the component
    posts: any
  }
  
function Id({posts} : IProps) {

   
console.log(posts)
    
    
    return (
        <>

        <Head>
    <title>{posts.title}</title>
        </Head>
      
        <div className="container   m-10 p-10">
      <ul className="ul list-disc list-inside">
        
    <h1  className="text-5xl mb-5">Post Body Details: </h1>
     <b><p> Post Number : {posts.id}</p></b>
     <b><p> Post Title : {posts.title}</p></b>
     <b><p> Post Body : {posts.body}</p></b>
     <b><p> User: {posts.userId}</p></b>

        
      </ul>

      
      
      
      
      </div>
      
      </>
    )
  }
  
 const {publicRuntimeConfig} = getConfig();

  export async function getServerSideProps(context:any) {
    
       const {id} = context.query;


    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const posts = await res.json()
    console.log({id});

    const ln = posts.lenght;

    

    
  
    return {
      props: {
        posts,
        
      },
    }
  }
  
  export default Id;