// import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  console.log(response);

  return (
    <ul className="flex flex-col w-48">
      {transactions.map((transaction) => (
        <li className="flex items-center justify-between" key={transaction.id}>
          <p className="">{transaction.name}</p>
          <p className="">${transaction.amount}</p>
          <button
            className=" border-0 m-0 p-0"
            onClick={() => deleteDocument(transaction.id)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}
