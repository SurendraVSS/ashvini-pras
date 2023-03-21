
import React ,{useState, useEffect}from 'react';
import {View, StyleSheet,Text, ActivityIndicator,FlatList} from 'react-native';
import ProductList from './ProductList';

 
const data = require('../assets/data/products.json');

const ProductContainer = () => {
    const [product, Setproduct] = useState([]);

    useEffect(() =>{
        Setproduct(data);
        return () =>{
            Setproduct([])
        }
    }, [])

    return (
        <View>
           <Text>Product conatiner</Text> 
           <View style={{marginTop:100}}>
                <FlatList 
                data={product}
                    renderItem={({ item }) => <ProductList key={item.id}item={item}/>}
                    keyExtractor={item => item.name}
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ProductContainer;
