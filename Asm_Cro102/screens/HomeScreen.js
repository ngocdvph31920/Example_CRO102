// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = async () => {
    try {
      const response = await axios.post('http://localhost:3000/entries', { content });
      setEntries([...entries, response.data]);
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:3000/entries');
      setEntries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Nhập lời biết ơn hoặc hạnh phúc trong ngày:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Thêm" onPress={handleAddEntry} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  entry: {
    padding: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
