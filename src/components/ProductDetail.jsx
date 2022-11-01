import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Caption, Headline } from "react-native-paper";
import NumericInput from "react-native-numeric-input";
import { useSelector } from "react-redux";

export default function ProductDetail({ route }) {
    //const {id, name, price, description, image, category} = props;
    const { detail } = useSelector((state) => state) 
    const {category, description, id, image, name, price, title} = route.params.selectedProduct

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Image source={{uri: image}} style={styles.image} alt="Image" />
                <Caption style={{letterSpacing: 2, alignItems: "center", marginBottom:2, marginTop: 20}}>{category}</Caption>
                <Headline style={styles.name}>{title}</Headline>
                <Headline style={styles.price}>${price}</Headline>
                <Button icon="cash" mode="contained" style={styles.carting} onPress={() => alert("Añadido al carrito!")}>ADD TO CART</Button>
                <Text style={styles.description}>Description: {description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingRight: 50,
        padding: 12,
        backgroundColor: '#7d7d7d'
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
         borderRadius: 12
    },
    name: {
        lineHeight: 20,
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 18,
       
    },
    price: {
        fontWeight: "bold",
        color: "green",
        fontSize: 19
    },
    description: {
        lineHeight: 24,
        fontSize: 16
    },
    carting: {
        backgroundColor: "#C7D31E",
        color: "white",
        marginTop: 15,
        marginBottom: 15
    }
})

