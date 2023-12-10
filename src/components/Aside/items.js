import { ReactComponent as KeyIcon } from "img/aside-icons/key-square.svg";
import { ReactComponent as CubeIcon } from "img/aside-icons/d-square-icon.svg";
import { ReactComponent as UserIcon } from "img/aside-icons/user-square-icon.svg";
import { ReactComponent as WalletIcon } from "img/aside-icons/wallet-money-icon.svg";
import { ReactComponent as DiscountIcon } from "img/aside-icons/discount-shape-icon.svg";
import { ReactComponent as MessageIcon } from "img/aside-icons/message-question-icon.svg";

export const items = [
  {
    id: 1,
    name: "Dashboard",
    icon: <KeyIcon stroke="currentColor" />,
  },
  {
    id: 2,
    name: "Product",
    icon: <CubeIcon />,
  },
  {
    id: 3,
    name: "Customers",
    icon: <UserIcon />,
  },
  {
    id: 4,
    name: "Income",
    icon: <WalletIcon stroke="currentColor" />,
  },
  {
    id: 5,
    name: "Promote",
    icon: <DiscountIcon />,
  },
  {
    id: 6,
    name: "Help",
    icon: <MessageIcon />,
  },
];
