import { PageHeader } from "@/components/cartPageComponents";
const layout = ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <div className="container">
      <PageHeader />
      <div className="py-20">
        {children}
      </div>
    </div>
  );
};

export default layout;
