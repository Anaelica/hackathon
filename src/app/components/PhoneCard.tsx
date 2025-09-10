"use client";
import InputField from "./InputField";

interface PhoneCardProps {
  type: "welcome" | "login" | "keyboard";
}

export default function PhoneCard({ type }: PhoneCardProps) {
  const doLogin = () => {
    const u = (document.getElementById("user") as HTMLInputElement)?.value;
    alert("Tentando logar como: " + (u || "usuário desconhecido"));
  };

  return (
    <div className={`phone ${type === "login" ? "tall" : ""}`}>
      <div className="header">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2c1.7 0 3 1.5 4 3 1 1.5 2 4 2 6s-1.3 4-3 4c-1.7 0-3-1.5-4-3-1-1.5-2-4-2-6s1.3-4 3-4z" fill="white"/>
          </svg>
          <div className="brand">MOFINOW</div>
        </div>
      </div>
      <div className="wave">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,30 C120,90 220,0 500,50 L500,0 L0,0 Z" fill="#fff"></path>
        </svg>
      </div>

      <div className="card-inner">
        {type === "welcome" && (
          <>
            <h2 style={{ marginTop: 6 }}>Welcome !</h2>
            <div className="subtitle muted-center">Create your account and start exploring</div>
            <button className="btn-gradient">Create Account</button>
            <button className="btn-outline">Login</button>
            <div style={{ flex: 1 }}></div>
            <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>Sign in with another account</div>
            <div className="socials" style={{ marginTop: 8 }}>
              <div className="social">🔵</div>
              <div className="social">in</div>
              <div className="social">f</div>
              <div className="social">G</div>
            </div>
          </>
        )}

        {type === "login" && (
          <>
            <h2>Welcome back !</h2>
            <div className="subtitle">Please login to your account</div>
            <InputField id="user" placeholder="Username" />
            <InputField id="pwd" placeholder="Password" type="password" />
            <div className="row">
              <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" /> <span className="small">Remember me</span>
              </label>
              <a className="small" href="#">Forget password?</a>
            </div>
            <button className="btn-gradient" onClick={doLogin}>Login</button>
            <button className="btn-outline">New user? Sign Up</button>
            <div style={{ flex: 1 }}></div>
            <div style={{ width: "100%", textAlign: "center", marginTop: 6, color: "var(--muted)" }}>OR</div>
            <div className="socials" style={{ justifyContent: "center" }}>
              <div className="social">🔵</div>
              <div className="social">in</div>
              <div className="social">f</div>
            </div>
          </>
        )}

        {type === "keyboard" && (
          <>
            <h2 style={{ fontSize: 16, marginTop: 6 }}>Welcome back !</h2>
            <div className="subtitle">Mohamed</div>
            <InputField value="Mohamed" />
            <InputField value="••••••••" />
            <div style={{ height: 12 }}></div>
            <div style={{ width: "100%", height: 64, background: "#f6f8fb", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", fontSize: 12 }}>
              iOS keyboard (simulado)
            </div>
          </>
        )}
      </div>
    </div>
  );
}
