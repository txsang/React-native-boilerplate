import { Platform, StyleSheet} from 'react-native';

const Global = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 20,
  },
  navBarLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10
  },
  navBarRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  navbarTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }
});

export default Global;