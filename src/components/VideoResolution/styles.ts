import {  StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
  },

  icon: {
    height: 20,
    width: 20,
    marginLeft: 5,
    tintColor: "#999999",
  },
  modalContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10000,
    justifyContent: "center",
  },
  modal: {
    marginTop:40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999999",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 10,
    marginRight: 60,
    marginBottom: 30,
  },
  modalHeading: {
    fontSize: 18,
    color: "white",
    paddingHorizontal: 4,
    fontWeight: "200",
    paddingBottom: 3,
  },

  modalSwitch: {
    padding: 3,
  },
  seperator: {
    borderBottomWidth: 0.4,
    borderBottomColor: "#fafafa",
    width: "94%",
    alignSelf: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#9999",
    textAlign: "center",
  },
  selectedQuality: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
  },
rendtionScrollContainer:{
    maxHeight:"80%",
  }

});
