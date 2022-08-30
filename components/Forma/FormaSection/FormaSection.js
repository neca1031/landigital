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
        token,
      },
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
          placeholder="Name"
          {...register("ime", {
            required: {
              value: true,
              message: "This field is required.",
            },
            minLength: {
              value: 2,
              message: "Too short to be a name. Needs 3 or more characters.",
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
              message: "This field is required.",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "This is not a valid email address",
            },
          })}
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <TextArea
          placeholder="Your Message"
          {...register("poruka", {
            required: {
              value: true,
              message: "This field is required.",
            },
            minLength: {
              value: 5,
              message: "The message is too short. Needs 5 or more characters.",
            },
            maxLength: {
              value: 5000,
              message:
                "The message is too long. Needs to have less than 5000 characters.",
            },
          })}
        />
        <ErrorMessage>{errors?.poruka?.message}</ErrorMessage>
        <FormButton type="submit" disabled={isSubmitting}>
          {" "}
          {isSubmitting ? (
            <Oval color="white" height={20} width={20} />
          ) : (
            <>SEND</>
          )}{" "}
        </FormButton>
        {success && (
          <SuccessMessage>
            You have successfully submitted the form!
          </SuccessMessage>
        )}
      </FormStyled>
    </>
  );
};

export default FormaSection;
