import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../constants/Colors'

const CustomHeaderButton = props => {
    return <HeaderButton  IconComponent={Ionicons} iconSize={23} color={Platform.OS === 'android' ? 'white' : Colors.primary} {...props} />
}

export default CustomHeaderButton