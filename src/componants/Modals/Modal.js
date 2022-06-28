import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Container from "../container";

const MODAL_STYLES = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  overflowY: "scroll",
  zIndex: 1000,

  position: "fixed",
  top: "50%",
  zindex: 2,
  left: "50%",
  transform: "translate(-50%, -50%)",
  paddingbottom: "20px",
  overflowY: "scroll",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "0px",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
      <Container>
        <div
          className="bg-black bg-opacity-30 cursor-pointer "
          style={OVERLAY_STYLES}
        />
        <div
          style={MODAL_STYLES}
          className=" rounded-xl fixed w-full p-4 h-full text-white"
          onClick={onClose}
        >
          <div className="  ">{children}</div>
        </div>
      </Container>
    </>
  );
}
