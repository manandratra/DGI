import React from 'react';
import {ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'; 

//Fake datas
const declarationDetails = [
    [ 17089, "Null", "2017", "IS" ],
    [ 17090, "Null", "2017", "IS" ],
    [ 17091, "Null", "2017", "IS" ],
    [ 17093, "Null", "2017", "IS" ],
    [ 17094, "Null", "2017", "IS" ],
    [ 17095, "Null", "2017", "IS" ],
    [ 17096, "Null", "2017", "IS" ],
    [ 17097, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
    [ 17098, "Null", "2017", "IS" ],
  ]

function DataTable(){
    return(
    <ScrollView style={{marginTop: -1}}>
        <Table borderStyle={{borderColor: '#ffa1d2'}}>
            <Rows data={declarationDetails}/>
        </Table>
  </ScrollView>
    )
}

export default DataTable