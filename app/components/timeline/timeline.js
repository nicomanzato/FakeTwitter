'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

import PostList from './../post/postList'
import {styles} from './timeline.styles.js'

class Timeline extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.props.onComponentMount();
  }

  render = () => {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    } else {
      return (
        <View style={styles.timeline}>
          <PostList
            navigation={this.props.navigation}
            data={this.props.data}
            refreshing={this.props.refreshing}
            onRefresh={this.props.onRefresh}
            onEndReached={this.props.onEndReached}
          />
        </View>
      );
    }
  }
}

export default Timeline;
