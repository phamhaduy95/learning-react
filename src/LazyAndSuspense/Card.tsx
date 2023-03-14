import classNames from "classnames";
import React from "react";
import style from "./Card.module.scss";
import { CardProps } from "./type";

/*  
  Note: Export only one component per component file to ensure HRM operates correctly.
*/

const defaultProps: Required<CardProps> = Object.freeze({
  className: "",
  footer: <></>,
  header: <></>,
  body: <></>,
});

export function Card(props: CardProps) {
  const newProps = { ...defaultProps, ...props };
  const { body, className, header, footer } = newProps;
  const rootClassName = classNames(style.card, className);

  return (
    <div className={rootClassName}>
      <div className={style.cardHeader}>{header}</div>
      <div className={style.cardBody}>{body}</div>
      <div className={style.cardFooter}>{footer}</div>
    </div>
  );
}
