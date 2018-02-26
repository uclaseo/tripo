import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import Create from './Create/Create';
import Plans from './Plans/Plans';
import { Upcoming, Wrapper, MakePlan, ViewPlans, StyledLink } from './LandingStyles';

export default class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <Upcoming>
          UPCOMING EVENTS
        </Upcoming>
        <Wrapper>
          <StyledLink to="/upcoming" style={{flex: 1}}>
            <MakePlan>
              <FlatButton label="Make Plan" fullWidth={true} disableTouchRipple={true} style={{height: '300px', padding: 0}}/>
            </MakePlan>
          </StyledLink>
          <StyledLink to="/upcoming" style={{flex: 1}}>
            {/* <ViewPlans> */}
              <FlatButton label="View Plans" fullWidth={true} disableTouchRipple={true} style={{height: '100%'}}/>
            {/* </ViewPlans> */}
          </StyledLink>
        </Wrapper>

      </div>
    )
  }
}