import styled from "styled-components";

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumbs">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <a href={href}>{children}</a>
    </CrumbWrapper>
  );
};

var BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

var CrumbWrapper = styled.li`
  display: inline;
  margin-left: 8px;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: "/";
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

var CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

render(
  <Breadcrumbs>
    <Crumb href="/">Home</Crumb>
    <Crumb href="/living">Living Room</Crumb>
    <Crumb href="/living/couch">Couches</Crumb>
    <Crumb href="/living/couch/sectional">Sectionals</Crumb>
  </Breadcrumbs>
);
