import React from 'react';
import Breadcromb from './Breadcromb';
import './Pages.scss'

class Mac extends React.Component{

    constructor(props){
        super(props)
        this.state={
         productlist:[
             {
                 id:1,
                 productname:'Mac Book Pro 16',
                 cost:'Rs2,39,900',
                 productimg:'https://cdn.shopify.com/s/files/1/0188/2508/4979/products/AppleMacBookPro16-InchM1ProandM1Max2021QuickTech6.jpg?v=1638169003&width=990'
             },
             {
                 id:2,
                 productname:'Mac Book Air',
                 cost:'Rs1,29,990',
                 productimg:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1685965828/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256598_pn05dl.png/mxw_2048,f_auto alt="macbook"'
 
             },
 
             {
                 id:3,
                 productname:'Mac Book Air 13',
                 cost:'Rs59900',
                 productimg:'https://www.myimaginestore.com/media/mf_webp/jpg/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/m/b/mbp-spacegray-gallery1-202206_copy.webp'
             },
             
           
 
         ]
        }
     }
    render(){
        return(
            <>

<Breadcromb name=" Mac"/>
           <div>
                    {this.state.productlist.map((list) => (
                        <div key={list.id} >
                            <div className='productlist'>
                            <div className='name'> {list.productname}</div>
                          <div className='image'>  <img src={list.productimg} alt="macbook"/></div>
                        
                        <div className='cost'>{list.cost}</div>

                            </div>
                        

                        </div>
                    ))}
                </div>
            
            </>
        )
    }

}

export default Mac