/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RangeSlider} from './src/components';

const slider_data = [
  {value: 10, amount: 4},
  {value: 12, amount: 20},
  {value: 15, amount: 15},
  {value: 16, amount: 4},
  {value: 20, amount: 1},
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedItem, setSelectedItem] = useState(slider_data[0]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
        <RangeSlider
          title={'Range slider'}
          subtitle={'Range'}
          onChange={(value: any) => setSelectedItem(value)}
          data={slider_data}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Value</Text>
            <Text style={styles.infoValue}>{selectedItem.value}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Amount</Text>
            <Text style={styles.infoValue}>{selectedItem.amount}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 50,
  },
  infoBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoValue: {
    fontSize: 14,
    color: 'black',
  },
});

export default App;
