import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../app/(client)/login/page";

describe("Login Page Unit Test", () => {
  it("deve renderizar o título 'Login'", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});

describe("Login Page System Test", () => {
  it("deve renderizar o logo, título, inputs e botões", () => {
    render(<Login />);
    expect(screen.getByAltText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite seu email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });
});

