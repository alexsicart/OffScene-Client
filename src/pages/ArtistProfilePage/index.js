import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { LocationOn } from 'material-ui-icons';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import styles from './styles.css';
import { SocialIcons } from 'components';
const {
  FacebookIcn,
  TwitterIcn,
  YoutubeIcn,
  InstagramIcn,
  SoundcloudIcn,
  SpotifyIcn,
} = SocialIcons;

@connect(data => ArtistProfilePage.getData)
export default class ArtistProfilePage extends Component {
  static getData = state => {
    djs: state.entities.djs;
  };
  render() {
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
            <RaisedButton label="SEE CONTRACT" primary={!0} fullWidth={!0} />
            <Divider className={styles.divider} />
            <RaisedButton label="BOOK NOW!" primary={!0} fullWidth={!0} />
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
  djs: object.isRequired,
};
