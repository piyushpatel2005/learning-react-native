import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    // console.log(this.props.number);
    if (this.props.isDisabled) return;
    this.props.onPress(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default RandomNumber;
