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
  font-weight: ${WEIGHTS[600]};
  background-color: ${(props) =>
    props.notDefault == "on-sale"
      ? COLORS.secondary
      : props.notDefault == "new-release"
      ? COLORS.primary
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

export default ShoeCard;
