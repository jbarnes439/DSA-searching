import './App.css';
import react, { Component } from 'react';


function binarySearch2(array, value, start, end, iterationCount = 0) {     
  iterationCount++
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    console.log('did not find value now return')
      return `Number not found in ${iterationCount} iterations.`;      
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  
  console.log(start, end);        
  if (item == value) {
    console.log('found the value now return')
      return `${value} found in ${iterationCount} iterations at index: ${index}.`;      
  }
  else if (item < value) {        
      return binarySearch2(array, value, index + 1, end, iterationCount++);
  }
  else if (item > value) {        
      return binarySearch2(array, value, start, index - 1, iterationCount++);
  }
};

function linearSearch(array, value) {
  let iterationCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      iterationCount++
      return `${value} found in ${iterationCount} iterations.`;
    } else {
      iterationCount++
    }      
  }
  return `Number not found in ${iterationCount} iterations`;
}


class App extends Component {

  state = {
    numbers: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    linearSearchNumber: null,
    binarySearchNumber: null,
    message: null
  }  

  handleLinearSubmit = (event) => {
    event.preventDefault()   
    let searchMessage = linearSearch(this.state.numbers, this.state.linearSearchNumber);    
    this.setState({
      message: searchMessage
    })
  }

  handleLinearSearchChange(event) {
    event.preventDefault();
    // set searchNumber in state to input value    
    this.setState({
      linearSearchNumber: Number(event.target.value)
    })
  }

  handleBinarySubmit = (event) => {
    event.preventDefault();
    // copy the state numbers array and sort
    let sortedNumbers = [...this.state.numbers].sort()  
    // initiate the search  
    let searchMessage = binarySearch2(sortedNumbers, this.state.binarySearchNumber);
    this.setState({
      message: searchMessage
    }) 
  }

  handleBinarySearchChange(event) {
    event.preventDefault();
    // set searchNumber in state to input value    
    this.setState({
      binarySearchNumber: Number(event.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleBinarySubmit}>
          <label htmlFor='search-number'>Binary Search Number:
          <input type="text" value={this.state.binarySearchNumber} onChange={event => this.handleBinarySearchChange(event)} />
          </label>
          <button>Binary Search</button>          
        </form>

        <form onSubmit={this.handleLinearSubmit}>
          <label htmlFor='search-number'>Linear Search Number:
          <input type="text" value={this.state.linearSearchNumber} onChange={event => this.handleLinearSearchChange(event)} />
          </label>
          <button>Linear Search</button>          
        </form>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;


