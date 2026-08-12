// Bengali numerals, so counts read naturally in the bn UI
const bnNum = n => String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);

const UI = {
  en: {
    eyebrow:"basic → advanced · full reference",
    title:"JavaScript, start to finish",
    sub:n=>`${n} modules · deep explanations · runnable code · progress saved automatically`,
    reset:"↺ Reset progress",
    back:"← Back", next:"Next →", run:"▶ Run", markComplete:"mark complete",
    tryYourself:"Try it yourself", moduleOf:(i,n)=>`module ${i} of ${n}`,
    noOutput:"No output — try adding a console.log()", outputPlaceholder:"Output will appear here",
    saved:"✓ saved", saving:"saving…",
    authTitle:"Sign in to keep your progress",
    authSub:"A throwaway practice account. Nothing leaves this browser.",
    authNote:"Demo account only — it is stored unencrypted in this browser. Do not reuse a real password.",
    tabLogin:"Log in", tabSignup:"Create account",
    lblId:"User ID", lblPw:"Password", lblPw2:"Confirm password",
    btnLogin:"Log in", btnSignup:"Create account & start",
    logout:"Log out", signedInAs:"signed in as",
    errIdShort:"User ID must be at least 3 characters.",
    errIdChars:"Use only lowercase letters, numbers, dot, dash or underscore.",
    errPwShort:"Password must be at least 4 characters.",
    errPwMatch:"The two passwords do not match.",
    errExists:"That user ID already exists — log in instead.",
    errNoUser:"No account found with that user ID.",
    errWrongPw:"Wrong password.",
    errNoStorage:"This browser is blocking local storage, so nothing can be saved."
  },
  bn: {
    eyebrow:"বেসিক → অ্যাডভান্সড · সম্পূর্ণ গাইড",
    title:"জাভাস্ক্রিপ্ট, শুরু থেকে শেষ পর্যন্ত",
    sub:n=>`${bnNum(n)}টি মডিউল · সহজ ভাষায় ব্যাখ্যা · রান-করা যায় এমন কোড · প্রোগ্রেস অটো-সেভ হয়`,
    reset:"↺ প্রোগ্রেস রিসেট করুন",
    back:"← পেছনে", next:"পরবর্তী →", run:"▶ রান করুন", markComplete:"সম্পন্ন হিসেবে চিহ্নিত করুন",
    tryYourself:"নিজে চেষ্টা করুন", moduleOf:(i,n)=>`মডিউল ${i} / ${n}`,
    noOutput:"কোনো আউটপুট নেই — একটা console.log() যোগ করে দেখুন", outputPlaceholder:"আউটপুট এখানে দেখা যাবে",
    saved:"✓ সেভ হয়েছে", saving:"সেভ হচ্ছে…",
    authTitle:"প্রোগ্রেস জমা রাখতে সাইন ইন করুন",
    authSub:"এটা শুধু প্র্যাকটিসের জন্য একটা অ্যাকাউন্ট। কোনো তথ্য এই ব্রাউজারের বাইরে যায় না।",
    authNote:"শুধু ডেমো অ্যাকাউন্ট — পাসওয়ার্ড এই ব্রাউজারে এনক্রিপশন ছাড়াই জমা থাকে। আসল কোনো পাসওয়ার্ড এখানে দেবেন না।",
    tabLogin:"লগ ইন", tabSignup:"অ্যাকাউন্ট তৈরি করুন",
    lblId:"ইউজার আইডি", lblPw:"পাসওয়ার্ড", lblPw2:"পাসওয়ার্ড আবার লিখুন",
    btnLogin:"লগ ইন করুন", btnSignup:"অ্যাকাউন্ট তৈরি করে শুরু করুন",
    logout:"লগ আউট", signedInAs:"লগ ইন করেছেন",
    errIdShort:"ইউজার আইডি কমপক্ষে ৩ অক্ষরের হতে হবে।",
    errIdChars:"শুধু ছোট হাতের অক্ষর, সংখ্যা, ডট, ড্যাশ বা আন্ডারস্কোর ব্যবহার করুন।",
    errPwShort:"পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে।",
    errPwMatch:"দুটো পাসওয়ার্ড মিলছে না।",
    errExists:"এই ইউজার আইডি আগেই আছে — লগ ইন করুন।",
    errNoUser:"এই ইউজার আইডিতে কোনো অ্যাকাউন্ট পাওয়া যায়নি।",
    errWrongPw:"পাসওয়ার্ড ভুল হয়েছে।",
    errNoStorage:"এই ব্রাউজার local storage ব্লক করছে, তাই কিছু সেভ করা যাচ্ছে না।"
  },
  hi: {
    eyebrow:"बेसिक → एडवांस्ड · पूरी गाइड",
    title:"जावास्क्रिप्ट, शुरू से आख़िर तक",
    sub:n=>`${n} मॉड्यूल · गहरी व्याख्या · चलाकर देखने वाला कोड · प्रोग्रेस अपने आप सेव`,
    reset:"↺ प्रोग्रेस रीसेट करें",
    back:"← पीछे", next:"आगे →", run:"▶ चलाएँ", markComplete:"पूरा हुआ चिह्नित करें",
    tryYourself:"खुद कोशिश करें", moduleOf:(i,n)=>`मॉड्यूल ${i} / ${n}`,
    noOutput:"कोई आउटपुट नहीं — एक console.log() जोड़कर देखें", outputPlaceholder:"आउटपुट यहाँ दिखेगा",
    saved:"✓ सेव हो गया", saving:"सेव हो रहा है…",
    authTitle:"प्रोग्रेस सहेजने के लिए साइन इन करें",
    authSub:"यह सिर्फ़ प्रैक्टिस का अस्थायी अकाउंट है। कुछ भी इस ब्राउज़र से बाहर नहीं जाता।",
    authNote:"सिर्फ़ डेमो अकाउंट — पासवर्ड इस ब्राउज़र में बिना एन्क्रिप्शन सेव होता है। कोई असली पासवर्ड यहाँ न डालें।",
    tabLogin:"लॉग इन", tabSignup:"अकाउंट बनाएँ",
    lblId:"यूज़र आईडी", lblPw:"पासवर्ड", lblPw2:"पासवर्ड दोबारा लिखें",
    btnLogin:"लॉग इन करें", btnSignup:"अकाउंट बनाकर शुरू करें",
    logout:"लॉग आउट", signedInAs:"लॉग इन:",
    errIdShort:"यूज़र आईडी कम से कम 3 अक्षर की होनी चाहिए।",
    errIdChars:"सिर्फ़ छोटे अंग्रेज़ी अक्षर, अंक, डॉट, डैश या अंडरस्कोर इस्तेमाल करें।",
    errPwShort:"पासवर्ड कम से कम 4 अक्षर का होना चाहिए।",
    errPwMatch:"दोनों पासवर्ड मेल नहीं खा रहे।",
    errExists:"यह यूज़र आईडी पहले से मौजूद है — लॉग इन करें।",
    errNoUser:"इस यूज़र आईडी से कोई अकाउंट नहीं मिला।",
    errWrongPw:"पासवर्ड गलत है।",
    errNoStorage:"यह ब्राउज़र local storage रोक रहा है, इसलिए कुछ भी सेव नहीं हो सकता।"
  }
};

// Languages the switch offers, in display order.
const LANGS = ['en','bn','hi'];

const GROUP_LABELS = {
  bn: {
    "Basics":"বেসিক",
    "Functions & Objects":"ফাংশন ও অবজেক্ট",
    "Advanced Concepts":"অ্যাডভান্সড কনসেপ্ট",
    "DOM & Browser":"DOM ও ব্রাউজার",
    "Patterns & Pitfalls":"প্যাটার্ন ও সাধারণ ভুল"
  },
  hi: {
    "Basics":"बेसिक",
    "Functions & Objects":"फंक्शन और ऑब्जेक्ट",
    "Advanced Concepts":"एडवांस्ड कॉन्सेप्ट",
    "DOM & Browser":"DOM और ब्राउज़र",
    "Patterns & Pitfalls":"पैटर्न और आम गलतियाँ"
  }
};

const LEVEL_LABELS = {
  bn: { "Basic":"বেসিক", "Intermediate":"ইন্টারমিডিয়েট", "Advanced":"অ্যাডভান্সড" },
  hi: { "Basic":"बेसिक", "Intermediate":"इंटरमीडिएट", "Advanced":"एडवांस्ड" }
};

// Module translations that live outside MODULES, keyed by language then module index.
// Bengali sits inline on each module as title_bn/explain_bn/challenge_bn; Hindi comes
// from js/lang-hi.js. tr() checks this map first, then the inline field, then English.
const MODULE_TRANSLATIONS = {
  hi: typeof HI_MODULES !== 'undefined' ? HI_MODULES : []
};

