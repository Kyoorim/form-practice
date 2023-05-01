import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CheckBoxField from "../components/CheckBoxField";
import SimpleForm from "../components/SimpleForm";

const defaultProps = {
  source: "testSource",
  label: "Test Label",
  type: "checkbox" as const,
  validate: [],
};

describe("<CheckboxField />", () => {
  it("should render", () => {
    render(
      <SimpleForm>
        <CheckBoxField {...defaultProps} />
      </SimpleForm>
    );

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
  });

  it("should change the checked state when clicked", () => {
    render(
      <SimpleForm>
        <CheckBoxField {...defaultProps} />
      </SimpleForm>
    );
    const checkboxElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLInputElement;

    fireEvent.click(checkboxElement);

    expect(checkboxElement.checked).toBe(true);
  });

  it("should display error message when provided", () => {
    const errorMessage = "Test error message";
    const mockValidationFn = jest.fn().mockReturnValue(errorMessage);
    const customValidate = [mockValidationFn];

    render(
      <SimpleForm>
        <CheckBoxField {...defaultProps} validate={customValidate} />
      </SimpleForm>
    );
    const checkboxElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLInputElement;

    fireEvent.click(checkboxElement);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(mockValidationFn).toHaveBeenCalled();
  });
});
