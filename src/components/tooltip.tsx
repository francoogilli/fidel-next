import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  hideOnSmallScreens?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, hideOnSmallScreens }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="flex items-center"
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={`absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 text-center w-max max-w-[230px] px-5 py-4 bg-zinc-800 text-zinc-200 text-sm rounded-xl ${
            hideOnSmallScreens ? 'hidden sm:block' : 'block'
          }`}
        >
          {text}
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-zinc-800"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