const MODULES = [

{ group:"Basics", level:"Basic", title:"How JS Actually Runs", title_bn:"জাভাস্ক্রিপ্ট আসলে কীভাবে কাজ করে",
  explain:`
  <p>JavaScript is <b>single-threaded</b> — one call stack, one thing executing at a time. Almost every async "gotcha" traces back to this one fact.</p>
  <h4>The pieces involved</h4>
  <ul>
    <li><b>Call stack</b> — tracks the currently running function. A long synchronous loop freezes everything else.</li>
    <li><b>Web APIs</b> — <code>setTimeout</code>, <code>fetch</code>, DOM events run outside the JS engine, which is how JS feels non-blocking despite being single-threaded.</li>
    <li><b>Microtask queue</b> — finished Promise callbacks wait here.</li>
    <li><b>Callback queue</b> — finished setTimeout callbacks wait here.</li>
    <li><b>Event loop</b> — when the call stack is empty, it drains the entire microtask queue first, then takes one thing from the callback queue.</li>
  </ul>
  <div class="why"><b>Why this matters:</b> this explains why setTimeout(fn, 0) doesn't run immediately, why Promises always run before setTimeout, and why a heavy loop can freeze a page.</div>`,
  explain_bn:`
  <p>জাভাস্ক্রিপ্ট <b>একটাই থ্রেডে</b> চলে — মানে একবারে একটাই কাজ করতে পারে। async নিয়ে যত "অদ্ভুত" ব্যাপার মনে হয়, সবকিছুর মূলে এই একটা ব্যাপারই আছে।</p>
  <h4>যে অংশগুলো কাজ করে</h4>
  <ul>
    <li><b>কল স্ট্যাক</b> — এই মুহূর্তে কোন ফাংশন চলছে সেটা ট্র্যাক করে। একটা বড় synchronous লুপ চললে বাকি সবকিছু আটকে যায়।</li>
    <li><b>Web API</b> — <code>setTimeout</code>, <code>fetch</code> এগুলো JS ইঞ্জিনের বাইরে চলে, তাই JS single-thread হয়েও ব্লক হয় না।</li>
    <li><b>Microtask queue</b> — Promise-এর কাজ শেষ হলে এখানে অপেক্ষা করে।</li>
    <li><b>Callback queue</b> — setTimeout শেষ হলে এখানে অপেক্ষা করে।</li>
    <li><b>Event loop</b> — কল স্ট্যাক খালি হলে, প্রথমে microtask queue পুরোপুরি খালি করে, তারপর callback queue থেকে একটা করে নেয়।</li>
  </ul>
  <div class="why"><b>কেন গুরুত্বপূর্ণ:</b> এটাই বোঝায় কেন setTimeout(fn, 0) সাথে সাথে চলে না, কেন Promise সবসময় setTimeout-এর আগে চলে।</div>`,
  code:`console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// sync code first, then microtasks (promises), then macrotasks (setTimeout)`,
  challenge:"Predict the order, then add a second setTimeout and a second Promise.then and re-check your prediction.",
  challenge_bn:"আগে অর্ডারটা আন্দাজ করুন, তারপর আরেকটা setTimeout আর আরেকটা Promise.then যোগ করে আবার চেক করুন।" },

{ group:"Basics", level:"Basic", title:"Variables, Scope & Hoisting", title_bn:"ভেরিয়েবল, স্কোপ ও হয়েস্টিং",
  explain:`
  <p><code>const</code> should be your default. Use <code>let</code> only when a value needs to change. Avoid <code>var</code> entirely — it leaks out of blocks in confusing ways.</p>
  <h4>Scope</h4>
  <p>Global scope is visible everywhere. Block scope (<code>{}</code>) is what let/const respect — var ignores it and only respects function boundaries.</p>
  <h4>Closures — the important one</h4>
  <p>A closure is when an inner function keeps access to its outer function's variables even after the outer function has finished running.</p>
  <div class="why"><b>Why this matters:</b> closures power private counters, memoization, and React's useState internally. Once this clicks, framework "magic" stops feeling magic.</div>`,
  explain_bn:`
  <p><code>const</code> সবসময় ডিফল্ট হিসেবে ব্যবহার করুন। শুধু ভ্যালু বদলাতে হলে <code>let</code> ব্যবহার করুন। <code>var</code> এড়িয়ে চলুন — এটা ব্লকের বাইরে চলে যায়, যা বাগ তৈরি করে।</p>
  <h4>স্কোপ</h4>
  <p>Global scope সব জায়গায় দেখা যায়। Block scope (<code>{}</code>) let/const মেনে চলে — var এটা মানে না।</p>
  <h4>ক্লোজার — সবচেয়ে গুরুত্বপূর্ণ ব্যাপার</h4>
  <p>ক্লোজার তখন হয় যখন একটা ভেতরের ফাংশন তার বাইরের ফাংশনের ভেরিয়েবল মনে রাখে, এমনকি বাইরের ফাংশন শেষ হয়ে যাওয়ার পরও।</p>
  <div class="why"><b>কেন গুরুত্বপূর্ণ:</b> ক্লোজার দিয়েই কাউন্টার, private ডেটা, এমনকি React-এর useState কাজ করে ভেতরে ভেতরে।</div>`,
  code:`function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
// count persists between calls -- that's a closure`,
  challenge:"Write makeCounter so it accepts a starting value and a step size, then create two independent counters.",
  challenge_bn:"makeCounter-কে এমনভাবে লিখুন যাতে এটা একটা শুরুর মান আর একটা step নিতে পারে, তারপর দুটো আলাদা কাউন্টার বানান।" },

{ group:"Basics", level:"Basic", title:"Data Types & Coercion", title_bn:"ডেটা টাইপ ও কোয়ার্শন",
  explain:`
  <p><b>Primitives</b> (string, number, boolean, null, undefined) are compared by value. <b>Reference types</b> (object, array, function) are compared by reference — this is why two identical-looking objects aren't "equal."</p>
  <div class="warn"><b>Known quirk:</b> <code>typeof null</code> returns "object" — an old language bug, not a design choice.</div>
  <h4>Always use ===</h4>
  <p><code>==</code> converts types before comparing and causes surprising bugs. <code>===</code> never converts types. The one common exception: <code>value == null</code> matches both null and undefined at once.</p>
  <h4>Truthy and falsy</h4>
  <p>Only 8 falsy values exist: <code>false, 0, -0, 0n, "", null, undefined, NaN</code>. Everything else is truthy — including empty arrays and objects.</p>`,
  explain_bn:`
  <p><b>Primitive</b> (string, number, boolean, null, undefined) ভ্যালু দিয়ে তুলনা হয়। <b>Reference type</b> (object, array, function) রেফারেন্স দিয়ে তুলনা হয় — তাই দেখতে একই রকম দুটো object কখনো "সমান" হয় না।</p>
  <div class="warn"><b>একটা পুরনো বাগ:</b> <code>typeof null</code> এর ফলাফল "object" আসে — এটা ডিজাইন না, একটা পুরনো ভুল যা এখন আর ঠিক করা যাবে না।</div>
  <h4>সবসময় === ব্যবহার করুন</h4>
  <p><code>==</code> তুলনার আগে টাইপ বদলে ফেলে, যা অদ্ভুত বাগ তৈরি করে। <code>===</code> কখনো টাইপ বদলায় না। একটা ব্যতিক্রম: <code>value == null</code> — এটা null আর undefined দুটোই একসাথে চেক করে।</p>
  <h4>Truthy আর Falsy</h4>
  <p>মোট ৮টা falsy ভ্যালু আছে: <code>false, 0, -0, 0n, "", null, undefined, NaN</code>। বাকি সবকিছু truthy — এমনকি খালি array আর object-ও।</p>`,
  code:`console.log(typeof null);        // "object" -- the famous bug
console.log("5" == 5);           // true  -- coerced
console.log("5" === 5);          // false -- no coercion, use this

if ([]) console.log("empty arrays are truthy!");
if ("0") console.log("non-empty strings are truthy, even '0'");
if (0) console.log("never runs -- 0 is falsy");`,
  challenge:"List all 8 falsy values from memory, then verify each with an if-check that logs 'falsy' or 'truthy'.",
  challenge_bn:"মুখস্থ থেকে সবগুলো falsy ভ্যালু লিখুন, তারপর প্রতিটা if দিয়ে চেক করে verify করুন।" },

{ group:"Basics", level:"Basic", title:"Operators", title_bn:"অপারেটর",
  explain:`
  <p>Standard operators (<code>+ - * / **</code>, comparisons) work as expected. Two modern operators solve real bugs:</p>
  <h4>The 0-and-empty-string trap</h4>
  <p><code>||</code> falls back whenever the left side is falsy — including 0 and "". <code>cartCount || "empty"</code> incorrectly shows "empty" even when cart has 0 items validly.</p>
  <p><code>??</code> only falls back on null/undefined — treating 0 and "" as valid values to keep.</p>
  <h4>Optional chaining</h4>
  <p><code>?.</code> safely reads deep properties without crashing: <code>user?.address?.city</code>.</p>`,
  explain_bn:`
  <p>সাধারণ operator (<code>+ - * /</code>, তুলনা) যেভাবে ভাবছেন সেভাবেই কাজ করে। দুটো আধুনিক অপারেটর আসল বাগ ঠিক করে দেয়:</p>
  <h4>0 আর খালি স্ট্রিং-এর ফাঁদ</h4>
  <p><code>||</code> বাম পাশ falsy হলেই ডান পাশে চলে যায় — 0 আর "" ও falsy। তাই <code>cartCount || "empty"</code> ভুলভাবে "empty" দেখাবে যখন কার্টে সত্যিই 0 আইটেম আছে।</p>
  <p><code>??</code> শুধু null/undefined হলে ডান পাশে যায় — 0 আর ""-কে ঠিকঠাক ভ্যালু হিসেবে রাখে।</p>
  <h4>Optional chaining</h4>
  <p><code>?.</code> দিয়ে গভীরে থাকা property নিরাপদে পড়া যায়, ক্র্যাশ না করে: <code>user?.address?.city</code>।</p>`,
  code:`const cartCount = 0;
console.log(cartCount || "empty");  // "empty" -- WRONG, 0 is falsy
console.log(cartCount ?? "empty");  // 0       -- correct

const user = { name: "Priya" };
console.log(user?.address?.city ?? "No city set");

user.role ??= "guest";
console.log(user.role);`,
  challenge:"Write an object with a possibly-missing nested field, then safely read it with a default using ?? and ?.",
  challenge_bn:"এমন একটা object বানান যেখানে একটা nested field না-ও থাকতে পারে, তারপর ?? আর ?. দিয়ে নিরাপদে পড়ুন।" },

{ group:"Basics", level:"Basic", title:"Control Flow", title_bn:"কন্ট্রোল ফ্লো",
  explain:`
  <h4>Choosing a loop</h4>
  <p><code>for...of</code> is your default for arrays — it directly gives you each value. Use classic <code>for(i=0...)</code> only when you need the index.</p>
  <h4>Ternary for inline values</h4>
  <p><code>condition ? a : b</code> produces a value directly, unlike if/else. This is why it's common in React/JSX. Avoid nesting more than 2 levels.</p>`,
  explain_bn:`
  <h4>কোন লুপ ব্যবহার করবেন</h4>
  <p>Array-এর জন্য <code>for...of</code> ডিফল্ট হিসেবে ব্যবহার করুন — এটা সরাসরি প্রতিটা ভ্যালু দেয়। ইনডেক্স দরকার হলেই শুধু পুরনো <code>for(i=0...)</code> ব্যবহার করুন।</p>
  <h4>ইনলাইন ভ্যালুর জন্য Ternary</h4>
  <p><code>condition ? a : b</code> সরাসরি একটা ভ্যালু তৈরি করে, if/else এর মতো না। তাই React/JSX-এ এটা খুব বেশি দেখা যায়। ২ লেভেলের বেশি nest করবেন না।</p>`,
  code:`const scores = [55, 82, 91, 40];

for (const score of scores) {
  const grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "F";
  console.log(score, "->", grade);
}`,
  challenge:"Rewrite the loop using .map() instead of for...of, producing an array of grades.",
  challenge_bn:"for...of-এর বদলে .map() ব্যবহার করে লুপটা আবার লিখুন, যাতে grade-এর একটা array পাওয়া যায়।" },

{ group:"Functions & Objects", level:"Intermediate", title:"Functions Deep Dive: this, arrow vs regular", title_bn:"ফাংশন গভীরভাবে: this, arrow বনাম regular",
  explain:`
  <p>The most misunderstood part of JS — getting this solid resolves a huge fraction of confusing bugs.</p>
  <h4>The core rule</h4>
  <p><code>this</code> depends on <b>how a function is called</b>, not where it's written:</p>
  <ul>
    <li><code>obj.method()</code> → this is obj</li>
    <li>Plain <code>fn()</code> → this is undefined</li>
    <li><code>new fn()</code> → this is the new object</li>
    <li><code>.call/.apply/.bind</code> → this is whatever you pass</li>
  </ul>
  <h4>Arrow functions break the rule on purpose</h4>
  <p>Arrows have no <code>this</code> of their own — they inherit it from the surrounding code at the moment they were defined, forever.</p>
  <div class="why"><b>Why this matters:</b> this is exactly why arrows are standard for callbacks and React components — this stays what it was where you wrote the code.</div>`,
  explain_bn:`
  <p>JS-এর সবচেয়ে বেশি ভুল বোঝা হয় এমন একটা অংশ — এটা ভালোভাবে বুঝলে অনেক confusing বাগ এমনিতেই সমাধান হয়ে যায়।</p>
  <h4>মূল নিয়ম</h4>
  <p><code>this</code> নির্ভর করে ফাংশনটা <b>কীভাবে কল করা হচ্ছে</b> তার উপর, কোথায় লেখা হয়েছে তার উপর না:</p>
  <ul>
    <li><code>obj.method()</code> → this হলো obj</li>
    <li>সাধারণ <code>fn()</code> → this হলো undefined</li>
    <li><code>new fn()</code> → this হলো নতুন object</li>
    <li><code>.call/.apply/.bind</code> → this যা আপনি দেবেন তাই</li>
  </ul>
  <h4>Arrow function ইচ্ছাকৃতভাবে নিয়ম ভাঙে</h4>
  <p>Arrow function-এর নিজের কোনো this নেই — যেখানে এটা লেখা হয়েছে সেখানকার this-ই সে চিরদিনের জন্য ধরে রাখে।</p>
  <div class="why"><b>কেন গুরুত্বপূর্ণ:</b> এই কারণেই callback আর React component-এ arrow function standard — this ঠিক আগের মতোই থাকে।</div>`,
  code:`const obj = {
  name: "Widget",
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular(); // "Widget" -- this = obj
obj.arrow();   // undefined -- arrow has no own this

function sayName() { console.log(this.name); }
const bound = sayName.bind({ name: "Arjun" });
bound(); // "Arjun"`,
  challenge:"Write an object with a setTimeout inside a regular method that tries to log this.name -- observe it fails, then fix it with an arrow function.",
  challenge_bn:"একটা object বানান যেখানে regular method-এর ভেতরে setTimeout দিয়ে this.name লগ করার চেষ্টা করুন — দেখুন ফেইল করে, তারপর arrow function দিয়ে ঠিক করুন।" },

{ group:"Functions & Objects", level:"Intermediate", title:"Objects & Prototypes", title_bn:"অবজেক্ট ও প্রোটোটাইপ",
  explain:`
  <h4>The shallow copy trap</h4>
  <p><code>{...obj}</code> creates a shallow copy — nested objects inside are still shared by reference. Mutating a nested value through the copy also changes the "original." Use <code>structuredClone(obj)</code> for a true deep copy.</p>
  <h4>Prototypes — how "inheritance" works</h4>
  <p>Every object links to a hidden <b>prototype</b>. When a property isn't found directly, JS walks up this chain — this is literally how .map() exists on every array without being copied onto each one.</p>`,
  explain_bn:`
  <h4>Shallow copy-র ফাঁদ</h4>
  <p><code>{...obj}</code> শুধু shallow copy বানায় — ভেতরের nested object এখনো রেফারেন্স হিসেবে শেয়ার হয়। copy-র ভেতরের nested ভ্যালু বদলালে আসল object-ও বদলে যায়। সত্যিকারের deep copy-র জন্য <code>structuredClone(obj)</code> ব্যবহার করুন।</p>
  <h4>প্রোটোটাইপ — "ইনহেরিটেন্স" কীভাবে কাজ করে</h4>
  <p>প্রতিটা object একটা লুকানো <b>প্রোটোটাইপ</b>-এর সাথে যুক্ত থাকে। কোনো property সরাসরি না পেলে JS এই চেইন ধরে উপরে খোঁজে — এভাবেই .map() প্রতিটা array-তে আলাদা করে কপি না হয়েও কাজ করে।</p>`,
  code:`const original = { meta: { views: 10 } };
const shallow = { ...original };
shallow.meta.views = 99;
console.log(original.meta.views); // 99 -- shallow copy shared the nested object!

const deep = structuredClone(original);
deep.meta.views = 1;
console.log(original.meta.views); // still 99, deep copy is independent

const animal = { speak() { console.log(this.name + " makes a sound"); } };
const dog = Object.create(animal);
dog.name = "Rex";
dog.speak(); // inherited via the prototype chain`,
  challenge:"Given a nested user object, write a function that deep-copies it and modifies only the copy, proving the original is untouched.",
  challenge_bn:"একটা nested user object দেওয়া হলে, এমন একটা ফাংশন লিখুন যা deep-copy করে শুধু copy-টা বদলায়, প্রমাণ করুন original অক্ষত আছে।" },

{ group:"Functions & Objects", level:"Intermediate", title:"Arrays: Full Method Reference", title_bn:"অ্যারে: সম্পূর্ণ মেথড রেফারেন্স",
  explain:`
  <p>The highest-leverage topic for daily frontend work.</p>
  <h4>Mutating vs non-mutating</h4>
  <ul>
    <li><b>Non-mutating (prefer these):</b> map, filter, reduce, find, some, every, slice</li>
    <li><b>Mutating (careful):</b> push, pop, splice, sort, reverse</li>
  </ul>
  <p>With React, mutating in place won't trigger updates — you need a new array reference.</p>
  <div class="warn"><b>Classic bug:</b> .sort() with no arguments sorts as strings — [10,2,1].sort() gives [1,10,2]. Always pass (a,b) => a-b for numbers.</div>`,
  explain_bn:`
  <p>রোজকার frontend কাজের জন্য সবচেয়ে দরকারি বিষয়।</p>
  <h4>Mutating বনাম Non-mutating</h4>
  <ul>
    <li><b>Non-mutating (এগুলো প্রাধান্য দিন):</b> map, filter, reduce, find, some, every, slice</li>
    <li><b>Mutating (সাবধানে ব্যবহার করুন):</b> push, pop, splice, sort, reverse</li>
  </ul>
  <p>React-এ সরাসরি mutate করলে update হবে না — নতুন array reference লাগবে।</p>
  <div class="warn"><b>একটা কমন বাগ:</b> কোনো argument ছাড়া .sort() স্ট্রিং হিসেবে সর্ট করে — [10,2,1].sort() দেয় [1,10,2]। সংখ্যার জন্য সবসময় (a,b) => a-b দিন।</div>`,
  code:`const orders = [
  { item: "Lamp", qty: 2 },
  { item: "Chair", qty: 1 },
  { item: "Lamp", qty: 3 }
];

const totalQty = orders.reduce((sum, o) => sum + o.qty, 0);
console.log("total:", totalQty);

const grouped = orders.reduce((acc, o) => {
  acc[o.item] = (acc[o.item] || 0) + o.qty;
  return acc;
}, {});
console.log("grouped:", grouped);

console.log([10, 2, 1].sort());              // [1,10,2] -- WRONG, sorts as strings
console.log([10, 2, 1].sort((a,b)=>a-b));    // [1,2,10] -- correct`,
  challenge:"Given [1,2,3,4,5,6], filter evens then map to their squares, in a single chain.",
  challenge_bn:"[1,2,3,4,5,6] দেওয়া হলে, জোড় সংখ্যাগুলো filter করে তাদের বর্গ map করুন, একটা মাত্র chain-এ।" },

{ group:"Functions & Objects", level:"Intermediate", title:"Strings: Full Method Reference", title_bn:"স্ট্রিং: সম্পূর্ণ মেথড রেফারেন্স",
  explain:`
  <h4>Template literals replace concatenation</h4>
  <p>Backtick strings let you embed any expression with <code>\${}</code> and support multi-line strings directly. Prefer these over + concatenation.</p>
  <h4>Method families worth knowing</h4>
  <ul>
    <li><b>Trim/case:</b> trim(), toLowerCase(), toUpperCase()</li>
    <li><b>Search:</b> includes(), startsWith(), endsWith()</li>
    <li><b>Split/join:</b> split() turns string into array, join() reverses it</li>
    <li><b>Replace:</b> replace() only first match, replaceAll() every match</li>
  </ul>`,
  explain_bn:`
  <h4>Template literal দিয়ে concatenation বদলে ফেলুন</h4>
  <p>Backtick স্ট্রিং দিয়ে <code>\${}</code>-এর ভেতরে যেকোনো expression বসানো যায়, আর multi-line স্ট্রিংও সরাসরি লেখা যায়। + দিয়ে concatenation-এর বদলে এটা ব্যবহার করুন।</p>
  <h4>জানা দরকার এমন মেথডগুলো</h4>
  <ul>
    <li><b>Trim/case:</b> trim(), toLowerCase(), toUpperCase()</li>
    <li><b>খোঁজা:</b> includes(), startsWith(), endsWith()</li>
    <li><b>Split/join:</b> split() স্ট্রিংকে array বানায়, join() উল্টোটা করে</li>
    <li><b>Replace:</b> replace() শুধু প্রথম match বদলায়, replaceAll() সবগুলো বদলায়</li>
  </ul>`,
  code:`const name = "Soumya";
const role = "Frontend Dev";
console.log(\`\${name} works as a \${role}.\`);

const s = "  Hello, World!  ";
console.log(s.trim().toUpperCase());
console.log(s.includes("World"));
console.log(s.trim().split(", "));`,
  challenge:"Write a function slugify(title) that lowercases, trims, and replaces spaces with hyphens.",
  challenge_bn:"একটা ফাংশন slugify(title) লিখুন যা lowercase করে, trim করে, আর স্পেসকে হাইফেন দিয়ে বদলে দেয়।" },

{ group:"Functions & Objects", level:"Intermediate", title:"Destructuring, Spread & Rest", title_bn:"ডিস্ট্রাকচারিং, স্প্রেড ও রেস্ট",
  explain:`
  <h4>Destructuring</h4>
  <p>Array destructuring unpacks by position: <code>const [a,b] = arr</code>. Object destructuring unpacks by name: <code>const {name,price} = obj</code>. Works directly in function params — common in React: <code>function Card({title,price}){}</code></p>
  <h4>Spread — expanding outward</h4>
  <p><code>[...arr1,...arr2]</code> merges arrays. <code>{...obj, price:799}</code> copies while overriding a field, without mutating.</p>
  <h4>Rest — collecting inward</h4>
  <p><code>const [first,...rest] = arr</code> gathers remaining items into one array.</p>`,
  explain_bn:`
  <h4>ডিস্ট্রাকচারিং</h4>
  <p>Array destructuring পজিশন দিয়ে বের করে: <code>const [a,b] = arr</code>। Object destructuring নাম দিয়ে বের করে: <code>const {name,price} = obj</code>। ফাংশনের parameter-এও সরাসরি কাজ করে — React-এ খুব কমন: <code>function Card({title,price}){}</code></p>
  <h4>Spread — বাইরে ছড়িয়ে দেওয়া</h4>
  <p><code>[...arr1,...arr2]</code> দুটো array মেশায়। <code>{...obj, price:799}</code> copy করে একটা field override করে, mutate না করে।</p>
  <h4>Rest — ভেতরে জড়ো করা</h4>
  <p><code>const [first,...rest] = arr</code> বাকি সব আইটেম একটা array-তে জড়ো করে।</p>`,
  code:`const [first, , third, ...others] = [10, 20, 30, 40, 50];
console.log(first, third, others);

const product = { id: 1, name: "Lamp", price: 899 };
const { id, ...details } = product;
console.log(id, details);

function ProductCard({ title, price, onSale = false }) {
  return \`\${title} - ₹\${price}\${onSale ? " (sale)" : ""}\`;
}
console.log(ProductCard({ title: "Desk Lamp", price: 799, onSale: true }));`,
  challenge:"Destructure city and country from a nested address object with defaults, using a single line.",
  challenge_bn:"একটা nested address object থেকে city আর country destructure করুন default সহ, একটা মাত্র লাইনে।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Classes & OOP", title_bn:"ক্লাস ও OOP",
  explain:`
  <p><code>class</code> is syntax sugar over the prototype system from the Objects module.</p>
  <h4>Core pieces</h4>
  <ul>
    <li><code>constructor()</code> runs once when you call <code>new ClassName()</code></li>
    <li><code>extends</code> sets up inheritance; <code>super()</code> must run first inside a subclass constructor</li>
    <li><code>static</code> methods belong to the class, not instances</li>
  </ul>
  <h4>Private fields</h4>
  <p><code>#field</code> is genuinely private — inaccessible from outside the class, a real enforced feature.</p>
  <h4>Getters/setters</h4>
  <p><code>get</code>/<code>set</code> let a method act like a property while running logic behind the scenes.</p>`,
  explain_bn:`
  <p><code>class</code> আসলে Objects মডিউলের প্রোটোটাইপ সিস্টেমের উপরেই তৈরি একটা সহজ syntax।</p>
  <h4>মূল অংশগুলো</h4>
  <ul>
    <li><code>constructor()</code> একবার চলে যখন <code>new ClassName()</code> কল করা হয়</li>
    <li><code>extends</code> ইনহেরিটেন্স তৈরি করে; subclass-এর constructor-এ <code>super()</code> সবার আগে চালাতে হয়</li>
    <li><code>static</code> মেথড instance-এর না, ক্লাসের নিজের</li>
  </ul>
  <h4>Private field</h4>
  <p><code>#field</code> সত্যিকারের private — ক্লাসের বাইরে থেকে অ্যাক্সেস করা যায় না, এটা একটা আসল feature।</p>
  <h4>Getter/Setter</h4>
  <p><code>get</code>/<code>set</code> দিয়ে একটা মেথডকে property-র মতো ব্যবহার করা যায়, ভেতরে লজিক চালিয়ে।</p>`,
  code:`class Animal {
  constructor(name, sound) { this.name = name; this.sound = sound; }
  speak() { console.log(\`\${this.name} says \${this.sound}\`); }
}
class Dog extends Animal {
  constructor(name) { super(name, "woof"); }
  fetch() { console.log(\`\${this.name} fetches the ball\`); }
}
const rex = new Dog("Rex");
rex.speak();
rex.fetch();

class BankAccount {
  #balance = 0;
  deposit(amount) { this.#balance += amount; }
  get balance() { return this.#balance; }
}
const acc = new BankAccount();
acc.deposit(500);
console.log(acc.balance);`,
  challenge:"Add a #pin field to BankAccount and a withdraw(amount, pin) method that only works if the pin matches.",
  challenge_bn:"BankAccount-এ একটা #pin field আর withdraw(amount, pin) মেথড যোগ করুন যা শুধু pin মিললে কাজ করবে।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Iterators, Generators, Symbol", title_bn:"ইটারেটর, জেনারেটর, Symbol",
  explain:`
  <p>This is how <code>for...of</code>, spread, and destructuring actually work — and how to make them work on objects you wrote yourself.</p>
  <h4>Symbol — collision-proof keys</h4>
  <p>A <code>Symbol</code> is a guaranteed-unique value you can use as a property key. Two symbols are never equal, even when created with the same description, so a symbol key can never clash with a string key that some other library adds to the same object. The language reserves a few <b>well-known symbols</b> as hooks into its own behaviour — <code>Symbol.iterator</code> is the one that matters most.</p>
  <h4>The iterable protocol</h4>
  <p><code>for...of</code>, spread, and destructuring know nothing about arrays specifically. They only look for a <code>[Symbol.iterator]</code> method and call it. That method must return an <b>iterator</b> — an object with a <code>.next()</code> that returns <code>{ value, done }</code> each time. Arrays, strings, Map, and Set all ship with one, and that is the entire reason they can be looped and spread.</p>
  <h4>Generator functions</h4>
  <p><code>function*</code> can pause with <code>yield</code> and resume later, rather than running start-to-finish at once. Each <code>.next()</code> runs until the next yield.</p>
  <div class="why"><b>Why this matters:</b> add a <code>[Symbol.iterator]</code> to your own object and it instantly becomes loopable and spreadable — no converting to an array first. Generators are the shortcut: a generator object is already a valid iterator, so <code>*[Symbol.iterator]()</code> replaces the whole hand-written <code>.next()</code> version. They also power lazily-evaluated sequences, and were the mechanism behind async/await before it existed as its own syntax.</div>`,
  explain_bn:`
  <p>এটাই আসল ব্যাখ্যা — <code>for...of</code>, spread আর destructuring ভেতরে ভেতরে কীভাবে কাজ করে, আর নিজের বানানো object-এও এগুলো কীভাবে চালানো যায়।</p>
  <h4>Symbol — কখনো সংঘর্ষ হয় না এমন key</h4>
  <p><code>Symbol</code> হলো একটা নিশ্চিতভাবে ইউনিক ভ্যালু, যা property-র key হিসেবে ব্যবহার করা যায়। একই বর্ণনা দিয়ে বানালেও দুটো symbol কখনো সমান হয় না, তাই symbol key কোনোদিন অন্য কোনো লাইব্রেরির দেওয়া string key-র সাথে সংঘর্ষ করে না। ভাষা নিজেই কয়েকটা <b>well-known symbol</b> রেখে দিয়েছে নিজের আচরণে ঢোকার রাস্তা হিসেবে — এর মধ্যে সবচেয়ে দরকারি <code>Symbol.iterator</code>।</p>
  <h4>Iterable প্রোটোকল</h4>
  <p><code>for...of</code>, spread আর destructuring আসলে array সম্পর্কে আলাদা করে কিছুই জানে না। এরা শুধু <code>[Symbol.iterator]</code> নামে একটা মেথড খোঁজে আর সেটা কল করে। সেই মেথডকে একটা <b>iterator</b> রিটার্ন করতে হয় — মানে এমন একটা object যার <code>.next()</code> প্রতিবার <code>{ value, done }</code> দেয়। Array, string, Map, Set — সবার ভেতরে এটা আগে থেকেই আছে, আর এই একটাই কারণে এদের উপর লুপ আর spread চলে।</p>
  <h4>জেনারেটর ফাংশন</h4>
  <p><code>function*</code> <code>yield</code> দিয়ে থেমে যেতে পারে আর পরে আবার চালু হতে পারে, একবারে সব না চালিয়ে। প্রতিটা <code>.next()</code> পরের yield পর্যন্ত চলে।</p>
  <div class="why"><b>কেন গুরুত্বপূর্ণ:</b> নিজের object-এ একটা <code>[Symbol.iterator]</code> যোগ করে দিলেই সেটা সাথে সাথে loop করা আর spread করা যায় — আগে array-তে বদলানোর দরকার হয় না। জেনারেটর এখানে শর্টকাট: জেনারেটর object নিজেই একটা বৈধ iterator, তাই <code>*[Symbol.iterator]()</code> লিখলে হাতে লেখা পুরো <code>.next()</code> অংশটা আর লাগে না। এছাড়া জেনারেটর দিয়ে lazy sequence বানানো যায়, আর async/await সিনট্যাক্স আসার আগে এটাই ছিল সেই মেকানিজম।</div>`,
  code:`// Symbols are unique -- same description, still not equal
const idA = Symbol("id");
const idB = Symbol("id");
console.log(idA === idB); // false

// Making a PLAIN OBJECT work with for...of, spread and destructuring
const team = {
  members: ["Soumya", "Priya", "Arjun"],
  [Symbol.iterator]() {
    let i = 0;
    const list = this.members;
    return {
      next: () => i < list.length
        ? { value: list[i++], done: false }
        : { value: undefined, done: true }
    };
  }
};

for (const person of team) console.log(person); // works on an object!
console.log([...team]);                          // spread uses the same hook
const [lead, ...others] = team;                  // so does destructuring
console.log(lead, others);

// A generator IS an iterator, so it replaces all that .next() bookkeeping
const range = {
  from: 1,
  to: 4,
  *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) yield i;
  }
};
console.log([...range]);

function* countTo(n) {
  for (let i = 1; i <= n; i++) yield i;
}

for (const num of countTo(3)) {
  console.log(num);
}

const gen = countTo(2);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // done:true once it runs out`,
  challenge:"Give a playlist object a [Symbol.iterator] so that [...playlist] returns its songs -- first by hand with .next(), then rewrite it as a one-line generator. Then write a generator idRange(start, end) that yields every id in that range.",
  challenge_bn:"একটা playlist object-এ [Symbol.iterator] যোগ করুন যাতে [...playlist] দিলে গানগুলো পাওয়া যায় — প্রথমে হাতে .next() লিখে, তারপর একই কাজ এক লাইনের জেনারেটর দিয়ে আবার লিখুন। তারপর idRange(start, end) নামে একটা জেনারেটর লিখুন যা সেই রেঞ্জের প্রতিটা id yield করে।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Map, Set, WeakMap, WeakSet", title_bn:"Map, Set, WeakMap, WeakSet",
  explain:`
  <h4>Map — upgrade over plain objects</h4>
  <p>Regular objects only allow string keys. Map allows any value as a key, guarantees order, and has a real .size property.</p>
  <h4>Set — unique values</h4>
  <p>Automatically discards duplicates. The classic dedupe trick: <code>[...new Set(array)]</code>.</p>`,
  explain_bn:`
  <h4>Map — সাধারণ object-এর চেয়ে ভালো</h4>
  <p>সাধারণ object-এ শুধু string key ব্যবহার করা যায়। Map-এ যেকোনো ভ্যালু key হতে পারে, order নিশ্চিত থাকে, আর আসল .size property আছে।</p>
  <h4>Set — ইউনিক ভ্যালু</h4>
  <p>ডুপ্লিকেট নিজে থেকেই বাদ দেয়। ক্লাসিক dedupe ট্রিক: <code>[...new Set(array)]</code>।</p>`,
  code:`const roles = new Map();
roles.set("soumya", "admin");
roles.set("priya", "editor");
console.log(roles.get("soumya"));
console.log(roles.size);

for (const [user, role] of roles) console.log(user, role);

const tags = new Set(["react", "css", "react", "js"]);
console.log(tags);
console.log([...new Set([1,2,2,3,3,3])]);`,
  challenge:"Given an array of objects with duplicate 'id' fields, dedupe them by id using a Map keyed on id.",
  challenge_bn:"একটা array of object দেওয়া হলে যাতে 'id' ডুপ্লিকেট আছে, id দিয়ে key করা একটা Map ব্যবহার করে dedupe করুন।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Async JS: Callbacks → Promises → Async/Await", title_bn:"Async JS: Callback → Promise → Async/Await",
  explain:`
  <p>The topic most worth mastering — nearly every API call runs through this pattern.</p>
  <h4>Promises</h4>
  <p>Always pending, fulfilled, or rejected. .then() for success, .catch() for failure, .finally() runs regardless.</p>
  <h4>async/await</h4>
  <p>An async function always returns a Promise. await pauses until the Promise settles, letting async code read top-to-bottom. Always wrap await in try/catch.</p>
  <h4>Running in parallel</h4>
  <p>Two independent awaits back-to-back run sequentially, wasting time. <code>Promise.all([fn1(),fn2()])</code> starts both together.</p>`,
  explain_bn:`
  <p>সবচেয়ে বেশি গুরুত্ব দেওয়ার মতো একটা টপিক — প্রায় প্রতিটা API কল এই প্যাটার্নে হয়।</p>
  <h4>Promise</h4>
  <p>সবসময় pending, fulfilled বা rejected এর একটা অবস্থায় থাকে। সফল হলে .then(), ব্যর্থ হলে .catch(), যেকোনো অবস্থাতেই .finally() চলে।</p>
  <h4>async/await</h4>
  <p>একটা async ফাংশন সবসময় একটা Promise রিটার্ন করে। await Promise শেষ না হওয়া পর্যন্ত থামিয়ে রাখে, ফলে async কোড উপর থেকে নিচে পড়া যায়। await সবসময় try/catch-এ রাখুন।</p>
  <h4>প্যারালালে চালানো</h4>
  <p>দুটো আলাদা await পরপর দিলে সেগুলো একটার পর একটা চলে, সময় নষ্ট হয়। <code>Promise.all([fn1(),fn2()])</code> দুটোকে একসাথে শুরু করে।</p>`,
  code:`function fakeApiCall(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Widget " + id }), 300);
  });
}

async function loadOne() {
  try {
    const data = await fakeApiCall(1);
    console.log("got:", data);
  } catch (err) {
    console.log("failed:", err.message);
  }
}
loadOne();

async function loadParallel() {
  const [a, b] = await Promise.all([fakeApiCall(1), fakeApiCall(2)]);
  console.log("both done:", a, b);
}
loadParallel();`,
  challenge:"Write an async function that calls fakeApiCall 3 times in PARALLEL using Promise.all and logs the combined array.",
  challenge_bn:"একটা async ফাংশন লিখুন যা Promise.all ব্যবহার করে fakeApiCall ৩ বার প্যারালালে কল করে এবং মিলিত array লগ করে।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Error Handling", title_bn:"এরর হ্যান্ডলিং",
  explain:`
  <h4>try/catch/finally</h4>
  <p>Code in try runs normally; if it throws, control jumps to catch. finally always runs regardless — right place for cleanup.</p>
  <h4>Custom error types</h4>
  <p>Extend Error to create named types (ValidationError, NetworkError). A catch block can use instanceof to branch by error kind.</p>`,
  explain_bn:`
  <h4>try/catch/finally</h4>
  <p>try-এর ভেতরের কোড স্বাভাবিকভাবে চলে; কোনো এরর হলে catch-এ চলে যায়। finally সবসময় চলে — cleanup-এর জন্য এটাই সঠিক জায়গা।</p>
  <h4>Custom error টাইপ</h4>
  <p>Error extend করে নিজের error টাইপ বানানো যায় (ValidationError, NetworkError)। catch ব্লকে instanceof দিয়ে error-এর ধরন অনুযায়ী আলাদা কাজ করা যায়।</p>`,
  code:`class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function withdraw(balance, amount) {
  if (amount > balance) throw new ValidationError("Insufficient funds");
  return balance - amount;
}

try {
  withdraw(100, 500);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Show to user:", err.message);
  } else {
    console.log("Unexpected error");
  }
} finally {
  console.log("cleanup runs regardless");
}`,
  challenge:"Create a NetworkError class and throw it from a function simulating a failed fetch, then catch and branch on its type.",
  challenge_bn:"একটা NetworkError ক্লাস বানান আর একটা ফাংশন থেকে সেটা throw করুন যা fetch ব্যর্থ হওয়া simulate করে, তারপর catch করে ধরন অনুযায়ী কাজ করুন।" },

{ group:"Advanced Concepts", level:"Advanced", title:"Modules (import/export)", title_bn:"মডিউল (import/export)",
  explain:`
  <h4>Named exports — many per file</h4>
  <p><code>export function add(){}</code> — as many as needed, imported with exact names in {}.</p>
  <h4>Default export — exactly one per file</h4>
  <p><code>export default function multiply(){}</code> — imported without {}, any name. React components are conventionally default-exported.</p>
  <p>Modules also create real isolation: anything not exported stays private to that file.</p>`,
  explain_bn:`
  <h4>Named export — একটা ফাইলে অনেকগুলো</h4>
  <p><code>export function add(){}</code> — যতগুলো দরকার, {}-এর ভেতরে ঠিক নাম দিয়ে import করা যায়।</p>
  <h4>Default export — একটা ফাইলে ঠিক একটা</h4>
  <p><code>export default function multiply(){}</code> — {} ছাড়াই, যেকোনো নামে import করা যায়। React component সাধারণত default-export হয়।</p>
  <p>মডিউল আসল isolation-ও তৈরি করে: যা export করা হয়নি তা সেই ফাইলেই private থেকে যায়।</p>`,
  code:`// This sandbox can't run real cross-file imports, but here's the exact shape:

// mathUtils.js
// export function add(a, b) { return a + b; }
// export const PI = 3.14159;
// export default function multiply(a, b) { return a * b; }

// app.js
// import multiply, { add, PI } from "./mathUtils.js";

console.log("Named exports: many per file, imported with matching names in {}");
console.log("Default export: one per file, imported with any name, no {}");`,
  challenge:"Write out (as comments) a small utils module with 2 named exports and 1 default export, then its import line.",
  challenge_bn:"একটা ছোট utils মডিউল লিখুন (কমেন্ট হিসেবে) যাতে ২টা named export আর ১টা default export আছে, তারপর তার import লাইন।" },

{ group:"DOM & Browser", level:"Intermediate", title:"DOM Manipulation & Events", title_bn:"DOM ম্যানিপুলেশন ও ইভেন্ট",
  explain:`
  <h4>Selecting and reading</h4>
  <p><code>textContent</code> is safe; <code>innerHTML</code> risks XSS with untrusted content.</p>
  <h4>Event delegation</h4>
  <p>One listener on a parent instead of many on children — checked via event.target at click-time, automatically works for future children too.</p>
  <h4>preventDefault</h4>
  <p>Stops a browser's default action (like form-submit reload) while your handler still runs.</p>`,
  explain_bn:`
  <h4>এলিমেন্ট বাছাই ও পড়া</h4>
  <p><code>textContent</code> নিরাপদ; <code>innerHTML</code>-এ অবিশ্বস্ত কনটেন্ট থাকলে XSS-এর ঝুঁকি থাকে।</p>
  <h4>ইভেন্ট ডেলিগেশন</h4>
  <p>প্রতিটা child-এ আলাদা listener না দিয়ে parent-এ একটা listener — event.target দিয়ে ক্লিক হওয়ার সময় চেক করা হয়, ভবিষ্যতের child-এর জন্যও এমনিতেই কাজ করে।</p>
  <h4>preventDefault</h4>
  <p>ব্রাউজারের ডিফল্ট আচরণ (যেমন form submit-এ reload) আটকে দেয়, আপনার নিজের হ্যান্ডলার তখনও চলে।</p>`,
  code:`// Simulated DOM (real DOM APIs shown in comments below)
const button = { classList: { list: [], toggle(c){
    const i = this.list.indexOf(c);
    i>-1 ? this.list.splice(i,1) : this.list.push(c);
  }}, textContent: "" };

button.textContent = "Subscribe";
button.classList.toggle("active");
console.log(button.textContent, button.classList.list);

// Real DOM equivalents:
// document.querySelector('.card')
// el.addEventListener('click', handler)
// document.querySelector('.list').addEventListener('click', e => {
//   if (e.target.matches('.list-item')) console.log(e.target.textContent);
// });`,
  challenge:"Write (as real code, even if unrunnable here) event delegation for a '.todo-list' that logs the clicked item's text.",
  challenge_bn:"'.todo-list'-এর জন্য event delegation লিখুন (আসল কোড হিসেবে, এখানে না চললেও চলবে) যা ক্লিক করা আইটেমের টেক্সট লগ করে।" },

{ group:"DOM & Browser", level:"Basic", title:"Browser APIs Worth Knowing", title_bn:"জানা দরকার এমন ব্রাউজার API",
  explain:`
  <h4>Storage</h4>
  <p>localStorage persists indefinitely. sessionStorage clears when the tab closes. Both only store strings — use JSON.stringify/parse for objects.</p>
  <h4>Timers</h4>
  <p>setTimeout runs once; setInterval repeats until clearInterval is called — forgetting this causes memory leaks.</p>`,
  explain_bn:`
  <h4>Storage</h4>
  <p>localStorage চিরস্থায়ীভাবে থাকে। sessionStorage ট্যাব বন্ধ হলে মুছে যায়। দুটোই শুধু স্ট্রিং রাখে — object-এর জন্য JSON.stringify/parse লাগে।</p>
  <h4>টাইমার</h4>
  <p>setTimeout একবার চলে; setInterval বারবার চলে যতক্ষণ না clearInterval কল করা হয় — এটা ভুলে গেলে memory leak হয়।</p>`,
  code:`// Simulated localStorage (real API is identical)
const fakeStorage = {};
const localStorage = {
  setItem: (k,v) => fakeStorage[k]=v,
  getItem: (k) => fakeStorage[k],
  removeItem: (k) => delete fakeStorage[k]
};

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
localStorage.removeItem("theme");
console.log(localStorage.getItem("theme"));`,
  challenge:"Write the real code to save a 'lastVisited' timestamp to localStorage every time the page loads.",
  challenge_bn:"আসল কোড লিখুন যা প্রতিবার পেজ লোড হলে 'lastVisited' timestamp localStorage-এ সেভ করে।" },

{ group:"DOM & Browser", level:"Basic", title:"JSON", title_bn:"JSON",
  explain:`
  <p>The universal data format for APIs.</p>
  <h4>The two core functions</h4>
  <p>JSON.stringify converts JS to a JSON string. JSON.parse converts back.</p>
  <h4>What gets lost</h4>
  <p>stringify drops undefined, functions, symbols silently. Dates become ISO strings but don't auto-restore as Dates on parse.</p>`,
  explain_bn:`
  <p>API-এর জন্য সার্বজনীন ডেটা ফরম্যাট।</p>
  <h4>দুটো মূল ফাংশন</h4>
  <p>JSON.stringify JS-কে JSON স্ট্রিং বানায়। JSON.parse আবার আগের মতো ফিরিয়ে দেয়।</p>
  <h4>যা হারিয়ে যায়</h4>
  <p>stringify undefined, function, symbol চুপচাপ বাদ দেয়। Date ISO স্ট্রিং হয়ে যায় কিন্তু parse-এর পর আবার Date হয়ে ফেরে না।</p>`,
  code:`const obj = { name: "Soumya", skills: ["Figma", "React"], greet: function(){} };
const jsonString = JSON.stringify(obj);
console.log(jsonString);

const parsedBack = JSON.parse(jsonString);
console.log(parsedBack);
console.log(JSON.stringify(obj, null, 2)); // pretty-printed`,
  challenge:"Stringify a nested object with a Date field, parse it back, and observe what happened to the date.",
  challenge_bn:"একটা Date field সহ nested object stringify করুন, আবার parse করুন, আর দেখুন date-এর কী হলো।" },

{ group:"DOM & Browser", level:"Intermediate", title:"Regular Expressions (Practical Subset)", title_bn:"রেগুলার এক্সপ্রেশন (ব্যবহারিক অংশ)",
  explain:`
  <h4>Building blocks</h4>
  <p><code>\\d</code> digit, <code>\\w</code> word char, <code>\\s</code> whitespace, <code>+</code> one+, <code>*</code> zero+, <code>g</code> flag all matches, <code>i</code> case-insensitive.</p>
  <h4>Three methods to know</h4>
  <p>pattern.test(str) returns boolean. str.match(pattern) returns matched text. str.replace(pattern, replacement) substitutes.</p>`,
  explain_bn:`
  <h4>বেসিক অংশগুলো</h4>
  <p><code>\\d</code> সংখ্যা, <code>\\w</code> word ক্যারেক্টার, <code>\\s</code> whitespace, <code>+</code> এক বা তার বেশি, <code>*</code> শূন্য বা তার বেশি, <code>g</code> flag সব match, <code>i</code> case-insensitive।</p>
  <h4>তিনটা জানা দরকারি মেথড</h4>
  <p>pattern.test(str) বুলিয়ান দেয়। str.match(pattern) match হওয়া টেক্সট দেয়। str.replace(pattern, replacement) বদলে দেয়।</p>`,
  code:`const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
console.log(emailPattern.test("user@example.com"));
console.log(emailPattern.test("not-an-email"));

const text = "Contact: 91-9876543210";
console.log(text.match(/\\d{10}/));
console.log(text.replace(/\\d/g, "*"));`,
  challenge:"Write a regex that validates a password needs at least 8 chars and one digit, then test it.",
  challenge_bn:"একটা regex লিখুন যা যাচাই করে পাসওয়ার্ডে কমপক্ষে ৮টা ক্যারেক্টার আর একটা সংখ্যা আছে কিনা, তারপর টেস্ট করুন।" },

{ group:"Patterns & Pitfalls", level:"Advanced", title:"Functional Programming Patterns", title_bn:"ফাংশনাল প্রোগ্রামিং প্যাটার্ন",
  explain:`
  <h4>Pure functions</h4>
  <p>Output depends only on inputs, no side effects. Same input always gives same output — trivially easy to test.</p>
  <h4>Immutability</h4>
  <p>Produce a new copy instead of changing data in place. This is exactly how React detects state changes.</p>
  <h4>Higher-order functions</h4>
  <p>Take or return another function — map/filter/reduce all qualify.</p>`,
  explain_bn:`
  <h4>Pure function</h4>
  <p>আউটপুট শুধু ইনপুটের উপর নির্ভর করে, কোনো side effect থাকে না। একই ইনপুটে সবসময় একই আউটপুট — টেস্ট করা সহজ।</p>
  <h4>Immutability</h4>
  <p>ডেটা সরাসরি বদলানোর বদলে একটা নতুন কপি বানানো হয়। React ঠিক এভাবেই state-এর পরিবর্তন বুঝতে পারে।</p>
  <h4>Higher-order function</h4>
  <p>যা আরেকটা ফাংশন নেয় বা রিটার্ন করে — map/filter/reduce সবগুলোই এর মধ্যে পড়ে।</p>`,
  code:`// Impure -- depends on outside state
let total = 0;
function addToTotal(n) { total += n; }

// Pure -- predictable, testable
function add(a, b) { return a + b; }

// Immutable update instead of mutation
function addItem(cart, item) {
  return [...cart, item]; // new array, original untouched
}

function withLogging(fn) {
  return (...args) => {
    console.log("calling with", args);
    return fn(...args);
  };
}
const loggedAdd = withLogging(add);
console.log(loggedAdd(2, 3));`,
  challenge:"Write a pure function updatePrice(product, newPrice) that returns a new object without mutating the original.",
  challenge_bn:"একটা pure ফাংশন updatePrice(product, newPrice) লিখুন যা original mutate না করে একটা নতুন object রিটার্ন করে।" },

{ group:"Patterns & Pitfalls", level:"Advanced", title:"Common Pitfalls & Gotchas", title_bn:"সাধারণ ভুল ও ফাঁদ",
  explain:`
  <p>These bugs show up repeatedly because JS's defaults are genuinely counterintuitive here — worth memorizing by name.</p>
  <h4>Sorting</h4>
  <p>.sort() with no function sorts as strings: [10,2,1].sort() → [1,10,2]. Always pass (a,b)=>a-b.</p>
  <h4>Floating point</h4>
  <p>0.1+0.2 !== 0.3 exactly — never compare float sums with ===, round with .toFixed(n).</p>
  <h4>NaN's self-inequality</h4>
  <p>NaN === NaN is false. Use Number.isNaN().</p>
  <h4>Async inside forEach</h4>
  <p>forEach doesn't await its callback — fires all in parallel, unordered. Use for...of with await instead.</p>`,
  explain_bn:`
  <p>এই বাগগুলো বারবার দেখা যায় কারণ JS-এর ডিফল্ট আচরণ এখানে সত্যিই অস্বাভাবিক — নাম ধরে মনে রাখার মতো।</p>
  <h4>সর্টিং</h4>
  <p>ফাংশন ছাড়া .sort() স্ট্রিং হিসেবে সর্ট করে: [10,2,1].sort() → [1,10,2]। সবসময় (a,b)=>a-b দিন।</p>
  <h4>Floating point</h4>
  <p>0.1+0.2 ঠিক 0.3 হয় না — কখনো === দিয়ে float যোগফল তুলনা করবেন না, .toFixed(n) দিয়ে round করুন।</p>
  <h4>NaN নিজের সাথেই অসমান</h4>
  <p>NaN === NaN হলো false। Number.isNaN() ব্যবহার করুন।</p>
  <h4>forEach-এর ভেতরে async</h4>
  <p>forEach তার callback-এর জন্য await করে না — সবগুলো একসাথে, ক্রমহীনভাবে চলে। এর বদলে await সহ for...of ব্যবহার করুন।</p>`,
  code:`console.log([10, 2, 1].sort());               // [1,10,2] -- wrong
console.log([10, 2, 1].sort((a,b)=>a-b));    // [1,2,10] -- correct

console.log(0.1 + 0.2);                        // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));          // "0.30"

console.log(NaN === NaN);                      // false
console.log(Number.isNaN(NaN));                // true

console.log([1,2] === [1,2]);                  // false -- different references`,
  challenge:"Rewrite a forEach-with-async-await loop to correctly wait for each item, using a for...of loop instead.",
  challenge_bn:"একটা forEach-with-async-await লুপকে for...of লুপ দিয়ে আবার লিখুন যাতে প্রতিটা আইটেমের জন্য ঠিকভাবে অপেক্ষা করে।" }
];

