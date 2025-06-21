function Total({ expenses }) {
  const totalAmount = expenses.reduce((acc, item) => acc + Number(item.amount), 0);

  return (
    <div>
      <h3>Total Amount: ₹{totalAmount}</h3>
    </div>
  );
}

export default Total;
