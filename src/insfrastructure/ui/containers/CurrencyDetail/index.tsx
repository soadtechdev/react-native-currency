import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Text from '../../components/Text';
import Wrapper from '../../components/Wrapper';
import useCurrencyDetail from './hooks/useCurrencyDetail';
import {useAsync} from '../../../hooks';
import colors from '../../../themes/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type routeType = {
  key: string;
  name: string;
  params: string;
};

type RootStackParamList = {
  currencyDetail: undefined;
  currencyDetailComments: {idCurrency: number};
};

interface CurrencyDetailProps {
  route: routeType;
}

export default function CurrencyDetail({
  route,
}: CurrencyDetailProps): JSX.Element {
  const {currency, getCurrencyDetail} = useCurrencyDetail(route.params);
  useAsync(getCurrencyDetail);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'currencyDetail'>
    >();
  function handlerBack() {
    navigation.goBack();
  }
  console.log('currency', currency);
  return (
    <Wrapper>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlerBack}>
          <Icon name="arrowleft" size={25} color={colors.white} />
        </TouchableOpacity>
        <Text customStyles={styles.text}>{currency.name} Detail</Text>
      </View>
    </Wrapper>
  );
}
