/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";

describe("", () => {
  it("should render TextField", () => {
    const input = render(
      <SimpleForm>
        <TextField
          source="testSource"
          label="Test Label"
          placeholder="Test Placeholder"
          type="text"
          validate={[
            jest.fn().mockImplementation((value) => {
              console.log("---");
            }),
          ]}
        />
      </SimpleForm>
    );

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });
});
