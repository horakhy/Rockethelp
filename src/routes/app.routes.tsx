import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home/Home'
import Details from '../components/Details/Details'
import Register from '../components/Register/Register'


const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="hoome" component={Home} />
      <Screen name="details" component={Details} />
      <Screen name="new" component={Register} />
    </Navigator>
  )
}
