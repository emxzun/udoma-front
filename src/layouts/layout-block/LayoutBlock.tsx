import React, {FC} from 'react';

interface LayoutBlockProps{
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const LayoutBlock: FC<LayoutBlockProps> = ({children, title, subtitle}) => {
  return (
      <div className="layout-block">
        <div className="layout-block__header">
          {title && <div className="layout-block__title">{title}</div>}
          {subtitle && <div className="layout-block__subtitle">{subtitle}</div>}
        </div>
        <div>
          {children}
        </div>
      </div>
  );
};

export default LayoutBlock;