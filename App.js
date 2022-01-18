import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, Text,  View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [date, setDate] = useState(new Date());
  const [SharedWorker, setShow] = useState(false);

  const onChange = (_, selectedDate) => {
    if (Platform.OS === 'ios') {
      setShow(false);
    }

    const currentDate = selectedDate || date;
    setDate(currentDate);
  }

  const toggle = () => {
    setShow(prevShow => !prevShow);
  }

  return (
    <View style={styles.container}>
      {show && Platform.OS === 'ios' &&(
      <DateTimePicker
      style={{width: 320}}
      mode={'date'}
      display="default"
      value={date}
      onChange= { onChange}
      />
      )}
    
    {show && Platform.OS === 'android' &&(
      <DateTimePicker
      style={{width: 320}}
      mode={'date'}
      display="default"
      value={date}
      onChange = {onChange }
      />)}

      <Pressable 
        onPress={toggle}>
          <Text>
            {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
          </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
