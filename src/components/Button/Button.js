import React, { useState } from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Title>You clicked {count} times</Title>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Wrapper>
  );
}

export default Example;