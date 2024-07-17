import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Block from './Component/Block';
import Banner from './Component/Banner';
import CustomTextInput from './Component/CustomeTextInput';
import Button from './Component/Button';
import ThemeSwitch from './Component/ThemeSwitch';


const RegistrationScreen = () => (
  <View style={styles.container}>
    <Image source={require('./assets/images/logo_fpt.png')} style={styles.logo} />
    <Block title="Thông tin cá nhân" backgroundColor="#FFFFFF"> 
      <CustomTextInput placeholder="Nhập tên" />
    </Block>
    <Block title="Thông tin khóa học" backgroundColor="#FFFFFF">
      <CustomTextInput placeholder="Nhập tên khóa học" />
    </Block>
    <Block title="Thông tin liên hệ" backgroundColor="#FFFFFF">
      <CustomTextInput placeholder="Nhập số điện thoại" />
    </Block>
    <Button title="Đăng ký" onPress={() => console.log('Đăng ký pressed')} backgroundColor="#2196F3" />
    <ThemeSwitch onPress={() => console.log('Switch theme')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 295,
    height: 100,
    marginBottom: 20,
  },
});

export default RegistrationScreen;