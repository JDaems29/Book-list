import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu secondary>
      <Menu.Item name="Home" active={activeItem === "home"} />
    </Menu>
  );
};

export default Header;
