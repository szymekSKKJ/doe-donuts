import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./Contact.scss";
import leftSideImage from "../../../assets/contact/DoeDoughnuts_contact_us_donut_left_575x.webp";
import rightSideImage from "../../../assets/contact/DoeDoughnuts_contact_us_donut_650x.webp";

const isEmpty = (str: string) => !str.trim().length;

const validateForm = (formElements: Element[]) => {
  const inputsElements = formElements.filter((element) => element.tagName === "INPUT" && element)! as HTMLInputElement[];
  const textareaElement = formElements.find((element) => element.tagName === "TEXTAREA" && element)! as HTMLTextAreaElement;

  const formValidationData: { isValid: boolean; error: null | string } = {
    isValid: true,
    error: null,
  };

  const emptyInputElement = inputsElements.find((inputElement) => isEmpty(inputElement.value));

  if (emptyInputElement) {
    emptyInputElement.focus();

    formValidationData.isValid = false;
    formValidationData.error = `Wypełnij wszystkie pola`;
  } else if (isEmpty(textareaElement.value)) {
    textareaElement.focus();

    formValidationData.isValid = false;
    formValidationData.error = `Wypełnij wszystkie pola`;
  }

  return formValidationData;
};

const Contact = () => {
  const [, setFormValidationData] = useState<{ isValid: boolean; error: null | string }>({
    isValid: true,
    error: null,
  });

  return (
    <div className="contact">
      <h1>Skontaktuj się z nami!</h1>
      {/* {formValidationData.isValid === false && <p className="error">{formValidationData.error}</p>} */}
      <div className="background">
        <div className="image">
          <img src={leftSideImage}></img>
        </div>
        <div className="image">
          <img src={rightSideImage}></img>
        </div>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formElements = [...event.currentTarget.elements];
          const formValidationData = validateForm(formElements);
          setFormValidationData(formValidationData);
        }}>
        <input placeholder="Imię"></input>
        <input placeholder="Email"></input>
        <textarea placeholder="Wiadomość"></textarea>
        <Button theme="pink-white">
          Wyślij <i className="fa-regular fa-right"></i>
        </Button>
      </form>
    </div>
  );
};

export default Contact;
