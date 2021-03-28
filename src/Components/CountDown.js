import React, { Component } from 'react';
import moment from 'moment';

class CountDown extends Component {
    timeLeft(date) {
        const currentDate = moment().format('YYYY/MM/DD');  // Retrieving the current date
        const endDate = moment(date);
        const time = endDate.diff(currentDate, 'days');  // The diffrence between the end date and the current date

        return time;
    }
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Days left: {this.timeLeft(this.props.date)}</h4>
            </div>
        )
    }
}

export default CountDown;