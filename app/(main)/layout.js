import Sidebar from "@/components/Shared/Sidebar/Sidebar";

export default async function ProtectedLayout({ children }) {
    return (
        <section>
            <div className="flex">
                <aside className="w-[220px] h-screen border-r">
                    <Sidebar />
                </aside>

                <div className="w-[calc(100%-220px)] bg-[#F2F4F7] dark:bg-background">
                    topbar
                    <div>{children}</div>
                </div>
            </div>
        </section >
    );
}