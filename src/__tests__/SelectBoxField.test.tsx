import { render, fireEvent, screen } from "@testing-library/react";
import SelectboxField from "../components/SelectBoxField";
import SimpleForm from "../components/SimpleForm";

const defaultProps = {
  source: "testSource",
  label: "Test Label",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ],
  validate: [],
};

describe("<SelectboxField />", () => {
  it("should render", () => {
    render(
      <SimpleForm>
        <SelectboxField {...defaultProps} />
      </SimpleForm>
    );

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    defaultProps.options.forEach((option) =>
      expect(screen.getByText(option.label)).toBeInTheDocument()
    );
  });

  it("should change the selected option", () => {
    render(
      <SimpleForm>
        <SelectboxField {...defaultProps} />
      </SimpleForm>
    );
    const selectElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "option2" } });

    expect(selectElement.value).toBe("option2");
  });

  it("should display error message when provided", () => {
    const errorMessage = "Test error message";
    const mockValidationFn = jest.fn().mockReturnValue(errorMessage);
    const customValidate = [mockValidationFn];

    render(
      <SimpleForm>
        <SelectboxField {...defaultProps} validate={customValidate} />
      </SimpleForm>
    );
    const selectElement = screen.getByLabelText(
      defaultProps.label
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "option2" } });

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(mockValidationFn).toHaveBeenCalled();
  });
});
