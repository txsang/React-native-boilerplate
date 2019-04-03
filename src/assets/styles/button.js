import { Platform, StyleSheet} from 'react-native';

const ButtonStyles = StyleSheet.create({
  buttonDefault: {
    backgroundColor: '#b10707',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: '#fff'
  }
});

export default ButtonStyles;