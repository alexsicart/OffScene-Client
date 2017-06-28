import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { func, object } from 'prop-types';
import Paper from 'material-ui/Paper';
import { defaultSearch } from '../actions';
import DJCard from '../components/DJCard';
import FiltersForm from '../containers/FiltersForm';

import styles from './Artists.css';

class Artists extends Component {
  componentWillMount() {
    this.props.getDJs();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.djs);
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values);
  }

  renderDJs() {
    return Object.keys(this.props.djs)
    .map((key) => this.props.djs[key])
    .map((element) => <DJCard dj={element} key={element.id} className={styles.djContainer} />);
  }

  render() {
    return (
      <div className={styles.artistsContainer}>
        <Paper className={styles.paperContainer} zDepth={1} rounded={!0} >
          <FiltersForm />
        </Paper>
        <div className={styles.djListContainer}>
          {this.renderDJs()}
        </div>
      </div>
    );
  }
}

Artists.propTypes = {
  getDJs: func.isRequired,
  djs: object.isRequired,
};

const mapStateToProps = (state) => ({
  djs: state.entities.djs,
});

const mapDispatchToProps = (dispatch) => ({
  getDJs: () => dispatch(defaultSearch()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Artists));
