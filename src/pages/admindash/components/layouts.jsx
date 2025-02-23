import Sidebar from "./ui/sidebar"
import TopNav from "./top-nav"


export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-16 border-b border-gray-200 dborder-[#1F1F23]">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
        
      </div>
    </div>
  )
}

