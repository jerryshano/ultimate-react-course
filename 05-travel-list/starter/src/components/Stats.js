function Stats({ items }) {
  if (items.length === 0) return <p className="stats">Start adding items 🧳</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = ((numPacked / numItems) * 100).toFixed(2);
  return (
    <footer className="stats">
      <em>
        {percentage === 100.0
          ? "You got everything! Ready to go 🩴"
          : `🧳  You have ${numItems} items on your list and you already packed
                   ${numPacked} (${percentage}%))`}
      </em>
    </footer>
  );
}
export default Stats;
