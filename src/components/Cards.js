import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SimCard from '../assets/icons/Simcard';

export default function Cards() {
  return (
    <View style={{width: '100%'}}>
      <Card />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: -1,
          opacity: 0.8,
          transform: [
            {
              translateY: 8,
            },
            {
              rotate: '4 deg',
            },
          ],
        }}>
        <Card inBackground />
      </View>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: -2,
          transform: [
            {
              translateY: 16,
            },
            {
              rotate: '8 deg',
            },
          ],
        }}>
        <Card inBackground />
      </View>
    </View>
  );
}

function Card({inBackground = false}) {
  // const [cardHeight, setCardHeight] = useState(0);
  // if (inBackground) {
  //   return (
  //     <LinearGradient
  //       colors={['#000', '#07541c']}
  //       start={{x: 0, y: 0}}
  //       // locations={[0.9, 0.1]}
  //       end={{x: 1, y: 1}}
  //       style={[styles.container, {height: 200}]}></LinearGradient>
  //   );
  // }
  const colors = inBackground ? ['#000', '#07541c'] : ['#479162', '#07541c'];
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      locations={inBackground ? [0.5, 0.9] : [0.1, 0.9]}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <SimCard
        width={32}
        height={32}
        fill="#fff"
        style={{
          marginBottom: 16,
          transform: [
            {
              rotate: '90 deg',
            },
          ],
        }}
      />

      <Text style={[styles.text, styles.cardNumber]}>4562 1122 4595 7852</Text>
      <View style={{flexDirection: 'row', marginTop: 'auto'}}>
        <View style={{alignSelf: 'flex-end'}}>
          <Text style={[styles.text, styles.cardHolder]}>Card Holder</Text>
          <Text style={[styles.text, styles.holderName]}>Ghulam</Text>
        </View>
        <View
          style={{
            // alignSelf: 'flex-end',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <Image
            source={require('../assets/images/mastercard.png')}
            style={{width: 49, height: 48}}
          />
          <Text style={[styles.text, styles.cardName]}>Mastercard</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardName: {
    fontSize: 10,
    fontWeight: '400',
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
  },
  container: {
    borderRadius: 24,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 32,
    // height: 200,
    marginTop: 32,
    borderWidth: 0.5,
    borderColor: '#000',
  },

  text: {
    color: '#fff',
  },
  cardHolder: {
    fontSize: 14,
    fontWeight: '500',
  },
  holderName: {
    fontSize: 20,
    fontWeight: '600',
  },
  simCard: {
    height: 32,
    width: 32,
    marginBottom: 32,

    transform: [
      {
        rotate: '90 deg',
      },
    ],
  },
});
