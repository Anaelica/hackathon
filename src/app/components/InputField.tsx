"use client";
import { useState } from "react";

interface InputFieldProps {
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

export default function InputField({ id, placeholder, type = "text", value }: InputFieldProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  return (
    <div style={{ position: "relative", width: "100%", marginBottom: 6 }}>
      <input
        id={id}
        className="input"
        placeholder={placeholder}
        type={isPassword ? (show ? "text" : "password") : type}
        defaultValue={value}
      />
      {isPassword && (
        <div className="eye" title="Mostrar senha" onClick={() => setShow(!show)}>
          👁️
        </div>
      )}
    </div>
  );
}
