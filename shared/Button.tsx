import React, { Component } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'


export class Button extends Component {
    
    render() {
        return (
            <div className="flex justify-center mt-20">
                  <div><button className="transform w3-padding hover:scale-110 duration-200  inline-block align-middle w3-bar-item w3-round-xlarge w3-blue">
                      <Link href="News" >News</Link>
                  </button>
                  </div>
                <div>  <button className="transform w3-padding  hover:scale-110 duration-200  inline-block align-middle ml-10 w3-bar-item w3-round-xlarge w3-blue">
                      <Link href="IMG" >IMG API</Link>
                  </button>
                  </div>
                  <div>
                  <button className="transform w3-padding  hover:scale-110 duration-200  inline-block align-middle ml-10 w3-bar-item w3-round-xlarge w3-blue">
                      <Link href="Content" >Content API</Link>
                  </button>
                  </div>
            </div>
        )
    }
}

export default Button
