"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VoidPrimaryButton from "../Buttons/VoidPrimaryButton";
import { Separator } from "@/components/ui/separator";
import { CountryType, SchoolType, SingUpFormType } from "@/types";
import axios from "axios";
import Logo from "../Logo";
import BigHeader from "../Headers/BigHeader";

const schoolNotListedItemText = "Mi colegio no está en la lista";
const schoolNotListedItemValue = "newSchool";
const postRegistrationHeaderContent = "Revisa tu correo!";

const afterAllPage = (
  <div>
    <div className="w-full flex flex-row justify-center">
      <Logo dimension={150} className="" />
    </div>
    <div>
      <div className="container flex flex-col items-center text-center w-full">
        <BigHeader>{postRegistrationHeaderContent}</BigHeader>
      </div>
    </div>
  </div>
);

type Props = {
  countries: CountryType[];
  schools: SchoolType[];
};

export default function SignupForm({ countries, schools }: Props) {
  const countryIds = countries.map((country) => country.id);
  const validate = (values: SingUpFormType) => {
    const errors: SingUpFormType = {};

    if (!values.firstName) {
      errors.firstName = "Necesario";
    } else if (values.firstName.length > 15) {
      errors.firstName = "No más de 15 caracteres";
    }

    if (!values.lastName) {
      errors.lastName = "Necesario";
    } else if (values.lastName.length > 20) {
      errors.lastName = "No más de 15 caracteres";
    }

    if (!values.email) {
      errors.email = "Necesario";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "El email no es valido";
    }

    if (!values.country) {
      errors.country = "Necesario";
    } else if (countryIds.includes(values.country)) {
      if (!values.school) {
        errors.school = "Necesario";
      } else if (values.school == schoolNotListedItemValue) {
        if (!values.newSchool) {
          errors.newSchool = "Necesario";
        } else {
          if (values.newSchool.length < 3) {
            errors.newSchool = "Respuesta invalida";
          }
        }
      }
    } else {
      errors.country = "wtf";
    }

    if (!values.birth) {
      errors.birth = "Necesario";
    } else {
      const birth = new Date(values.birth);
      if (isNaN(birth.getTime())) {
        errors.birth = "Fecha invalida";
      }
      const currentDate = new Date();
      currentDate.setFullYear(2020);
      if (birth >= currentDate) {
        errors.birth = "Fecha invalida";
      }
    }
    console.log(errors);
    return errors;
  };
  const [done, setDone] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      country: "",

      school: "",

      newSchool: "",

      birth: "",
    },

    validate,

    onSubmit: async (values) => {
      const base_url = window.location.origin;
      await axios.post(`${base_url}/api/students/create`, values);
    },

    validateOnChange: false,
  });
  function genError(content: string | undefined) {
    if (content) {
      return (
        <div className="text-red-400 text-sm font-semibold">{content}</div>
      );
    } else {
      return null;
    }
  }
  const firstNameInput = (
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {genError(formik.errors.firstName)}
    </div>
  );
  const lastNameInput = (
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {genError(formik.errors.lastName)}
    </div>
  );

  const emailInput = (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {genError(formik.errors.email)}
    </div>
  );

  const countryInput = (
    <div>
      <Label htmlFor="country">Pais</Label>
      <Select
        name="country"
        onValueChange={(e) => formik.setFieldValue("country", e)}
        value={formik.values.country}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="País" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country: CountryType, index: number) => (
            <SelectItem key={index} value={country.id}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {genError(formik.errors.country)}
    </div>
  );
  const newSchoolInput = (
    <div className="mt-5">
      <Label htmlFor="newSchool">Nombre del colegio</Label>
      <Input
        name="newSchool"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.newSchool}
      />
      {genError(formik.errors.newSchool)}
    </div>
  );

  const schoolInput = (
    <div>
      <Label htmlFor="school">Colegio</Label>
      <Select
        name="school"
        onValueChange={(e) => formik.setFieldValue("school", e)}
        value={formik.values.school}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="Colegio" />
        </SelectTrigger>
        <SelectContent>
          {schools
            .filter((school) => school.country_id == formik.values.country)
            .map((school: SchoolType, index: number) => (
              <SelectItem key={index} value={school.id}>
                {school.name}
              </SelectItem>
            ))}
          <Separator className="my-1" />
          <SelectItem key={-1} value={schoolNotListedItemValue}>
            {schoolNotListedItemText}
          </SelectItem>
        </SelectContent>
      </Select>
      {genError(formik.errors.school)}
      {formik.values.school == schoolNotListedItemValue && newSchoolInput}
    </div>
  );

  const birthDateInput = (
    <div>
      <Label htmlFor="birth">Fecha de nacimiento</Label>
      <Input
        name="birth"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birth}
      />
      {genError(formik.errors.birth)}
    </div>
  );

  const submitButton = (
    <div>
      <VoidPrimaryButton type="submit">Submit</VoidPrimaryButton>
    </div>
  );
  const form = (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex flex-row justified-between gap-3">
        {firstNameInput}
        {lastNameInput}
      </div>
      {birthDateInput}
      {emailInput}
      {countryInput}
      {formik.values.country && schoolInput}

      {submitButton}
    </div>
  );
  return (
    <form onSubmit={formik.handleSubmit}>{done ? afterAllPage : form}</form>
  );
}
