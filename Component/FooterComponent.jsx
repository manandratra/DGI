/**
 * @author Manandratra
 * @email alin.manandratra@gmail.com
 * @create date 2022-05-25 10:56:21
 * @modify date 2022-05-25 10:56:21
 * @desc [description]
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FooterComponent() {
  return (
    <View style={styles.container}>
      <Text>FooterComponent</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "60%"
    }    
})
