import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';

import Message from "./Message";
import getMessageTime from "../../functions/getMessageTime";


let testMessage = <Message 
image=''
author='Eduardo Franco'
timeStamp= {getMessageTime()}
body='I am a message!'
/>;

afterEach(() => {
    cleanup();
});

describe("Message component", () => {
    render(testMessage);

    const message = screen.getByTestId("message");
    const author = screen.getByTestId("message-author");
    const messageTime = screen.getByTestId("message-time");
    const messageBody = screen.getByTestId("message-body");
    const messageImage = screen.getByTestId("message-image");
    
 
    test("Message Rendering", () => {
        expect(message).toBeInTheDocument();
        expect(author).toBeInTheDocument();
        expect(messageTime).toBeInTheDocument();
        expect(messageBody).toBeInTheDocument();
        expect(messageImage).toBeInTheDocument();
    })
 
    test("Message info", () => {
        expect(author).toHaveTextContent("Eduardo Franco");
        expect(messageBody).toHaveTextContent("I am a message!");
        expect(messageTime.textContent).toMatch(/(AM|PM)/i);
    })
})