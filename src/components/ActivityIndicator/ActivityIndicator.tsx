import {ActivityIndicatorProps, ActivityIndicator as RNActivityIndicator} from 'react-native';
import { Theme, ThemeColor } from '../../theme/theme';
import { useTheme } from '@shopify/restyle';

                        //Oculta a propriedade color do ActivityIndicatorProps
interface props extends Omit<ActivityIndicatorProps,'color'> {
    color:ThemeColor;
}
export function ActivityIndicator({color}:props){
    const {colors} = useTheme<Theme>();
    return <RNActivityIndicator color={colors[color]} />;
}