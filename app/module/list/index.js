import * as React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useQuery } from "@apollo/client";
import { Recipe_QUERY } from "../../services/query";

function ListScreen({ navigation }) {
  // const { data, loading } = useQuery(Recipe_QUERY);

  // console.log(data);

  const recipes = [
    {
      title: "test",
      ingredients: [
        {
          name: "test1",
        },
        {
          name: "test2",
        },
        {
          name: "test3",
        },
      ],
    },
  ];

  const RecipeItem = ({ recipe }) => {
    const { title, ingredients } = recipe;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Details", { data: recipe })}
      >
        <Text>{title}</Text>
        <FlatList
          data={ingredients}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index}
        />
      </TouchableOpacity>
    );
  };

  // if (loading) {
  //   return <Text>Fetching data...</Text>;
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecipeItem recipe={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    padding: 10,
  },
});

export default ListScreen;
