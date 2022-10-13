import React, {Component} from 'react';
import {ScrollView, View, Text, TextInput, Button} from 'react-native';
import {Link} from '../react-router';
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios} from 'react-axios';

export default class FormulaireComponent extends Component{
    constructor(){
        super();
        this.state={
            idVersion: '',
            idDecl: '',
            ligneNo: '',
            ligneDesc: '',
            error: false  
        }
    }
    render(){
    const url = window.location.href;
    const tab = url.split("/");
    const nif = tab[tab.length-1];
    return(
        <ScrollView>
            <View style={{ width: '100%', alignItems: 'center',  }}>
                <Text style={ {
                                textAlign:"center",
                                color: "grey",
                                fontSize: "100%"
                                }}>Version du Formulaire: {nif}</Text>
            </View>
            <View>
                <Text style={ {
                            color: "#FF4D00",
                            textAlign:"center",
                            fontSize: "150%",
                            paddingBottom:"5%"
                        }}>Formulaire de declaration</Text>
            </View>
            <View style={{paddingLeft:"5%"}}>
            <Text style={{paddingTop:"3%"}}>Periode:</Text>
            <Text style={{paddingTop:"3%"}}>Type de l'impot:</Text>
            </View>
            <View style={{padding:"5%"}}>
                <scrollView>
                    <Get url={"http://localhost:8000/api/showFormulaireLiquidation/1"}>
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
                                      return( 
                                      <div>
                                            {response.data.slice(15, 30).map((data)=>(<Text><label>{data.ligneDesc}: </label><TextInput type="text" placeholder={"..."+data.ligneDesc+"..."} style={{marginRight:2}}></TextInput> {"\n"}</Text>))}
                                            {"\n"}
                                        </div>
                                      )
                                    }
                                  return(
                                    <div>Aucune declaration</div>
                                    )
                                
                            }
                        }
                    </Get>
                </scrollView>
            </View>
            <View>
                <Text>{"\n"}</Text>
                    <label>IS à payer</label><TextInput type="text" placeholder="IS à payer"></TextInput><text>{"\n"}</text>
                    <label>Accomptes provisionnels payes durant l'exercice</label><TextInput type="text" placeholder="Accomptes provisionnels payes durant l'exercice"></TextInput><text>{"\n"}</text>
                    <label>IS net a Payer</label><TextInput type="text" placeholder="IS net à payer"></TextInput>
                <Button color="#01874A" title="Verifier" style={{marginTop: "5%"}}/>
                <Link to="/Home">   
                    <Button color="#01874A" title="Enregistrer"/>
                </Link> 
            </View>
            
        </ScrollView>
    )
}}