import React, { Component } from 'react'
import {
    Text,
    Button
} from 'react-native'

import { DrawerNavigator, StackNavigator } from 'react-navigation'

import BlankPage from './screens/Blank'
import AboutPage from './screens/About'
import HomePage from './screens/Home'
import ProfilePage from './screens/Profile'
import LoginPage from './screens/Login'

const Menu = DrawerNavigator({
    Home: {
        screen: HomePage
    },
    Profile: {
        screen: ProfilePage
    },
    About: {
        screen: AboutPage
    }
}, {
        navigationOptions: ({ navigation, screenProps }) => ({
            headerLeft: <Button title="Menu" onPress={() => {
                navigation.navigate('DrawerOpen')
            }} />,
        })
    })

export default StackNavigator({
    Main: {
        screen: Menu
    },
    Blank: {
        screen: BlankPage
    },
    Login: {
        screen: LoginPage
    }
}, {
        initialRouteName: 'Login'
    })
