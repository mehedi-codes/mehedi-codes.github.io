const SectionTitle = ({title}) => {
  const style = {
    clipPath: "polygon(0 0,100% 0%,100% 100%,0 100%)",
  };
  const style2 = {
    fontSize: "clamp(2.4rem,5vw,10rem)",
  }
  return (
    <section style={style}>
      <div
        className="heading flex translate-y-56 items-center justify-center space-x-[3%]"
        style={{
          transform: "none",
          opacity: 1,
        }}
      >
        <div>
          <svg
            className="hidden sm:block sm:scale-125 xl:scale-[200%]"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <h2 className="w-fit text-5xl font-medium uppercase text-black" style={style2}>
          {title}
        </h2>
        <div>
          <svg
            className="hidden sm:block sm:scale-125 xl:scale-[200%]"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#000000"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