let current = 0;
let lang = 'en';
let done = new Array(MODULES.length).fill(false);
const groups = [...new Set(MODULES.map(m => m.group))];

// ---- Translation lookup ----
// Order: external map (Hindi) -> inline suffixed field (Bengali) -> English original.
function tr(m, i, field){
  if(lang === 'en') return m[field];
  const ext = MODULE_TRANSLATIONS[lang];
  if(ext && ext[i] && ext[i][field]) return ext[i][field];
  return m[`${field}_${lang}`] || m[field];
}
const trGroup = g => (lang === 'en' ? g : (GROUP_LABELS[lang] || {})[g]) || g;
const trLevel = l => (lang === 'en' ? l : (LEVEL_LABELS[lang] || {})[l]) || l;

// ---- Storage keys (all localStorage) ----
const USERS_KEY   = 'js-course-users-v1';     // { id: {pass, created} }
const SESSION_KEY = 'js-course-session-v1';   // { user }
const LANG_KEY    = 'js-course-lang-v1';      // remembered before login
const progressKey = user => `js-course-progress-v1:${user}`;

let currentUser = null;
let authMode = 'login';

// Some browsers block localStorage on file:// -- detect once so we can warn instead of silently losing data.
const storageOK = (() => {
  try{
    localStorage.setItem('__probe__', '1');
    localStorage.removeItem('__probe__');
    return true;
  }catch(e){ return false; }
})();

