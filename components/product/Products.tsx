// import React from 'react';
// import { Text,SectionList, View, StyleSheet, FlatList } from 'react-native';
// import Product from './Product';

// class Products  extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [{
//         name: "dummy1",
//         _id: "1"
//       },{
//         name: "dummy2",
//         _id: "2"
//       }]
//     }
//   }

//   componentDidMount() {
//     fetch('http://192.168.225.30:3000/api/products')
//     .then(response => response.json())
//     .then(products => {
//       console.log('Did i received?', products);
//       this.setState({
//         products: products
//       });
//     })
//     .catch(error => console.error('Error in fetching products!', error));
//   }

//   render() {
//     return (
//       <FlatList
//         data={this.state.products}
//         renderItem={({ item }) => <Product name={item.name} />}
//         keyExtractor={item => item._id}
//       />
//     );
//   }
// }

// export default Products;

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Product from './Product';

const Products = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.225.30:3000/api/products')
      .then((response) => response.json())
      .then((products) => setData(products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <Product name={item.name} price={item.price} description={item.description}></Product>
          )}
        />
      )}
    </View>
  );
};

export default Products;