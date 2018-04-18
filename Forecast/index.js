import React, { Component } from "react";

import { Text, View, StyleSheet } from "react-native";

class Forecast extends Component {
  render() {
    return (
      <View style={styles.forecast}>
        <Text style={{ color: "#FFFFFF", fontSize: 72 }}>
          {parseInt((this.props.temp -32)/(1.8))}°C
        </Text>
        <Text style={{ color: "#FFFFFF", fontSize: 32 }}>
          {this.props.main}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({ forecast: { alignItems: "center" } });

export default Forecast;
