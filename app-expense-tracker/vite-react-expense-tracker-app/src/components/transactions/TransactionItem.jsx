import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem ({ transaction }) {

    const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
        <p className="text-sm">{transaction.description}</p>
        <div className="flex items-center">
          <span className=" mr-2 ">${transaction.amount}</span>
          <button 
          className="bg-red-600 text-white rounded-lg block font-medium w-20 h-8 justify-center"
          onClick={()=> {
              deleteTransaction(transaction.id)
          }}
          >
              Delete
          </button>
        </div>
        
    </li>
  )
}

export default TransactionItem