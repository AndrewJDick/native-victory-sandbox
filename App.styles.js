import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 50;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #666;
  padding: 20px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  border-radius: 4;
  background-color: white;
  margin-top: 8;
  margin-bottom: 8;
`;
