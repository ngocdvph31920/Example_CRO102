import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, deleteExpense } from '../redux/expenseSlice'; 
const ExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);

  const handleAddExpense = () => {
    if (incomeAmount) {
      const newIncome = {
        id: Date.now().toString(),
        title,
        description,
        date,
        type: 'Thu',
        amount: parseFloat(incomeAmount),
      };
      dispatch(addExpense(newIncome));
      setIncomeAmount('');
    }

    if (expenseAmount) {
      const newExpense = {
        id: Date.now().toString(),
        title,
        description,
        date,
        type: 'Chi',
        amount: parseFloat(expenseAmount),
      };
      dispatch(addExpense(newExpense));
      setExpenseAmount('');
    }

    setTitle('');
    setDescription('');
    setDate('');
  };

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };

  const totalIncome = expenses.filter(exp => exp.type === 'Thu').reduce((sum, exp) => sum + exp.amount, 0);
  const totalExpense = expenses.filter(exp => exp.type === 'Chi').reduce((sum, exp) => sum + exp.amount, 0);
  const filteredExpenses = expenses.filter(exp => exp.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập Tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập Mô tả"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập Ngày thu chi"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập Số tiền thu"
        value={incomeAmount}
        onChangeText={setIncomeAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập Số tiền chi"
        value={expenseAmount}
        onChangeText={setExpenseAmount}
        keyboardType="numeric"
      />
      <Button title="Thêm chi tiêu" onPress={handleAddExpense} />

      <TextInput
        style={[styles.input, { marginTop: 20 }]}
        placeholder="Tìm kiếm"
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.summaryText}>Tổng thu: {totalIncome}</Text>
      <Text style={styles.summaryText}>Tổng chi: {totalExpense}</Text>

      <FlatList
        data={filteredExpenses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <View style={styles.expenseInfo}>
              <Text style={styles.expenseText}>{item.title}</Text>
              <Text style={styles.expenseText}>{item.description}</Text>
              <Text style={styles.expenseText}>{item.date}</Text>
              <Text style={[styles.expenseText, item.type === 'Thu' ? styles.incomeText : styles.expenseText]}>
                {item.type === 'Thu' ? '+' : '-'}{item.amount}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteExpense(item.id)}>
              <Text style={styles.deleteButton}>Xóa</Text>
            </TouchableOpacity>
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
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  expenseInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  expenseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  incomeText: {
    color: 'green',
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
  },
});

export default ExpenseScreen;
