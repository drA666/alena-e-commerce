import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    items {
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
