import React, {Component} from 'react';
import './style.css';



export class Charges extends Component{

    render() {
        const gatewayCharges = 99760.00;
        const routingCharges = 1.00;
        const total = <h4>{gatewayCharges + routingCharges}</h4>;
        return(
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
                <div>

                <hr/>
                <div class="form-group">
                
                    <input type="text" class="form-control" id="usr" />
                 </div>
                

                 <div class="shadow-lg p-3 mb-5 bg-white rounded">
                     <h6 className="lead">Gateway Charges(+GST)   ₹{gatewayCharges}</h6>
                     <h6 className="lead">Routing Charges(+GST)   ₹{routingCharges}</h6>
                     <h2 style={{color: "blue"}}>Total                     ₹{total}    </h2>
                 </div>

                 <button type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Cancel</button>

                </div>
                                        
                           
            </div>
        )
    }
}