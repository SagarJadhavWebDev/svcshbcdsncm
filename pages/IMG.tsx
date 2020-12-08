import Head from 'next/head';
import Link from 'next/link';
import React, { Component, ReactNode } from 'react'
import Layout from '../components/Layout';

interface IProps {
    children: ReactNode;
    // any other props that come into the component
    IMG: any
  }

function IMG ({IMG} : IProps) {
   

const IMGs = IMG;

console.log(IMGs)

     
        return (
            <div>
                <Layout>
                   <Head>
                   <title>IMG API</title>
                   </Head>
            <div className="flex mt-10 ml-28 mx-auto flex-wrap">
                
      {IMGs.map((art:any ) => (
          <div className="w3-card  mb-5 mx-5 justify-center w3-round-xlarge mx-2 ">
          <img className=" object-cover  " src={art.urls.full}/>  
      <a target="_blank"><button className="m-2 mx-32 text-center w3-button w3-round-xlarge bg-gray-500 w3-red"><Link href={art.links.html}>Download</Link></button></a>
          </div>
         
       
        ))}
        
         
            </div>
            </Layout>
            <style jsx>
                {
                    `
                    img{
                        width:350px;
                        height:300px;
                        border-top-left-radius: 16px;
                        border-top-right-radius: 16px;

                    }
                    `
                }
            </style>
            </div>
        )
    
}


export default IMG

export async function getServerSideProps () {

    const API = await fetch ("https://api.unsplash.com/photos/?client_id=KkBgR-UR5bzc26yPltIXqo_Jsd5f-h2Hv_rL4zzpG2k")

    const IMG = await API.json();

    return{
        props :{
           IMG,
        }
    }
    
}