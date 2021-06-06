import React from "react";
import styled from "styled-components";

interface Props {
  size: number;
  color: string;
}

const CircledColor = ({ size, color }: Props) => {
  return <Circle size={size} color={color} />;
};

const Circle = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
`;

export default CircledColor;
