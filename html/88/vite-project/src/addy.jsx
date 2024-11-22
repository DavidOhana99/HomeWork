import { Component } from "react";


export default function Address(props) {
    const {address,street, city,zip} = props;
  
    return (<h1> {address} {street} {city} {zip} </h1>);
  }

export class Address2 extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const {address, street, city, zip} = this.props;
      return (
        <div>I live at {address} {street} {city} {zip} </div>
      )
    }
  }
  