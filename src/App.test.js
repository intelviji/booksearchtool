import { render, screen } from '@testing-library/react';
import App from './App';
import Search from "./components/Search";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/ Book Search/i);
  expect(linkElement).toBeInTheDocument();
});
it("renders with or without a props", () => {
  act(() => {
    render(<Search />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Search />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<Search  />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
