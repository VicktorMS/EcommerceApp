import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <TouchableHighlight>
            <MaterialIcons name="notifications-none" size={24} color="black" />
        </TouchableHighlight>
        <TouchableHighlight>
            <Feather name="user" size={24} color="black" />
        </TouchableHighlight>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
})