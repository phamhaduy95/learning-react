import classNames from "classnames";
import React from "react";
import  "./Card.scss";
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
  const rootClassName = classNames("Card",className);

  return (
    <div className={rootClassName}>
      <div className="Card__Header">{header}</div>
      <div className="Card__Body">{body}</div>
      <div className="Card__Footer">{footer}</div>
    </div>
  );
}
