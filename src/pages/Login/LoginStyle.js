import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  appLogoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 190,
    height: '80%',
    resizeMode: 'stretch',
    tintColor: 'rgba(242, 83, 68, 0.2)'
  },
  appLoginFormWrapper: {
    flex: 2,
    paddingTop: 50,

  },
  input: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    marginHorizontal: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: 'white',
    borderRadius: 20,
    borderColor: '#F25244',
    borderWidth: 0.5,
  },
  loginFormSubmit: {
    backgroundColor: '#F25244',
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minHeight: 45
  },
  loginFormSubmitText:{
    color: '#F0F1F2',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.2,
  }
});
