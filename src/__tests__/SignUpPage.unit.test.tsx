import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "../app/(client)/signup/page";

describe("SignUp Page Unit Test", () => {
  it("deve renderizar o título 'Cadastro de Cliente'", () => {
    render(<SignUp />);
    expect(screen.getByText("Cadastro de Cliente")).toBeInTheDocument();
  });
});

describe("SignUp Page System Test", () => {
  it("deve renderizar o logo, título, inputs e botões", () => {
    render(<SignUp />);
    expect(screen.getByAltText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Cadastro de Cliente")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite seu nome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite seu email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite seu cpf/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /voltar/i })).toBeInTheDocument();
  });
});
