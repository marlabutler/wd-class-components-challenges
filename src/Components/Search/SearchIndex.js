import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
     itemList: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchItem: "",
   };
 }

 changeHandler = (event) => {
   let searchItem = this.state.searchItem;
   this.setState({ searchItem: event.target.value });
 }


 render() {
   return (
     <div>
       <Input 
        id="searchItem"
        type="text"
        placeholder="Search Here"
        value={this.state.searchItem}
        onChange={this.changeHandler}
         />
       <h3>
         Results:
         {this.state.itemList
          .filter((item) => item.includes(this.state.searchItem))
          .map((thing) => (
            <li>{thing}</li>
          ))}
         </h3>
     </div>
   );
  }
 }

 
export default SearchIndex;
