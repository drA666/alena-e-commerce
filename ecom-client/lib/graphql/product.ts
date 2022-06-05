import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    item(where: { id: $id }) {
      id
      name
      price
      seoDesc
      stars
      itemImages {
        id
        alt
        image {
          publicUrlTransformed(transformation: { width: "400", crop: "limit", quality: "auto" })
        }
      }
    }
  }
`;
