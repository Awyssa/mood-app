import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute w-[200px] top-0 left-0 h-full border-r border-white/50">
        Mood
      </div>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-white/50">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
