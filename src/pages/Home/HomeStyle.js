import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0F1F2',
  },
  headerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  headerUserName:{
    fontSize: 24,
    fontWeight: "600",
    color: "#0D0D0D",

  },
  avatar:{
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#F25244",
  }

});