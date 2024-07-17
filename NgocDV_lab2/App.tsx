import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskContent, setNewTaskContent] = useState('');
  const [isNewTaskCompleted, setIsNewTaskCompleted] = useState(false); 
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');
  const [editTaskContent, setEditTaskContent] = useState('');
  const [editTaskCompleted, setEditTaskCompleted] = useState(false); 

  useEffect(() => {
   
  
  }, []);

  const addTask = () => {
    if (newTaskTitle && newTaskContent) {
      const newTask = {
        id: Date.now().toString(),
        title: newTaskTitle,
        content: newTaskContent,
        completed: isNewTaskCompleted, 
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskContent('');
      setIsNewTaskCompleted(false); 
    }
  };

  const editTask = (task) => {
    setEditTaskId(task.id);
    setEditTaskTitle(task.title);
    setEditTaskContent(task.content);
    setEditTaskCompleted(task.completed); 
  };

  const updateTask = () => {
    setTasks(tasks.map(task =>
      task.id === editTaskId
        ? { ...task, title: editTaskTitle, content: editTaskContent, completed: editTaskCompleted }
        : task
    ));
    setEditTaskId(null);
    setEditTaskTitle('');
    setEditTaskContent('');
    setEditTaskCompleted(false); 
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const uncompletedTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quản Lý Công Việc</Text>
      <Text style={styles.counter}>
        Đã hoàn thành: {completedTasksCount} | Chưa hoàn thành: {uncompletedTasksCount}
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tiêu đề"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập nội dung"
          value={newTaskContent}
          onChangeText={setNewTaskContent}
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setIsNewTaskCompleted(!isNewTaskCompleted)}
          >
            {isNewTaskCompleted && <View style={styles.checkboxInner} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Trạng Thái</Text>
        </View>

        <Button title="Thêm" onPress={addTask} />
      </View>

      {editTaskId && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập tiêu đề"
            value={editTaskTitle}
            onChangeText={setEditTaskTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập nội dung"
            value={editTaskContent}
            onChangeText={setEditTaskContent}
          />

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setEditTaskCompleted(!editTaskCompleted)}
            >
              {editTaskCompleted && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Trạng Thái</Text>
          </View>

          <Button title="Cập nhật" onPress={updateTask} />
        </View>
      )}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <TouchableOpacity
              style={styles.taskContent}
              onPress={() => toggleTaskStatus(item.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.taskTitle, item.completed && styles.taskCompleted]}>
                {item.title}
              </Text>
              <Text style={styles.taskContentText}>{item.content}</Text>
              <Text style={[styles.taskStatus, item.completed && { color: 'gray' }]}>
                Trạng Thái: {item.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <Button title="Sửa" onPress={() => editTask(item)} />
              <Button title="Xóa" onPress={() => deleteTask(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  counter: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskCompleted: {
    color: 'gray', // Change text color for completed tasks
  },
  taskContentText: {
    marginTop: 5,
    fontSize: 16,
  },
  taskStatus: {
    marginTop: 5,
    fontSize: 16,
    fontStyle: 'italic',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#007AFF',
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default App;
