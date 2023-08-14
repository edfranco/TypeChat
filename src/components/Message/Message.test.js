import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom";

import Message from "./Message";
import getMessageTime from "../../functions/getMessageTime";
import profilePic from "../../files/default-profile-image.png";

let testMessage = (
  <Message
    image={profilePic}
    author="Eduardo Franco"
    timeStamp={getMessageTime()}
    body="I am a message!"
  />
);

afterEach(() => {
  cleanup();
});

describe("Message component", () => {
  render(testMessage);

  const message = screen.getByTestId("message");
  const author = screen.getByTestId("message-author");
  const messageTime = screen.getByTestId("message-time");
  const messageBody = screen.getByTestId("message-body");

  test("Message Rendering", () => {
    expect(message).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(messageTime).toBeInTheDocument();
    expect(messageBody).toBeInTheDocument();
  });

  test("Message author", () => {
    expect(author).toHaveTextContent("Eduardo Franco");
  });
  test("Message body", () => {
    expect(messageBody).toHaveTextContent("I am a message!");
  });
  test("Message timestamp", () => {
    expect(messageTime.textContent).toMatch(/(AM|PM)/i);
  });
});
