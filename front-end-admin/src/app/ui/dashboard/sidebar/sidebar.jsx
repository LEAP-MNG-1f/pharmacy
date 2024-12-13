import { Dashboard } from "@/svg/Dashboard";
import styles from "../sidebar/sidebar.module.css";
import { MenuLink } from "./menuLink/menuLink";
import { Plus } from "@/svg/Plus";
import { Em } from "@/svg/Em";
import { Orders } from "@/svg/Orders";
import { Garah } from "@/svg/garah";
const menuItems = [
  {
    title: "Бүтээгдэхүүн",
    list: [
      {
        title: " Нэмэх",
        path: "/dashboard",
        icon: <Plus />,
      },
      {
        title: "Бүх бүтээгдэхүүн",
        path: "/dashboard/products",
        icon: <Em />,
      },
    ],
  },
  {
    title: "Захиалга",
    list: [
      {
        title: "Хяналтын самбар",
        path: "/dashboard/orders",
        icon: <Orders />,
      },
    ],
  },
  {
    title: "Хэрэглэгч",
    list: [
      {
        title: "Гарах",
        path: "/Нүүр/logout",
        icon: <Garah />,
      },
    ],
  },
];
export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src="https://i.pinimg.com/564x/a4/f4/79/a4f4793ca387e7fe2b74cec830a84499.jpg"
          alt=""
          width="50"
          height="50"
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Mikasarnai</span>
          <span className={styles.userTitle}>Aдмин</span>
          <span></span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};