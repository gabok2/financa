import { TouchableOpacity, View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  CellSignalHigh,
  CellSignalMedium,
  ChartBar,
  ChartPieSlice,
  HouseSimple,
  Plus,
} from 'phosphor-react-native';
import { Cadastrar } from '@screens/Cadastrar';
import { Graficos } from '@screens/Graficos';
import { Home } from '@screens/Home';
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';

type AuthRoutesParams = {
  Home: undefined;
  Cadastrar: undefined;
  Graficos: undefined;
};

export type AuthRoutesNavigationProp =
  BottomTabNavigationProp<AuthRoutesParams>;

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesParams>();

const PlusButton = () => (
  <View
    style={{
      backgroundColor: theme.colors.success,
      width: 55,
      height: 30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Plus size={20} color="#000000" />
  </View>
);

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.success,
        tabBarInactiveTintColor: theme.colors.cinza,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <HouseSimple
              size={27}
              color={focused ? theme.colors.success : color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          tabBarIcon: () => <PlusButton />,
        }}
      />
      <Screen
        name="Graficos"
        component={Graficos}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <ChartPieSlice
              size={27}
              color={focused ? theme.colors.success : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
