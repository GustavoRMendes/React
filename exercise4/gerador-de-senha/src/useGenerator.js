import { useState } from "react";

export default function Generator() {
  const [password, setPassword] = useState("");
  function randomPassword() {
    return Math.random().toString(36).slice(-10);
  }
  const generePassword = () => setPassword(randomPassword);

  return { password, generePassword };
}
