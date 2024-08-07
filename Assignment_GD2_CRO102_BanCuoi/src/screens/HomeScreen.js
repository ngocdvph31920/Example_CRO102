import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = async () => {
    try {
      const response = await fetch('http://10.24.58.10:3000/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const newEntry = await response.json();
      setEntries([...entries, newEntry]);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEntries = async () => {
    try {
      const response = await fetch('http://10.24.58.10:3000/entries');
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập lời biết ơn hoặc hạnh phúc trong ngày:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        multiline
        placeholder="Viết lời biết ơn hoặc điều làm bạn hạnh phúc hôm nay..."
        placeholderTextColor="#888888"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddEntry}>
        <Text style={styles.buttonText}>Thêm lời biết ơn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GratitudeManagement')}>
        <Text style={styles.buttonText}>Quản lý lời biết ơn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meditation')}>
        <Text style={styles.buttonText}>Video bài tập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StepsCounter')}>
        <Text style={styles.buttonText}>Đếm Bước Chân</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BMICalculator')}>
        <Text style={styles.buttonText}>Tính Chỉ Số BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Updated to a lighter shade for a more modern look
  },
  title: {
    fontSize: 22, // Increased font size for better readability
    fontWeight: '700', // Increased font weight for emphasis
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto', 
  },
  input: {
    height: 150, 
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12, 
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4CAF50', // Updated to the new color
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10, // Updated to a larger border radius
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: '600',
  },
});

export default HomeScreen;
