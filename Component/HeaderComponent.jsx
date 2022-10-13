/**
 * @author Manandratra
 * @email alin.manandratra@gmail.com
 * @create date 2022-05-25 09:56:04
 * @modify date 2022-05-25 09:56:04
 * @desc [description]
 */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function HeaderComponent() {
  return (
    <View style={styles.image2Row}>
        <Image
          source={require("../assets/téléchargement.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Image
          source={require("../assets/DGI.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
  );
}
const styles = StyleSheet.create({
    image2: {
        width: "23%",
        height: "50%",
      },
      image: {
        width: "25%",
        height: "50%",
        marginLeft:"56%",
      },
      image2Row: {
        height: "15%",
        flexDirection: "row",
      },
})
