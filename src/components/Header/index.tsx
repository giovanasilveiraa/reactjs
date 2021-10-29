import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
  OnOpenNewTransationsModal: () => void;
}

export function Header({ OnOpenNewTransationsModal } :HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={OnOpenNewTransationsModal}>
          Nova transação
          </button>
      </Content>
    </Container>
  );
}
