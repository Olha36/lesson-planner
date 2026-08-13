import { render, screen } from "@testing-library/react";
import AnalyticsCard from "./AnalyticsCard";

describe("AnalyticsCard", () => {
  it("renders the AnalyticsCard component with correct props", () => {
    render(
      <AnalyticsCard
        subtitle="Students"
        title="12"
        description="active students"
      />
    );

    expect(screen.getByText("Students")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("active students")).toBeInTheDocument();
  });
});
