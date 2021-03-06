import {StyleSheet} from 'react-native'
import base from '../base.styles.js'

export const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    backgroundColor: base.colors.backgroundPrimary,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  textBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userProfile: {
    marginBottom: base.spacings.XS,
  },
  postList: {
    marginTop: base.spacings.XS,
  },
});
