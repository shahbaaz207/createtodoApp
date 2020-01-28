import React, { Component } from 'react'
import uuid from 'uuid';

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
               id:uuid(),
               task:'',
               items:[]  
        }
      
    }
onChange=e=>{
    this.setState({
        task:e.target.value
    })
}
onSubmit=e=>{
    e.preventDefault();
    this.setState({
        task:'',
        items:[...this.state.items,this.state.task]
    })
}

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label for="taskName">Task Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="taskName"
                            value={this.state.task}
                            onChange={this.onChange}
                        />
                    </div>
                    <button className="btn btn-success btn-block" type="submit">Submit</button>
                </form>
                 <table className="table mt-3">
                  
                  {this.state.items.map((item,index)=>(
                      <tr>
                          <td key={index} className="text-left">
                              <ul>
                           <li>  {item}</li> 
                              </ul>
                          </td>
                      </tr>
                  ))}
              </table>
            </div>
        )
    }
}

export default Input
