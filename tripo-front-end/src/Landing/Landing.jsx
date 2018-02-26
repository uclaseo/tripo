import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Upcoming, Wrapper, StyledLink } from './LandingStyles';

export default class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <Upcoming>
          UPCOMING EVENTS
        </Upcoming>
        <Wrapper>
          <StyledLink to="/createplan">
              <FlatButton label="CreatePlan" fullWidth={true} disableTouchRipple={true} style={{height: '100%'}}/>
          </StyledLink>
          <StyledLink to="/upcoming">
              <FlatButton label="View Plans" fullWidth={true} disableTouchRipple={true} style={{height: '100%'}}/>
          </StyledLink>
        </Wrapper>

      </div>
    )
  }
}