import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopColor: '#333333',
    borderTopWidth: 1
  },
  imageContainer: {
    marginBottom: 16,
    alignItems: 'center'
  },
  textEmpty: {
    color: "#808080",
    fontSize: 14,
    fontFamily: 'inter-regular',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center'
  },
  textEmptyBold: {
    fontFamily: 'inter-bold',
    fontWeight: 'bold',
  }
})

export default style;