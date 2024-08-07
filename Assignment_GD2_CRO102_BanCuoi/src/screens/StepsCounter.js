import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Pedometer from 'react-native-pedometer';

const StepsCounter = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const startPedometer = async () => {
      try {
        const isSupported = await Pedometer.isStepCountingAvailableAsync();
        if (isSupported) {
          Pedometer.watchStepCount(result => {
            setSteps(result.steps);
          });
        } else {
          console.log("Pedometer is not available.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    startPedometer();

    return () => {
      Pedometer.stopPedometerUpdates();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Số bước hiện tại:</Text>
      <Text style={styles.steps}>{steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  steps: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default StepsCounter;
