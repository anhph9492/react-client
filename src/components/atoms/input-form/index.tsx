import { Flex, Typography } from "antd";
import {
  Control,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Input from "../input";
import { ChangeEvent } from "react";
const { Text } = Typography;

type InputFormProps = {
  type?: "text" | "number" | "password";
  control: Control<FieldValues>;
  name: string;
  // rules?: RegisterOptions
  onValidate?: (value: string | number) => true | string;
  onChange?: (event: ChangeEvent) => void;
  onBlur?: () => void;
} & UseControllerProps<FormValues>;
export const InputForm = (props: InputFormProps) => {
  const { type = "text", onValidate, onChange, onBlur, control, name } = props;
  const userControllerProps: UseControllerProps = { control, name };
  if (onValidate) {
    userControllerProps.rules = { validate: onValidate };
  }
  const {
    field,
    fieldState: { isDirty, isTouched, invalid, error },
  } = useController(userControllerProps);
  const handleOnChange = (event: ChangeEvent): void => {
    field.onChange(event);
    if (onChange) {
      onChange(event);
    }
  };
  const handleOnBlur = () => {
    field.onBlur();
    if (onBlur) {
      onBlur();
    }
  };
  return (
    <Flex vertical={true}>
      <Input
        onChange={handleOnChange} // send value to hook form
        onBlur={handleOnBlur} // notify when input is touched/blur
        value={field.value} // input value
        name={field.name} // send down the input name
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
        placeholder={props.name}
        type={type}
      />
      <Flex gap={"small"}>
        <Text>{isTouched && "Touched"}</Text>
        <Text>{isDirty && "Dirty"}</Text>
        <Text>{invalid ? "invalid" : "valid"}</Text>
        <Text type={"danger"}>{error?.message || ""}</Text>
      </Flex>
    </Flex>
  );
};
