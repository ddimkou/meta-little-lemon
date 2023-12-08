import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the People label in BookingForm", () => {
  render(<BookingForm />);
  const peopleLabelElement = screen.getByText("People");
  expect(peopleLabelElement).toBeInTheDocument();
});
