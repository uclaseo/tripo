import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

export default class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }
  select = (index) => {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
      <div className="upcoming">
        Upcoming
        <RaisedButton label="click" />
        <AppBar title="title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </div>
    )
  }
}