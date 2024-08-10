import AddReviewForm from "@/components/ProductDetails/AddReviewForm";
import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";
import ReviewSection from "@/components/ProductDetails/ReviewSection";
import WishCard from "@/components/UI/WishCard";
import CartCard from "@/components/UI/CartCard";


const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
  review: AddReviewForm,
  delete:ReviewSection,
  wishDelete:WishCard,
  cartDelete:CartCard
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
