import React, { useState } from "react";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import "../styles/companyFeatures.css";

export default function CompanyFeatures() {
  
const [elements,setElements]=useState([
  {
    typeHeading: " Metaverse",
    typeHeading1: "  Development",
    typeDescription:
      " Our metaverse development service offers custom virtual environments with NFT integration, avatar creation, and engaging gameplay mechanics for a unique and immersive experience.",
  },
  {
    typeHeading: " Blockchain ",
    typeHeading1: " Development",
    typeDescription:
      " Our blockchain development service offers custom virtual environments with NFT integration, avatar creation, and engaging gameplay mechanics for a unique and immersive experience.",
  },
  {
    typeHeading: " Dapp ",
    typeHeading1: " Development",
    typeDescription:
      " Our dapp development service offers custom virtual environments with NFT integration, avatar creation, and engaging gameplay mechanics for a unique and immersive experience.",
  }

])
// for changing indexing of the array data
  const handleNext = () => {
      setElements((prevState) => [prevState[1], prevState[2], prevState[0]]);
  };

  const handlePrev = () => {
      setElements((prevState) => [prevState[2], prevState[0], prevState[1]]);
  };

  return (
    <>
      <div className="about-company-features">
        <div className="features-types">
          <div className="services-description">
            <div className="services-container">
              <svg
                width="145"
                height="145"
                viewBox="0 0 145 145"
                className="services-spinner"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.2842 131.616C67.0153 131.302 65.4821 131.151 65.5515 130.173C65.6031 129.447 66.3361 129.204 67.8024 129.308C69.171 129.405 70.374 129.659 70.2818 130.958L72.195 131.094C72.3695 128.636 70.7832 127.653 68.1299 127.465C65.0576 127.247 63.6276 128.015 63.4778 130.124C63.3281 132.233 64.7737 133.023 67.2606 133.579C69.0841 133.989 69.8253 134.224 69.7757 134.922C69.7291 135.578 69.1318 135.887 67.6096 135.779C66.2829 135.685 65.1348 135.449 65.226 134.164L63.3128 134.028C63.1383 136.486 64.6828 137.466 67.3081 137.652C70.2966 137.864 71.7127 137.095 71.8664 134.93C72.0122 132.877 70.4908 132.166 68.2842 131.616Z"
                  fill="black"
                />
                <path
                  d="M61.3054 126.854L53.6033 124.766L53.1272 126.523L58.8969 128.087L58.3292 130.182L53.235 128.801L52.7589 130.557L57.853 131.938L57.2853 134.033L51.6506 132.505L51.1744 134.262L58.7414 136.313L61.3054 126.854Z"
                  fill="black"
                />
                <path
                  d="M51.2921 123.85L49.5003 122.958L47.9579 126.052L46.7424 125.447L45.8916 121.159L43.7113 120.073L44.5686 124.442C42.6268 123.787 41.4568 124.377 40.6699 125.956C39.7333 127.835 40.2298 129.287 42.9614 130.648L46.9209 132.622L51.2921 123.85ZM47.1461 127.681L45.9409 130.1L43.7982 129.032C42.2821 128.276 42.1373 127.688 42.5369 126.886C42.9366 126.084 43.4873 125.858 45.0034 126.614L47.1461 127.681Z"
                  fill="black"
                />
                <path
                  d="M28.4775 120.887L30.1758 122.216L36.5663 118.363L34.3663 125.493L36.0645 126.821L39.1577 116.799L37.4595 115.471L28.4775 120.887Z"
                  fill="black"
                />
                <path
                  d="M32.9897 111.385L31.5958 109.948L24.5618 116.772L25.9558 118.209L32.9897 111.385Z"
                  fill="black"
                />
                <path
                  d="M27.3883 104.343C25.8221 102.159 24.0693 101.228 21.953 102.745L23.0706 104.304C24.2311 103.472 25.1491 104.416 25.8588 105.405C27.115 107.158 26.9222 108.571 25.0676 109.9C23.2358 111.214 21.9988 111.17 20.816 109.52C20.0084 108.394 19.3826 107.017 20.5659 106.168L19.4484 104.61C17.3321 106.127 17.5162 108.114 19.2864 110.583C21.2116 113.268 23.4873 113.583 26.2863 111.576C29.0852 109.569 29.4522 107.222 27.3883 104.343Z"
                  fill="black"
                />
                <path
                  d="M23.3648 98.3743L20.1342 91.0774L18.47 91.8142L20.8901 97.2804L18.9059 98.1589L16.7692 93.3328L15.105 94.0696L17.2417 98.8957L15.2575 99.7742L12.8941 94.436L11.2299 95.1728L14.4037 102.342L23.3648 98.3743Z"
                  fill="black"
                />
                <path
                  d="M14.7874 86.0663C14.721 84.7607 14.4214 83.2495 15.3772 83.0328C16.0871 82.8718 16.5317 83.5032 16.8568 84.9368C17.1602 86.2748 17.2657 87.4998 15.9959 87.7877L16.4201 89.6582C18.8231 89.1134 19.3043 87.3103 18.7161 84.7162C18.035 81.7124 16.8851 80.5663 14.8234 81.0338C12.7617 81.5013 12.424 83.1139 12.6126 85.6551C12.7482 87.5193 12.7379 88.2968 12.0552 88.4516C11.4135 88.5971 10.9452 88.1147 10.6078 86.6265C10.3136 85.3294 10.2069 84.1621 11.463 83.8773L11.0389 82.0068C8.63586 82.5516 8.14537 84.3137 8.72739 86.8806C9.38991 89.8024 10.5367 90.9348 12.653 90.455C14.66 89.9999 14.9004 88.3376 14.7874 86.0663Z"
                  fill="black"
                />
                <path
                  d="M23.8737 39.0753C24.798 38.1508 25.7185 36.9155 26.52 37.4794C27.1154 37.8983 26.945 38.6514 26.0992 39.8537C25.3097 40.9758 24.4714 41.8753 23.4066 41.1261L22.303 42.6948C24.3182 44.1126 25.9787 43.2609 27.5092 41.0854C29.2815 38.5664 29.3611 36.9448 27.6321 35.7284C25.9031 34.512 24.4801 35.3424 22.7209 37.1859C21.4286 38.5362 20.8447 39.0498 20.2722 38.647C19.734 38.2684 19.7781 37.5975 20.6561 36.3495C21.4214 35.2617 22.216 34.4 23.2694 35.1411L24.3731 33.5724C22.3578 32.1546 20.7215 32.9719 19.207 35.1245C17.4831 37.5749 17.4116 39.185 19.1864 40.4336C20.8696 41.6178 22.2642 40.6818 23.8737 39.0753Z"
                  fill="black"
                />
                <path
                  d="M31.5539 35.5552L37.3167 30.0353L36.0578 28.7209L31.7407 32.8561L30.2397 31.289L34.0512 27.6381L32.7923 26.3237L28.9807 29.9746L27.4797 28.4076L31.6957 24.3693L30.4367 23.0549L24.775 28.4781L31.5539 35.5552Z"
                  fill="black"
                />
                <path
                  d="M39.2948 28.5257L40.9843 27.4517L39.1292 24.5334L40.2752 23.8049L44.387 25.2886L46.4428 23.9818L42.258 22.4615C43.8209 21.1362 43.9193 19.8295 42.9729 18.3408C41.8463 16.5686 40.3465 16.2447 37.7708 17.882L34.0373 20.2554L39.2948 28.5257ZM38.1528 22.9975L36.7033 20.7173L38.7236 19.4329C40.1532 18.5241 40.7318 18.7037 41.2125 19.4599C41.6932 20.216 41.6027 20.8044 40.1731 21.7132L38.1528 22.9975Z"
                  fill="black"
                />
                <path
                  d="M53.6062 10.5153L51.5921 11.2846L51.5947 18.7468L46.6222 13.1827L44.6081 13.952L51.5967 21.7733L53.6108 21.004L53.6062 10.5153Z"
                  fill="black"
                />
                <path
                  d="M59.4173 19.2806L61.3675 18.8281L59.1522 9.28175L57.202 9.7343L59.4173 19.2806Z"
                  fill="black"
                />
                <path
                  d="M68.3401 18.1174C71.0196 17.9031 72.7216 16.8822 72.514 14.2864L70.6021 14.4394C70.7159 15.8628 69.4337 16.162 68.2196 16.2591C66.0704 16.431 64.9596 15.5367 64.7777 13.2619C64.598 11.0151 65.2734 9.97797 67.297 9.81613C68.6786 9.70564 70.1813 9.88039 70.2974 11.3318L72.2093 11.1788C72.0017 8.58314 70.2048 7.71563 67.1765 7.95783C63.883 8.22123 62.4388 10.0081 62.7134 13.4411C62.988 16.8741 64.8094 18.3998 68.3401 18.1174Z"
                  fill="black"
                />
                <path
                  d="M75.5271 17.7529L83.4444 18.751L83.672 16.9453L77.741 16.1976L78.0124 14.0446L83.249 14.7048L83.4766 12.8991L78.2401 12.2389L78.5115 10.086L84.3037 10.8162L84.5313 9.01049L76.7529 8.02984L75.5271 17.7529Z"
                  fill="black"
                />
                <path
                  d="M90.4977 16.7558C91.6504 17.3727 93.0994 17.8959 92.7918 18.8264C92.5633 19.5176 91.7932 19.5727 90.3974 19.1113C89.0947 18.6808 87.991 18.139 88.3996 16.9028L86.5785 16.3008C85.8052 18.6404 87.1014 19.983 89.627 20.8178C92.5513 21.7844 94.1264 21.3908 94.7899 19.3836C95.4533 17.3764 94.2463 16.255 91.9723 15.1052C90.3055 14.2594 89.6448 13.8493 89.8645 13.1847C90.071 12.5599 90.7259 12.4077 92.1748 12.8866C93.4376 13.3041 94.4925 13.8149 94.0883 15.0379L95.9094 15.6398C96.6827 13.3003 95.4264 11.9709 92.9274 11.1449C90.0828 10.2046 88.521 10.6026 87.84 12.6629C87.1941 14.617 88.4939 15.6806 90.4977 16.7558Z"
                  fill="black"
                />
                <path
                  d="M126.059 48.7889C126.374 50.0577 126.957 51.4837 126.06 51.8792C125.394 52.1731 124.837 51.6385 124.244 50.2935C123.69 49.0383 123.352 47.8561 124.543 47.3306L123.769 45.5757C121.515 46.5703 121.387 48.4321 122.461 50.8658C123.704 53.6837 125.052 54.5887 126.986 53.7354C128.92 52.8821 128.943 51.2347 128.272 48.7765C127.782 46.9727 127.644 46.2075 128.284 45.925C128.886 45.6594 129.438 46.0433 130.054 47.4395C130.591 48.6563 130.919 49.7816 129.741 50.3015L130.515 52.0563C132.769 51.0618 132.913 49.2384 131.851 46.8303C130.642 44.0892 129.3 43.1971 127.314 44.073C125.431 44.9037 125.513 46.5812 126.059 48.7889Z"
                  fill="black"
                />
                <path
                  d="M125.111 57.1831L126.865 64.9679L128.641 64.5677L127.326 58.736L129.443 58.2589L130.604 63.4078L132.379 63.0076L131.219 57.8588L133.336 57.3817L134.619 63.0768L136.395 62.6767L134.671 55.0285L125.111 57.1831Z"
                  fill="black"
                />
                <path
                  d="M127.139 67.4406L127.187 69.442L130.644 69.3589L130.677 70.7165L127.284 73.4728L127.343 75.9081L130.804 73.1081C131.133 75.1308 132.202 75.8893 133.965 75.8469C136.064 75.7964 137.116 74.6788 137.042 71.6277L136.936 67.205L127.139 67.4406ZM132.464 69.3151L135.165 69.2501L135.222 71.6434C135.263 73.337 134.811 73.7399 133.915 73.7615C133.019 73.783 132.562 73.4019 132.521 71.7084L132.464 69.3151Z"
                  fill="black"
                />
                <path
                  d="M135.181 88.9925L135.561 86.8703L129.168 83.0219L136.5 81.6338L136.88 79.5116L126.575 81.4618L126.194 83.584L135.181 88.9925Z"
                  fill="black"
                />
                <path
                  d="M124.674 89.4472L124.056 91.3512L133.376 94.3798L133.995 92.4758L124.674 89.4472Z"
                  fill="black"
                />
                <path
                  d="M121.066 97.6913C119.867 100.097 119.863 102.082 122.194 103.243L123.05 101.527C121.772 100.89 122.177 99.6371 122.72 98.547C123.682 96.6174 125.021 96.1274 127.064 97.1454C129.081 98.1509 129.621 99.2647 128.715 101.082C128.097 102.322 127.172 103.519 125.869 102.869L125.013 104.586C127.344 105.748 129.014 104.656 130.369 101.937C131.843 98.9802 131.058 96.8211 127.976 95.2848C124.893 93.7484 122.646 94.5213 121.066 97.6913Z"
                  fill="black"
                />
                <path
                  d="M117.668 104.036L112.727 110.303L114.156 111.43L117.857 106.735L119.562 108.079L116.294 112.224L117.723 113.35L120.991 109.206L122.695 110.549L119.081 115.134L120.51 116.261L125.364 110.104L117.668 104.036Z"
                  fill="black"
                />
                <path
                  d="M110.8 117.373C109.677 118.042 108.481 119.014 107.843 118.27C107.368 117.718 107.719 117.029 108.834 116.072C109.875 115.178 110.909 114.512 111.757 115.5L113.212 114.251C111.607 112.381 109.788 112.799 107.77 114.531C105.433 116.538 104.957 118.09 106.334 119.694C107.711 121.298 109.295 120.843 111.453 119.488C113.038 118.497 113.73 118.143 114.186 118.674C114.614 119.173 114.407 119.812 113.249 120.806C112.24 121.673 111.258 122.313 110.419 121.335L108.963 122.585C110.568 124.454 112.355 124.064 114.352 122.35C116.626 120.399 117.091 118.855 115.677 117.209C114.337 115.647 112.755 116.212 110.8 117.373Z"
                  fill="black"
                />
                <path
                  d="M99.1246 19.5752C108.855 24.4959 117.056 32.0026 122.823 41.1916M104.773 122.934C96.5464 128.296 86.9159 131.684 76.5532 132.427M12.6863 77.3563C11.8496 66.0612 14.2479 54.6011 19.6215 44.621"
                  stroke="black"
                />
              </svg>

              <p className="services-heading-1">Let's Make Magic Together</p>
            </div>
          </div>
          <div className="development-types-container">
            <h1 className="type-heading">{elements[0].typeHeading} {elements[0].typeHeading1}</h1>
                <p
                  className="type-description "
                >
                  {elements[0].typeDescription}
                </p>

            <div className="services-magical-button">
              <span className="text"> Three Magical Words</span>{" "}
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                className="magic-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.548828 2.29883L2.54883 0.298828L18.5488 16.2988L16.5488 18.2988L0.548828 2.29883ZM10.5488 2.29883L11.5488 0.298828L12.5488 2.29883L14.5488 3.29883L12.5488 4.29883L11.5488 6.29883L10.5488 4.29883L8.54883 3.29883L10.5488 2.29883ZM2.54883 12.2988L3.54883 10.2988L4.54883 12.2988L6.54883 13.2988L4.54883 14.2988L3.54883 16.2988L2.54883 14.2988L0.548828 13.2988L2.54883 12.2988ZM1.54883 6.29883L2.54883 7.29883L1.54883 8.29883L0.548828 7.29883L1.54883 6.29883ZM15.5488 7.29883L16.5488 8.29883L15.5488 9.29883L14.5488 8.29883L15.5488 7.29883Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="developement-next-prev-container">
          <>
            <span className="developement-next-prev-span">
              {" "}
              <p
                className="next-prev-heading filling"
                id="previous-heading-id" data-text={`${elements[2].typeHeading} ${elements[2].typeHeading1}`}
              >
               {elements[2].typeHeading}<br />{elements[2].typeHeading1}
              </p>
              <button className="next-previous-button" id="prevButton" onClick={handlePrev}>
                <RiArrowDropLeftLine className="prev-button-icon" />
                PREVIOUS
              </button>
            </span>
            <span className="developement-next-prev-span">
              {" "}
              <p
                className="next-prev-heading filling"
                id="next-heading-id"  data-text={`${elements[1].typeHeading} ${elements[1].typeHeading1}`}
              >
                
               {elements[1].typeHeading}<br />{elements[1].typeHeading1}
              </p>
              <button className="next-previous-button"  id="nextButton"  onClick={handleNext}>
                NEXT
                <RiArrowDropRightLine className="next-button-icon" />
              </button>
            </span>
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
}
