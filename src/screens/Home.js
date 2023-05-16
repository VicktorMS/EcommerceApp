import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CategoriesList from '../components/CategoriesList'
import ProductsCard from '../components/ProductsCard'


const Home = () => {
  return (
   <View style={{marginHorizontal: 18}}>
    <TextInput
      style={styles.input}
      placeholder="Pesquise algum produto..."
    />
    <View>
      <View style={styles.titleSeeMore}>
        <Text style={{fontSize: 16, fontWeight: 500}}>Categorias</Text>
        <Text style={{}}>Ver mais</Text>
      </View>
      <CategoriesList/>
    </View>
    <ProductsCard/>
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
  titleSeeMore : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderRadius: 5,
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'lightgrey',
    backgroundColor: '#fff'
  },
})