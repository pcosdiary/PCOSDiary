import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailScreen({route}) {
    const {data} = route.params;
    return (
        <View style={styles.container}>
          <Text>{data.title}</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    },
  })

  export default DetailScreen;