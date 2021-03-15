import React from "react";
import { render } from "test-utils";

import FooterInferior from "./FooterInferior";

test("match snapshot", () => {
  const { asFragment } = render(<Footer>Title</Footer>);

  expect(asFragment()).toMatchSnapshot();
});
