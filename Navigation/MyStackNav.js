import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";

const MyStackNav = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    CoffeeCart: CoffeeCart,
    CoffeeDetail: CoffeeDetail,
    CoffeeList: CoffeeList
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default MyStackNav;
