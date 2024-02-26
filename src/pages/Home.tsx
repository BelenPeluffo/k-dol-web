import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>What do you want to do today?</div>
      <div>
        <button onClick={() => navigation("/idols")}>See idols</button>
        <button onClick={() => navigation("/idols/create")}>Add idol</button>
      </div>
    </div>
  );
};

export default Home;
