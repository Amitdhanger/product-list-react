import React from 'react'
import './Pages.scss';
import Breadcromb from './Breadcromb';

class Ipod extends React.Component{

    constructor(props){
        super(props)
        this.state={
         productlist:[
             {
                 id:1,
                 productname:'Apple Ipod Pro Wireless',
                 cost:'Rs26,300',
                 productimg:'https://m.media-amazon.com/images/I/21gR+fosW0L._SY300_SX300_.jpg'
             },
             {
                 id:2,
                 productname:'Apple Ipod (3rd generation)',
                 cost:'Rs19,471',
                 productimg:'https://m.media-amazon.com/images/I/21gR+fosW0L._SY300_SX300_.jpg'
 
             },
 
             {
                 id:3,
                 productname:'Apple Ipod (2nd generation)',
                 cost:'Rs12,499',
                 productimg:'https://m.media-amazon.com/images/I/7120GgUKj3L._SX679_.jpg'
 
             },
             
           
 
         ]
        }
     }
    render(){
        return(
            <>
            <Breadcromb name=" Ipod"/>

<div>
                    {this.state.productlist.map((list) => (
                        <div key={list.id} >
                            <div className='productlist'>
                            <div className='name'> {list.productname}</div>
                          <div className='image'>  <img src={list.productimg} alt='ipod' /></div>
                       
                        <div className='cost'>{list.cost}</div>

                            </div>
                        

                        </div>
                    ))}
                </div>
            
            
            </>
          
        )
    }

}

export default Ipod