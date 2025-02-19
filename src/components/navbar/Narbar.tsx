import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Colonel from '../../assets/colonel.png';



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

const Logo = styled.h1`
  font-weight: bold;
  color: #8CC63E;

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #8CC63E;
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
        <img src={Colonel} alt="Logo" height="60px"/>
        <Logo onClick={() => {navigate('/')}}>   Colonel Kernel</Logo>
        </Left>
        <Right>
          <MenuItem onClick={() => {navigate('/register')}}>REGISTER</MenuItem>
          <MenuItem onClick={() => {navigate('/login')}}>SIGN IN</MenuItem>
          <MenuItem onClick={() => {navigate('/cart')}}>
            <Badge color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;