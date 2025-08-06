import React from "react";
import { TechnologyItemType } from "../model/TechnologyItems";
import styles from "@widgets/TechnologyStack/TechnologyStack.module.scss";

export const TechnologyItem = ({ item }: { item: TechnologyItemType }) => (
  <li className={styles.technology__item}>{item.name}</li>
); 