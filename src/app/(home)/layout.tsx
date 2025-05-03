import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
    </div>
  );
};

export default HomeLayout;
