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
  HSButton: {
    backgroundColor: '#f44842',
    borderRadius: 50,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 5,
    marginTop: 30,
    marginRight: 10,
    width: 100,
    height: 40,
    alignSelf: 'flex-end',
  },
  HSButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
    alignSelf: 'center'
  },
});