import * as Yup from "yup";
const phoneNumberRegex =
  /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

  var stringRegex = new RegExp("^[a-zA-Z ]+$");
export const employeeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("Required").min(6,'min 6 characters').max(10,'max 10 characters').matches(stringRegex, "first name not valid allow only letters and spaces"),
  lastName: Yup.string().required("Required").min(6,'min 6 characters').max(10,'max 10 characters').matches(stringRegex, "last name not valid allow only letters and spaces"),
  number: Yup.string()
    .matches(phoneNumberRegex, "Phone number is not valid")
    .required("Required"),
  gender: Yup.string().required("Required"),
});
