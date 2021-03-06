import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// styles
// import styles from "./Home.module.css";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className="flex h-screen">
      <div className="m-auto  w-2/3">
        <div className="flex justify-between items-center ">
          <div className="">
            {error && <p>{error}</p>}
            {documents && <TransactionList transactions={documents} />}
          </div>
          <div className="">
            <TransactionForm uid={user.uid} />
          </div>
        </div>
      </div>
    </div>
  );
}
