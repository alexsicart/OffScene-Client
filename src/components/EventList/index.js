import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, object, number } from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Rating } from 'material-ui-rating';
import * as ActionCreators from 'actions';
import styles from 'pages/Screens.css';

@connect(data => EventList.getData, ActionCreators)
export default class EventList extends Component {
  static getData = state => ({
    events: state.entities.events,
  });

  componentDidMount() {
    // this.props.getEvents();
    this.props.getMyEvents();
  }

  ratings = value => {
    if (value === null) return '-';
    return (
      <Rating value={value / 100} max={5} className={styles.rating} disabled />
    );
  };

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>DATE</TableHeaderColumn>
            <TableHeaderColumn>LOCATION</TableHeaderColumn>
            <TableHeaderColumn>PRICE</TableHeaderColumn>
            <TableHeaderColumn>DJ-RATING</TableHeaderColumn>
            <TableHeaderColumn>ORGANIZER-RATING</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(this.props.events)
            .map(key => this.props.events[key])
            .map(event => {
              let s = event.status;
              // same category: will end up in tab past/canceled

              return (
                <TableRow key={event.id}>
                  <TableRowColumn>
                    {event.date.slice(0, 9)}
                  </TableRowColumn>
                  <TableRowColumn>
                    {event.location}
                  </TableRowColumn>
                  <TableRowColumn>
                    {event.price}
                  </TableRowColumn>
                  <TableRowColumn>
                    {this.ratings(event.djRating)}
                  </TableRowColumn>
                  <TableRowColumn>
                    {this.ratings(event.orgRating)}
                  </TableRowColumn>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    );
  }
}