import PhoneCard from "../components/PhoneCard";

export default function HomePage() {
  return (
    <main style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 40, minHeight: "100vh", background: "linear-gradient(180deg,#00c6ff,#8be0ff 30%,#9bd3ff 45%)" }}>
      <div className="stage" style={{ display: "flex", gap: 20, alignItems: "flex-end", flexWrap: "wrap" }}>
        <PhoneCard type="welcome" />
        {/* <PhoneCard type="login" />
        <PhoneCard type="keyboard" /> */}
      </div>
    </main>
  );
}
