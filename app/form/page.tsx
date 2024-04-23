import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string().min(3).max(20).required("Please enter name"),
  email: Yup.string().email().required("Please enter email"),
  password: Yup.string().min(6).required("Please enter password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password must match"
  ),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Form = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name ? <p> {errors.name}</p> : null}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? <p> {errors.email}</p> : null}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? <p>{errors.password}</p> : null}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.confirmPassword && touched.confirmPassword ? (
        <p>{errors.confirmPassword}</p>
      ) : null}
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
