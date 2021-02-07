import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { loginS } from "../Api";


export default class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
    isTextValid: true,
  };


  //login is an asynchronous function as it needs to wait for the response from the server
  _login = async () => {
    try {
      const success = await loginS(this.state.username, this.state.password); //successful authentication, then it returns true and continue to Main Screen, otherwise an error is thrown
      this.props.navigation.navigate("Main");
    } catch (err) {
      const errMessage = err.message;  //documentation, eeror has a key called .message
      this.setState({ err: errMessage });
    }
  };


  validateText = () => {
    //validate that an actual string was entered for both username and password
    if (this.state.username.length >= 1 && this.state.password.length >= 1) {
      return this.setState({ isTextValid: false });
    } else {
      return this.setState({ isTextValid: true });
    }
  };

  //update username and password and validate text to ensure all fields are filled and filled correctly

  handleUsernameUpdate = (username) => {
    this.setState({ username }, this.validateText);
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password }, this.validateText);
  };

  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar backgroundColor="blue" />

          <Text style = {{fontSize: 25, textAlign: 'center', paddingTop: 20, fontFamily: 'sans-serif', fontWeight:'bold'}}>Safe Travels</Text>

          <Text style={styles.text}>You are currently logged out.</Text>

          <Text style={styles.errText}> {this.state.err} </Text>

          <TextInput
            placeholder="username"
            value={this.state.username}
            onChangeText={this.handleUsernameUpdate}
            autoCapitalize="none"
            style={styles.inputContainer}
            placeholderTextColor="#000"
          />

          <TextInput
            placeholder="password" //password should be secured, thus secureTextEntry is used
            value={this.state.password}
            onChangeText={this.handlePasswordUpdate}
            autoCapitalize="none"
            style={styles.inputContainer}
            secureTextEntry
            placeholderTextColor="#000"
          />

          <Text style = {{paddingTop: 10}}></Text>

          <Button title="Press to Log In" 
            style = {{borderWidth: 20}}  
            //onPress= { () => {this._login}} //this would have been the code to execute if communication with the server was successful, however since that code was not finished, a simple navigation to the next page was implemented
            onPress = {() => {this.props.navigation.navigate('Main') }}
            disabled={this.state.isTextValid}
          />

          <Text style = {{paddingTop: 10}}>

          </Text>

          <Button title="Press to Sign Up" style = {{paddingTop:20}} onPress= { () => {this.props.navigation.navigate('Sign Up') } } />

        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: "center",
    flex: 1,
    //marginTop: 50,
    
    backgroundColor: '#abd'
  },

  text: {
    textAlign: "center",
    fontSize: 22,
    padding: 50
  },
  inputContainer: {
    padding: 4,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
  },
  errText: {
    color: "red",
  },
});

