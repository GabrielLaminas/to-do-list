import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1A1A1A",
  },
  imageContainer: {
    marginBottom: 40
  },
  inputContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    fontSize: 16,
    fontFamily: 'inter-regular',
    fontWeight: 400,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderRadius: 6
  },
  addButton: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1E6F9F",
    borderRadius: 6
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  textInfo: {
    fontSize: 14,
    fontFamily: 'inter-bold',
    fontWeight: 'bold',
  },
  textCounter: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'inter-bold',
    fontWeight: 'bold',
    borderRadius: 999
  },
  list: {
    width: "100%"
  }
});

export default style;