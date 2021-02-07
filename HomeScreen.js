import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";


// Due to time constraints, instead of a QR code, for this prototype version, the user would only be required to enter a unique ID which is supposed to be validated by sending data to the server and server responding


export default class HomeScreen extends React.Component{

  state= {
    CarId : "",
  }

  handleCarID = (CarID) => {
    this.setState({ CarID });
  };


  render(){
    return (
      <View style = {styles.container}>
        <StatusBar backgroundColor="blue" />

        <Text style = {styles.heading}>
          Scan the QR code here!
        </Text>

      <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Car ID :  "
            placeholderTextColor="#000"
            style={styles.textIn}
            value={this.state.MovieName}
            onChangeText={this.handleInput}
          />
          <TouchableOpacity
            disabled={this.state.isTextValid}
            onPress={() => {
              this.onSearch();
            }}
          >
            <Octicons name="search" size={38} color="#000" />
          </TouchableOpacity>
        </View>
        

      </View>
    );
  }
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    paddingBottom: 150,
  },
  container: {
    //justifyContent: "center",
    flex: 1,
    backgroundColor: "#abd",
  },
  inputContainer: {
    padding: 31,
    paddingHorizontal: 40,
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "grey",
    margin: 5,
    borderRadius: 29,
  },
  textIn: {
    paddingHorizontal: 20,
    flexDirection: "row",
    fontSize: 30,
    fontStyle: "italic",
  }
})