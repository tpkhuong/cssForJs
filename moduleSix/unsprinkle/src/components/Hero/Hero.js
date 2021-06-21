import React from "react";
import styled from "styled-components/macro";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcset="
          /moduleSix/unsprinkle/public/images/hero-img.avif 1x,
          /moduleSix/unsprinkle/public/images/hero-img@2x.avif 2x,
          /moduleSix/unsprinkle/public/images/hero-img@3x.avif 3x
        "
        />
        <source
          type="image/jpg"
          srcset="
          /moduleSix/unsprinkle/public/images/hero-img.jpg 1x,
          /moduleSix/unsprinkle/public/images/hero-img@2x.jpg 2x,
          /moduleSix/unsprinkle/public/images/hero-img@3x.jpg 3x
        "
        />

        <HeroImage alt="" src="/images/hero-img.jpg" />
      </picture>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

{
  /* <HeroImage alt="" src="/moduleSix/unsprinkle/public/images/" />
<HeroImage alt="" src="../../../public/images/" /> */
}

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

// this will be the fall back img
const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;

/* josh's solution */

// import React from "react";
// import styled from "styled-components/macro";

// const Hero = () => {
//   return (
//     <Wrapper>
//       <HeroImage src="/images/hero-img.jpg" />
//       <Swoop src="/swoop.svg" />
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   position: relative;
//   height: 60vh;
//   min-height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   background: hsl(0deg 0% 1%);
// `;

// const HeroImage = styled.img`
//   display: block;
//   width: 500px;
//   height: 500px;
//   max-height: 100%;
// `;

// const Swoop = styled.img`
//   position: absolute;
//   left: 0;
//   right: 0;
//   /*
//     Overhang by a couple px to prevent any pixel-rounding
//     display issues
//   */
//   bottom: -2px;
//   width: 100%;
// `;

// export default Hero;

/* josh's solution */
