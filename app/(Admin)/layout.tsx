import AdminBar from '../../components/Admin/AdminBar';
export default function AdminLayout({ children }: {
    children: React.ReactNode
}) {
    return (<section>
        <div className='flex h-screen'>
      <div className="max-h-full flex-none">
        <AdminBar />
      </div>
      <div className='flex-1 bg-slate-300 w-full max-h-full'>
        <div className='bg-slate-300 '>
        {children}
        </div>
      </div>
    </div>
    </section>);
}