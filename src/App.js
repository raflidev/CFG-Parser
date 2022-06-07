import { useState } from "react";
function App() {
  const [team, setTeam] = useState(false);
  var [parser, setParser] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [result, setResult] = useState(false);
  const [rule, setRule] = useState(false);

  // inisialisasi
  const state_list = [
    "q0","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10",
    "q11","q12","q13","q14","q15","q16","q17","q18","q19","q20",
    "q21","q22","q23","q24","q25","q26","q27","q28","q29","q30",
    "q31","q32","q33","q34","q35","q36","q37","q38","q39","q40","q41"
  ];

  const alfabet_list = [];
  for (let i = 1; i <= 26; i++) {
		let values = i - 1
    let keys = 96 + i
		if (values <= 25) {
			alfabet_list.push(String.fromCharCode(keys))
		}
	}

  // transisi table
  
  var transisi_list = {};

  for (let i = 0; i < state_list.length; i++){
    transisi_list[state_list[i]] = {}
    for(let j = 0; j < alfabet_list.length; j++){
      transisi_list[state_list[i]][alfabet_list[j]] = "error";
    }
    transisi_list[state_list[i]]['#'] = "error"
    transisi_list[state_list[i]][' '] = "error"
  }

  transisi_list['q0']['a'] = 'q1'
  transisi_list['q0']['k'] = 'q14'
  transisi_list['q0']['b'] = 'q24'
  transisi_list['q0']['n'] = 'q31'
  transisi_list['q1']['b'] = 'q2'
  transisi_list['q1']['n'] = 'q4'
  transisi_list['q1']['m'] = 'q11'
  transisi_list['q2']['d'] = 'q3'
  transisi_list['q3']['i'] = 'q41'
  transisi_list['q4']['j'] = 'q5'
  transisi_list['q4']['g'] = 'q8'
  transisi_list['q5']['e'] = 'q6'
  transisi_list['q6']['u'] = 'q7'
  transisi_list['q7']['n'] = 'q41'
  transisi_list['q8']['k'] = 'q9'
  transisi_list['q9']['l'] = 'q10'
  transisi_list['q10']['u'] = 'q12'
  transisi_list['q11']['e'] = 'q12'
  transisi_list['q12']['n'] = 'q13'
  transisi_list['q13']['g'] = 'q41'
  transisi_list['q14']['a'] = 'q15'
  transisi_list['q15']['n'] = 'q16'
  transisi_list['q15']['l'] = 'q18'
  transisi_list['q16']['t'] = 'q17'
  transisi_list['q17']['o'] = 'q12'
  transisi_list['q18']['e'] = 'q19'
  transisi_list['q19']['c'] = 'q20'
  transisi_list['q20']['i'] = 'q41'
  transisi_list['q21']['d'] = 'q22'
  transisi_list['q22']['a'] = 'q23'
  transisi_list['q23']['g'] = 'q41'
  transisi_list['q24']['a'] = 'q21'
  transisi_list['q24']['e'] = 'q25'
  transisi_list['q25']['a'] = 'q26'
  transisi_list['q25']['u'] = 'q27'
  transisi_list['q26']['s'] = 'q41'
  transisi_list['q27']['r'] = 'q28'
  transisi_list['q28']['e'] = 'q29'
  transisi_list['q29']['u'] = 'q30'
  transisi_list['q30']['m'] = 'q41'
  transisi_list['q31']['g'] = 'q32'
  transisi_list['q32']['a'] = 'q33'
  transisi_list['q32']['u'] = 'q37'
  transisi_list['q33']['n'] = 'q34'
  transisi_list['q34']['j'] = 'q35'
  transisi_list['q35']['u'] = 'q36'
  transisi_list['q36']['k'] = 'q41'
  transisi_list['q37']['m'] = 'q38'
  transisi_list['q38']['b'] = 'q39'
  transisi_list['q39']['a'] = 'q40'
  transisi_list['q40']['h'] = 'q41'
  transisi_list['q0'][' '] = 'q0'
  transisi_list['q41'][' '] = 'q0'
  transisi_list['q0']['#'] = 'accept'
  transisi_list['q41']['#'] = 'accept'

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(parser.split(" "));
    var idx_char = 0
    var state = 'q0'
    var current_token = ''
    var parserbaru = parser+"#"
    while(state !== 'accept'){
      var current_char = parserbaru[idx_char]
      current_token += current_char
      state = transisi_list[state][current_char]
      if(state === 'q41') {
        console.log('current token: ', current_token, ", valid");
        current_token = ""
      }
      if (state === 'error'){
        console.log('error');
        break;
      }
      idx_char++
    }
    if (state === 'accept'){
      console.log('semua token di input: ', parser, ', valid');
    }
    if(state !== 'accept') {
      console.log("pentol");
      setResult(false);
    }else{
      console.log("bagus");
      setResult(true);
    }
    setShowDiv(true);
    setTimeout(() => {
      setShowDiv(false)
      }, 2000
    );
  }

  return (
    <div className="bg-black h-screen text-pink font-poppins">
      <div className="flex h-screen">
        <div className="w-full m-auto lg:w-6/12 space-y-10 lg:space-y-5">
          <div className="text-xl font-bold text-center"> 
            CFG PARSER - BAHASA SUNDA
          </div>
          { showDiv === true && result === false &&
          <div className="bg-pinkbg text-pink rounded p-3">
            Format anda salah
          </div>
          }
          { showDiv === true && result === true &&
          <div className="bg-green text-black rounded p-3">
            Format anda benar
          </div>
          }
          <form onSubmit={handleSubmit} className="flex-col lg:flex lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-4">
            <div className="w-full lg:w-10/12">
              <input type="text" value={parser} onChange={(e) => setParser(e.target.value)} className="w-full rounded px-3 py-2" placeholder="Mangga nyerat CFG anjeun" />
            </div>
            <div className="w-full lg:w-2/12">
              <button type="submit" className="bg-pink w-full text-black px-4 py-2 rounded-md font-bold hover:bg-pinkbg hover:text-pink">Submit</button>
            </div>  
          </form>
          <div className="flex justify-center">
          { rule === false &&
            <svg onClick={() => setRule(true)} xmlns="http://www.w3.org/2000/svg" className="hover:text-pinkbg hover:rounded-full hover:bg-pink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          }
          </div>
          { rule === true &&
          <div className="bg-pinkbg px-6 py-3 rounded">
            <p>
              <p>
                &lt;S&gt;::= &lt;SB&gt; &lt;VB&gt; &lt;OB&gt;
              </p>
              <p>
                &lt;SB&gt; ::= anjeun | abdi
              </p>
              <p>
                &lt;VB&gt; ::= ameng | nganjuk | ngumbah
              </p>
              <p>
                &lt;NN&gt; ::= kantong | kaleci | beas | angklung
              </p>
              <p>
                &lt;OB&gt; ::= &lt;NN&gt; &lt;AD&gt; | &epsilon;
              </p>
              <p>
                &lt;AD&gt; ::= beureum | badag | &epsilon;
              </p>
            </p>
          </div>
          }
          <div className="flex justify-center">
            { rule === true &&
              <svg onClick={() => setRule(false)}  xmlns="http://www.w3.org/2000/svg" className="hover:text-pinkbg hover:rounded-full hover:bg-pink h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            }
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
                <li>badag = besar</li>
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
