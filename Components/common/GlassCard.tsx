import React from "react";
import styles from "@/styles/components/common/GlassCard.module.scss";

interface GlassCardProps {
  children: JSX.Element;
}

const GlassCard = ({ children }: GlassCardProps): JSX.Element => {
  return <div className={styles.glass_card}>{children}</div>;
};

export default GlassCard;
