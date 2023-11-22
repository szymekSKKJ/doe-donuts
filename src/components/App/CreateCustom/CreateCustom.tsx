import "./CreateCustom.scss";
import createCustomImage from "../../../assets/create-custom/DoeDoughnuts_corporate_hero.webp";
import Gallery from "./Gallery/Gallery";
import Button from "../../UI/Button/Button";
import { useState } from "react";

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

const CreateCustom = () => {
  const [, setFormValidationData] = useState<{ isValid: boolean; error: null | string }>({
    isValid: true,
    error: null,
  });

  return (
    <div className="create-custom">
      <h1>Stwórz własny!</h1>
      <div className="background">
        <div className="image">
          <img src={createCustomImage}></img>
        </div>
      </div>
      <p className="description">
        Jesteśmy dumni z tworzenia niesamowitych zamówień niestandardowych. Z umysłów stojących za naszą współpracą współpracujemy z Saben, Garage Project,
        Little Lato, Burger Burger oraz Cook i Nelson i stworzyliśmy niesamowite smakołyki!
      </p>
      <Gallery></Gallery>
      <p className="description-2">
        Uwielbiamy współpracować z markami o podobnych poglądach, aby tworzyć niezapomniane partnerstwa. Jeśli chcesz wyrazić swoje zdanie, wywołać szum lub po
        prostu spróbować, jesteśmy uszami (i kubkami smakowymi).
      </p>
      <h2>Jak to działa?</h2>
      <div className="steps">
        <div className="step">
          <p className="value">1</p>
          <div className="wrapper">
            <p className="title">Poproś o wycenę</p>
            <p className="description">Wypełnij nasz łatwy w użyciu formularz zamówienia niestandardowego i powiedz nam dokładnie, czego potrzebujesz.</p>
          </div>
        </div>
        <div className="step">
          <p className="value">2</p>
          <div className="wrapper">
            <p className="title">Otrzymaj wycenę</p>
            <p className="description">Nasz zespół przedstawi Państwu szczegółową wycenę w oparciu o Państwa specyficzne wymagania.</p>
          </div>
        </div>
        <div className="step">
          <p className="value">3</p>
          <div className="wrapper">
            <p className="title">Potwierdź</p>
            <p className="description">Zatwierdź wycenę i wpłać 50% zaliczki, aby zabezpieczyć swoje zamówienie.</p>
          </div>
        </div>
        <div className="step">
          <p className="value">4</p>
          <div className="wrapper">
            <p className="title">Dowóz</p>
            <p className="description">Dostarczymy Twoje zamówienie bezpośrednio pod Twoje drzwi lub przygotujemy je do odbioru w naszej lokalizacji..</p>
          </div>
        </div>
      </div>
      <h2>Zamów!</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formElements = [...event.currentTarget.elements];
          const formValidationData = validateForm(formElements);
          setFormValidationData(formValidationData);
        }}>
        <input placeholder="Imię"></input>
        <input placeholder="Email"></input>
        <input placeholder="Telefon"></input>
        <input placeholder="Budżet"></input>
        <textarea placeholder="Czy masz na myśli konkretne smaki? Zabarwienie? Pączki mini czy zwykłej wielkości? Czy to baby shower, wieczór panieński, urodziny itp.? Podaj jak najwięcej informacji, abyśmy mogli wybrać dla Ciebie najlepszą opcję"></textarea>
        <Button theme="pink-white">
          Wyślij <i className="fa-regular fa-right"></i>
        </Button>
      </form>
    </div>
  );
};

export default CreateCustom;
