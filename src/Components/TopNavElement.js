import React from 'react';
import { SearchBox, TopNav } from "govuk-react";
import CrownIcon from "@govuk-react/icon-crown";

export default function TopNavElement () {
  const link = "https://example.com?=1";

  const Company = (
    <TopNav.Anchor href={link} target="new">
      <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>
        GOV.UK
      </TopNav.IconTitle>
    </TopNav.Anchor>
  );

  const ServiceTitle = (
    <TopNav.NavLink href={link} target="new">
      Agent Registration
    </TopNav.NavLink>
  );


return (
  <>
    <TopNav
      company={Company}
      serviceTitle={ServiceTitle}
      active={0}
    >

      </TopNav>
  </>
)
}