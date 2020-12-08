import React, { Component } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Button from '../shared/Button'
import POSTREQ from './POSTREQ'
import Sliders from './Sliders'

function index  (){
    return (

            <div>
                <Layout>
                 <Sliders/>
                 <Button/>
                 <POSTREQ/>
                 </Layout>
                
                  </div>
        )
    
}

export default index
