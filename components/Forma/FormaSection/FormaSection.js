import React, { useRef, useState } from "react";
import {
  Input,
  TextArea,
  FormButton,
  FormStyled,
  ErrorMessage,
  SuccessMessage,
} from "./FormaSectionStyles";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const FormaSection = () => {
  const [success, setSuccess] = useState(false);
  const reRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm();
  const { isSubmitting } = formState;
  async function onSubmitForm(values) {
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
       data: {
         ime: values.ime,
         email: values.email,
         poruka: values.poruka,
         token
       }
      
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        setSuccess(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={reRef}
      />
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
              message: "Prekratka reč da bi bila ime. (Manje od 3 karaktera.)",
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
            minLength: {
              value: 5,
              message: "Prekratka poruka. (Manje od 5 karaktera.)",
            },
            maxLength: {
              value: 5000,
              message: "Predugačka poruka, mora imati manje od 5000 karaktera.",
            },
          })}
        />
        <ErrorMessage>{errors?.poruka?.message}</ErrorMessage>
        <FormButton type="submit" disabled={isSubmitting}>
          {" "}
          {isSubmitting ? (
            <Oval color="white" height={20} width={20} />
          ) : (
            <>POŠALJI UPIT</>
          )}{" "}
        </FormButton>
        {success && <SuccessMessage>Uspešno ste poslali upit!</SuccessMessage>}
      </FormStyled>
    </>
  );
};

export default FormaSection;
