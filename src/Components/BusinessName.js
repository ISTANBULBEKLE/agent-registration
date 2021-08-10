import React, { useState } from "react";
import { Label, LabelText, HintText, ErrorText, Input } from "govuk-react";

export default function BusinessName() {
  const [businessName, setBusinessName] = useState("");

  return (
    <Label>
      <LabelText>Example label</LabelText>
      <HintText>Example hint</HintText>
      <ErrorText>Example error</ErrorText>
      <Input
        value={businessName}
        onClick={(e) => setBusinessName(e.target.value)}
      />
    </Label>
  );
}
