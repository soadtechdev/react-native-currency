import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../../../themes/colors';
interface Styles {
  container: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
