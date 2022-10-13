/**
 * @author Manandratra
 * @email alin.manandratra@gmail.com
 * @create date 2022-05-27 15:45:51
 * @modify date 2022-05-27 15:45:51
 * @desc [description]
 */

import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { AxiosProvider, Request, Get, Delete, Head, Post, put, Patch, withAxios } from 'react-axios';
import {Link } from "../react-router";


//Options for "Etat de declaration"
const E_OPTIONS = [
  {
    item: 'En cours',
    id: 'EnCours'
  },{
    item: 'Validé',
    id: 'Valid',
  }
]

//Options for Année
const A_OPTIONS = [
  {
    item: '2017',
    id: '2017'
  },{
    item: '2018',
    id: '2018',
  }
]

//Options for "Mois"
const M_OPTIONS = [
  {
    item: 'Janvier',
    id: 'Janvier'
  },{
    item: 'Fevrier',
    id: 'Fevrier',
  },{
    item: 'Mars',
    id: 'Mars',
  },{
    item: 'Avril',
    id: 'Avril',
  },{
    item: 'Mai',
    id: 'Mai',
  },{
    item: 'Juin',
    id: 'Juin',
  },{
    item: 'Juillet',
    id: 'Juillet',
  },{
    item: 'Aout',
    id: 'Aout',
  },{
    item: 'Septembre',
    id: 'Septembre',
  },{
    item: 'Octobre',
    id: 'Octobre',
  },{
    item: 'Novembre',
    id: 'Novembre',
  },{
    item: 'Decembre',
    id: 'Decembre',
  }
]

const T_OPTIONS = [
  {
    item: 'Impots Synthetique',
    id: 'IS'
  },{
    item: 'Impots Synthetique Transport',
    id: 'IST',
  },{
    item: 'Taxes su les Valeurs Ajoutés',
    id: 'TVA',
  }
]

 //Headers
 const headers = [
  ["Ref_decl", "Mois", "Année", "Impots"]
]


function ListComponent() {

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedMonths, setSelectedMonths] = useState([])
  const [selectedTaxe, setSelectedTaxe] = useState({})

  const url = window.location.href;
  const tab = url.split("/");
  const nif = tab[tab.length-1];
  var Nif = 0;
  var DocState = '';
  var idVersion = 0;
  var ref = 0;
  var mois = 0;
  var annee = 0;
  var type = '';
  var error = false;
  return (
    <ScrollView style={{ margin: "0",}}>
      <View style={{ width: '100%', alignItems: 'center',  }}>
       <Text style={ {
              textAlign:"center",
              color: "grey",
              fontSize: "100%"
            }}>{nif}</Text>
      </View>
      <Text style={{ fontSize: "100%", paddingBottom: "4%", }}>Filtre:</Text>
      <Text style={{ fontSize: "100%", paddingBottom: "4%" }}>Etat de declaration</Text>
      <SelectBox
        label="Choisissez un etat"
        options={E_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View style={{ height: 40 ,}} />
      <Text style={{ fontSize: "100%", paddingBottom: "4%" }}>Periode:</Text>
      <SelectBox
        label="Année"
        options={A_OPTIONS}
        selectedValues={selectedYears}
        onMultiSelect={onMultiChangeYear()}
        onTapClose={onMultiChangeYear()}
        isMulti
      />
      <View>
      <SelectBox
        label="Mois"
        options={M_OPTIONS}
        selectedValues={selectedMonths}
        onMultiSelect={onMultichangeMonth()}
        onTapClose={onMultichangeMonth()}
        isMulti
      />
    </View>
    <Text style={{ fontSize: "100%", paddingBottom: "4%" }}>Type d'impots</Text>
      <SelectBox
        label="Choisissez un Type"
        options={T_OPTIONS}
        value={selectedTaxe}
        onChange={onChangeTaxe()}
        hideInputFilter={false}
      />
      <View style={{}}>
            <Text style={{ fontSize: "100%", paddingBottom: "0%" }}>Liste de vos declarations:</Text>
      </View>
      <ScrollView>
        <div>
          <Get url="http://localhost:8000/api/indexDeclaration/{nif}">
            {
              (error, response, isLoading, makeRequest, axios)=>{
                if (error) {
                  return(<div>Something bad has happened: {error.message} <button onClick = {() => makeRequest({params: {reload: true}})}>Retry</button> </div>)
                }
                else if(isLoading){
                  return(<div>Loading...</div>)
                }
                else if(response!==null){
                  console.log(response.data)
                  var decl = response.data.map((dec)=>(<Link to={"/Form/"+dec.idVersion}>{JSON.stringify(dec.id, null, 2)+" "+JSON.stringify(dec.ref, null, 2)+" "+JSON.stringify(dec.mois, null, 2)+" "+JSON.stringify(dec.annee, null, 2)+"  "+JSON.stringify(dec.type, null, 2)+"  "+JSON.stringify(dec.DocState, null, 2)}</Link>))
                  console.log(decl)
                  return(
                    <div>
                      {decl}
                    </div>
                  )
                }
                return(
                  <div>Veuiller selectionner un filtre pour vos declarations</div>
                )
              }
            }
          </Get>
        </div>
      </ScrollView>
    </ScrollView>
  )

  function onMultiChangeYear() {
    return (item) => setSelectedYears(xorBy(selectedYears, [item], 'id'))
  }

  function onMultichangeMonth(){
    return (item) => setSelectedMonths(xorBy(selectedMonths, [item], 'id'))
  }

  function onChangeTaxe(){
    return (item)=> setSelectedTaxe(xorBy(selectedTaxe, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default ListComponent