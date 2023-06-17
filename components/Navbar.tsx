import Image from "next/image";
import { AiOutlineArrowDown, AiOutlineHeart } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
function Navbar() {
  return (
    <>
      {/* Small Header */}
      <div className="bg-primary h-10 rounded-b-lg hidden lg:flex items-center justify-between text-white px-6 text-sm     ">
        <div className="flex items-center space-x-6 cursor-pointer">
          <p>252 (63) 4143040</p>
          <p>Support@geranuk.com</p>
        </div>
        <div>
          <p>
            Black Friday discount off 50%!{" "}
            <span className="text-secondary">Shop Now</span>
          </p>
        </div>
        <div className="flex items-center space-x-6 cursor-pointer">
          <p>Track Order</p>
          <p>My Account</p>
        </div>
      </div>
      {/* Nav */}
      <nav className="my-2 flex items-center justify-between">
        {/* Logo */}
        <div className="h-8 md:h-12 w-24 md:w-36 cursor-pointer">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Geranuk Logo"
            className="h-full w-full"
          />
        </div>
        {/* Search bar */}

        <div className="border border-white hidden sm:flex items-center p-1 space-x-4 sm:max-w-lg  md:max-w-xl  lg:max-w-lg">
          <button className="whiteBtn text-gray-500 -ml-6">
            <div className="block md:hidden">
            <BiCategoryAlt />
            </div>
            <span className="hidden md:block">
            All Categories
            </span>
          </button>
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search products..."
              className="bg-third py-3 px-2 outline-0 ring-0 "
            />
          </div>
          <button className="primaryBtn">Search</button>
        </div>

        <div className="hidden lg:flex items-center space-x-2 cursor-pointer">
          <button className="font-semibold">Deliver to Dubai</button>
          <div>
            <AiOutlineArrowDown size={25} />
            <div className="h-4 w-6">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
                width={500}
                height={500}
                alt="UAE Flag"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
        <div>
          {/* Right Nav */}
          <div>
            <div className="flex items-center space-x-2">
              {/* Wishlist */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <AiOutlineHeart size={20} />
                <p className="hidden lg:block">Wishlist (0)</p>
                <p className="block lg:hidden">(0)</p>
              </div>
              {/* Cart */}
              <div className="flex items-center space-x-1 cursor-pointer">
                <div>
                  <BsCartFill size={20} />
                </div>
                <p className="hidden lg:block">Cart ($8)</p>
                <p className="block lg:hidden">($8)</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
