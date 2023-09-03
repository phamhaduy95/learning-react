import classNames from 'classnames';
import './Card.css';

export type CardProps = {
    className?: string;
    Header?: React.ReactNode;
    Body?: React.ReactNode;
    Footer?: React.ReactNode;
};

/* 
  Note: Export only one component per component file to ensure HRM operates correctly.
*/

export const Card: React.FC<CardProps> = ({
    className = '',
    Header = <></>,
    Body = <></>,
    Footer = <></>,
}) => {
    const rootClassName = classNames('Card', className);

    return (
        <div className={rootClassName}>
            <div className="Card__Header">{Header}</div>
            <div className="Card__Body">{Body}</div>
            <div className="Card__Footer">{Footer}</div>
        </div>
    );
};

export default Card;
