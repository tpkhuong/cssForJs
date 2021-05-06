import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price onSale={variant}>
            {formatPrice(price)}
            <SashedPrice noShow={variant}></SashedPrice>
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          <SalePrice notShow={variant}>{formatPrice(salePrice)}</SalePrice>
        </Row>
      </Wrapper>
      <ShoeTag isDefault={variant} notDefault={variant}>
        {variant == "on-sale"
          ? "Sale"
          : variant == "new-release"
          ? "Just release!"
          : ""}
      </ShoeTag>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  position: relative;
  color: ${(props) =>
    props.onSale == "on-sale" ? COLORS.gray[700] : "inherit"};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
  opacity: ${(props) => (props.notShow == "on-sale" ? 1 : 0)};
`;

const ShoeTag = styled.span`
  display: block;
  position: absolute;
  top: 12px;
  right: -8px;
  border-radius: 4px;
  padding: 4px 10px;
  font-weight: ${WEIGHTS[600]};
  background-color: ${(props) =>
    props.notDefault == "on-sale"
      ? COLORS.primary
      : props.notDefault == "new-release"
      ? COLORS.secondary
      : "black"};
  color: ${COLORS.white};
  opacity: ${(props) => (props.isDefault == "default" ? 0 : 1)};
`;

const SashedPrice = styled.span`
  height: 0.5px;
  width: 100%;
  background-color: ${COLORS.gray[700]};
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-block: auto;
  opacity: ${(props) => (props.noShow == "on-sale" ? 1 : 0)};
`;

/* josh solution */

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {/* more than one way to do this */}
          {/* one way */}
          {/* pull (variant == "on-sale" || variant == "new-release") into a variable something like hasFlag */}
          {/* {(variant == "on-sale" || variant == "new-release") && (
            <Flag
              style={{
                "--color":
                  variant == "on-sale" ? COLORS.primary : COLORS.secondary,
              }}
            >
              Sale
            </Flag>
          )} */}
          {/* <Flag>Sale</Flag> */}
          {/* another use composition feature of styled components. cleaner markup*/}
          {variant == "on-sale" && <SaleFlag>Sale</SaleFlag>}
          {variant == "new-release" && <NewFlag>Just released!</NewFlag>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              "--color": variant == "on-sale" ? COLORS.gray[700] : undefined,
              "----text-decoration":
                variant == "on-sale" ? "line-through" : undefined,
            }}
          >
            {formatPrice(price)}
            <SashedPrice noShow={variant}></SashedPrice>
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant == "on-sale" ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : undefined}
        </Row>
      </Wrapper>
      <ShoeTag isDefault={variant} notDefault={variant}>
        {variant == "on-sale"
          ? "Sale"
          : variant == "new-release"
          ? "Just release!"
          : ""}
      </ShoeTag>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  position: relative;
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
  opacity: ${(props) => (props.notShow == "on-sale" ? 1 : 0)};
`;

const ShoeTag = styled.span`
  display: block;
  position: absolute;
  top: 12px;
  right: -8px;
  border-radius: 4px;
  padding: 4px 10px;
  font-weight: ${WEIGHTS[600]};
  background-color: ${(props) =>
    props.notDefault == "on-sale"
      ? COLORS.primary
      : props.notDefault == "new-release"
      ? COLORS.secondary
      : "black"};
  color: ${COLORS.white};
  opacity: ${(props) => (props.isDefault == "default" ? 0 : 1)};
`;

const SashedPrice = styled.span`
  height: 0.5px;
  width: 100%;
  background-color: ${COLORS.gray[700]};
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-block: auto;
  opacity: ${(props) => (props.noShow == "on-sale" ? 1 : 0)};
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  height: 32px;
  padding: 0 10px;
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.bold};
  line-height: 32px;
  color: ${COLORS.white};
  border-radius: 2px;
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;
/* josh solution */

export default ShoeCard;
