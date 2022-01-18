import React from "react";
import {
  Input,
  TextArea,
  FormButton,
  FormStyled,
  ErrorMessage,
} from "./FormaSectionStyles";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormaSection = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "${process.env.NEXT_PUBLIC_API_URL}/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.data.status === 200) {
        console.log("Success");
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          type="text"
          placeholder="Ime"
          {...register("ime", {
            required: {
              value: true,
              message: "Ovo polje je obavezno.",
            },
            minLength: {
              value: 2,
              message: "Prekratka reč da bi bila ime. (< 3)",
            },
          })}
        />
        <ErrorMessage>{errors?.ime?.message}</ErrorMessage>

        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Ovo polje je obavezno.",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Ovo nije validna email adresa",
            },
          })}
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <TextArea
          placeholder="Vaša poruka"
          {...register("poruka", {
            required: {
              value: true,
              message: "Ovo polje je obavezno.",
            },
            minLength: { value: 5, message: "Prekratka poruka. (< 5)" },
            maxLength: {
              value: 5000,
              message: "Predugačka poruka, mora imati manje od 5000 karaktera.",
            },
          })}
        />
        <ErrorMessage>{errors?.poruka?.message}</ErrorMessage>
        <FormButton type="submit">POŠALJI UPIT</FormButton>
      </FormStyled>
    </>
  );
};

export default FormaSection;
