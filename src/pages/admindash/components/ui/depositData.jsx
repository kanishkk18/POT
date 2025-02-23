import { cn } from "@/lib/utils";
import {
    CheckCircle,
    TrendingUp,
    Video,
    Globe,
    DollarSign,
    Clock,
    XCircle,
    Percent,
} from "lucide-react";

const itemsSample = [
    {
        title: "Total Deposits Price",
        meta: "$12,450",
        description: "Total amount deposited by users.",
        icon: <DollarSign className="w-4 h-4 text-green-500" />,
        status: "Live",
        tags: ["Finance", "Deposits"],
        colSpan: 2,
    },
    {
        title: "Pending Deposits",
        meta: "$1,200",
        description: "Deposits awaiting approval.",
        icon: <Clock className="w-4 h-4 text-yellow-500" />,
        status: "Pending",
        tags: ["Processing", "Finance"],
    },
    {
        title: "Rejected Deposits",
        meta: "$300",
        description: "Deposits that were not approved.",
        icon: <XCircle className="w-4 h-4 text-red-500" />,
        status: "Rejected",
        tags: ["Issues", "Finance"],
        colSpan: 2,
    },
    {
        title: "Deposit Charges",
        meta: "2% per deposit",
        description: "Charges applied on each deposit.",
        icon: <Percent className="w-4 h-4 text-blue-500" />,
        status: "Fixed",
        tags: ["Fees", "Finance"],
    },
];

export default function DepositData({ items = itemsSample }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-3 mb-4  mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                        "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
                        "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan ? "md:col-span-1" : ""
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>
                    <div className="relative flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                                {item.icon}
                            </div>
                            <span className="text-xs font-medium px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                                {item.status}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 text-[15px]">
                                {item.title}
                                <span className="ml-2 text-md text-black  dark:text-gray-400 font-bold">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}