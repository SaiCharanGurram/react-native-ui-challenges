import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabs from './src/components/BottomTabs';
import Cards from './src/components/Cards';
import Header from './src/components/Header';
import Usage from './src/components/Usage';
import {COLORS} from './src/styles/theme';

export default function App() {
  return (
    <>
      <StatusBar animated backgroundColor={COLORS.grey} style="light" />

      <LinearGradient
        style={styles.container}
        colors={[COLORS.accentSecondary, COLORS.background, COLORS.background]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}
        locations={[0.02, 0.9, 0.9]}>
        <Header />
        <Cards />
        <Usage />
        <BottomTabs />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 64,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
});
