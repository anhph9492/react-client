import { FormEvent, FormHTMLAttributes } from "react";

export type FormProps = {
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form = ({ children, ...res }: FormProps) => {
  const defaultSubmit = (event: FormEvent) => {
    event.preventDefault(); 
  }
  return <form {...res} onSubmit={defaultSubmit}>{children}</form>;
};

export default Form;
