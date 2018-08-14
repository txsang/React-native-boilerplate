import { Platform, StyleSheet} from 'react-native';

const Global = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 20,
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default Global;