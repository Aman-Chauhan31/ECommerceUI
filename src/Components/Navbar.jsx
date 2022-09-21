import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  font-weight: bold;
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DEXTER.CO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
