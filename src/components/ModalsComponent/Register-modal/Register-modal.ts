import AddReviewForm from "@/components/ProductDetails/AddReviewForm";
import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";
import DeleteModal from "@/components/UI/DeleteModal";

const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
  review: AddReviewForm,
  delete:DeleteModal
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
