import InvoiceForm from './components/InvoiceForm';

function App() {
  return (
    <div className="min-h-screen  flex-col font-inter items-center justify-center flex bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h1 className='font-extrabold text-[2rem] text-center '>Invoice-app</h1>
        <InvoiceForm />
      </div>
      <footer className='mt-[4rem] pt-5'>
          <p className="text-center text-gray-600 text-xs">
            Invoice-app © Christian Reyes: <a href="https://github.com/Rysctian/react-invoice.git"> 
            https://github.com/Rysctian/react-invoice.git</a>
          </p>
      </footer>
    </div>
  );
}

export default App;
