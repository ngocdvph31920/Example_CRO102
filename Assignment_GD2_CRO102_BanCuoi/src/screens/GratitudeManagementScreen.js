import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

const GratitudeManagementScreen = () => {
  const [entries, setEntries] = useState([]);

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

  const handleDeleteEntry = async (id) => {
    try {
      await fetch(`http://10.24.58.10:3000/entries/${id}`, {
        method: 'DELETE',
      });
      setEntries(entries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lý lời biết ơn</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryText}>{item.content}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteEntry(item.id)}
            >
              <Text style={styles.deleteButtonText}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  entry: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  entryText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  list: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default GratitudeManagementScreen;
