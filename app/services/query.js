import { gql } from "@apollo/client";

export const Recipe_QUERY = gql`
  query RecipeQuery {
    recipes {
      title,
      ingredients{
        name
      }
    }
  }
`;