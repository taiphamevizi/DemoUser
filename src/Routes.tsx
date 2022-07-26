import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Pages
import { ListUser }  from './pages/ListUser'
import { Login }  from './pages/Login'
import { Signup } from './pages/Signup'


const Stack = createStackNavigator()

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="ListUser"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#374033',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ListUser" 
        component={ListUser} 
        options={{ title: 'User Management' }}
      />   
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Cadastro' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Acesso'}
        }
      />
    </Stack.Navigator>
  );
}