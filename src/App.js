function App() {
  return (
    <div className="bg-black h-screen text-pink-500">
      <div className="flex h-screen">
        <div className="m-auto w-4/12 space-y-5">
          <div className="text-xl font-bold text-center"> 
            CFG PARSER - BAHASA SUNDA
          </div>
          <div className="flex space-x-4">
            <div className="w-10/12">
              <input type="text" className="w-full rounded px-3 py-2" placeholder="Mangga nyerat CFG anjeun" />
            </div>
            <div className="w-2/12">
              <button className="bg-white px-4 py-2 rounded-md">Submit</button>
            </div>  
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-200 p-3 rounded-md">
              <div className="text-center font-bold">Verba</div>
              <ol className="ml-8 capitalize list-disc">
                <li>anjeun = kamu</li>
                <li>abdi = saya</li>
                <li>kantong = tas</li>
                <li>katel = kuali</li>
                <li>kaleci = kelereng</li>
                <li>angklung = angklung</li>
              </ol>
            </div>
            <div className="bg-red-200 p-3 rounded-md">
              <div className="text-center font-bold">Nomina</div>
              <ol className="ml-8 capitalize list-disc">
                <li>ngananjuk = memimjam</li>
                <li>ngadangu = mendengar</li>
                <li>newak = tangkap</li>
                <li>neunggeul = pukul</li>
                <li>ngumbah = nyuci</li>
              </ol>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App;
