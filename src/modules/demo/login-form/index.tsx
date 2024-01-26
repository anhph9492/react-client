import { Button, InputForm } from "@/components/atoms";
import Form from "components/molecules/form";
import { Message, useForm } from "react-hook-form";

const LoginDemo = () => {
  const { handleSubmit, control, getValues, formState, setError, setValue, trigger } = useForm<FormValues>({
    defaultValues: {},
    mode: "onSubmit",
  });
  const onSubmit = (data: AnyType) => {
    console.log(data);
  };
  const onError = (e: AnyType) => {
    console.log("submit errr", e);
    console.log("formState - ", formState);
    console.log("formState.errors - ", formState.errors);
  };
  const doLogin = async () => {
    handleSubmit(onSubmit, onError)();
  };

  const handleValidateUsername = (_value: string | number): true | string => {
    return 'loi roiiii hhih'
    return true
  }
  const test = async () => {
    // setValue('username', 'hahahahaaha', {shouldValidate: true})

    // const res = await trigger('username')
    // console.log("res - ", res)

  }

  return (
    <Form>
      <InputForm
        control={control}
        name="username"
        onValidate={handleValidateUsername}
        // rules={{ validate: validateUsername }}
      />
      <InputForm
        control={control}
        name="password"
        rules={{ min: { value: 2, message: "nhieu hon 2 ky tu" } }}
        type={"password"}
      />
      <Button onClick={doLogin}> Login </Button>
      <Button onClick={test} >test</Button>
    </Form>
  );
};

export default LoginDemo;
