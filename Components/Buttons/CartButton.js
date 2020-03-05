import React from "react";
import { Button, Icon } from "native-base";
import { withNavigation } from "react-navigation";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent>
      <Icon
        onPress={() => navigation.navigate("CoffeeCart")}
        name="cart"
        style={{ color: "white" }}
      />
    </Button>
  );
};

export default withNavigation(CartButton);
