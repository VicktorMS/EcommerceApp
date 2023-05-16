import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

const ProductItemInCard = () => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image
          style={styles.productImage}
          source={{
            uri: "https://img.ltwebstatic.com/images3_pi/2020/02/24/158254255707dddeb469b527028d53d4836abe459e_thumbnail_405x.webp",
          }}
        />

        <View style={{ marginTop: 4 }}>
          <Text>ProductItemInCard</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>R$50</Text>
            <Text
              style={{
                marginHorizontal: 4,
                fontSize: 12,
                color: "grey",
                textDecorationLine: "line-through",
              }}
            >
              R$65
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "orange",
              }}
            >
              15% OFF
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItemInCard;

const styles = StyleSheet.create({
  container: {
    width: 170,
    paddingHorizontal: 4,
  },
  productImage: {
    maxWidth: "100%",
    height: 180,
    borderRadius: 8,
  },
});
