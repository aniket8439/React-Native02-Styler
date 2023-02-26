import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <View>
      <ScrollView>
      <FlatCards />
      <ElevatedCard />
      <FancyCards />
      <ActionCard />
      <ContactList />
      <Text style={styles.copyRight}>©Copyrights ~Aniket Sharma </Text>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  copyRight: {
    fontWeight:"bold",
    textAlign:"center",
    color:"#FFF"
  }
})
