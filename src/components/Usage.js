import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Suitcase from './../assets/icons/Suitcase';
import Paypal from './../assets/icons/Paypal';
import {LinearGradient} from 'expo-linear-gradient';
import {COLORS} from '../styles/theme';

const iconProps = {
  width: 32,
  height: 32,
  fill: COLORS.white,
};

const CARDS = [
  {
    Icon: () => <Suitcase {...iconProps} />,
    title: 'Salary',
    desciption: 'Being interactive',
    transaction: '+$20000',
  },
  {
    Icon: () => <Paypal {...iconProps} />,
    title: 'Paypal',
    desciption: 'Freelance payment',
    transaction: '+$4500',
  },
];
export default function Usage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTextTitle}> Balance </Text>
          <Text style={styles.headerTextContent}> $92,510 </Text>
          <Text style={styles.headerTextCaption}> Upcoming payments </Text>
        </View>

        <View style={styles.headerButton}>
          <Text style={styles.headerButtonText}> | 5.9%</Text>
        </View>
      </View>

      <View style={styles.body}>
        {CARDS.map((card) => {
          const {Icon, title, desciption, transaction} = card;
          return (
            <LinearGradient
              key={title}
              style={[styles.card]}
              colors={[COLORS.grey, COLORS.background, COLORS.background]}
              start={{x: 0, y: 1}}
              locations={[0.1, 0.5, 0.9]}>
              <Icon />
              <Text style={styles.bodyTitle}>{title}</Text>
              <Text style={styles.bodyDiscription} numberOfLines={1}>
                {desciption}
              </Text>
              <Text style={styles.bodyBottomLine}>{transaction}</Text>
            </LinearGradient>
          );
        })}
      </View>
    </View>
  );
}

export const baseStyles = StyleSheet.create({
  text: {color: '#fff'},
});

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    paddingVertical: 32,
    // flex: 1,
    width: '48%',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  container: {width: '100%', marginTop: 80},
  header: {flexDirection: 'row', alignItems: 'center'},
  headerTextContainer: {},
  headerTextTitle: {
    ...baseStyles.text,
    fontSize: 16,
    fontWeight: '200',
    marginBottom: 8,
  },
  headerTextContent: {
    ...baseStyles.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  headerTextCaption: {...baseStyles.text, fontSize: 18, fontWeight: '200'},
  headerButton: {
    backgroundColor: '#479162',
    borderRadius: 20,
    marginLeft: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerButtonText: {
    ...baseStyles.text,
    fontSize: 16,
    fontWeight: '500',
  },
  body: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  bodyCard: {},
  bodyTitle: {
    ...baseStyles.text,
    marginTop: 16,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  bodyDiscription: {
    ...baseStyles.text,
    fontSize: 10,
    fontWeight: '400',
    marginBottom: 8,
  },
  bodyBottomLine: {
    ...baseStyles.text,

    fontSize: 18,
    fontWeight: '700',
  },
});
