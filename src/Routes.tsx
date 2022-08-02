import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Pages
import { ListUser }  from './pages/ListUser'
import { Login }  from './pages/Login'
import { Signup } from './pages/Signup'
import { UserDetails } from './pages/UserDetails'
import { AddUser } from './pages/AddUser'


const Stack = createStackNavigator()

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'}
        }
      />
      <Stack.Screen 
        name="ListUser" 
        component={ListUser} 
        options={{ title: 'User Management' }}
      />   
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Register' }}
      />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetails} 
        options={{ title: 'User Details' }}
      />
      <Stack.Screen 
        name="AddUser" 
        component={AddUser} 
        options={{ title: 'Add User' }}
      />
    </Stack.Navigator>
  );
}