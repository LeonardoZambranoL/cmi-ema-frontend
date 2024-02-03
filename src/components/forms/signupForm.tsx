"use client";
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
import { getCountries, getSchoolByBountry } from "@/lib/utils";
import { useState } from "react";

const countries = getCountries();

const validate = (values) => {
  const errors = {};
  if (!values) {
  }

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
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email no es valido";
  }

  console.log(values.country);
  if (!values.country) {
    errors.country = "Necesario";
  } else {
    let isValidCountry = false;
    for (let country of countries) {
      if (values.country == country) {
        isValidCountry = true;
      }
    }
    if (!isValidCountry) {
      errors.country = "wtf";
    }
  }

  if (!values.school) {
    errors.school = "Necesario";
  }

  return errors;
};

export default function SignupForm() {
  // Pass the useFormik() hook initial form values, a validate function that will be called when

  // form values change or fields are blurred, and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      country: "",

      school: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
      <Label htmlFor="email">Email Address</Label>

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
        onValueChange={(e) => formik.setFieldValue("country", e, true)}
        value={formik.values.country}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="Pais" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country: string, index: number) => (
            <SelectItem key={index} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {genError(formik.errors.country)}
    </div>
  );

  const schoolInput = (
    <div>
      <Label htmlFor="school">Colegio</Label>
      <Select
        name="school"
        onValueChange={(e) => formik.setFieldValue("school", e, true)}
        value={formik.values.school}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="Colegio" />
        </SelectTrigger>
        <SelectContent>
          {getSchoolByBountry(formik.values.country).map(
            (school: string, index: number) => (
              <SelectItem key={index} value={school}>
                {school}
              </SelectItem>
            )
          )}
        </SelectContent>
      </Select>
      {genError(formik.errors.school)}
    </div>
  );

  const submitButton = (
    <div>
      <VoidPrimaryButton type="submit">Submit</VoidPrimaryButton>
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col justify-between gap-5">
        <div className="flex flex-row justified-between gap-3">
          {firstNameInput}
          {lastNameInput}
        </div>
        {emailInput}
        {countryInput}
        {schoolInput}

        {submitButton}
      </div>
    </form>
  );
}
