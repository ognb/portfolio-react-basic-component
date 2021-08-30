import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleDateString("en-US", {
    month: "long",
  });
  const expenseDay = props.date.toLocaleDateString("en-US", {
    day: "2-digit",
  });
  const expenseYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year ">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
};

export default ExpenseDate;
