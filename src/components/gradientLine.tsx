interface GradientLineProps {
    direction?: 'left' | 'right';
    from?: string;
    weight?: string;
    to?: string;
  }
  
  export default function GradientLine({ direction = 'left', from = "#e6f0e7", to = "#e6eaf0" }: GradientLineProps) {
    const gradientDirection = direction === 'left' ? 'to-l' : 'to-r';
  
    return (
      <div
        className={`bg-gradient-${gradientDirection} via-[#e6eaf0]/100 to-[#e6eaf0]/0 flex-grow flex-shrink-0 h-[1px] overflow-hidden relative w-[1px] animation-1`}
        style={{ backgroundImage: `linear-gradient(${direction === 'left' ? '270deg' : '90deg'}, ${from}, ${to} 63.96%, rgba(230, 234, 240, 0) 100%)` }}
      ></div>
    );
  }
  