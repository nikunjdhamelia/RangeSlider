import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Slider from '@react-native-community/slider';

const RangeSlider = ({data, onChange, title, subtitle}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleValueChange = index => {
    setSelectedIndex(index);
    onChange(data[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.chart}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.bar,
              {
                height: item.amount * 5,
                opacity: index === selectedIndex ? 1 : 0.5,
              },
            ]}
          />
        ))}
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={data.length - 1}
        step={1}
        onValueChange={handleValueChange}
        thumbTintColor="orange"
        maximumTrackTintColor="gray"
        minimumTrackTintColor="orange"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '88%',
    backgroundColor: 'white',
    paddingTop: 15,
  },
  bar: {
    flex: 1,
    backgroundColor: 'orange',
    marginHorizontal: 1,
  },
  slider: {
    width: Platform.OS === 'ios' ? '88%' : '95%',
  },
});
export default RangeSlider;
