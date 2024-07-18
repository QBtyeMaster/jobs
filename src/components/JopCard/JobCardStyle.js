import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container:{
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor:"rgba(242, 83, 68, 0.05)",
    borderWidth: 1,
    borderColor: "#F25244",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    minHeight: 120
  },
  jobHeader:{
    color: "#0D0D0D",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 1.1,
    marginBottom: 5
  },
  jobCompany:{
    color: "#0D0D0D",
    fontSize: 14,
    marignBottom: 5
  },
  jobFooterContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  jobLocations:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2421B",
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  jobLocationText:{
    marginLeft: 5,
    color: "#ffffff",
    fontWeight: "500"
  },
  jobLevelText:{
    color: "#F2421B",
    fontWeight: "500",
  }
})


// #0E1B26 #1D2F40 #496373 #7292A6 #D7D9D9  
// #c5fffc