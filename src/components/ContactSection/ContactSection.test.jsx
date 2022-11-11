import { fireEvent, render, screen } from "@testing-library/react";
import ContactSection from "./ContactSection";
import handleSubmit from "../../utils/helpers/handleSubmit";

test('render ContactSection', () => {
  const { container } = render(<ContactSection />);
  expect(container).toMatchSnapshot();
})

test('fireEvent', () => {
  render(<ContactSection />);
  //jest.spyOn(ContactSection, handleSubmit)
  const matchedInputsValue = {"conditionsCheckbox": "on", "emailInput": "", "lastNameInput": "", "messageTextArea": "", "phoneInput": "", "radio": "3"};
  // const spy = jest.spyOn(handleSubmit);
  const button = screen.getByRole('button', { name: /submit/i })
  const clickEvent = new MouseEvent('click');
  Object.assign(clickEvent, { preventDefault: jest.fn() });
  fireEvent(button, clickEvent);

  expect(clickEvent.preventDefault).toHaveBeenCalledTimes(0);

})