import React, {Component} from 'react';
import './App.css';

function sort(arr,key){
    for (let i=0; i<arr.length; i++){
      for (let j=0; j<arr.length-i-1; j++){
        if(arr[j][key] < arr[j+1][key]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1]= temp;
        }
      }
    }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inventory : [
        {product: 'monitors', count: 0},
        {product: 'mice', count:0},
        {product: 'chairs', count: 0},
        {product: 'Hdmi-connectors', count:0},
        {product: 'mini-dp connectors', count:0}
      ]
    }
  }
  increase(i) {
    let temp = [...this.state.inventory];
    temp[i].count++;
    sort(temp, 'count');
    this.setState({inventory:temp});
  }
  decrease(i) {
    let temp = [...this.state.inventory];
    temp[i].count--;
    sort(temp, 'count');
    this.setState({inventory:temp});
  }
  // To have one function do both the increase and decrease, we can do the following. 
  // increment(i, amt) {
  //   console.log(i);
  //   let temp = [...this.state.inventory];
  //   temp[i].count+= amt;
  //   this.setState({inventory:temp});
  // } 
  // <button onClick={this.increment.bind(this,i, -1 or +1)}>+</button>
  render () {
    return (
      <>
      <h1>Inventory</h1>
      <table border ='1'>
        <tbody>
        <tr >
          <th> Product Name</th>
          <th> Quantity </th>
          <th> Adjust </th>
        </tr>
        {
          this.state.inventory.map((item,i) =>
           <tr key = {i}>
             <td>{item.product}</td>
             <td>{item.count}</td>
             <td>
               <button onClick={this.increase.bind(this,i)}>+</button>
               <button onClick={this.decrease.bind(this,i)}>-</button>
             </td>
           </tr>
          )
        }
        </tbody>

      </table>
      </>
    );
  }
}

export default App;
