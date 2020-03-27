import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'dummy name',
      price: '20',
      description: ''
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.name}>
          {this.props.name}
        </Text>
        <Text>
          {this.props.price}
        </Text>
        <Text>
        {this.props.description}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    marginVertical: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
