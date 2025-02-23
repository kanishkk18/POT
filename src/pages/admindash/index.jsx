import Content from "./components/contents"
import Layout from "./components/layouts"
import PieChart from "./components/piechart"
import TransactionChart from "./components/transactionChart"
import Deposit from "./components/ui/depositData"
import Withdrawl from "./components/ui/withdrawl"


export default function Dashboard() {
  return (
    <div >
      <Layout>
        <Content />
        <Deposit/>
        <Withdrawl/>
        <div className="md:flex space-y-2 md:space-y-0 px-4 justify-center gap-2 items-center mt-2 ">
        <PieChart/>
        <TransactionChart/>
        </div>
      </Layout>

    </div>
  )
}

