import React from "react";
import { render } from "test-utils";

import Footer from "./Footer";

test("match snapshot", () => {
  const { asFragment } = render(<Footer>Title</Footer>);

  expect(asFragment()).toMatchSnapshot();
});
