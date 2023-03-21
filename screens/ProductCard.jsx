import React from 'react';
import { View, StyleSheet, Text, Dimentions, Button, Image } from 'react-native';

var {width} = Dimentions.get('window');

const ProductCard = props => {
  const {name, price, image, countInstock} = props;
  return(
    <View style={styles.container}>
        <Image style={styles.image}/>
          <View style={styles.image}/>
          <Text style={styles.title}>
            
          </Text>
        <View></View>
    </View>
  )
};

const styles = StyleSheet.create({
    container :{
        width: width/2 - 20,
        height: width /1.7,
        padding:10,
        borderRadius:10,
        marginLeft:10,
        alignItems:'center',
        elevation:'white'
    },

    image:{
        width: width / 2 - 20 -10,
        heigth:width/2 -20-30,
        backgroundColor:'transparent',
        width:width/2-20-10

    },

    title: {
        fontWeight:"bold",
        fontSize:14,
        textAlign:'center',
    }

    }
}
 
export default ProductCard;
