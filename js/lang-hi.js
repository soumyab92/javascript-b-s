// Hindi module content, index-aligned with MODULES in script.js.
// Kept in its own file so the course data and the Hindi prose stay separately editable.
// script.js reads this through tr() and falls back to English for any missing entry.
const HI_MODULES = [

// 0 -- How JS Actually Runs
{ title:"जावास्क्रिप्ट असल में कैसे चलता है",
  explain:`
  <p>जावास्क्रिप्ट <b>सिंगल-थ्रेडेड</b> है — एक ही call stack, एक समय पर एक ही चीज़ चलती है। async से जुड़ी लगभग हर "अजीब" बात इसी एक तथ्य से निकलती है।</p>
  <h4>इसमें शामिल हिस्से</h4>
  <ul>
    <li><b>Call stack</b> — इस समय कौन सा फंक्शन चल रहा है, यह ट्रैक करता है। एक लंबा synchronous लूप बाकी सब कुछ रोक देता है।</li>
    <li><b>Web API</b> — <code>setTimeout</code>, <code>fetch</code>, DOM इवेंट JS इंजन के बाहर चलते हैं, इसीलिए single-threaded होने के बावजूद JS ब्लॉक नहीं होता।</li>
    <li><b>Microtask queue</b> — पूरे हो चुके Promise callback यहाँ इंतज़ार करते हैं।</li>
    <li><b>Callback queue</b> — पूरे हो चुके setTimeout callback यहाँ इंतज़ार करते हैं।</li>
    <li><b>Event loop</b> — call stack खाली होते ही यह पहले पूरी microtask queue खाली करता है, फिर callback queue से एक चीज़ उठाता है।</li>
  </ul>
  <div class="why"><b>यह क्यों ज़रूरी है:</b> इसी से समझ आता है कि setTimeout(fn, 0) तुरंत क्यों नहीं चलता, Promise हमेशा setTimeout से पहले क्यों चलता है, और एक भारी लूप पेज को क्यों जाम कर देता है।</div>`,
  challenge:"पहले order का अनुमान लगाएँ, फिर एक और setTimeout और एक और Promise.then जोड़कर अपना अनुमान दोबारा जाँचें।" },

// 1 -- Variables, Scope & Hoisting
{ title:"वेरिएबल, स्कोप और होइस्टिंग",
  explain:`
  <p><code>const</code> आपका डिफ़ॉल्ट होना चाहिए। <code>let</code> सिर्फ़ तब इस्तेमाल करें जब वैल्यू बदलनी हो। <code>var</code> से पूरी तरह बचें — यह ब्लॉक के बाहर लीक हो जाता है और उलझन पैदा करता है।</p>
  <h4>स्कोप</h4>
  <p>Global scope हर जगह दिखता है। Block scope (<code>{}</code>) को let/const मानते हैं — var इसे नहीं मानता, वह सिर्फ़ फंक्शन की सीमा मानता है।</p>
  <h4>क्लोजर — सबसे ज़रूरी बात</h4>
  <p>क्लोजर तब बनता है जब अंदर का फंक्शन बाहर के फंक्शन के वेरिएबल तक पहुँच बनाए रखता है, चाहे बाहर का फंक्शन खत्म हो चुका हो।</p>
  <div class="why"><b>यह क्यों ज़रूरी है:</b> क्लोजर से ही private counter, memoization और अंदरूनी तौर पर React का useState काम करता है। यह एक बार समझ आ जाए तो framework का "जादू" जादू नहीं लगता।</div>`,
  challenge:"makeCounter को ऐसे लिखें कि वह एक शुरुआती वैल्यू और एक step size ले सके, फिर दो अलग-अलग counter बनाएँ।" },

// 2 -- Data Types & Coercion
{ title:"डेटा टाइप और कोअर्शन",
  explain:`
  <p><b>Primitive</b> (string, number, boolean, null, undefined) की तुलना वैल्यू से होती है। <b>Reference type</b> (object, array, function) की तुलना reference से होती है — इसीलिए देखने में एक जैसे दो object "बराबर" नहीं होते।</p>
  <div class="warn"><b>मशहूर गड़बड़ी:</b> <code>typeof null</code> "object" देता है — यह भाषा की पुरानी बग है, कोई डिज़ाइन का फ़ैसला नहीं।</div>
  <h4>हमेशा === इस्तेमाल करें</h4>
  <p><code>==</code> तुलना से पहले टाइप बदल देता है और चौंकाने वाले बग पैदा करता है। <code>===</code> कभी टाइप नहीं बदलता। एक आम अपवाद: <code>value == null</code> null और undefined दोनों को एक साथ पकड़ लेता है।</p>
  <h4>Truthy और Falsy</h4>
  <p>कुल 8 falsy वैल्यू हैं: <code>false, 0, -0, 0n, "", null, undefined, NaN</code>। बाकी सब truthy है — खाली array और object भी।</p>`,
  challenge:"याद से सभी 8 falsy वैल्यू लिखें, फिर हर एक को if से जाँचें जो 'falsy' या 'truthy' लॉग करे।" },

// 3 -- Operators
{ title:"ऑपरेटर",
  explain:`
  <p>आम operator (<code>+ - * / **</code>, तुलना) जैसा सोचते हैं वैसा ही काम करते हैं। दो नए operator असली बग ठीक करते हैं:</p>
  <h4>0 और खाली स्ट्रिंग का जाल</h4>
  <p><code>||</code> बाईं तरफ़ falsy होते ही दाईं तरफ़ चला जाता है — 0 और "" भी falsy हैं। इसलिए <code>cartCount || "empty"</code> गलती से "empty" दिखाता है, जबकि cart में सही-सही 0 आइटम हैं।</p>
  <p><code>??</code> सिर्फ़ null/undefined पर fallback करता है — 0 और "" को सही वैल्यू मानकर रखता है।</p>
  <h4>Optional chaining</h4>
  <p><code>?.</code> से गहराई में रखी property बिना crash किए सुरक्षित पढ़ी जा सकती है: <code>user?.address?.city</code>।</p>`,
  challenge:"एक ऐसा object बनाएँ जिसमें nested field हो भी सकती है और नहीं भी, फिर ?? और ?. से उसे default के साथ सुरक्षित पढ़ें।" },

// 4 -- Control Flow
{ title:"कंट्रोल फ्लो",
  explain:`
  <h4>कौन सा लूप चुनें</h4>
  <p>Array के लिए <code>for...of</code> आपका डिफ़ॉल्ट है — यह सीधे हर वैल्यू देता है। पुराना <code>for(i=0...)</code> सिर्फ़ तब इस्तेमाल करें जब index चाहिए।</p>
  <h4>इनलाइन वैल्यू के लिए Ternary</h4>
  <p><code>condition ? a : b</code> if/else के उलट सीधे एक वैल्यू बनाता है। इसीलिए React/JSX में यह आम है। 2 स्तर से ज़्यादा nest न करें।</p>`,
  challenge:"for...of की जगह .map() से लूप दोबारा लिखें, जिससे grade का एक array बने।" },

// 5 -- Functions Deep Dive
{ title:"फंक्शन गहराई से: this, arrow बनाम regular",
  explain:`
  <p>JS का सबसे ज़्यादा गलत समझा जाने वाला हिस्सा — इसे पक्का कर लेने पर उलझाने वाले बहुत से बग अपने आप सुलझ जाते हैं।</p>
  <h4>मुख्य नियम</h4>
  <p><code>this</code> इस बात पर निर्भर करता है कि फंक्शन <b>कैसे कॉल हुआ</b>, कहाँ लिखा गया इस पर नहीं:</p>
  <ul>
    <li><code>obj.method()</code> → this है obj</li>
    <li>सीधा <code>fn()</code> → this है undefined</li>
    <li><code>new fn()</code> → this है नया object</li>
    <li><code>.call/.apply/.bind</code> → this वही जो आप देंगे</li>
  </ul>
  <h4>Arrow function जान-बूझकर नियम तोड़ता है</h4>
  <p>Arrow के पास अपना <code>this</code> नहीं होता — जहाँ इसे लिखा गया, वहीं के आसपास के कोड से this लेकर हमेशा के लिए रख लेता है।</p>
  <div class="why"><b>यह क्यों ज़रूरी है:</b> इसी वजह से callback और React component में arrow standard हैं — this वही रहता है जो कोड लिखते समय था।</div>`,
  challenge:"एक object बनाएँ जिसमें regular method के अंदर setTimeout this.name लॉग करने की कोशिश करे — देखें कि यह फेल होता है, फिर arrow function से ठीक करें।" },

// 6 -- Objects & Prototypes
{ title:"ऑब्जेक्ट और प्रोटोटाइप",
  explain:`
  <h4>Shallow copy का जाल</h4>
  <p><code>{...obj}</code> सिर्फ़ shallow copy बनाता है — अंदर के nested object अभी भी reference से साझा रहते हैं। copy के ज़रिए nested वैल्यू बदलने पर "original" भी बदल जाता है। सच्ची deep copy के लिए <code>structuredClone(obj)</code> इस्तेमाल करें।</p>
  <h4>प्रोटोटाइप — "इनहेरिटेंस" कैसे काम करती है</h4>
  <p>हर object एक छिपे <b>प्रोटोटाइप</b> से जुड़ा होता है। जब कोई property सीधे नहीं मिलती, JS इस chain पर ऊपर चढ़ता जाता है — असल में इसी वजह से .map() हर array पर मौजूद रहता है, हर एक में अलग से कॉपी हुए बिना।</p>`,
  challenge:"एक nested user object दिया गया है, ऐसा फंक्शन लिखें जो उसकी deep copy बनाकर सिर्फ़ copy बदले और साबित करे कि original अछूता है।" },

// 7 -- Arrays
{ title:"ऐरे: पूरा मेथड रेफरेंस",
  explain:`
  <p>रोज़ के frontend काम के लिए सबसे ज़्यादा काम आने वाला विषय।</p>
  <h4>Mutating बनाम non-mutating</h4>
  <ul>
    <li><b>Non-mutating (इन्हें प्राथमिकता दें):</b> map, filter, reduce, find, some, every, slice</li>
    <li><b>Mutating (सावधानी से):</b> push, pop, splice, sort, reverse</li>
  </ul>
  <p>React में जगह पर mutate करने से update trigger नहीं होता — नया array reference चाहिए।</p>
  <div class="warn"><b>क्लासिक बग:</b> बिना argument .sort() स्ट्रिंग की तरह sort करता है — [10,2,1].sort() देता है [1,10,2]। संख्याओं के लिए हमेशा (a,b) => a-b दें।</div>`,
  challenge:"[1,2,3,4,5,6] दिया गया है, एक ही chain में सम संख्याएँ filter करके उनके वर्ग map करें।" },

// 8 -- Strings
{ title:"स्ट्रिंग: पूरा मेथड रेफरेंस",
  explain:`
  <h4>Template literal concatenation की जगह लेता है</h4>
  <p>Backtick स्ट्रिंग में <code>\${}</code> के साथ कोई भी expression रखा जा सकता है और multi-line स्ट्रिंग सीधे लिखी जा सकती है। + से जोड़ने के बजाय इन्हें चुनें।</p>
  <h4>जानने लायक मेथड परिवार</h4>
  <ul>
    <li><b>Trim/case:</b> trim(), toLowerCase(), toUpperCase()</li>
    <li><b>खोज:</b> includes(), startsWith(), endsWith()</li>
    <li><b>Split/join:</b> split() स्ट्रिंग को array बनाता है, join() उल्टा करता है</li>
    <li><b>Replace:</b> replace() सिर्फ़ पहला match, replaceAll() हर match</li>
  </ul>`,
  challenge:"एक फंक्शन slugify(title) लिखें जो lowercase करे, trim करे और स्पेस को हाइफ़न से बदल दे।" },

// 9 -- Destructuring, Spread & Rest
{ title:"डिस्ट्रक्चरिंग, स्प्रेड और रेस्ट",
  explain:`
  <h4>डिस्ट्रक्चरिंग</h4>
  <p>Array destructuring position से निकालता है: <code>const [a,b] = arr</code>। Object destructuring नाम से निकालता है: <code>const {name,price} = obj</code>। यह फंक्शन के parameter में सीधे काम करता है — React में बहुत आम: <code>function Card({title,price}){}</code></p>
  <h4>Spread — बाहर की तरफ़ फैलाना</h4>
  <p><code>[...arr1,...arr2]</code> दो array जोड़ता है। <code>{...obj, price:799}</code> बिना mutate किए copy करता है और एक field बदल देता है।</p>
  <h4>Rest — अंदर की तरफ़ इकट्ठा करना</h4>
  <p><code>const [first,...rest] = arr</code> बचे हुए सारे आइटम एक array में इकट्ठा कर लेता है।</p>`,
  challenge:"एक nested address object से city और country को default के साथ, एक ही लाइन में destructure करें।" },

// 10 -- Classes & OOP
{ title:"क्लास और OOP",
  explain:`
  <p><code>class</code> असल में Objects मॉड्यूल वाले प्रोटोटाइप सिस्टम के ऊपर बनी syntax sugar है।</p>
  <h4>मुख्य हिस्से</h4>
  <ul>
    <li><code>constructor()</code> एक बार चलता है, जब आप <code>new ClassName()</code> कॉल करते हैं</li>
    <li><code>extends</code> इनहेरिटेंस बनाता है; subclass के constructor में <code>super()</code> सबसे पहले चलना चाहिए</li>
    <li><code>static</code> मेथड class के होते हैं, instance के नहीं</li>
  </ul>
  <h4>Private field</h4>
  <p><code>#field</code> सचमुच private है — class के बाहर से इस तक पहुँचा नहीं जा सकता, यह असली लागू होने वाला feature है।</p>
  <h4>Getter/Setter</h4>
  <p><code>get</code>/<code>set</code> से एक मेथड property की तरह बर्ताव करता है और पर्दे के पीछे logic चलाता रहता है।</p>`,
  challenge:"BankAccount में एक #pin field और withdraw(amount, pin) मेथड जोड़ें जो सिर्फ़ pin मिलने पर काम करे।" },

// 11 -- Iterators, Generators, Symbol
{ title:"इटरेटर, जेनरेटर, Symbol",
  explain:`
  <p>यही असली तरीका है जिससे <code>for...of</code>, spread और destructuring काम करते हैं — और अपने बनाए object पर भी इन्हें कैसे चलाया जाए।</p>
  <h4>Symbol — कभी न टकराने वाली key</h4>
  <p><code>Symbol</code> एक गारंटीशुदा अनोखी वैल्यू है जिसे property key की तरह इस्तेमाल किया जा सकता है। एक ही description से बने दो symbol भी बराबर नहीं होते, इसलिए symbol key उसी object पर किसी दूसरी library की जोड़ी हुई string key से कभी नहीं टकराती। भाषा कुछ <b>well-known symbol</b> अपने ही बर्ताव में घुसने के रास्ते के तौर पर रखती है — इनमें सबसे अहम <code>Symbol.iterator</code> है।</p>
  <h4>Iterable प्रोटोकॉल</h4>
  <p><code>for...of</code>, spread और destructuring array के बारे में अलग से कुछ नहीं जानते। वे सिर्फ़ <code>[Symbol.iterator]</code> नाम का मेथड खोजते हैं और उसे कॉल करते हैं। उस मेथड को एक <b>iterator</b> लौटाना होता है — यानी ऐसा object जिसका <code>.next()</code> हर बार <code>{ value, done }</code> देता है। Array, string, Map और Set सबके पास यह पहले से है, और सिर्फ़ इसी वजह से उन पर लूप और spread चलता है।</p>
  <h4>जेनरेटर फंक्शन</h4>
  <p><code>function*</code> <code>yield</code> से रुक सकता है और बाद में फिर चल सकता है, एक ही बार में शुरू से आखिर तक चलने के बजाय। हर <code>.next()</code> अगले yield तक चलता है।</p>
  <div class="why"><b>यह क्यों ज़रूरी है:</b> अपने object में <code>[Symbol.iterator]</code> जोड़ते ही वह loop और spread करने लायक हो जाता है — पहले array में बदलने की ज़रूरत नहीं। जेनरेटर इसका शॉर्टकट है: जेनरेटर object खुद ही एक वैध iterator है, इसलिए <code>*[Symbol.iterator]()</code> हाथ से लिखे पूरे <code>.next()</code> हिस्से की जगह ले लेता है। इनसे lazy sequence भी बनते हैं, और async/await के अपने syntax बनने से पहले यही उसका तरीका था।</div>`,
  challenge:"एक playlist object को [Symbol.iterator] दें ताकि [...playlist] उसके गाने लौटाए — पहले हाथ से .next() लिखकर, फिर उसी को एक लाइन के जेनरेटर से दोबारा लिखें। इसके बाद idRange(start, end) जेनरेटर लिखें जो उस range की हर id yield करे।" },

// 12 -- Map, Set, WeakMap, WeakSet
{ title:"Map, Set, WeakMap, WeakSet",
  explain:`
  <h4>Map — सादे object से बेहतर</h4>
  <p>सादे object में सिर्फ़ string key चलती है। Map में कोई भी वैल्यू key बन सकती है, order की गारंटी रहती है, और असली .size property मिलती है।</p>
  <h4>Set — अनोखी वैल्यू</h4>
  <p>डुप्लिकेट अपने आप हटा देता है। क्लासिक dedupe ट्रिक: <code>[...new Set(array)]</code>।</p>`,
  challenge:"ऐसे object का array दिया गया है जिसमें 'id' डुप्लिकेट हैं, id पर key किए एक Map से उन्हें dedupe करें।" },

// 13 -- Async JS
{ title:"Async JS: Callback → Promise → Async/Await",
  explain:`
  <p>महारत पाने लायक सबसे अहम विषय — लगभग हर API कॉल इसी pattern से गुज़रती है।</p>
  <h4>Promise</h4>
  <p>हमेशा pending, fulfilled या rejected में से किसी एक हालत में रहता है। सफलता पर .then(), विफलता पर .catch(), और हर हाल में .finally() चलता है।</p>
  <h4>async/await</h4>
  <p>async फंक्शन हमेशा एक Promise लौटाता है। await Promise के निपटने तक रोक देता है, जिससे async कोड ऊपर से नीचे पढ़ा जा सकता है। await को हमेशा try/catch में रखें।</p>
  <h4>समानांतर चलाना</h4>
  <p>दो अलग await एक के बाद एक रखने पर वे क्रम से चलते हैं और समय बर्बाद होता है। <code>Promise.all([fn1(),fn2()])</code> दोनों को साथ शुरू करता है।</p>`,
  challenge:"एक async फंक्शन लिखें जो Promise.all से fakeApiCall को 3 बार समानांतर कॉल करे और मिला हुआ array लॉग करे।" },

// 14 -- Error Handling
{ title:"एरर हैंडलिंग",
  explain:`
  <h4>try/catch/finally</h4>
  <p>try का कोड सामान्य रूप से चलता है; अगर वह throw करे तो नियंत्रण catch पर चला जाता है। finally हर हाल में चलता है — cleanup के लिए यही सही जगह है।</p>
  <h4>Custom error टाइप</h4>
  <p>Error को extend करके अपने नाम वाले टाइप बनाएँ (ValidationError, NetworkError)। catch ब्लॉक instanceof से error के प्रकार के हिसाब से अलग रास्ता चुन सकता है।</p>`,
  challenge:"एक NetworkError class बनाएँ और उसे ऐसे फंक्शन से throw करें जो फेल हुई fetch की नकल करे, फिर catch करके उसके प्रकार के हिसाब से अलग काम करें।" },

// 15 -- Modules
{ title:"मॉड्यूल (import/export)",
  explain:`
  <h4>Named export — एक फ़ाइल में कई</h4>
  <p><code>export function add(){}</code> — जितने चाहिए उतने, {} के अंदर ठीक उसी नाम से import होते हैं।</p>
  <h4>Default export — एक फ़ाइल में ठीक एक</h4>
  <p><code>export default function multiply(){}</code> — {} के बिना, किसी भी नाम से import किया जा सकता है। React component परंपरा से default-export होते हैं।</p>
  <p>मॉड्यूल असली isolation भी देते हैं: जो export नहीं हुआ, वह उसी फ़ाइल में private रह जाता है।</p>`,
  challenge:"एक छोटा utils मॉड्यूल (comment के रूप में) लिखें जिसमें 2 named export और 1 default export हों, फिर उसकी import लाइन लिखें।" },

// 16 -- DOM Manipulation & Events
{ title:"DOM मैनिपुलेशन और इवेंट",
  explain:`
  <h4>एलिमेंट चुनना और पढ़ना</h4>
  <p><code>textContent</code> सुरक्षित है; अविश्वसनीय content के साथ <code>innerHTML</code> में XSS का खतरा रहता है।</p>
  <h4>Event delegation</h4>
  <p>हर child पर अलग listener लगाने की जगह parent पर एक — क्लिक के समय event.target से जाँचा जाता है, और आगे जुड़ने वाले child पर भी अपने आप काम करता है।</p>
  <h4>preventDefault</h4>
  <p>ब्राउज़र का डिफ़ॉल्ट काम (जैसे form submit पर reload) रोक देता है, जबकि आपका handler तब भी चलता है।</p>`,
  challenge:"'.todo-list' के लिए event delegation लिखें (असली कोड की तरह, चाहे यहाँ न चले) जो क्लिक किए आइटम का टेक्स्ट लॉग करे।" },

// 17 -- Browser APIs
{ title:"जानने लायक ब्राउज़र API",
  explain:`
  <h4>Storage</h4>
  <p>localStorage हमेशा के लिए बना रहता है। sessionStorage टैब बंद होने पर मिट जाता है। दोनों सिर्फ़ स्ट्रिंग रखते हैं — object के लिए JSON.stringify/parse चाहिए।</p>
  <h4>टाइमर</h4>
  <p>setTimeout एक बार चलता है; setInterval clearInterval कॉल होने तक दोहराता रहता है — यह भूल जाने पर memory leak होता है।</p>`,
  challenge:"असली कोड लिखें जो हर बार पेज लोड होने पर 'lastVisited' timestamp localStorage में सेव करे।" },

// 18 -- JSON
{ title:"JSON",
  explain:`
  <p>API के लिए सर्वमान्य डेटा फ़ॉर्मैट।</p>
  <h4>दो मुख्य फंक्शन</h4>
  <p>JSON.stringify JS को JSON स्ट्रिंग में बदलता है। JSON.parse उसे वापस बदल देता है।</p>
  <h4>क्या खो जाता है</h4>
  <p>stringify undefined, function और symbol को चुपचाप छोड़ देता है। Date ISO स्ट्रिंग बन जाती है, लेकिन parse करने पर अपने आप फिर Date नहीं बनती।</p>`,
  challenge:"Date field वाला एक nested object stringify करें, फिर parse करें और देखें कि date का क्या हुआ।" },

// 19 -- Regular Expressions
{ title:"रेगुलर एक्सप्रेशन (काम में आने वाला हिस्सा)",
  explain:`
  <h4>बुनियादी हिस्से</h4>
  <p><code>\\d</code> अंक, <code>\\w</code> word character, <code>\\s</code> whitespace, <code>+</code> एक या ज़्यादा, <code>*</code> शून्य या ज़्यादा, <code>g</code> flag सभी match, <code>i</code> case-insensitive।</p>
  <h4>जानने लायक तीन मेथड</h4>
  <p>pattern.test(str) boolean देता है। str.match(pattern) मिला हुआ टेक्स्ट देता है। str.replace(pattern, replacement) बदल देता है।</p>`,
  challenge:"एक regex लिखें जो जाँचे कि पासवर्ड में कम से कम 8 character और एक अंक है, फिर उसे test करें।" },

// 20 -- Functional Programming Patterns
{ title:"फंक्शनल प्रोग्रामिंग पैटर्न",
  explain:`
  <h4>Pure function</h4>
  <p>आउटपुट सिर्फ़ इनपुट पर निर्भर करता है, कोई side effect नहीं। एक ही इनपुट पर हमेशा एक ही आउटपुट — test करना बेहद आसान।</p>
  <h4>Immutability</h4>
  <p>डेटा को जगह पर बदलने के बजाय एक नई copy बनाएँ। React ठीक इसी तरह state के बदलाव पकड़ता है।</p>
  <h4>Higher-order function</h4>
  <p>जो कोई दूसरा फंक्शन लेता या लौटाता है — map/filter/reduce सभी इसी में आते हैं।</p>`,
  challenge:"एक pure फंक्शन updatePrice(product, newPrice) लिखें जो original को mutate किए बिना एक नया object लौटाए।" },

// 21 -- Common Pitfalls & Gotchas
{ title:"आम गलतियाँ और फंदे",
  explain:`
  <p>ये बग बार-बार सामने आते हैं क्योंकि यहाँ JS का डिफ़ॉल्ट बर्ताव सचमुच उलटा लगता है — नाम से याद रखने लायक।</p>
  <h4>सॉर्टिंग</h4>
  <p>बिना फंक्शन .sort() स्ट्रिंग की तरह sort करता है: [10,2,1].sort() → [1,10,2]। हमेशा (a,b)=>a-b दें।</p>
  <h4>Floating point</h4>
  <p>0.1+0.2 ठीक 0.3 नहीं होता — float के जोड़ की तुलना कभी === से न करें, .toFixed(n) से round करें।</p>
  <h4>NaN खुद के बराबर नहीं</h4>
  <p>NaN === NaN false होता है। Number.isNaN() इस्तेमाल करें।</p>
  <h4>forEach के अंदर async</h4>
  <p>forEach अपने callback का await नहीं करता — सब समानांतर और बेतरतीब चल पड़ते हैं। इसकी जगह await के साथ for...of इस्तेमाल करें।</p>`,
  challenge:"forEach-with-async-await लूप को for...of लूप से दोबारा लिखें ताकि हर आइटम का ठीक से इंतज़ार हो।" }

];
