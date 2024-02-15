import React from "react";
import Card from "react-credit-cards";
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from "./utils";
import "./style.css";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from 'react-router-dom';

class Payment extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };
  
  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };
  
  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    const { number, name, expiry, cvc, issuer } = this.state;
    const formData = { number, name, expiry, cvc, issuer };

    // Display an alert with the form data
    alert("PAYMENT SUCCESS");
    navigate('./bookings')
    // Use the history object from props to navigate
    
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '5%', height: '10vh' }} src="https://cdn-icons-png.flaticon.com/128/81/81566.png" alt="ef" />
            <h1>SecurePay</h1>
          </div>
          <Card 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                style={{ padding: '10px',width:'300px',marginLeft:'500px', borderRadius: '10px' }}
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              <input
                style={{ padding: '10px', borderRadius: '10px',marginLeft:'500px', marginTop: '5px' ,width:'300px'}}
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required

















                
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  style={{ padding: '10px', borderRadius: '10px',marginLeft:'100px', marginTop: '5px' ,width:'300px',textDecoration:'none'}}
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  style={{ padding: '10px', borderRadius: '10px',marginLeft:'100px', marginTop: '5px',width:'300px' }}
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block"  style={{backgroundColor:'blue', borderRadius: '10px',marginLeft:'210px',width:'100px',padding:'10px',color:'white' }}>PAY</button>
            </div>
            <div style={{ color: 'blue', marginTop: '10px', display: 'flex', justifyContent: 'center',alignContent:'center' }}></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Payment;
