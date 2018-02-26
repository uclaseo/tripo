import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Upcoming = styled.div`
  background-color: blue;
  width: 100%;
  text-align: center;
  padding: 30px;
`;
export const Wrapper = styled.div`
  margin: auto;
  margin-top: 5%;
  background-color: yellow;
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: row;
  border-radius: 1.5%;
`;

export const StyledLink = styled(Link)`
  flex: 1;
`;