import AddReviewForm from "@/components/ProductDetails/AddReviewForm";
import SignInForm from "../Signin/SigninForm";
import SignUpForm from "../Signup/SignupForm";
import ReviewSection from "@/components/ProductDetails/ReviewSection";
import WishCard from "@/components/UI/WishCard";
import CartCard from "@/components/UI/CartCard";
import Cart from "@/components/Shop/ShoppingCart/Cart";
import PostAddress from "@/components/UserDashboard/Profile/PostAddress";



const registeredModals = {
  login: SignInForm,
  register: SignUpForm,
  review: AddReviewForm,
  delete:ReviewSection,
  editReview:ReviewSection,
  wishDelete:WishCard,
  cartDelete:CartCard,
  clearCart:Cart,
  postAddree:PostAddress
};
export type TCurrentModal = keyof typeof registeredModals;

export default registeredModals;
