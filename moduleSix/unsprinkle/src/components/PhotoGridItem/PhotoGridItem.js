import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={`
            ${src.replace("jpeg", "@2x.avif")}
            ${src.replace("jpeg", "@3x.avif")}
            `}
          />
          <Image src={src.replace("jpeg", "avif")} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  /* padding: 4px 8px; */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 4px 12px 2px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;

/* josh's solution */

import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {/* order matters we want to most optimized file format. like a switch statement in js. the source will break once it finds something that works */}
          {/* avif before/ahead jpeg */}
          <source
            type="image/avif"
            // srcSet have to be camelCase in JSX. we had it as srcset
            srcSet={`
            ${src} 1x,
            ${src.replace('.jpg', '@2x.avif')} 2x
            ${src.replace('.jpg', '@3x.avif')} 3x
            `}
          />
          <source
            type="image/jpeg"
            // srcSet have to be camelCase in JSX. we had it as srcset
            srcSet={`
            ${src} 1x,
            ${src.replace('.jpg', '@2x.jpg')} 2x
            ${src.replace('.jpg', '@3x.jpg')} 3x
            `}
          />
          {/* josh added alt={alt} to <Image/> */}
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  gap: 8px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0;
  /* add space between the inline elements */
  & > * + *{
    margin-left: 8px;
  }
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  /* add space between the inline elements */
  &:not(:last-of-type){
    margin-right: 8px;
  }
`;

export default PhotoGridItem;

/* josh's solution */
