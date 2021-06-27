/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";
import { FiTrash2, FiMinusCircle, FiPlusCircle, FiRefreshCcw, FiEdit, FiArrowUp, FiDatabase, FiArrowDown } from 'react-icons/fi';
//import {fa-times} from 'react-native-vector-icons/FontAwesome';
// import {todoItems} from "/constants/cart";



export default function App() {
  const [getInputText, setInputText] = useState('');
  const [getList, setList] = useState(todoItems);
   const [editingItem, setEditingItem] = useState(0);


  const addItem = () => {
    console.log(getInputText);
    setList([
      ...getList,
      {key:Math.random().toString() , data:getInputText}
    ]);
    setInputText('');
  }
  const editItem = (item) => {
  setInputText(item.data);
  setEditingItem(item.key);
  }
  const updateItem = () => {
    setList(list => getList.map(item =>
      item.key === editingItem ?
        {key: item.key, data: getInputText} : item
    ));
    setInputText("");
    setEditingItem(0);
  }
  const  removeItem = (itemKey) => {
    var list = getList.filter(item => item.key != itemKey)
    setList(list);
  }

  const scrollView = (
    
    <ScrollView style={styles.scrollview}>
    
      {getList.map((item, index) =>
        <TouchableOpacity
          key= {item.key}
          activeOpacity={0.7}
          onPress= {() =>editItem(item) }
        
        >
          <View
            style={styles.scrollItem}
          >
            <Text style={styles.scrollviewText}>{index + 1} : {item.data}</Text>
            <View style={{backgroundColor: "white", borderRadius: 30, padding: 7}}>
              <Text style={styles.removeText} onPress= {() => removeItem(item.key)}>Remove </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ScrollView>
  );



  return (
    <View style={styles.sectionContainer}>
      <View >
        <Text style={{fontSize: 20,  color: "#008080" ,margin:15,  fontFamily: 'sans-serif-medium' }}>React Shopping Cart</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput }
          placeholder= "Enter Items"
          onChangeText={text => setInputText(text)}
          value={getInputText}
        />
        <TouchableOpacity activeOpacity={0.7} onPress = {addItem} disabled={getInputText.length <=0 }>
          <View style={{backgroundColor:'white', padding: 10, marginLeft:2, borderRadius:30 , paddingHorizontal: 10}}>
            <Text style={{color: "#008080", fontSize: 20}}> Add Items </Text>
          </View>
        </TouchableOpacity>

        {/*<Button
        width= "70%"
        title="Add"
        onPress={addItem}
        disabled={getInputText.length <= 0}
        /> */}

      </View>
      {getList.length <= 0 ? emptyScrollView: scrollView}
    </View>
  );
}


const todoItems = [
  {key: Math.random().toString(), data: "Item 1"},
  {key: Math.random().toString(), data: "Item 2"},
  {key: Math.random().toString(), data: "Item 3"},
  {key: Math.random().toString(), data: "Item 4"}
]

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:5
  },
  inputContainer:{
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center"
  },
  textInput:{
    borderColor: "#008080",
    width: '80%',
    fontSize: 20,
    borderBottomWidth: 3,
    marginRight: -80
  },
  scrollItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#008080',
    width: "90%",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignSelf: "center"
  },
  scrollviewText:{
    fontSize: 25,
    color: "white",
  },
  scrollview:{
    width: "100%",
  },
  removeText:{
    fontSize: 23,
    color: "#008080",
  }
});
