
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>我是dashboard layout</h1>
            {children}
        </div>
    );
  }