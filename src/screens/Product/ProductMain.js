import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

export default function ProductMain() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{padding: 20, height: '100%', width: '100%'}}>
        <Image
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "red",
            resizeMode: "cover",
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={{
            uri: "https://picsum.photos/700/600",
          }}
        />

        <View>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Product Named
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>R$50,00</Text>
          </View>
          <View></View>
        </View>

        <Button title="Comprar" color="#841584" />

        <View style={{ marginTop: 12, flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Descrição:</Text>
          <Text style={{ fontSize: 16}}>
            Cras eu accumsan libero. Sed finibus metus condimentum tincidunt
            placerat. Nam eu sem in sem mattis congue. Pellentesque eu rhoncus
            est, sit amet venenatis eros. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti. Nam accumsan
            sagittis tellus, vitae molestie magna consequat id. Nulla feugiat
            nunc libero, quis sagittis metus cursus in. Phasellus sit amet
            tincidunt neque. Maecenas et convallis orci, eu lacinia enim. Nulla
            lacinia at erat eget egestas. Nullam convallis tincidunt ex
            dignissim tristique.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
