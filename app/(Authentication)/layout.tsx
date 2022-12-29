
import Image from 'next/image'
import Header from '../../components/Initial/Header';
import FormLogin from '../../components/Login/FormLogin';
export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
 <>
 <Header title='Registro'/>
      <div className='w-full px-[10%] min-h-[calc(90vh_-_10px)] font-bodyFont  pt-[5%]'>
    {children}
      </div>
      <div className='mx-auto w-5/6 text-center font-bodyFont mt-2 '>
        <span className=''>&copy; WAROOM</span>
      </div>
      </>
  );
}