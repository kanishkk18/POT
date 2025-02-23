import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  CreditCard,
  ArrowRight,
  SendHorizontal,
} from "lucide-react";

const TRANSACTIONS = [
  {
    id: "1",
    title: "Bitcoin Purchase",
    amount: "0.05",
    currency: "BTC",
    type: "outgoing",
    category: "buy",
    icon: ArrowUpRight,
    timestamp: "Today, 2:45 PM",
    status: "completed",
  },
  {
    id: "2",
    title: "Ethereum Received",
    amount: "2.5",
    currency: "ETH",
    type: "incoming",
    category: "receive",
    icon: ArrowDownLeft,
    timestamp: "Today, 9:00 AM",
    status: "completed",
  },
  {
    id: "3",
    title: "Dogecoin Sold",
    amount: "1000",
    currency: "DOGE",
    type: "outgoing",
    category: "sell",
    icon: ArrowUpRight,
    timestamp: "Yesterday",
    status: "pending",
  },
  {
    id: "4",
    title: "Cardano Staking",
    amount: "50",
    currency: "ADA",
    type: "incoming",
    category: "reward",
    icon: Wallet,
    timestamp: "Today, 12:30 PM",
    status: "completed",
  },
  {
    id: "5",
    title: "Litecoin Transfer",
    amount: "10",
    currency: "LTC",
    type: "outgoing",
    category: "transfer",
    icon: SendHorizontal,
    timestamp: "Yesterday",
    status: "completed",
  },
  {
    id: "6",
    title: "Ripple Exchange",
    amount: "500",
    currency: "XRP",
    type: "outgoing",
    category: "exchange",
    icon: CreditCard,
    timestamp: "2 days ago",
    status: "completed",
  },
];

export default function RecentTransaction({ transactions = TRANSACTIONS, className }) {
  return (
    <div
      className={cn(
        "w-full  mx-auto",
        "bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl",
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Recent Crypto Activity
            <span className="text-xs font-normal text-zinc-600 dark:text-zinc-400 ml-1">
              (total 18)
            </span>
          </h2>
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            Last 24 Hours
          </span>
        </div>

        <div className="space-y-1">
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div
                key={transaction.id}
                className={cn(
                  "group flex items-center gap-3",
                  "p-2 rounded-lg",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                  "transition-all duration-200"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    "bg-zinc-100 dark:bg-zinc-800",
                    "border border-zinc-200 dark:border-zinc-700"
                  )}
                >
                  <Icon className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                </div>

                <div className="flex-1 flex items-center justify-between min-w-0">
                  <div className="space-y-0.5">
                    <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    {transaction.title.slice(0, 15)}
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                      {transaction.timestamp}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 pl-3">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        transaction.type === "incoming"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      )}
                    >
                      {transaction.type === "incoming" ? "+" : "-"}
                      {transaction.amount} {transaction.currency}
                    </span>
                    {transaction.type === "incoming" ? (
                      <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
        <button
          type="button"
          className={cn(
            "w-full flex items-center justify-center gap-2",
            "py-2 px-3 rounded-lg",
            "text-xs font-medium",
            "bg-gradient-to-r from-zinc-900 to-zinc-800",
            "dark:from-zinc-50 dark:to-zinc-200",
            "text-zinc-50 dark:text-zinc-900",
            "hover:from-zinc-800 hover:to-zinc-700",
            "dark:hover:from-zinc-200 dark:hover:to-zinc-300",
            "shadow-sm hover:shadow",
            "transform transition-all duration-200",
            "hover:-translate-y-0.5",
            "active:translate-y-0",
            "focus:outline-none focus:ring-2",
            "focus:ring-zinc-500 dark:focus:ring-zinc-400",
            "focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          )}
        >
          <span>DownLoad Statement</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
