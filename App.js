import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {changeIcon, getIcon} from 'react-native-change-icon';

const App = () => {
  const [currentIcon, setCurrentIcon] = useState('logred');
  const changeAppIcon = async name => {
    try {
      const response = await changeIcon(name);
      setCurrentIcon(response);
    } catch (err) {}
  };

  useEffect(() => {
    const getCurrentIcon = async () => {
      const currentIcon = await getIcon();
      setCurrentIcon(currentIcon);
    };
    getCurrentIcon();
  }, []);

  const iconsList = [
    {id: 1, iconName: 'logored', image: require(`./src/assets/logored.png`)},
    {
      id: 2,
      iconName: 'logocyan',
      image: require(`./src/assets/logocyan.png`),
    },
    {
      id: 3,
      iconName: 'logopurple',
      image: require(`./src/assets/logopurple.png`),
    },
    {
      id: 4,
      iconName: 'logoorange',
      image: require(`./src/assets/logoorange.png`),
    },
    {id: 5, iconName: 'logopink', image: require(`./src/assets/logopink.png`)},
    {id: 6, iconName: 'logogray', image: require(`./src/assets/logogray.png`)},
    {
      id: 7,
      iconName: 'logogreen',
      image: require(`./src/assets/logogreen.png`),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Select your App Icon</Text>
      </View>
      <View style={styles.iconContainer}>
        {iconsList.map(icon => {
          const isSelected = icon.iconName === currentIcon;
          console.log('isSelected>>>>>', isSelected);
          return (
            <TouchableWithoutFeedback
              key={icon.id}
              onPress={() => changeAppIcon(icon.iconName)}>
              <View
                style={{
                  backgroundColor: isSelected ? 'lightgray' : 'transparent',
                  borderRadius: 10,
                  margin: 4,
                }}>
                <Image style={styles.icon} source={icon.image} />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
      <Text>Current Icon : {currentIcon}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {padding: 8, marginTop: 20},
  heading: {
    fontWeight: '500',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    borderRadius: 10,
    width: 100,
    margin: 8,
  },
});

export default App;
