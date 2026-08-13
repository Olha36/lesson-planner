import { render, screen } from "@testing-library/react";
import Btn from "./Button";

describe("Btn", () => {
  it("renders button text", () => {
    render(<Btn text="Create lesson" />);

    expect(
      screen.getByRole("button", { name: "Create lesson" })
    ).toBeInTheDocument();
  });
});
