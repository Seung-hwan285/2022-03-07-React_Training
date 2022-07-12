import React from 'react';
import PropTypes from 'prop-types';

export default class TicketDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDetail: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            isDetail: event.target.checked,
        });
    }

    render() {
        return (
            <section className="mt-6">
                <div className="flex justify-between mb-2">
                    <h2 className="text">총 {this.props.tickets.length}개를 구매하였습니다.</h2>
                    <div className="flex">
                    </div>
                </div>

            </section>
        );
    }
}
