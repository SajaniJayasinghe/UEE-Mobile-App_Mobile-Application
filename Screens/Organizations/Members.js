import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "react-native-dynamic-search-bar";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Members({ organizationID }, { navigation }) {
  const [organization, setorganization] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://life-below-water.herokuapp.com/api/organization/${organizationID}`
      )
      .then((res) => {
        if (res.data.success) {
          setorganization(res.data.existingOrganizations);
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "900",
          // opacity: 0.6,
          textAlign: "center",
          fontSize: 26,
          marginTop: 10,
        }}
      >
        {organization.organizationName} Members
      </Text>
      <SearchBar
        placeholder="Search here"
        fontColor="#000000"
        iconColor="#000000"
        shadowColor="#000000"
        cancelIconColor="#000000"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />

      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {organization.map((organization, index) => (
          <View key={organization + index}>
            <TouchableOpacity
              style={[styles.containerx, styles.ButtonDark]}
              onPress={() => navigation.navigate("ForiegnPassengerDashboard")}
            >
              <View
                style={{
                  padding: 5,
                  margin: 21,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.text}>
                  {organization.organizationMembers[0].name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          // </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 430,
    height: 300,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  log: {
    width: 350,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  log2: {
    width: 375,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    marginLeft: -10,
    flexDirection: "row",
  },
  ButtonDark: {
    height: 70,
    width: 350,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    borderRadius: 100,
    marginLeft: 5,
  },
  containerx: {
    backgroundColor: "#ADDFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    minWidth: 78,
    paddingLeft: 3,
    paddingRight: 3,
  },
});