import React, {Component} from 'react';
import './style.css';
import gpay from '../images/gpay.jpg';
import upi from '../images/upi.jpg';
import netbanking from '../images/netbanking.jpg';
import paytm from '../images/paytm.jpg';



export class Header extends Component{

    render() {
        const amount =  1200;
        const gatewayCharges = 99760.00;
        const routingCharges = 1.00;
        const total = <h4>₹{gatewayCharges + routingCharges}</h4>;
        return(
            <div className="main_div" > 
            
                <div>
                    <p class="lead">MoneyOrder Value
                    <br /> <br />
                    </p>
                    <hr/>
                    <h6 className="display-4" >
                    <sup>₹</sup><span id="amount">{amount}</span><sup>.00</sup>
                    </h6> 
                    <hr />
                    <div class="shadow p-3 mb-5 bg-white rounded">Waiting on Payment...</div>
                    <p className="lead">Payment Channels</p>
                    <div class="grid-container">
                        <div class="grid-item"><img  alt="gpay" src={gpay}/></div>
                         <div class="grid-item"><img  alt="upi " src={upi} /></div>
                         <div class="grid-item"><img  alt="netbanking" src={netbanking} /></div>  
                        <div class="grid-item"><img  alt="paytm" src={paytm} /></div>                   
                   </div>
                   <hr/>
                   <div>
                <div class="form-group">
                        <input type="text" class="form-control" id="usr" />
                 </div>
                 <div class="shadow-lg p-3 mb-5 bg-white rounded">
                     <h6 className="lead" style={{textAlign:"left"}}>Gateway Charges(+GST)   &nbsp;&nbsp;&nbsp;&nbsp;  ₹{gatewayCharges}</h6>
                     <h6 className="lead" style={{textAlign:"left"}}>Routing Charges(+GST)    &nbsp;&nbsp;&nbsp;&nbsp; ₹{routingCharges}</h6>
                     <h3 className="display-6" style={{textAlign:"left"}}>Total    <span style={{textAlign:"right"}}> {total}</span></h3>
                 </div>
                 <button id="submit" type="button" class="btn btn-primary btn-md btn-block">Submit</button>
                 <button id="cancel" type="button" class="btn btn-secondary btn-md btn-block">Cancel</button>

                </div>

                                        
                </div>             
            </div>
        )
    }
}