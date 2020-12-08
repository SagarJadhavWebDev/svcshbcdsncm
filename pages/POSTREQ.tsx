import React, { Component } from 'react'
import 'isomorphic-unfetch';
import axios from 'axios';


interface AppProps {
    //code related to your props goes here
 }
 
 interface AppState {
    value: any
 }
export class POSTREQ extends Component  {
    constructor(props:any) {
        super(props)
    
        this.state = {
            userId: '',
            title: '',
            Body:'',
             
        }
    }

    changeHandler = (e:any) =>{
        this.setState({[e.target.name] : e.target.value })
    }

    suubmitHandler = (e: { preventDefault: () => void; }) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state )

    }
    

    render() {
        const  {userId , title , Body} = this.state
        return (
            <div className="">
                <form onSubmit={this.suubmitHandler}>

                <section className="text-gray-700 body-font">
  <div className="container md:w-1/3 px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className=" text-left  shadow-2xl bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full  mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="userId" value={userId} onChange={this.changeHandler}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Subject</label>
        <input type="text" id="full-name" name="title" value={title} onChange={this.changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="Body" value={Body} onChange={this.changeHandler} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button   type="submit" className="transform  hover:scale-110 duration-200 w3-round-l text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>

                </form>
                
            </div>
            
        )
    }
}

export default POSTREQ
