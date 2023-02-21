import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ListScreen from "./app/module/list";
import DetailScreen from "./app/module/details";

// Initialize Apollo Client
// const client = new ApolloClient({
//   uri: "pcosdiary.herokuapp.com",
//   cache: new InMemoryCache(),
// });

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    //  </ApolloProvider>
  );
}

export default App;
