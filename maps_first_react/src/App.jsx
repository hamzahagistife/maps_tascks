import "./App.css";

const items = [
  { id: 1, color: "red" },
  { id: 2, color: "tomato" },
  { id: 3, color: "yellow" },
  { id: 4, color: "green" },
];

function App() {
  return (
    <>
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ color: item.color }}>
            {item.color}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
