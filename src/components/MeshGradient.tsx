"use client";

import { useEffect, useRef } from "react";
import styles from "./MeshGradient.module.css";

export default function MeshGradient() {
  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.overlay}></div>
    </div>
  );
}
