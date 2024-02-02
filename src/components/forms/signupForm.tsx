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
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  function genError(content: string) {
    return <div className="text-red-400">{content}</div>;
  }
  const firstNameInput = (
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? genError(formik.errors.firstName) : null}
    </div>
  );
  const lastNameInput = (
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? genError(formik.errors.lastName) : null}
    </div>
  );

  const emailInput = (
    <div>
      <Label htmlFor="email">Email Address</Label>

      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? genError(formik.errors.email) : null}
    </div>
  );

  const countries = getCountries();
  const [countryValue, setCountryValue] = useState("");
  const countryInput = (
    <div>
      <Label htmlFor="country">Pais</Label>

      <Select name="country">
        <SelectTrigger className="">
          <SelectValue placeholder="Pais" />
        </SelectTrigger>
        <SelectContent onChange={(e) => setCountryValue(e.target.value)}>
          {countries.map((country) => (
            <SelectItem value={country}>{country}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const schoolInput = (
    <div>
      <Label htmlFor="country">Colegio</Label>

      <Select name="country">
        <SelectTrigger className="">
          <SelectValue placeholder="Colegio" />
        </SelectTrigger>
        <SelectContent>
          {getSchoolByBountry("Ecuador").map((school) => (
            <SelectItem value={school}>{school}</SelectItem>
          ))}
        </SelectContent>
      </Select>
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
