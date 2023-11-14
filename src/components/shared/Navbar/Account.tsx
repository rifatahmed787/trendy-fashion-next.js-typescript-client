import Cookies from "js-cookie";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import BrandButton from "@/components/Button/PrimaryButton";
import { useAppDispatch, useAppSelector } from "@/Hooks/useRedux";
import { logout } from "@/Redux/features/auth/authSlice";

type AccountProps = {
  setAccountDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Account: React.FC<AccountProps> = ({ setAccountDropdownOpen }) => {
  const { user } = useAppSelector((state: { auth: any }) => state.auth);
  const dispatch = useAppDispatch();

  // handle logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <li className="overflow-y-auto">
        {/* user profile */}
        <div
          className={`relative after:absolute after:content-normal after:w-full after:h-0.5`}
        >
          <Image
            width={undefined}
            height={undefined}
            src={user?.imageUrl}
            alt=""
            className="w-16 h-16 rounded-full mx-auto"
          />

          <h2 className={`text-lg font-bold text-center my-1`}>
            {" "}
            {user?.name?.firstName} {user?.name?.lastName}
          </h2>
          <Link href="" className="flex justify-center mb-2">
            <BrandButton text="View Profile" icon="" />
          </Link>
        </div>
        <ul
          className="py-2 text-base text-gray-700"
          aria-labelledby="dropdownUserAvatarButton"
        >
          {/* dashboard */}
          <li>
            <a
              href="#"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2`}
              onClick={() => setAccountDropdownOpen(false)}
            >
              <Icon icon="material-symbols:dashboard-outline" width={20} />
              Dashboard
            </a>
          </li>

          {/* shop */}
          <li>
            <Link
              href="/cart"
              className={`px-4 py-2 text-base w-full text-left text-gray-700  flex items-center gap-2 `}
            >
              <Icon icon="tdesign:shop" width={20} />
              Shop
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
          className={`px-4 py-2 text-base w-full text-left text-gray-700 flex items-center gap-2 `}
        >
          <Icon icon="humbleicons:logout" width={20} />
          Log out
        </button>
      </li>
    </>
  );
};

export default Account;
