import React, {Component} from 'react'
import ExpenselItem from "./ExpenselItem.js";


class ExpenRenderDate extends React.Component{

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
          <div>
              <ExpenselItem
                  title={this.props.data[0].time}
                  amount={this.props.data[0].amount}
                  date={this.props.data[0].date}/>

              <ExpenselItem
                  title={this.props.data[1].time}
                  amount={this.props.data[1].amount}
                  date={this.props.data[1].date}/>

              <ExpenselItem
                  title={this.props.data[2].time}
                  amount={this.props.data[2].amount}
                  date={this.props.data[2].date}/>


          </div>

        );
    }

}

export default ExpenRenderDate;