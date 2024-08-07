import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBMI.toFixed(2));

      let category = '';
      if (calculatedBMI < 18.5) {
        category = 'Gầy';
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        category = 'Bình thường';
      } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
        category = 'Thừa cân';
      } else {
        category = 'Béo phì';
      }
      setBmiCategory(category);
    } else {
      setBmi(null);
      setBmiCategory('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính Chỉ Số BMI</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập chiều cao (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập cân nặng (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text style={styles.genderTitle}>Giới tính:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Nam' && styles.selectedButton]}
          onPress={() => setGender('Nam')}
        >
          <Text style={styles.genderText}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Nữ' && styles.selectedButton]}
          onPress={() => setGender('Nữ')}
        >
          <Text style={styles.genderText}>Nữ</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Tính BMI</Text>
      </TouchableOpacity>

      {bmi !== null && (
        <Text style={styles.result}>Chỉ số BMI của bạn là: {bmi} ({bmiCategory})</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
  },
  genderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
  },
  selectedButton: {
    backgroundColor: '#4CAF50',
  },
  genderText: {
    color: '#FFFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default BMICalculator;
