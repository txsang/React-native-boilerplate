import { Platform, StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  newsWrapContent: {
    paddingHorizontal: 15
  },
  newsTitle: {
    fontSize: 25,
    color: '#50565a',
    marginBottom: 15,
    marginTop: 15
  },
  newsDesc: {
    fontSize: 15,
    color: '#50565a',
    paddingBottom: 20
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#50565a',
    marginBottom: 20,
    opacity: 0.5
  },
  heading: {
    color: '#999',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 15,
    alignSelf: 'center',
    textAlign: 'center'
  },
  desc: {
    color: '#999',
    fontSize: 30,
    marginBottom: 30,
    alignSelf: 'center',
    textAlign: 'center'
  }
});

export default HomeStyle;