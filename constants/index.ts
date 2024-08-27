import { LiaShippingFastSolid } from "react-icons/lia";
import { FaInstagram, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IconType } from "react-icons";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export const MAIN_NAV_LINKS: {
  name: string;
  path: string;
}[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    }
  ]

export const PROFILE_LINKS: {
  name: string;
  path: string;
}[] = [
    {
      name: "Account",
      path: "/profile",
    },
    {
      name: "Address",
      path: "/profile/address",
    },
    {
      name: "Orders",
      path: "/profile/orders",
    },
    {
      name: "Wishlist",
      path: "/profile/wishlist",
    },
  ];

export const SOCIAL_LINKS: {
  name: string;
  path: string;
  icon: IconType;
}[] = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/",
      icon: RiFacebookCircleLine,
    },
    {
      name: "XTwitter",
      path: "https://x.com/",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/",
      icon: FaInstagram,
    },
  ]

export const OUR_FEATURES: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
    {
      title: "Free Shipping",
      description: "Free shipping on Order above $200",
      icon: LiaShippingFastSolid
    },
    {
      title: "Money-back",
      description: "30 days guarantee",
      icon: FaRegMoneyBillAlt,
    },
    {
      title: "Secure Payment",
      description: "100% secure payment by Stripe",
      icon: CiLock,
    },
    {
      title: "24/7 Support",
      description: "Support online 24 hours a day",
      icon: MdOutlineLocalPhone,
    },
  ]