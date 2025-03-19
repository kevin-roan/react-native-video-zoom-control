import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 28,
    marginLeft: 20,
    marginBottom:10,
    marginRight: 20,
  },
  track: {
    backgroundColor: '#333',
    height: 2,
    position: 'relative',
    top: 14.5,
    width: '100%',
  },
  fill: {
    backgroundColor: '#FFF',
    height: 4,
    width: '100%',
  },
  handle: {
    position: 'absolute',
    marginLeft: -7,
    height: 32,
    width: 32,
  },
  circle: {
    borderRadius: 12,
    position: 'relative',
    top: 10,
    left: -5,
    height: 12,
    width: 12,
  },
});
