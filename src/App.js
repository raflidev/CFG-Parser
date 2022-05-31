import { useState } from "react";

function App() {
  const [team, setTeam] = useState(false);
  return (
    <div className="bg-black h-screen text-pink font-poppins">
      <div className="flex h-screen">
        <div className="w-full m-auto lg:w-6/12 space-y-10 lg:space-y-5">
          <div className="text-xl font-bold text-center"> 
            CFG PARSER - BAHASA SUNDA
          </div>
          <div className="flex-col lg:flex lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-10/12">
              <input type="text" className="w-full rounded px-3 py-2" placeholder="Mangga nyerat CFG anjeun" />
            </div>
            <div className="w-full lg:w-2/12">
              <button className="bg-pink w-full text-black px-4 py-2 rounded-md font-bold hover:bg-pinkbg hover:text-pink">Submit</button>
            </div>  
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-pinkbg p-3 rounded-md">
              <div className="text-center font-bold mb-4">Verba</div>
              <ol className="ml-6 capitalize list-disc">
                <li>ameng = main</li>
                <li>nganjuk = memimjam</li>
                <li>ngumbah = nyuci</li>
              </ol>
            </div>
            <div className="bg-pinkbg p-3 rounded-md">
              <div className="text-center font-bold mb-4">Nomina</div>
              <ol className="ml-6 capitalize list-disc">
                <li>anjeun = kamu</li>
                <li>abdi = saya</li>
                <li>kantong = tas</li>
                <li>kaleci = kelereng</li>
                <li>beas = beras</li>
                <li>angklung = angklung</li>
              </ol>
            </div>
            <div className="bg-pinkbg p-3 rounded-md">
              <div className="text-center font-bold mb-4">Adjektif</div>
              <ol className="ml-6 capitalize list-disc">
                <li>beureum = merah</li>
                <li>kasep = ganteng</li>
              </ol>
            </div>
          </div>
          { team === true &&
          <div className="fixed bottom-8 right-32">
            <div className="bg-pink  text-pinkbg p-4 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
              <p>Muhammad Rafli Ramadhan - 1301200204</p>
              <p>Rahusien Salim - 1301201431</p>
              <p>Shafa Diva Syahira - 1301200157</p>
            </div>
          </div>
          }
          <div className="fixed bottom-8 right-8">
          { team === false &&
            <div onClick={() => setTeam(true)} className="bg-pink animate-bounce text-pinkbg hover:text-pink hover:bg-pinkbg p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          }
          { team === true &&
            <div onClick={() => setTeam(false)} className="animate-bounce bg-pink text-pinkbg hover:text-pink hover:bg-pinkbg p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
