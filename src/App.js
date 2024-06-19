const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <main className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </main>
  );
}
function Logo() {
  return <h1>🌴 Far away 🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <h3>Packing List</h3>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You hav X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
