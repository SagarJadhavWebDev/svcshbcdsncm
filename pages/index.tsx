import React, { Component } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Button from '../shared/Button'

import Sliders from './Sliders'

function index  (){
    return (

            <div>
                <Layout>
                 <Sliders/>
                 <Button/>
                
                 </Layout>
                
                  </div>
        )
    
}

export default index
