import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    icon: "shirt",
    iconLabel: "Moda",
  },
  {
    icon: "barbell-sharp",
    iconLabel: "Fitness",
  },
  {
    icon: "book",
    iconLabel: "Livros",
  },
  {
    icon: "desktop",
    iconLabel: "Tech",
  },
  {
    icon: "football",
    iconLabel: "Esports",
  },
  {
    icon: "game-controller",
    iconLabel: "Games",
  },
  {
    icon: "hammer",
    iconLabel: "Material",
  },
  {
    icon: "man",
    iconLabel: "Homem",
  },
  {
    icon: "woman",
    iconLabel: "Mulher",
  },
  {
    icon: "paw",
    iconLabel: "Pets",
  },
];

const mapCategories = categories.map((category, index) => ({
  key: index,
  value: category,
}));

function CategoryItem({ iconSettings }) {
  return (
    <TouchableHighlight>
      <View style={styles.categoryItem}>
        <View>
          <Ionicons 
            name={iconSettings.icon} 
            size={24} 
            color="white" 
            style={{
                backgroundColor: "#2d7dd2",
                borderRadius: 999,
                padding: 5,
                borderColor: "#262626",
            }} 
          />
        </View>
        <Text style={{ fontWeight: 600, textAlign: 'center' }}>{iconSettings.iconLabel}</Text>
      </View>
    </TouchableHighlight>
  );
}

const CategoriesList = () => {
  return (
    <View style={styles.categoriesList}>
      <FlatList
        horizontal={true}
        data={mapCategories}
        renderItem={({ item, index }) => (
          <CategoryItem 
            key={index} 
            iconSettings={item.value} 
          />
        )}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: "center",
    height: 60,
    width: 55,
    marginHorizontal: 6
  },
  categoriesList: {
    flexDirection: "row",
    paddingTop: 8,
  },
});
