import AddReviewForm from "@/components/ProductDetails/AddReviewForm";
import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";
import ReviewSection from "@/components/ProductDetails/ReviewSection";


const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
  review: AddReviewForm,
  delete:ReviewSection
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
