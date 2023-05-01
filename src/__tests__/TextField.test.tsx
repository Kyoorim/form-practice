import { render, fireEvent, screen } from "@testing-library/react";
import TextField from "../components/TextField";
import SimpleForm from "../components/SimpleForm";

const defaultProps = {
  source: "testSource",
  label: "Test Label",
  placeholder: "Test Placeholder",
  type: "text",
  validate: [
    jest.fn().mockImplementation((value) => {
      console.log("---");
    }),
  ],
};

describe("<TextField />", () => {
  it("should render", () => {
    render(
      <SimpleForm>
        <TextField {...defaultProps} />
      </SimpleForm>
    );

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(defaultProps.placeholder)
    ).toBeInTheDocument();
  });

  it("should call onChange when text is entered", () => {
    render(
      <SimpleForm>
        <TextField {...defaultProps} />
      </SimpleForm>
    );
    const inputElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New text" } });

    expect(inputElement.value).toBe("New text");
  });

  it("should display error message when provided", () => {
    const errorMessage = "Test error message";
    const mockValidationFn = jest.fn().mockReturnValue(errorMessage);
    const customValidate = [mockValidationFn];

    render(
      <SimpleForm>
        <TextField {...defaultProps} validate={customValidate} />
      </SimpleForm>
    );
    const inputElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "New text" } });

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(mockValidationFn).toHaveBeenCalled();
  });
});
