import AddReviewForm from "@/components/ProductDetails/AddReviewForm";
import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";

const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
  review: AddReviewForm,
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
