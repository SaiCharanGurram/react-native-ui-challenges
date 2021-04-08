import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import HomeIcon from '../assets/icons/Home';
import FlashIcon from '../assets/icons/Flash';
import BellIcon from '../assets/icons/Bell';
import UserIcon from '../assets/icons/User';
import {COLORS} from '../styles/theme';
import {LinearGradient} from 'expo-linear-gradient';

const Icons = [
  {
    Icon: (props) => <HomeIcon {...props} />,
  },
  {
    Icon: (props) => <FlashIcon {...props} />,
  },
  {
    Icon: (props) => <UserIcon {...props} />,
  },
  {
    Icon: (props) => <BellIcon {...props} />,
  },
];

const padding = 28;
export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const iconProps = {
    width: 24,
    height: 24,
  };
  return (
    <View style={styles.container}>
      {Icons.map(({Icon}, index) => {
        const isSelected = activeTab === index;
        return (
          <TouchableOpacity key={index} onPress={() => setActiveTab(index)}>
            <LinearGradient
              colors={
                isSelected
                  ? [COLORS.accentPrimary, COLORS.accentSecondary]
                  : [COLORS.background, COLORS.background]
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              // locations={[0.1, 0.9]}
              style={{
                borderRadius: (iconProps.width + padding) / 2,
                alignItems: 'center',
                justifyContent: 'center',
                width: iconProps.width + padding,
                height: iconProps.height + padding,

                backgroundColor: isSelected ? COLORS.white : '',
              }}>
              <Icon
                fill={isSelected ? COLORS.white : COLORS.grey}
                {...iconProps}
              />
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
      {/* <View>
        <HomeIcon fill={COLORS.grey} {...iconProps} />
      </View>
      <View>
        <FlashIcon fill="#fff" {...iconProps} />
      </View>

      <View>
        <UserIcon fill="#fff" {...iconProps} />
      </View>
      <View>
        <BellIcon fill="#fff" {...iconProps} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 8,
  },
});
