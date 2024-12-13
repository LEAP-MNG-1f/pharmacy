export const SubmitButton = () => {
  return (
    <button className="relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="35"
        viewBox="0 0 140 35"
        fill="none"
      >
        <rect
          width="140"
          height="35"
          rx="17.5"
          fill="url(#paint0_linear_2327_653)"
          className="group-hover:opacity-90 transition-opacity"
        />
        <text
          x="70"
          y="22"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontFamily="sans-serif"
        >
          Add to Cart
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_2327_653"
            x1="70"
            y1="0"
            x2="70"
            y2="35"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#33E4DB" />
            <stop offset="1" stopColor="#00BBD3" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};
