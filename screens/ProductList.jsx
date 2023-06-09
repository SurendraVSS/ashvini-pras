import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { TouchableOpacity,Dimensions } from 'react-native';
import ProductCard from './ProductCard';

var{width}=Dimensions.get("window");


const ProductList = () => {
    const {item}= props;
    return (    
       <TouchableOpacity style={{width:'50%'}}>
        <View style={{width: width/2,backgeoundcolor:'gainsboro'}}>
            <ProductCard {...item} />
        </View>

       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default ProductList;
