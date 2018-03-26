import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Title: {
    fontSize: 45,
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 350,
  },
  SubTitle: {
    margin: 34,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
  },
  button: {
    backgroundColor: '#a3428a',
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom: 25,
    width: 300,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    alignSelf: 'center'
  },
  statusBar: {
    marginTop: 20,
    width: 375,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#474143',
  },
  statusText: {
    fontSize: 30,
    color: '#FFC636',
  },
});