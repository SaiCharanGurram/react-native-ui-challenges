import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../styles/theme';
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.headingName}> Hi Ghulam </Text>
        <Text style={styles.headingBottomLine}> Welcome back </Text>
      </View>
      <View
        style={{
          padding: 8,
          backgroundColor: COLORS.grey,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}>
        <Image
          style={{width: undefined, height: undefined, flex: 1}}
          source={require('../assets/images/man.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingBottomLine: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    opacity: 0.6,
  },
  headingName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
  },
});