function readJSON(key, fallback){
  if(!storageOK) return fallback;
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){ return fallback; }
}

function writeJSON(key, value){
  if(!storageOK) return false;
  try{
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }catch(e){ return false; }
}

// ---- First-party visit ping -> /api/visit ----
// Only fires on the deployed site; over file:// there is no API to call, so it stays quiet.
// Fire-and-forget by design: a failed ping must never affect the course.
function recordVisit(type){
  if(location.protocol !== 'http:' && location.protocol !== 'https:') return;
  try{
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, user: currentUser, lang }),
      keepalive: true
    }).catch(() => {});
  }catch(e){}
}

// ---- Accounts ----
// NOTE: this is a throwaway local account, not real authentication. There is no server
// to verify anything against, so anyone with devtools can read or edit these entries.
// The hash below only keeps the password from sitting in plain sight -- it is NOT
// cryptography. Never type a password here that you use anywhere else.
function hashPassword(pw){
  let h = 2166136261;
  for(let i = 0; i < pw.length; i++){
    h ^= pw.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

const getUsers = () => readJSON(USERS_KEY, {});
const normalizeId = id => String(id || '').trim().toLowerCase();

function validateId(id){
  const t = UI[lang];
  if(id.length < 3) return t.errIdShort;
  if(!/^[a-z0-9._-]+$/.test(id)) return t.errIdChars;
  return null;
}

function signup(rawId, pw, pw2){
  const t = UI[lang];
  const id = normalizeId(rawId);
  const idErr = validateId(id);
  if(idErr) return idErr;
  if(pw.length < 4) return t.errPwShort;
  if(pw !== pw2) return t.errPwMatch;

  const users = getUsers();
  if(users[id]) return t.errExists;

  users[id] = { pass: hashPassword(pw), created: new Date().toISOString() };
  writeJSON(USERS_KEY, users);
  enterApp(id);
  recordVisit('login');
  return null;
}

function login(rawId, pw){
  const t = UI[lang];
  const id = normalizeId(rawId);
  const users = getUsers();
  if(!users[id]) return t.errNoUser;
  if(users[id].pass !== hashPassword(pw)) return t.errWrongPw;
  enterApp(id);
  recordVisit('login');
  return null;
}

function logout(){
  clearTimeout(saveTimeout);
  currentUser = null;
  if(storageOK){
    try{ localStorage.removeItem(SESSION_KEY); }catch(e){}
  }
  done = new Array(MODULES.length).fill(false);
  current = 0;
  showAuth();
}

// ---- Progress, stored per user ----
function loadProgress(user){
  done = new Array(MODULES.length).fill(false);
  current = 0;
  const data = readJSON(progressKey(user), null);
  if(!data) return;
  if(Array.isArray(data.done) && data.done.length === MODULES.length) done = data.done;
  if(LANGS.includes(data.lang)) lang = data.lang;
  if(typeof data.current === 'number' && data.current >= 0 && data.current < MODULES.length) current = data.current;
}

let saveTimeout = null;
function saveProgress(){
  if(!currentUser) return;
  const el = document.getElementById('saveState');
  if(el) el.textContent = storageOK ? UI[lang].saving : UI[lang].errNoStorage;
  if(!storageOK) return;
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    const ok = writeJSON(progressKey(currentUser), { done, lang, current });
    if(el) el.textContent = ok ? UI[lang].saved : '';
  }, 300);
}

