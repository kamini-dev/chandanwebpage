import React, {Component} from 'react';
import gpay from '../images/gpay.jpg';
import upi from '../images/upi.jpg';
import netbanking from '../images/netbanking.jpg';
import paytm from '../images/paytm.jpg';
import './style.css';


export class Payment extends Component{

    render() {
        return(
     <div class="img-container">
            <div class="col-md-4">
                <img  alt="gpay" src={gpay}/>
            </div>
             <div class="col-md-4">
                <img  alt="upi " src={upi} />
            </div>
            <div class="col-md-4">
                <img  alt="netbanking" src={netbanking} />
            </div>
            <div class="col-md-4">
            <img  alt="paytm" src={paytm} />
            </div>
      
        </div>
          
      
    
    
        )
    }
}