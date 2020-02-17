import React from "react";
import { Text, Form, Item, Input, Button } from "native-base";
import { View, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class GeneralTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adam Lane",
      email: "adam@invisionapp.com",
      password: "secret",
      birthday: new Date("1997-06-21"),
      birthdayVisible:false,
      location: "85 Main St, San Francisco, CA 94000"
    };
  }
  setBirthdayVisible(visible) {
    this.setState({birthdayVisible: visible});
  }
  render() {
    return (
      <Form style={{ marginLeft: 10 }}>
        <Item style={{ borderColor: "transparent" }}>
          <Image
            resizeMode="contain"
            source={require("../assets/name.png")}
            style={{ height: 20, width: 20 }}
          />
          <Input
            defaultValue={this.state.name}
            onChangeText={text => {
              this.setState({ name: text });
            }}
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D8D8D8",
              fontSize: 13
            }}
          />
        </Item>
        <Item style={{ borderColor: "transparent", paddingTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/email-b.png")}
            style={{ height: 20, width: 20 }}
          />
          <Input
            defaultValue={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D8D8D8",
              fontSize: 13
            }}
          />
        </Item>
        <Item style={{ borderColor: "transparent", paddingTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/password-b.png")}
            style={{ height: 20, width: 20 }}
          />
          <Input
            defaultValue={this.state.password}
            onChangeText={text => {
              this.setState({ password: text });
            }}
            secureTextEntry={true}
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D8D8D8",
              fontSize: 13
            }}
          />
        </Item>
        <Item style={{ borderColor: "transparent", paddingTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/birthday-b.png")}
            style={{ height: 20, width: 20 }}
          />
          <View
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D8D8D8",
              alignSelf: "stretch",
              flex: 1
            }}
          >
            <Text
                style={{ 
                  width: '100%',
                  paddingTop: 18,
                  paddingBottom: 9,
                  fontSize: 13
                }}
                onPress={()=>this.setBirthdayVisible(true)}>
                {this.state.birthday.toDateString()}
              </Text>
              <DateTimePickerModal
                isVisible={this.state.birthdayVisible}
                mode="date"
                onConfirm={(date)=>this.setState({birthday:date, errorMsgbday:false, birthdayVisible:false})}
                onCancel={()=>this.setState({ birthdayVisible:false})}
              />
          </View>
        </Item>
        <Item style={{ borderColor: "transparent", paddingTop: 10 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/location-b.png")}
            style={{ height: 20, width: 20 }}
          />
          <Input
            defaultValue={this.state.location}
            onChangeText={text => {
              this.setState({ location: text });
            }}
            style={{
              marginLeft: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#D8D8D8",
              fontSize: 13
            }}
          />
        </Item>
        <Button
          style={{
            backgroundColor: "#FF3366",
            width: "80%",
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
          rounded
        >
          <Text>Logout</Text>
        </Button>
      </Form>
    );
  }
}
