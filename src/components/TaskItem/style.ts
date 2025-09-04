import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  viewContainer: {
    flexGrow: 1,
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2, // Para Android 
  },
  buttonChecked: {
    width: 24,
    height: 24,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewNoChecked: {
    width: 17,
    height: 17,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 999
  },
  viewChecked: {
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#5E60CE",
    borderRadius: 999
  },
  textTask: {
    flex: 2,
    fontSize: 14,
    lineHeight: 21,
  },
  removeButton: {
    width: 32,
    height: 32,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default style;