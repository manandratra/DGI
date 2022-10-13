/**
 * @author Manandratra
 * @email alin.manandratra@gmail.com
 * @create date 2022-05-25 09:55:58
 * @modify date 2022-05-25 09:55:58
 * @desc [description]
 */
import { StyleSheet, View, Text, TextInput, Button, Div } from 'react-native';
import React, {Component} from 'react';
import {Link } from "../react-router";
import { AxiosProvider, Request, Get, Delete, Head, Post, put, Patch, withAxios } from 'react-axios';
// import {getUserInfo} from "./Services/FetchUser";

export default class AuthentificationComponent extends Component{
   
    constructor(){
      super();
      this.state={
        nif: '',
        password: '',
        error: false
      }
      this.handleChangeNif = this.handleChangeNif.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.url = "/Home";
    }
     
    handleChangeNif(e) {
      this.setState(
        {
          nif: e.nativeEvent.text
        }
      );
    }
    handleChangePassword(e){
      this.setState(
        {
          password: e.nativeEvent.text
        }
      )
    }
    handleSubmit(){
      console.log(this.state.nif);
      console.log(this.state.password)      
    }

    render() {
    return (
      <View>
        <Text style={styles.Text1}>Solution mobile pour vos declarations sur les impots sythetiques et les TVA</Text>
        <View style={styles.Container1}>
          <Text style={styles.Text2}>Connexion</Text>
          <View style={styles.Container2}>
            <Text style={styles.Label}>Numero Nif:</Text>    
            <TextInput style={styles.TextInput} placeholder="Numero NIF" onChange={this.handleChangeNif}/>       
          </View>
          <View style={styles.Container2}>
            <Text style={styles.Label}>Mot de passe:</Text>    
            <TextInput type="password" style={styles.TextInput} placeholder="Mot de passe" onChange={this.handleChangePassword}/>       
          </View>
          <View style={styles.Container3}>
          <div>
          {/* <Text>{this.state.nif}</Text>
          <Text>{this.state.password}</Text> */}
          <Get url="http://localhost:8000/api/showUtilisateur/{this.state.nif}">
            {
              (error, response, isLoading, makeRequest, axios)=>{
                if(error){
                  return(<div>Something bad has happened: {error.message} <button onClick = {() => makeRequest({params: {reload: true}})}>Retry</button> </div>)
                }
                else if(isLoading){
                  return(<div>Loading...</div>)
                }
                else if(response!==null){
                  console.log(response.data)
                  if(this.state.nif == response.data.nif && this.state.password == response.data.password){
                    return(<div> 
                    <Link to={this.url+"/"+this.state.nif}>
                        <Button color="#01874A" title="Se connecter" onClick={this.handleSubmit}/>
                    </Link>
                  </div>)
                  }
                }
                return(
                  /**
                   * Vrai
                   */
                  // <div>Veuiller entrer des informations valides pour l'Authentification</div>
                  
                  /**
                   * Pour Developpement
                   */
                  <Link to={this.url+"/"+this.state.nif}>
                        <Button color="#01874A" title="Se connecter" onClick={this.handleSubmit}/>
                  </Link>
                  )
              }
            }      
          </Get>
        </div>
          </View>
        </View>
        <Text style={styles.Text1}>Vous avez oublié votre mot de passe?</Text>
        <Text style={styles.Text1}>Contactez votre gestionnaire</Text>
      </View>

    )
}}

const styles = StyleSheet.create({
    Container1: {
        marginTop: "19%",
        marginLeft:"10%",
        marginRight:"10%",
    },
    Text1: {
        color: "grey",
        textAlign:"center",
        marginRight:"10%",
        marginLeft:"10%",
    },
    Text2: {
        color: "#FF4D00",
        textAlign:"center",
        fontSize: "150%",
        paddingBottom:"5%"
    },
    TextInput:{
        paddingTop:"5%",
    },
    Label:{
        paddingTop:"6%"
    },
    Container3:{
        marginTop: "10%",
    },
})