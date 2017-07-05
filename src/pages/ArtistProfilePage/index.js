import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { LocationOn } from 'material-ui-icons';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import styles from './styles.css';
import { SocialIcons } from 'components';
import * as ActionCreators from 'actions';

const {
  FacebookIcn,
  TwitterIcn,
  YoutubeIcn,
  InstagramIcn,
  SoundcloudIcn,
  SpotifyIcn,
} = SocialIcons;

@connect(data => ArtistProfilePage.getData, ActionCreators)
export default class ArtistProfilePage extends Component {
  static getData = state => ({
    djs: state.entities.djs,
  });

  constructor(props) {
    super(props);
    console.log('11', this.props);
  }

  componentWillMount() {
    this.props.getArtists();
  }

  render() {
    if (this.props.djs[this.props.match.params.id] === undefined) {
      return (
        <div>
          <Link to={'/artists/'}>
            <RaisedButton label="REFER TO ARTISTS PAGE" primary fullWidth />
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.djDetailContainer}>
        <Card className={styles.card}>
          <CardHeader
            title={this.props.djs[this.props.match.params.id].name}
            subtitle={`Rating: ${this.props.djs[this.props.match.params.id]
              .avgRating / 100}/5`}
            avatar={this.props.djs[this.props.match.params.id].picture}
            titleStyle={{ fontWeight: '600' }}
            subtitleStyle={{ fontWeight: '100' }}
          />
          <Divider />
          <Subheader>
            <div className={styles.city}>
              <LocationOn />
              <Subheader>
                {this.props.djs[this.props.match.params.id].city}
              </Subheader>
            </div>
          </Subheader>
          <Divider />
          <Subheader>Social Media</Subheader>
          <div className={styles.socialMedia}>
            <FacebookIcn />
            <TwitterIcn />
            <YoutubeIcn />
            <InstagramIcn />
            <SpotifyIcn />
            <SoundcloudIcn />
          </div>
          <Divider />
          <CardActions>
            <RaisedButton label="SEE CONTRACT" primary fullWidth />
            <Divider className={styles.divider} />
            <RaisedButton label="BOOK NOW!" primary fullWidth />
          </CardActions>
        </Card>
        <Paper className={styles.paper}>
          <div style={{ paddingLeft: 16, paddingBottom: 9 }}>
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              Pictures and Videos
            </Subheader>
            {'Put some images here'}
          </div>
          <Divider />
          <div style={{ paddingLeft: 16, paddingBottom: 9 }}>
            <Subheader style={{ padding: 0, fontWeight: '100' }}>
              Events
            </Subheader>
            {'Put some events here'}
          </div>
          <Divider />
        </Paper>
      </div>
    );
  }
}

ArtistProfilePage.propTypes = {
  match: object.isRequired,
  djs: object,
};