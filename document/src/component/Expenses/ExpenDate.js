import React, {Component} from 'react'

class ExpenDate extends React.Component{


    constructor(props) {

        super(props);
        this.year = this.props.data.toLocaleString('ko-KR',{year : 'numeric'});
        this.month = this.props.data.toLocaleString('ko-KR',{ month : 'long'});
        this.day=this.props.data.toLocaleString('ko-KR',{day: '2-digit'});
    }


    render() {
        return(

            <div>
                <div>{this.year}</div>
                <div>{this.month}</div>
                <div>{this.day}</div>
            </div>
        );
    }

}

export default ExpenDate;
