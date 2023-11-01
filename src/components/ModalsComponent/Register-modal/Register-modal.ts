import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";

const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
