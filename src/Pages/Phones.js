import React from 'react';
import './Pages.scss';
import Breadcromb from './Breadcromb';

class Phones extends React.Component{

    constructor(props){
       super(props)
       this.state={
        productlist:[
            {
                id:1,
                productname:'Iphone14 Pro',
                cost:'Rs1,29,990',
                productimg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1663611329492 alt="phone"'

            },
            {
                id:2,
                productname:'Iphone14 Plus',
                cost:'Rs79,900',
                productimg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958160674'
            },

            {
                id:3,
                productname:'Iphone13',
                cost:'Rs59,900',
                productimg:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958176452'
            },
            
          

        ]
       }
    }
    render(){
        return(
            <>
            <Breadcromb name="iphone"/>
               <div>
                    {this.state.productlist.map((list) => (
                        <div key={list.id} >
                            <div className='productlist'>
                            <div className='name'> {list.productname}</div>
                          <div className='image'>  <img src={list.productimg} alt="iphone" /></div>
                        
                        <div className='cost'>{list.cost}</div>

                            </div>
                        

                        </div>
                    ))}
                </div>
            
            </>
        )
    }

}

export default Phones