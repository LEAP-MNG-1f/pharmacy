"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.menu}></div>
    </div>
  );
};
