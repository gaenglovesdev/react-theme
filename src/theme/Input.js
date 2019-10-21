import React from "react";
import styled from "styled-components";

const Input = ({ before, after, type, ...props }) => {
  const Before = before;
  const After = after;
  const InputInner = () => <InputStyle type={type ? type : "text"} {...props} />;

  if (Before || After) {
    return (
      <InputWrap>
        {Before ? (
          <InputWrapItem>
            <Before />
          </InputWrapItem>
        ) : (
          ""
        )}
        <InputWrapItem>
          <InputInner />
        </InputWrapItem>
        {After ? (
          <InputWrapItem>
            <After />
          </InputWrapItem>
        ) : (
          ""
        )}
      </InputWrap>
    );
  } else {
    return <InputInner />;
  }
};
const InputWrap = styled.div`
  display: inline-flex;
`;
const InputWrapItem = styled.div`
  position: relative;

  &:nth-of-type(1) {
    overflow: hidden;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    button {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &:nth-last-of-type(1) {
    overflow: hidden;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 0;

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  input {
    border-radius: 0;
  }
`;
const InputStyle = styled.input`
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 13px;
  height: 32px;
  outline: 0;
  padding: 0 5px;
  color: #777;

  &[disabled] {
    cursor: not-allowed;
  }
`;

export default Input;
