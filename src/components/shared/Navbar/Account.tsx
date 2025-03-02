"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import { logout } from "@/Redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ToastContainer from "@/components/UI/Toast";
import { FaBorderAll } from "react-icons/fa";

type AccountProps = {
  setAccountDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Account: React.FC<AccountProps> = ({ setAccountDropdownOpen }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [alertMessages, setAlertMessages] = useState('');
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    setAlertMessages('Successfully logged out');
    setAlertType('success');
    setIsAlertOpen(true);
    setTimeout(() => {
      router.push('/');
    }, 2000); 
  };

  return (
    <>
      <div className="bg-gray-50">
        {/* user profile */}
        <div
          className={`relative after:absolute after:content-normal after:w-full after:h-0.5 after:bg-primary-100 pt-1`}
        >
          <Image
            width={50}
            height={50}
            src={
              user?.avatar ||
              "https://res.cloudinary.com/dztlowlu0/image/upload/v1700031261/avatar_ylo9mt.png"
            }
            alt=""
            className="rounded-full mx-auto w-12 h-12"
          />

          <h2 className={`text-lg font-bold text-center my-1`}>
            {" "}
            {user?.username}
          </h2>
          <Link href="/profile" className="flex justify-center mb-2">
            <BrandButton text="View Profile" icon="" />
          </Link>
        </div>
        <ul
          className="py-2 text-base text-gray-700"
          aria-labelledby="dropdownUserAvatarButton"
        >
          {/* dashboard */}
          <li>
            <Link
              href="/profile"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2`}
              onClick={() => setAccountDropdownOpen(false)}
            >
              <Icon icon="material-symbols:dashboard-outline" width={20} />
              Manage Account
            </Link>
          </li>
          <li>
            <Link
              href="/my_order"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2`}
              onClick={() => setAccountDropdownOpen(false)}
            >
              <FaBorderAll className="text-lg"/>
             My Orders
            </Link>
          </li>

          {/* shop */}
          <li>
            <Link
              href="/cart"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2 `}
            >
              <Icon icon="mdi:cart-outline" width={20} />
              Cart
            </Link>
          </li>

          {/* checkout */}
          <li>
            <Link
              href="/checkout"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2`}
            >
              <Icon icon="material-symbols:shopping-cart-checkout" width={20} />
              CheckOut
            </Link>
          </li>

          {/* wishlist */}
          <li>
            <Link
              href="/wishlist"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2`}
            >
              <Icon
                icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                width={20}
              />
              WishList
            </Link>
          </li>

          {/* settings */}
          <li>
            <Link
              href=""
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2 `}
            >
              <Icon icon="clarity:settings-line" width={20} />
              Settings
            </Link>
          </li>
        </ul>

        {/* darkmode toggle button */}
        {/* <ToggleButton /> */}
        <button
          onClick={handleLogout}
          className={`px-4 pb-3 text-base w-full text-left text-gray-700 flex items-center gap-2 `}
        >
          <Icon icon="humbleicons:logout" width={20} />
          Log out
        </button>
      </div>
      {isAlertOpen && (
        <ToastContainer
          type={alertType}
          messages={alertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
        />
      )}
    </>
  );
};

export default Account;