function resetProgress(){
  done = new Array(MODULES.length).fill(false);
  saveProgress();
  render();
}

function setLang(l){
  if(!LANGS.includes(l)) return;
  lang = l;
  document.body.className = `lang-${l}`;
  if(storageOK){
    try{ localStorage.setItem(LANG_KEY, l); }catch(e){}
  }
  if(currentUser){
    saveProgress();
    render();
  }else{
    applyStaticText();
    renderAuth();
  }
}

// ---- Screen switching ----
function showAuth(){
  document.getElementById('loadscreen').style.display = 'none';
  document.getElementById('appwrap').style.display = 'none';
  document.getElementById('header').style.display = 'none';
  document.getElementById('authscreen').style.display = 'flex';
  applyStaticText();
  renderAuth();
  document.getElementById('f-id').focus();
}

function enterApp(user){
  currentUser = user;
  writeJSON(SESSION_KEY, { user });
  loadProgress(user);
  document.getElementById('loadscreen').style.display = 'none';
  document.getElementById('authscreen').style.display = 'none';
  document.getElementById('header').style.display = 'block';
  document.getElementById('appwrap').style.display = 'grid';
  document.getElementById('toprow').style.display = 'flex';
  ['f-id','f-pw','f-pw2'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('autherr').textContent = '';
  render();
}

function setAuthMode(mode){
  authMode = mode;
  document.getElementById('autherr').textContent = '';
  renderAuth();
}

function renderAuth(){
  const t = UI[lang];
  const signing = authMode === 'signup';
  document.getElementById('a-title').textContent = t.authTitle;
  document.getElementById('a-sub').textContent = t.authSub;
  document.getElementById('tab-login').textContent = t.tabLogin;
  document.getElementById('tab-signup').textContent = t.tabSignup;
  document.getElementById('tab-login').classList.toggle('active', !signing);
  document.getElementById('tab-signup').classList.toggle('active', signing);
  document.getElementById('l-id').textContent = t.lblId;
  document.getElementById('l-pw').textContent = t.lblPw;
  document.getElementById('l-pw2').textContent = t.lblPw2;
  document.getElementById('field-pw2').style.display = signing ? 'flex' : 'none';
  document.getElementById('f-pw').autocomplete = signing ? 'new-password' : 'current-password';
  document.getElementById('a-submit').textContent = signing ? t.btnSignup : t.btnLogin;
  document.getElementById('a-note').textContent = storageOK ? t.authNote : t.errNoStorage;
  document.getElementById('a-note').classList.toggle('bad', !storageOK);
}

function submitAuth(e){
  e.preventDefault();
  const id = document.getElementById('f-id').value;
  const pw = document.getElementById('f-pw').value;
  const pw2 = document.getElementById('f-pw2').value;
  const err = authMode === 'signup' ? signup(id, pw, pw2) : login(id, pw);
  document.getElementById('autherr').textContent = err || '';
  return false;
}

function applyStaticText(){
  const t = UI[lang];
  document.getElementById('t-eyebrow').textContent = t.eyebrow;
  document.getElementById('t-title').textContent = t.title;
  document.getElementById('t-sub').textContent = t.sub(MODULES.length);
  document.getElementById('a-eyebrow').textContent = t.eyebrow;
  document.getElementById('a-brand').textContent = t.title;
  document.getElementById('t-reset').textContent = t.reset;
  document.getElementById('t-logout').textContent = t.logout;
  document.getElementById('userchip').textContent = currentUser ? `${t.signedInAs} ${currentUser}` : '';
  // Two language switches exist: one in the header, one on the login card.
  LANGS.forEach(l => {
    [`btn-${l}`, `a-btn-${l}`].forEach(id => {
      document.getElementById(id).classList.toggle('active', lang === l);
    });
  });
  document.body.className = `lang-${lang}`;
}

function render(){
  applyStaticText();
  const t = UI[lang];

  const nav = document.getElementById('nav');
  let navHtml = '';
  groups.forEach(g => {
    navHtml += `<div class="grouplabel">${trGroup(g)}</div>`;
    MODULES.forEach((m,i) => {
      if(m.group !== g) return;
      navHtml += `<div class="item ${i===current?'active':''} ${done[i]?'done':''}" onclick="goTo(${i})">
        <div class="num">${done[i] ? '✓' : i+1}</div>
        <div>${tr(m, i, 'title')}</div>
      </div>`;
    });
  });
  nav.innerHTML = navHtml;

  const main = document.getElementById('main');
  main.innerHTML = MODULES.map((m,i)=>{
    const title = tr(m, i, 'title');
    const explain = tr(m, i, 'explain');
    const challenge = tr(m, i, 'challenge');
    const levelLabel = trLevel(m.level);
    const groupLabel = trGroup(m.group);
    return `
    <div class="module ${i===current?'active':''}">
      <div class="mtitle">${title} <span class="level ${m.level}">${levelLabel}</span></div>
      <div class="mmeta">${groupLabel} · ${t.moduleOf(i+1, MODULES.length)}</div>
      <div class="explain">${explain}</div>
      <div class="editor">
        <div class="bar">
          <div class="dots"><span></span><span></span><span></span> practice.js</div>
          <button class="runbtn" onclick="runCode(${i})">${t.run}</button>
        </div>
        <textarea class="code" id="code-${i}" spellcheck="false">${m.code}</textarea>
        <div class="output" id="out-${i}"><span class="muted">${t.outputPlaceholder}</span></div>
      </div>
      <div class="challenge">
        <div class="lbl">${t.tryYourself}</div>
        ${challenge}
      </div>
      <div class="navfoot">
        <button onclick="goTo(${i-1})" ${i===0?'disabled':''}>${t.back}</button>
        <label class="done-check"><input type="checkbox" ${done[i]?'checked':''} onchange="toggleDone(${i}, this.checked)"> ${t.markComplete}</label>
        <button class="primary" onclick="goTo(${i+1})" ${i===MODULES.length-1?'disabled':''}>${t.next}</button>
      </div>
    </div>`;
  }).join('');

  updateProgress();
}

function goTo(i){
  if(i<0 || i>=MODULES.length) return;
  current = i;
  saveProgress();
  render();
  window.scrollTo({top:0, behavior:'smooth'});
}

function toggleDone(i, val){
  done[i] = val;
  saveProgress();
  render();
}

function updateProgress(){
  const completed = done.filter(Boolean).length;
  document.getElementById('progressFill').style.width = (completed/MODULES.length*100)+'%';
  document.getElementById('progressLabel').textContent = `${completed} / ${MODULES.length}`;
}

function runCode(i){
  const code = document.getElementById(`code-${i}`).value;
  const outEl = document.getElementById(`out-${i}`);
  const logs = [];
  const fakeConsole = {
    log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
  };
  try {
    const fn = new Function('console', code);
    fn(fakeConsole);
    outEl.innerHTML = logs.length
      ? logs.map(l => `<div class="ok">› ${escapeHtml(l)}</div>`).join('')
      : `<span class="muted">${UI[lang].noOutput}</span>`;
  } catch (err) {
    outEl.innerHTML = `<div class="err">⚠ ${escapeHtml(err.message)}</div>`;
  }
}

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

(function init(){
  if(storageOK){
    try{
      const savedLang = localStorage.getItem(LANG_KEY);
      if(LANGS.includes(savedLang)) lang = savedLang;
    }catch(e){}
  }
  // Resume the previous session only if that account still exists.
  const session = readJSON(SESSION_KEY, null);
  const users = getUsers();
  if(session && session.user && users[session.user]){
    enterApp(session.user);
  }else{
    showAuth();
  }
  // One page-view event per load, carrying the resumed account if there is one.
  recordVisit('view');
})();
