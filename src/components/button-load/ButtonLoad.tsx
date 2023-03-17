import React, {FC} from 'react';


interface ButtonLoadProps{
  children: React.ReactNode
  isLoad: boolean,
  className?: string
}

const ButtonLoad: FC<ButtonLoadProps> = ({className, children, isLoad}) => {
  return (
      <button className={[className, "loader"].join(" ")}>
        {isLoad && <div className="loader"></div>}
        {children}
      </button>
  );
};

export default ButtonLoad;