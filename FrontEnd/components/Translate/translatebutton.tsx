import React, { useState, useEffect } from 'react';


const TranslateComponent = () => {
   const [inputText, setInputText] = useState<string>('');
   const [translatedText, setTranslatedText] = useState<string>('');
   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');
   const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
   const [showTranslateBoxes, setShowTranslateBoxes] = useState<boolean>(false);

   useEffect(() => {
      if (inputText === '') {
         setTranslatedText('');
         setError('');
         return;
      }

      if (inputText && selectedLanguage) {
         setLoading(true);
         fetch('/api/translate', { 
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText, to: selectedLanguage }),
         })
            .then((response) => response.json())
            .then((data) => {
               setTranslatedText(data[0].translations[0].text);
               setError('');
            })
            .catch((error) => {
               setError('Error translating text');
            })
            .finally(() => {
               setLoading(false);
            });
      }
   }, [inputText, selectedLanguage]);

   const handleLanguageChange = (toLanguage: string) => {
      setSelectedLanguage(toLanguage);
      setShowTranslateBoxes(true);
   };

   const handleTranslateClick = () => {
      setDropdownVisible(!dropdownVisible);
      setShowTranslateBoxes(false);
   };

   return (
      <>
         <div
            onClick={handleTranslateClick}
            className="shadow-sm cursor-pointer inline-flex pr-5 pl-3 pb-2 pt-1.5 rounded-md text-sm outline outline-1 outline-gray-300 font-medium mb-4"
            style={{ background: 'transparent' }}
         >
            <div className="mt-0.5">Translate</div>
            <div className="rotate-180 ml-2 mb-1.5 ">
               <div className="rotate-90 ">
                  <img
                     src="../down.png"
                     className={`w-2.5 h-1.5 transition-transform duration-200  ${dropdownVisible ? 'rotate-90' : ''}`}
                     alt="Down arrow"
                  />
               </div>
            </div>
         </div>

         {dropdownVisible && (
            <div className="mb-8 outline outline-1 outline-gray-300 shadow-md rounded-md p-1.5">
               <div className="grid lg:grid-cols-10 md:grid-cols-4 sm:grid-cols-2 gap-4 text-sm">

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('fa')}
                     >
                        Dari
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ps')}
                     >
                        Pashto
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('tk')}
                     >
                        Turkmen
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('uz')}
                     >
                        Uzbek
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('en')}
                     >
                        English
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('fr')}
                     >
                        French
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('es')}
                     >
                        Spanish
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('it')}
                     >
                        Italian
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('zh-Hans')}
                     >
                        Chinese
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ja')}
                     >
                        Japanese
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ko')}
                     >
                        Korean
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ru')}
                     >
                        Russian
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ar')}
                     >
                        Arabic
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('pt')}
                     >
                        Portuguese
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('hi')}
                     >
                        Hindi
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('bn')}
                     >
                        Bengali
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('tr')}
                     >
                        Turkish
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('sv')}
                     >
                        Swedish
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('da')}
                     >
                        Danish
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('no')}
                     >
                        Norwegian
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('fi')}
                     >
                        Finnish
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('el')}
                     >
                        Greek
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('he')}
                     >
                        Hebrew
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('hu')}
                     >
                        Hungarian
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('id')}
                     >
                        Indonesian
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ms')}
                     >
                        Malay
                     </button>
                     <button
                        className="pl-3 pr-5 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('vi')}
                     >
                        Vietnamese
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('th')}
                     >
                        Thai
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('fil')}
                     >
                        Filipino
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ta')}
                     >
                        Tamil
                     </button>
                     <button onClick={() => handleLanguageChange('te')}
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                     >
                        Telugu
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('mr')}
                     >
                        Marathi
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('pa')}
                     >
                        Punjabi
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('gu')}
                     >
                        Gujarati
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('kn')}
                     >
                        Kannada
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ml')}
                     >
                        Malayalam
                     </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('ur')}
                     >
                        Urdu
                     </button>
                     <button
                        className="pl-3 pr-6 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('am')}
                     >
                        Amharic
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('so')}
                     >
                        Somali
                     </button>
                     <button
                        className="pl-3 pr-10 cursor-pointer py-1 hover:bg-gray-100 justify-self-start active:bg-white"
                        onClick={() => handleLanguageChange('sw')}
                     >
                        Swahili
                     </button>
                  </div>

               </div>
            </div>
         )}

         {showTranslateBoxes && (
            <div className="bg-gray-100 pb-12 pt-1 mt-8 mb-8 pr-20 pl-6 rounded-md">
               <h1 className="font-semibold mb-2 mt-8">Translator</h1>
               <div className="grid">
                  <textarea
                     value={inputText}
                     onChange={(e) => setInputText(e.target.value)}
                     placeholder="Enter text to translate..."
                     className="outline outline-1 outline-gray-300 rounded-sm pb-10 pl-2 pt-2"
                  />
               </div>
               <div>
                  <h2 className="font-semibold mt-8">Translation</h2>
                  <p className="bg-white mt-2 outline outline-1 outline-gray-300 rounded-sm pb-20 pt-2 pl-2">
                     {translatedText}
                  </p>
               </div>
               {loading && <p className="mt-3 font-medium">Translating...</p>}
               {error && (
                  <p className="mt-3 text-red-600">
                     Translation Failed, Please Try Again. {error}
                  </p>
               )}
            </div>
         )}
      </>
   );
};

export default TranslateComponent;



