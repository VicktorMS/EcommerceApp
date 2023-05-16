import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItemInCard from "./ProductItemInCard";

const ProductsCard = () => {
  return (
    <>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Principais Produtos
        </Text>
      </View>
      <View style={styles.productsCard}>
        <ProductItemInCard/>
      </View>
    </>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  productsCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  column: {
    backgroundColor: 'red',
    width: 171,
    maxWidth: '50%',
    height: 400
  }
});
