import { Input as InputLib, InputProps as InputPropsLib, InputRef } from "antd";
import { Ref } from "react";

export type InputProps = {
  inputRef?: Ref<InputRef>;
} & InputPropsLib;

const Input = ({ inputRef = null, ...res }: InputProps) => {
  return <InputLib {...res} ref={inputRef} />;
};

export default Input;
