import React, { useState } from "react";
import styled from "styled-components";
import palette from "./palette";
import uuid from "uuid";

const Select = ({ placeholder, children, defaultValue, ...props }) => {
  const [value, setValue] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(uuid());

  const onToggleOptions = e => {
    e.stopPropagation();
    setVisible(!visible);
  };

  const handleChangeRadio = ({ target }, children) => {
    const { value } = target;
    setValue({
      value,
      label: children
    });
    setVisible(false);
  };
  return (
    <SelectBox>
      <SelectLabel
        placeholder={placeholder}
        value={value ? value.label : ""}
        {...props}
        readOnly
        onClick={() => setVisible(!visible)}
      />
      {visible && (
        <OptionWrap>
          {children.map(item => {
            return (
              <Option
                {...item}
                currentValue={value.value}
                name={name}
                onChange={e => handleChangeRadio(e, item.props.children)}
                key={uuid()}
              />
            );
          })}
        </OptionWrap>
      )}
    </SelectBox>
  );
};

const Option = componentProps => {
  const { props, name, currentValue, onChange } = componentProps;
  const { children, ...others } = props;
  return (
    <OptionItem disabled={others.disabled} className={currentValue === others.value ? "on" : ""}>
      <OptionLabel>
        <input type="radio" name={name} onChange={onChange} {...others} />
        <span>{children}</span>
      </OptionLabel>
    </OptionItem>
  );
};

Select.Option = Option;

const SelectBox = styled.div`
  display: inline-flex;
  position: relative;
  flex-flow: column wrap;
  justify-content: center;
  font-size: 13px;
  color: #777;

  &:focus {
    border-color: ${palette.lightPrimary};
  }
`;
const SelectLabel = styled.input`
  font-size: 13px;
  height: 32px;
  outline: 0;
  padding: 0 5px;
  min-width: 180px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const OptionWrap = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  transform: translateY(10px);
  max-height: 200px;
  overflow-y: auto;
`;
const OptionItem = styled.li`
  height: 30px;
  line-height: 30px;
  padding: 0 10px;

  &[disabled] {
    background-color: #ddd;
    color: #777;
    outline: none;
    cursor: not-allowed;

    &:hover {
      color: #777;
      background-color: #ddd;
    }
  }

  &.on {
    background-color: ${palette.lightPrimary};
    color: #fff;
  }

  &:hover {
    color: #000;
  }
`;
const OptionLabel = styled.label`
  display: block;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: inherit;

  &:focus {
    background-color: orange;
  }

  input[type="radio"] {
    position: absolute;
    left: -9999px;

    &:checked ~ span {
      background-color: ${palette.lightPrimary};
      color: #fff;
    }
  }
`;

export default Select;
