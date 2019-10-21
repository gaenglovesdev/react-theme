import React from "react";
import styled from "styled-components";
import "./reset.css";
import { Input, Button, Checkbox, Radio, RadioGroup } from "./theme/";
function Root() {
  const buttonPrefix = () => <span role="img">🚫</span>;
  const handleClick = ({ target }) => {
    console.log(target);
  };
  const handleChange = ({ target }) => {
    console.log(target.value);
  };

  const InputAfter = () => <Button type="primary">Search</Button>;
  return (
    <div className="Root" style={{ padding: "50px" }}>
      <Section>
        <Title>Button</Title>
        <Button>Default</Button>
        <Button type="danger">danger</Button>
        <Button type="success">success</Button>
        <Button type="primary">primary</Button>
        <Button type="warning">warning</Button>
        <Button type="info">info</Button>
        <Button prefix={buttonPrefix} disabled>
          disabled
        </Button>
        <Button onClick={handleClick}>Click</Button>
      </Section>
      <Section>
        <Title>Input</Title>
        <Input placeholder="default" />
        <br />
        <br />
        <Input type="password" placeholder="password" />
        <br />
        <br />
        <Input placeholder="Keyword Here" after={InputAfter} />
        <br />
        <br />
        <Input placeholder="Change Event" onChange={handleChange} />
      </Section>
      <Section>
        <Title>Checkbox</Title>
        <Checkbox />
        <br />
        <br />
        <Checkbox label="Checkbox with label" />
        <br />
        <br />
        <Checkbox disabled label="disabled" />
        <br />
        <br />
        <Checkbox onChange={handleChange} label="event" />
      </Section>
      <Section>
        <Title>Radio</Title>
        <Radio label="A" name="test1" />
        <br />
        <br />
        <RadioGroup>
          <Radio label="B" name="test2" />
          <Radio label="C" name="test2" />
        </RadioGroup>
      </Section>
    </div>
  );
}
const Section = styled.section`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default Root;
