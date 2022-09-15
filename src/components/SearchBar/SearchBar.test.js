import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

it("should not show FilterMenu of render" , () => {
  render(<SearchBar />)

  const filter = screen.queryByText(/filter menu/i);

  expect(filter).not.toBeInTheDocument();
}) 

it("should show FilterMenu when button is clicked", () => {
  render(<SearchBar />)

  const button = screen.getByRole("button");
  userEvent.click(button);
  const filter = screen.queryByText(/filter menu/i);

  expect(filter).toBeInTheDocument();
  
})