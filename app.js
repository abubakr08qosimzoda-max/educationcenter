(function() {
  "use strict";

  const FRAME_CONFIG = {"intro": {"mode": "external", "count": 97}, "vitrine": {"mode": "external", "count": 77}, "bar": {"mode": "external", "count": 63}, "table": {"mode": "external", "count": 76}};
  const THUMBS = {"almond-croissant": "thumbs/almond-croissant.webp", "pistachio-roll": "thumbs/pistachio-roll.webp", "berry-tart": "thumbs/berry-tart.webp", "butter-croissant": "thumbs/butter-croissant.webp", "choco-ganache": "thumbs/choco-ganache.webp", "basque-cheese": "thumbs/basque-cheese.webp", "passion-tart": "thumbs/passion-tart.webp", "macaron-box": "thumbs/macaron-box.webp", "hub-vitrine": "thumbs/hub-vitrine.webp", "hub-bar": "thumbs/hub-bar.webp", "hub-table": "thumbs/hub-table.webp", "dish-katsu": "thumbs/dish-katsu.webp", "dish-lobster": "thumbs/dish-lobster.webp", "dish-noodles": "thumbs/dish-noodles.webp", "dish-halloumi": "thumbs/dish-halloumi.webp", "dish-panna": "thumbs/dish-panna.webp"};

  /* ===================== 4-LANGUAGE DICTIONARY (EN DEFAULT, RU, AR, FA) ===================== */
  const I18N = {
    en: {
      dir: "ltr",
      brand: "SOLÉA",
      tagline: "Artisan Cafe & Patisserie",
      loading: "Preparing the afternoon light...",
      backToHub: "Back to Choices",
      toBar: "Coffee Bar",
      toVitrine: "Pastry Vitrine",
      bag: "Bag",
      scrollCue: "Scroll or click to step inside",
      enterNow: "Enter Cafe",
      introStories: [
        { k: "SOLÉA PATISSERIE", t: "Afternoon warmth, behind tall glass", s: "Step off the sunlit street into our artisan bakery & specialty roastery." },
        { k: "BAKED IN-HOUSE", t: "Golden layers, fresh from the oven", s: "French butter croissants, pistachio rolls, and seasonal fruit tarts crafted every morning." },
        { k: "SPECIALTY BAR", t: "Beans roasted weekly, poured with care", s: "Explore the pastry vitrine or step straight to our barista counter." }
      ],
      hubQuestion: "What are you craving today?",
      hubVitrineTitle: "Pastry Vitrine",
      hubVitrineDesc: "Explore 8 freshly baked tarts, croissants & cakes",
      hubBarTitle: "Coffee Bar",
      hubBarDesc: "Single-origin espresso, signatures & artisanal teas",
      hubTableTitle: "Chef's Table",
      hubTableDesc: "Interactive 3D menu of hot dishes at your table",
      tableBanner: "Tap any dish or scroll to preview it in 3D on your table",
      playAll: "▶ Play All",
      stopPlay: "❚❚ Pause",
      vitrineBanner: "Tap any pastry pin or browse below",
      barBanner: "Tap a bar station or choose your drink",
      barMenuTitle: "Select Your Drinks",
      tabs: { espresso: "Espresso", signature: "Signatures", brew: "Pour-Over & Tea" },
      addToBag: "Add to Bag",
      addedToast: "added to your bag",
      cartTitle: "Your Bag",
      cartEmpty: "Your bag is empty. Explore the pastry vitrine or coffee bar to add items.",
      subtotal: "Subtotal",
      checkout: "Place Order",
      orderDone: "Order confirmed! Freshly prepared for you in 5 minutes."
    },
    ru: {
      dir: "ltr",
      brand: "SOLÉA",
      tagline: "Ремесленное кафе и кондитерская",
      loading: "Наполняем зал дневным светом...",
      backToHub: "К выбору зала",
      toBar: "Кофе-бар",
      toVitrine: "Витрина десертов",
      bag: "Корзина",
      scrollCue: "Прокрутите или нажмите, чтобы войти",
      enterNow: "Войти в кафе",
      introStories: [
        { k: "SOLÉA PATISSERIE", t: "Тепло полудня за высокими окнами", s: "Шагните с солнечной улицы в нашу ремесленную пекарню и кофейню." },
        { k: "СВЕЖАЯ ВЫПЕЧКА", t: "Хрустящие слои прямо из печи", s: "Круассаны на сливочном масле, фисташковые роллы и ягодные тарты каждое утро." },
        { k: "СПЕШАЛТИ БАР", t: "Зёрна свежей обжарки каждую неделю", s: "Выберите витрину с десертами или перейдите сразу к стойке бариста." }
      ],
      hubQuestion: "Чего вам хочется сегодня?",
      hubVitrineTitle: "Витрина десертов",
      hubVitrineDesc: "8 свежих круассанов, тартов и чизкейков",
      hubBarTitle: "Кофе-бар",
      hubBarDesc: "Эспрессо спешалти, авторские латте и чаи",
      hubTableTitle: "Столик шефа",
      hubTableDesc: "Живое 3D-меню горячих блюд прямо за столиком",
      tableBanner: "Нажмите на блюдо или прокрутите для 3D-подачи на столике",
      playAll: "▶ Показать все",
      stopPlay: "❚❚ Пауза",
      vitrineBanner: "Нажмите на любой десерт на витрине",
      barBanner: "Выберите станцию или напиток в меню",
      barMenuTitle: "Выберите напитки",
      tabs: { espresso: "Эспрессо", signature: "Авторские", brew: "Фильтр и Чай" },
      addToBag: "В корзину",
      addedToast: "добавлено в корзину",
      cartTitle: "Ваша корзина",
      cartEmpty: "Корзина пока пуста. Выберите десерты на витрине или напитки в баре.",
      subtotal: "Итого",
      checkout: "Оформить заказ",
      orderDone: "Заказ принят! Всё будет готово через 5 минут."
    },
    ar: {
      dir: "rtl",
      brand: "سوليا",
      tagline: "مقهى ومخبز حرفي",
      loading: "نجهّز أجواء المساء الدافئة...",
      backToHub: "العودة للاختيار",
      toBar: "بار القهوة",
      toVitrine: "واجهة الحلويات",
      bag: "السلة",
      scrollCue: "مرّر للأسفل أو اضغط للدخول",
      enterNow: "ادخل المقهى",
      introStories: [
        { k: "مقهى سوليا", t: "دفء الأصيل خلف النوافذ العالية", s: "انتقل من الشارع المشمس إلى مخبزنا الحرفي ومحمصة القهوة المختصة." },
        { k: "مخبوزات طازجة", t: "حلويات تُخبز هنا كل صباح", s: "كرواسون اللوز، لفائف الفستق وتارت التوت الطازج تُحضّر يومياً." },
        { k: "بار القهوة المختصة", t: "حبوب محمّصة أسبوعياً بعناية", s: "تصفّح واجهة الحلويات أو توجّه مباشرة إلى بار الباريستا." }
      ],
      hubQuestion: "ماذا تشتهي اليوم؟",
      hubVitrineTitle: "واجهة الحلويات",
      hubVitrineDesc: "تصفّح 8 أصناف من المخبوزات والحلويات الطازجة",
      hubBarTitle: "بار القهوة",
      hubBarDesc: "إسبريسو مختص، مشروبات مميزة وشاي حرفي",
      hubTableTitle: "طاولة الشيف",
      hubTableDesc: "قائمة ثلاثية الأبعاد تفاعلية للأطباق الساخنة",
      tableBanner: "اضغط على أي طبق أو مرّر لاستعراضه بتقنية 3D على طاولتك",
      playAll: "▶ عرض الكل",
      stopPlay: "❚❚ إيقاف",
      vitrineBanner: "اضغط على أي حلوى لاستعراض التفاصيل",
      barBanner: "اضغط على محطة البار أو اختر مشروبك",
      barMenuTitle: "اختر مشروباتك",
      tabs: { espresso: "إسبريسو", signature: "مميزة", brew: "تقطير وشاي" },
      addToBag: "أضف إلى السلة",
      addedToast: "تمت إضافته إلى السلة",
      cartTitle: "سلة الطلبات",
      cartEmpty: "سلتك فارغة حالياً. استكشف الحلويات أو بار القهوة لإضافة طلبك.",
      subtotal: "المجموع",
      checkout: "تأكيد الطلب",
      orderDone: "تم تأكيد طلبك! سيُحضّر طازجاً خلال 5 دقائق."
    },
    fa: {
      dir: "rtl",
      brand: "سولیا",
      tagline: "کافه و شیرینی‌پزی دست‌ساز",
      loading: "در حال آماده‌سازی فضای گرم کافه...",
      backToHub: "بازگشت به انتخاب‌ها",
      toBar: "بار قهوه",
      toVitrine: "میز شیرینی",
      bag: "سبد",
      scrollCue: "اسکرول کنید یا کلیک کنید تا وارد شوید",
      enterNow: "ورود به کافه",
      introStories: [
        { k: "کافه سولیا", t: "گرمای عصر، پشت شیشه‌های بلند", s: "از خیابان آفتابی وارد نانوایی دست‌ساز و کافه تخصصی ما شوید." },
        { k: "پخت روزانه", t: "شیرینی‌هایی که همین‌جا پخته می‌شوند", s: "کروسان بادام، رول پسته و تارت میوه‌ای تازه هر صبح از تنور بیرون می‌آیند." },
        { k: "بار تخصصی قهوه", t: "دانه‌هایی که هر هفته برشته می‌شوند", s: "به ویترین شیرینی نزدیک شوید یا مستقیم سراغ بار باریستا بروید." }
      ],
      hubQuestion: "امروز دلتان چه می‌خواهد؟",
      hubVitrineTitle: "میز شیرینی",
      hubVitrineDesc: "مشاهده ۸ نوع شیرینی، کروسان و کیک تازه",
      hubBarTitle: "بار نوشیدنی",
      hubBarDesc: "اسپرسو تخصصی، لاته ویژه و دمنوش‌های دست‌ساز",
      hubTableTitle: "میز سرآشپز",
      hubTableDesc: "منوی سه‌بعدی زنده غذاهای گرم روی میز شما",
      tableBanner: "روی هر غذا بزنید یا اسکرول کنید تا سه‌بعدی روی میز ظاهر شود",
      playAll: "▶ نمایش همه",
      stopPlay: "❚❚ توقف",
      vitrineBanner: "روی هر شیرینی بزنید تا جزئیات را ببینید",
      barBanner: "روی هر ایستگاه بزنید یا از منو انتخاب کنید",
      barMenuTitle: "نوشیدنی‌هایتان را انتخاب کنید",
      tabs: { espresso: "اسپرسو", signature: "ویژه بار", brew: "دمی و چای" },
      addToBag: "افزودن به سبد",
      addedToast: "به سبد اضافه شد",
      cartTitle: "سبد سفارش شما",
      cartEmpty: "سبد شما خالی است. از ویترین شیرینی یا بار قهوه انتخاب کنید.",
      subtotal: "جمع کل",
      checkout: "ثبت سفارش",
      orderDone: "سفارش شما ثبت شد! تا ۵ دقیقه دیگر تازه آماده می‌شود."
    }
  };

  /* ===================== MENU DATA (PRICES IN USD $) ===================== */
  const PASTRIES = [
    {
      id: "almond-croissant", x: 19.5, y: 78.5, price: 5.50,
      name: { en: "Almond Croissant", ru: "Миндальный круассан", ar: "كرواسون اللوز", fa: "کروسان بادام" },
      desc: {
        en: "Twice-baked laminated butter pastry filled with toasted almond frangipane and crisp flaked almonds.",
        ru: "Слоёный круассан двойной выпечки с кремом франжипан и хрустящими лепестками миндаля.",
        ar: "كرواسون بالزبدة الفرنسية محشو بكريمة اللوز المحمّص ومغطّى بشرائح اللوز المقرمش.",
        fa: "کروسان کره‌ای دوپخت با مغز کرم بادام برشته و پرک بادام ترد."
      }
    },
    {
      id: "pistachio-roll", x: 31.5, y: 79.0, price: 6.25,
      name: { en: "Pistachio Cream Roll", ru: "Фисташковый ролл", ar: "رول كريمة الفستق", fa: "رول کرم پسته" },
      desc: {
        en: "Swirled golden brioche filled with velvety roasted Bronte pistachio cream and crushed pistachios.",
        ru: "Воздушная бриошь с нежным кремом из обжаренной фисташки и фисташковой крошкой.",
        ar: "بريوش ذهبي محشو بكريمة الفستق المحمّص الفاخر ومزيّن بالفستق المجروش.",
        fa: "بریوش طلایی لایه‌ای با کرم مخملی پسته برشته و پودر پسته تازه."
      }
    },
    {
      id: "berry-tart", x: 42.8, y: 79.5, price: 6.75,
      name: { en: "Wild Berry Tart", ru: "Ягодный тарт", ar: "تارت التوت البري", fa: "تارت توت وحشی" },
      desc: {
        en: "Crisp vanilla sablé shell layered with Madagascar vanilla custard, fresh raspberries, and blackberries.",
        ru: "Хрустящая песочная основа с заварным кремом на мадагаскарской ванили и свежими ягодами.",
        ar: "عجينة سابليه مقرمشة مع كاسترد فانيليا مدغشقر وتوت طازج موسمي.",
        fa: "خمیر ترد وانیلی همراه با کرم پاتیسیر وانیل ماداگاسکار و تمشک و بلوبری تازه."
      }
    },
    {
      id: "butter-croissant", x: 52.3, y: 79.0, price: 4.90,
      name: { en: "Classic Butter Croissant", ru: "Классический круассан", ar: "كرواسون الزبدة الكلاسيكي", fa: "کروسان کره‌ای کلاسیک" },
      desc: {
        en: "27 honeycomb layers of cultured Normandy butter dusted lightly with powdered sugar.",
        ru: "27 воздушных слоёв на фермерском масле с тончайшей хрустящей корочкой.",
        ar: "27 طبقة هشة من الزبدة الفرنسية الفاخرة مخبوزة حتى اللون الذهبي.",
        fa: "۲۷ لایه ترد و هواخورده با کره فرانسوی و پودر قند ملایم."
      }
    },
    {
      id: "choco-ganache", x: 62.6, y: 79.5, price: 7.50,
      name: { en: "Dark Chocolate Ganache", ru: "Шоколадный ганаш", ar: "غاناش الشوكولاتة الداكنة", fa: "گاناش شکلات تلخ" },
      desc: {
        en: "Mirror-glazed 70% Valrhona dark chocolate mousse over a crisp hazelnut praline feuilletine base.",
        ru: "Мусс из 70% тёмного шоколада Valrhona в зеркальной глазури на основе с пралине.",
        ar: "موس شوكولاتة داكنة 70% بطبقة لامعة فوق قاعدة البندق المقرمش.",
        fa: "موس شکلات تلخ ۷۰ درصد با روکش آینه‌ای روی پایه ترد فندق."
      }
    },
    {
      id: "basque-cheese", x: 73.3, y: 79.5, price: 8.25,
      name: { en: "San Sebastián Cheesecake", ru: "Чизкейк Сан-Себастьян", ar: "تشيز كيك سان سيباستيان", fa: "چیزکیک سن‌سباستین" },
      desc: {
        en: "Deeply caramelized top with a rich, custardy molten center baked at high heat.",
        ru: "Знаменитый баскский чизкейк с карамельной корочкой и нежнейшей кремовой сердцевиной.",
        ar: "تشيز كيك باسكي بسطح مكرمل وقلب كريمي غني يذوب في الفم.",
        fa: "چیزکیک باسکی با رویه کاراملی و بافت میانی نرم و خامه‌ای."
      }
    },
    {
      id: "passion-tart", x: 82.8, y: 80.5, price: 6.50,
      name: { en: "Passionfruit Curd Tart", ru: "Тарт с маракуйей", ar: "تارت الباشن فروت", fa: "تارت پشن‌فروت" },
      desc: {
        en: "Bright, silky passionfruit and Meyer lemon curd in a buttery almond tartlet.",
        ru: "Яркий шелковистый крем из маракуйи и лимона в хрустящей миндальной тарталетке.",
        ar: "كريمة الباشن فروت والليمون المنعشة داخل تارت اللوز المقرمش.",
        fa: "کرم لطیف و ملس پشن‌فروت و لیمو در تارتلت کره‌ای بادام."
      }
    },
    {
      id: "macaron-box", x: 89.2, y: 78.5, price: 9.50,
      name: { en: "Artisan Macaron Box (6 pcs)", ru: "Набор макарон (6 шт.)", ar: "علبة ماكارون حرفي (6 قطع)", fa: "جعبه ماکارون دست‌ساز (۶ عدد)" },
      desc: {
        en: "Chef's curated box: Rose, Pistachio, Salted Caramel, Raspberry, Vanilla Bean, and Lemon.",
        ru: "Авторский сет: роза, фисташка, солёная карамель, малина, ваниль и лимон.",
        ar: "تشكيلة الشيف: الورد، الفستق، الكراميل المملح، التوت، الفانيليا والليمون.",
        fa: "مجموعه دست‌چین سرآشپز: گل‌سرخ، پسته، کارامل نمکی، تمشک، وانیل و لیمو."
      }
    }
  ];

  const BAR_STATIONS = [
    { id: "espresso", x: 55.5, y: 50.0, label: { en: "Single-Origin Grinders", ru: "Кофемолки спешалти", ar: "مطاحن القهوة المختصة", fa: "آسیاب‌های تک‌خاستگاه" } },
    { id: "signature", x: 72.5, y: 49.0, label: { en: "Espresso & Latte Bar", ru: "Эспрессо-машина", ar: "ماكينة الإسبريسو", fa: "دستگاه اسپرسو و لاته" } },
    { id: "brew", x: 91.5, y: 55.0, label: { en: "Pour-Over & Tea Station", ru: "Фильтр-бар и чай", ar: "ركن التقطير والشاي", fa: "ایستگاه دمی و چای" } }
  ];

  const DRINKS = [
    { id: "double-espresso", cat: "espresso", price: 3.75,
      name: { en: "Double Espresso", ru: "Двойной эспрессо", ar: "إسبريسو مزدوج", fa: "اسپرسو دبل" },
      note: { en: "Ethiopia Yirgacheffe · Jasmine & dark cocoa", ru: "Эфиопия Иргачеффе · Жасмин и какао", ar: "إثيوبيا ييرغاتشيفي · ياسمين وكاكاو", fa: "اتیوپی یرگاچف · یاس و کاکائو تلخ" } },
    { id: "americano", cat: "espresso", price: 4.25,
      name: { en: "Artisan Americano", ru: "Американо", ar: "أمريكانو مختص", fa: "آمریکانو تخصصی" },
      note: { en: "Double ristretto over filtered hot or iced water", ru: "Двойной ристретто, горячий или со льдом", ar: "دبل ريستريتو ساخن أو مثلج", fa: "دبل ریسترتو با آب تصفیه‌شده گرم یا سرد" } },
    { id: "cortado", cat: "espresso", price: 4.50,
      name: { en: "Velvet Cortado", ru: "Кортадо", ar: "كورتادو مخملي", fa: "کورتادو مخملی" },
      note: { en: "Equal parts rich espresso and silky microfoam", ru: "Равные части эспрессо и шёлковой молочной пены", ar: "توازن مثالي بين الإسبريسو والحليب المبخّر", fa: "توازن مساوی اسپرسو غلیظ و فوم شیر لطیف" } },
    { id: "spanish-latte", cat: "signature", price: 5.75,
      name: { en: "Saffron Spanish Latte", ru: "Шафрановый раф / Испанский латте", ar: "سبانش لاتيه بالزعفران", fa: "اسپانیش لاته زعفرانی" },
      note: { en: "House-infused saffron milk, condensed cream & double shot", ru: "Молоко с шафраном, сливочная карамель и двойной эспрессо", ar: "حليب منقوع بالزعفران مع إسبريسو مزدوج", fa: "شیر دم‌کشیده با زعفران، شیر عسلی و دبل شات" } },
    { id: "pistachio-latte", cat: "signature", price: 6.25,
      name: { en: "Roasted Pistachio Latte", ru: "Фисташковый латте", ar: "لاتيه الفستق المحمّص", fa: "لاته پسته برشته" },
      note: { en: "House pistachio praline paired with velvety oat or whole milk", ru: "Фисташковое пралине с овсяным или цельным молоком", ar: "برالين الفستق المحمّص مع حليب الشوفان أو كامل الدسم", fa: "پرالین پسته دست‌ساز با شیر تازه یا شیر جو" } },
    { id: "flat-white", cat: "signature", price: 5.00,
      name: { en: "Signature Flat White", ru: "Флэт Уайт", ar: "فلات وايت كلاسيكي", fa: "فلت وایت ویژه" },
      note: { en: "Smooth micro-textured milk over sweet caramel espresso", ru: "Нежная текстура молока и сладкий карамельный эспрессо", ar: "حليب ناعم فوق إسبريسو بنكهة الكراميل", fa: "بافت مخملی شیر روی اسپرسو با نت کاراملی" } },
    { id: "v60", cat: "brew", price: 6.50,
      name: { en: "V60 Single-Origin Pour-Over", ru: "Воронка V60 (Спешалти)", ar: "قهوة مقطرة V60", fa: "قهوه دمی V60 تک‌خاستگاه" },
      note: { en: "Hand-poured Panama Geisha · Bergamot & peach", ru: "Ручное заваривание Панама Гейша · Бергамот и персик", ar: "بنما غيشا محضّرة يدوياً · برغموت وخوخ", fa: "دم‌آوری دستی پاناما گیشا · برگاموت و هلو" } },
    { id: "chai-masala", cat: "brew", price: 5.25,
      name: { en: "Spiced Chai Masala", ru: "Пряный Чай Масала", ar: "شاي ماسالا بالتوابل", fa: "چای ماسالا ادویه‌ای" },
      note: { en: "Assam black tea simmered with cardamom, cinnamon & ginger", ru: "Чёрный чай Ассам с кардамоном, корицей и имбирём", ar: "شاي أسام مطهو بالهيل والقرفة والزنجبيل", fa: "چای سیاه آسام دم‌کشیده با هل، دارچین و زنجبیل" } },
    { id: "ceremonial-matcha", cat: "brew", price: 6.00,
      name: { en: "Ceremonial Uji Matcha", ru: "Церемониальная Матча Удзи", ar: "ماتشا أوجي اليابانية", fa: "ماچا تشریفاتی اوجی" },
      note: { en: "First-harvest Kyoto green tea whisked to order", ru: "Японский зелёный чай первого сбора из Киото", ar: "شاي ماتشا أخضر فاخر من كيوتو مخفوق طازجاً", fa: "چای سبز برداشت اول کیوتو هم‌زده‌شده به سفارش شما" } }
  ];

  const TABLE_DISHES = [
    {
      id: "dish-katsu", pct: 0.16, price: 18.50,
      name: { en: "Japanese Chicken Katsu", ru: "Японский Чикен Кацу", ar: "دجاج كاتسو الياباني", fa: "چیکن کاتسو ژاپنی" },
      desc: {
        en: "Golden panko-crusted chicken cutlet served with steamed jasmine rice, shredded cabbage & house tonkatsu glaze.",
        ru: "Хрустящее куриное филе в панировке панко с рисом жасмин, свежей капустой и соусом тонкацу.",
        ar: "شريحة دجاج مقرمشة بفتات البانكو مع أرز الياسمين وصوص تونكاتسو الخاص.",
        fa: "فیله مرغ ترد با پانکو طلایی همراه با برنج یاسمن، کلم تازه و سس تونکاتسو."
      }
    },
    {
      id: "dish-lobster", pct: 0.32, price: 24.00,
      name: { en: "Lobster Mac & Cheese", ru: "Мак-энд-чиз с лобстером", ar: "ماك آند تشيز باللوبستر", fa: "مک اند چیز لابستر" },
      desc: {
        en: "Butter-poached lobster folded into aged gruyère & sharp cheddar cream sauce with toasted herb breadcrumbs.",
        ru: "Нежное мясо лобстера в сливочном соусе из выдержанного грюйера и чеддера.",
        ar: "قطع اللوبستر بالزبدة مع صلصة جبن الغرويير والشيدر المعتّق.",
        fa: "لابستر پخته‌شده در کره با سس خامه‌ای پنیر گرویر و چدار کهنه."
      }
    },
    {
      id: "dish-noodles", pct: 0.53, price: 19.50,
      name: { en: "Black Pepper Beef Noodles", ru: "Лапша с говядиной и чёрным перцем", ar: "نودلز اللحم بالفلفل الأسود", fa: "نودل گوشت با فلفل سیاه" },
      desc: {
        en: "Wok-seared tenderloin strips, hand-pulled wheat noodles, sweet bell peppers & cracked Sarawak black pepper.",
        ru: "Обжаренная на воке вырезка с лапшой, сладким перцем и свежемолотым чёрным перцем.",
        ar: "شرائح لحم طرية مطهوة على الووك مع نودلز وفلفل أسود مطحون طازج.",
        fa: "راسته گوساله تفت‌داده‌شده در ووک با نودل دست‌ساز، فلفل دلمه‌ای و فلفل سیاه."
      }
    },
    {
      id: "dish-halloumi", pct: 0.74, price: 13.50,
      name: { en: "Crispy Halloumi Bites", ru: "Хрустящий сыр Халлуми", ar: "مكعبات الحلوم المقرمشة", fa: "لقمه‌های هالومی ترد" },
      desc: {
        en: "Golden-fried Cypriot halloumi cubes drizzled with wildflower honey, sesame & spiced chili dip.",
        ru: "Золотистые кубики кипрского халлуми с цветочным мёдом, кунжутом и пикантным соусом.",
        ar: "مكعبات حلوم قبرصي مقرمشة مع عسل الزهور وصوص الفلفل الحلو.",
        fa: "مکعب‌های پنیر هالومی طلایی با عسل طبیعی، کنجد و سس چیلی ملایم."
      }
    },
    {
      id: "dish-panna", pct: 0.98, price: 11.00,
      name: { en: "Mango Coconut Panna Cotta", ru: "Панна-котта Манго-Кокос", ar: "بانا كوتا المانجو وجوز الهند", fa: "پاناکوتای انبه و نارگیل" },
      desc: {
        en: "Silky Madagascar vanilla & coconut panna cotta crowned with fresh Alphonso mango compote and mint.",
        ru: "Шёлковая кокосовая панна-котта со свежим спелым манго Альфонсо и мятой.",
        ar: "بانا كوتا جوز الهند الناعمة تعلوها قطع المانجو الطازجة والنعناع.",
        fa: "پاناکوتای مخملی نارگیل و وانیل با کمپوت انبه تازه و برگ نعناع."
      }
    }
  ];

  /* ===================== APP STATE ===================== */
  let lang = "en";
  let state = "intro"; // 'intro' | 'hub' | 'vitrine' | 'bar' | 'transition'
  let activeBarTab = "espresso";
  let selectedPastryId = null;
  let cart = {}; // id -> { id, price, qty, kind }

  // Frame stores
  const frames = { intro: [], vitrine: [], bar: [], table: [] };
  let activeDishId = "dish-katsu";
  let tableProgress = 0;
  let targetTableProgress = 0.16;
  let isTableAutoPlay = false;
  let activeClip = "intro";
  let currentFrame = 0;
  let targetFrame = 0;
  let animQueue = [];
  let isTransitioning = false;
  let onQueueDone = null;
  let introProgress = 0;
  let targetIntroProgress = 0;

  // DOM refs
  const canvas = document.getElementById("scene-canvas");
  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  const hotspotLayer = document.getElementById("hotspot-layer");
  const preloader = document.getElementById("preloader");
  const preloadFill = document.getElementById("preload-fill");
  const preloadPct = document.getElementById("preload-pct");
  const introUI = document.getElementById("intro-ui");
  const hubUI = document.getElementById("hub-ui");
  const vitrineBar = document.getElementById("vitrine-bar");
  const barDrawer = document.getElementById("bar-drawer");
  const tableBar = document.getElementById("table-bar");
  const pastryPopup = document.getElementById("pastry-popup");
  const sceneBanner = document.getElementById("scene-banner");
  const backBtn = document.getElementById("back-btn");
  const switchBtn = document.getElementById("switch-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const toastEl = document.getElementById("toast");

  let toastTimer = null;
  let drawRect = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
  let lastRenderedKey = "";
  let lastStoryIdx = -1;
  let lastStoryLang = "";
  let focalX = 0.52;
  let targetFocalX = 0.52;
  const clipReady = { intro: false, vitrine: false, bar: false, table: false };
  const clipPromises = {};

  /* ===================== CANVAS SIZING & MOBILE FOCAL-POINT COVER ===================== */
  function syncHotspotRect() {
    drawRect = computeCoverRect(16, 9, focalX);
    hotspotLayer.style.left = drawRect.x + "px";
    hotspotLayer.style.top = drawRect.y + "px";
    hotspotLayer.style.width = drawRect.w + "px";
    hotspotLayer.style.height = drawRect.h + "px";
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    syncHotspotRect();
    lastRenderedKey = "";
    renderCurrentFrame();
  }
  window.addEventListener("resize", resizeCanvas);

  function computeCoverRect(imgW, imgH, fx) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const imgRatio = imgW / imgH;
    const viewRatio = vw / vh;
    let w, h, x, y;
    if (viewRatio > imgRatio) {
      w = vw;
      h = vw / imgRatio;
      x = 0;
      y = (vh - h) / 2;
    } else {
      h = vh;
      w = vh * imgRatio;
      // Smart focal-point framing for portrait mobile screens!
      const maxPan = w - vw;
      x = -Math.max(0, Math.min(maxPan, w * fx - vw / 2));
      y = 0;
    }
    return { x, y, w, h };
  }

  function renderCurrentFrame(force) {
    const arr = frames[activeClip];
    if (!arr || !arr.length) return;
    const idx = Math.max(0, Math.min(arr.length - 1, Math.round(currentFrame)));
    const key = activeClip + ":" + idx + ":" + Math.round(drawRect.x);
    if (!force && key === lastRenderedKey) return;
    const bmp = arr[idx];
    if (!bmp) return;
    if (bmp instanceof HTMLImageElement && (!bmp.complete || !bmp.naturalWidth)) return;
    lastRenderedKey = key;
    ctx.drawImage(bmp, drawRect.x, drawRect.y, drawRect.w, drawRect.h);
  }

  /* ===================== GPU IMAGEBITMAP FRAME LOADER ===================== */
  function loadClipFrames(clipName, onTick) {
    return new Promise((resolve) => {
      const cfg = FRAME_CONFIG[clipName];
      const total = cfg.mode === "inline" ? cfg.data.length : cfg.count;
      const arr = new Array(total);
      let loaded = 0;
      const canBitmap = typeof window.createImageBitmap === "function";
      const finishOne = (i, drawable) => {
        arr[i] = drawable;
        loaded++;
        if (onTick) onTick(loaded, total);
        if (loaded === total) resolve(arr);
      };
      for (let i = 0; i < total; i++) {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (canBitmap) {
            createImageBitmap(img).then((bmp) => finishOne(i, bmp)).catch(() => finishOne(i, img));
          } else {
            finishOne(i, img);
          }
        };
        img.onerror = () => finishOne(i, null);
        if (cfg.mode === "inline") {
          img.src = cfg.data[i];
        } else {
          const num = String(i + 1).padStart(3, "0");
          img.src = `frames/${clipName}/frame_${num}.webp`;
        }
      }
      frames[clipName] = arr;
    });
  }

  function ensureClipLoaded(clipName) {
    if (clipReady[clipName]) return Promise.resolve();
    if (!clipPromises[clipName]) {
      clipPromises[clipName] = loadClipFrames(clipName).then(() => { clipReady[clipName] = true; });
    }
    return clipPromises[clipName];
  }

  async function initPreload() {
    // Fast-start: load ONLY intro first so mobile users enter in ~1 second!
    clipPromises.intro = loadClipFrames("intro", (done, total) => {
      const pct = Math.round((done / total) * 100);
      preloadFill.style.width = pct + "%";
      preloadPct.textContent = pct + "%";
      if (done === 1) { resizeCanvas(); renderCurrentFrame(true); }
    }).then(() => { clipReady.intro = true; });
    await clipPromises.intro;

    preloadFill.style.width = "100%";
    preloadPct.textContent = "100%";
    setTimeout(() => preloader.classList.add("hidden"), 180);
    resizeCanvas();
    updateUI();

    // Stream vitrine, bar & table silently in background so zero load delay!
    setTimeout(async () => {
      await ensureClipLoaded("vitrine");
      await ensureClipLoaded("bar");
      await ensureClipLoaded("table");
    }, 250);
  }

  /* ===================== TIME-BASED 60FPS ANIMATION LOOP ===================== */
  function easeInOutSine(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  }

  let activeSegment = null;
  let lastTickTime = performance.now();

  function startSegmentQueue(segments, finishState) {
    animQueue = segments.slice();
    isTransitioning = true;
    document.body.classList.add("is-moving");
    state = "transition";
    selectedPastryId = null;
    pastryPopup.classList.remove("visible");
    updateUI();

    const first = animQueue.shift();
    activeClip = first.clip;
    currentFrame = first.from;
    first._startTime = performance.now();
    first._duration = first.duration || 1400;
    activeSegment = first;
    onQueueDone = () => {
      isTransitioning = false;
      document.body.classList.remove("is-moving");
      state = finishState;
      if (finishState === "hub") {
        activeClip = "intro";
        currentFrame = frames.intro.length - 1;
        introProgress = 1;
        targetIntroProgress = 1;
        renderCurrentFrame();
      }
      updateUI();
    };
  }

  function tick(now) {
    const dt = Math.min(50, now - lastTickTime);
    lastTickTime = now;

    // Smooth mobile focal-point pan
    const fDiff = targetFocalX - focalX;
    if (Math.abs(fDiff) > 0.001) {
      const fFac = 1 - Math.pow(0.84, dt / 16.67);
      focalX += fDiff * fFac;
      syncHotspotRect();
      renderCurrentFrame(true);
    }

    if (isTransitioning && activeSegment) {
      const elapsed = now - activeSegment._startTime;
      const p = Math.min(1, elapsed / activeSegment._duration);
      const eased = activeSegment.linear ? p : easeInOutSine(p);
      currentFrame = activeSegment.from + (activeSegment.to - activeSegment.from) * eased;
      renderCurrentFrame();

      if (p >= 1) {
        if (animQueue.length > 0) {
          activeSegment = animQueue.shift();
          activeClip = activeSegment.clip;
          currentFrame = activeSegment.from;
          activeSegment._startTime = now;
          activeSegment._duration = activeSegment.duration || 1300;
        } else {
          activeSegment = null;
          if (onQueueDone) onQueueDone();
        }
      }
    } else if (state === "intro" || state === "hub") {
      const diff = targetIntroProgress - introProgress;
      if (Math.abs(diff) > 0.0004) {
        document.body.classList.add("is-moving");
        const factor = 1 - Math.pow(0.86, dt / 16.67);
        introProgress += diff * factor;
        activeClip = "intro";
        currentFrame = introProgress * (frames.intro.length - 1);
        renderCurrentFrame();
        updateIntroCaption();
        if (introProgress > 0.94 && state === "intro") {
          state = "hub";
          updateUI();
        } else if (introProgress <= 0.90 && state === "hub") {
          state = "intro";
          updateUI();
        }
      } else {
        document.body.classList.remove("is-moving");
      }
    } else if (state === "table") {
      if (isTableAutoPlay) {
        targetTableProgress += (dt / 1000) * 0.11;
        if (targetTableProgress >= 1) {
          targetTableProgress = 1;
          isTableAutoPlay = false;
          renderTableUI();
        }
      }
      const diff = targetTableProgress - tableProgress;
      if (Math.abs(diff) > 0.0004) {
        document.body.classList.add("is-moving");
        const factor = 1 - Math.pow(0.84, dt / 16.67);
        tableProgress += diff * factor;
        activeClip = "table";
        currentFrame = tableProgress * (frames.table.length - 1);
        renderCurrentFrame();
        syncActiveDishFromProgress();
      } else {
        document.body.classList.remove("is-moving");
      }
    }
    requestAnimationFrame(tick);
  }

  /* ===================== SCROLL & TOUCH INPUT FOR INTRO ===================== */
  let touchStartY = null;

  window.addEventListener("wheel", (e) => {
    if (cartDrawer.classList.contains("open") || isTransitioning) return;
    if (e.target.closest(".bar-list, .cart-items, .pastry-strip")) return;
    if (state === "intro" || state === "hub") {
      e.preventDefault();
      targetIntroProgress = Math.max(0, Math.min(1, targetIntroProgress + e.deltaY * 0.00075));
    } else if (state === "table") {
      e.preventDefault();
      isTableAutoPlay = false;
      targetTableProgress = Math.max(0, Math.min(1, targetTableProgress + e.deltaY * 0.00065));
    }
  }, { passive: false });

  window.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (touchStartY === null || cartDrawer.classList.contains("open") || isTransitioning) return;
    if (e.target.closest(".bar-list, .cart-items, .pastry-strip")) return;
    if (state === "intro" || state === "hub") {
      const dy = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      targetIntroProgress = Math.max(0, Math.min(1, targetIntroProgress + dy * 0.0022));
    } else if (state === "table") {
      isTableAutoPlay = false;
      const dy = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      targetTableProgress = Math.max(0, Math.min(1, targetTableProgress + dy * 0.0018));
    }
  }, { passive: true });

  /* ===================== NAVIGATION TRANSITIONS ===================== */
  function goToHubFromIntro() {
    if (isTransitioning) return;
    const remain = Math.max(0.25, 1 - introProgress);
    startSegmentQueue([
      { clip: "intro", from: currentFrame, to: frames.intro.length - 1, duration: Math.round(1650 * remain) }
    ], "hub");
  }

  async function goToVitrine() {
    if (isTransitioning) return;
    await ensureClipLoaded("vitrine");
    targetFocalX = 0.50;
    if (state === "hub" || state === "intro" || state === "table") {
      isTableAutoPlay = false;
      startSegmentQueue([
        { clip: "vitrine", from: 0, to: frames.vitrine.length - 1, duration: 1500 }
      ], "vitrine");
    } else if (state === "bar") {
      startSegmentQueue([
        { clip: "bar", from: frames.bar.length - 1, to: 0, duration: 1350 }
      ], "vitrine");
    }
  }

  async function goToBar() {
    if (isTransitioning) return;
    await Promise.all([ensureClipLoaded("vitrine"), ensureClipLoaded("bar")]);
    targetFocalX = 0.66;
    if (state === "vitrine") {
      startSegmentQueue([
        { clip: "bar", from: 0, to: frames.bar.length - 1, duration: 1400 }
      ], "bar");
    } else if (state === "hub" || state === "intro" || state === "table") {
      isTableAutoPlay = false;
      startSegmentQueue([
        { clip: "vitrine", from: 0, to: frames.vitrine.length - 1, duration: 1050, linear: true },
        { clip: "bar", from: 0, to: frames.bar.length - 1, duration: 1150 }
      ], "bar");
    }
  }

  async function goToTable() {
    if (isTransitioning) return;
    await ensureClipLoaded("table");
    targetFocalX = 0.50;
    isTableAutoPlay = false;
    activeClip = "table";
    tableProgress = 0;
    targetTableProgress = TABLE_DISHES[0].pct;
    activeDishId = TABLE_DISHES[0].id;
    currentFrame = 0;
    lastRenderedKey = "";
    state = "table";
    renderCurrentFrame();
    updateUI();
  }

  function goBackToHub() {
    if (isTransitioning) return;
    targetFocalX = 0.52;
    isTableAutoPlay = false;
    if (state === "vitrine") {
      startSegmentQueue([
        { clip: "vitrine", from: frames.vitrine.length - 1, to: 0, duration: 1300 }
      ], "hub");
    } else if (state === "bar") {
      startSegmentQueue([
        { clip: "bar", from: frames.bar.length - 1, to: 0, duration: 950, linear: true },
        { clip: "vitrine", from: frames.vitrine.length - 1, to: 0, duration: 1000 }
      ], "hub");
    } else if (state === "table") {
      activeClip = "intro";
      currentFrame = frames.intro.length - 1;
      introProgress = 1;
      targetIntroProgress = 1;
      lastRenderedKey = "";
      state = "hub";
      renderCurrentFrame();
      updateUI();
    }
  }

  function goToExterior() {
    if (isTransitioning) return;
    if (state === "intro") return;
    const seq = [];
    if (state === "bar") {
      seq.push({ clip: "bar", from: frames.bar.length - 1, to: 0, duration: 800, linear: true });
      seq.push({ clip: "vitrine", from: frames.vitrine.length - 1, to: 0, duration: 800, linear: true });
    } else if (state === "vitrine") {
      seq.push({ clip: "vitrine", from: frames.vitrine.length - 1, to: 0, duration: 950, linear: true });
    }
    seq.push({ clip: "intro", from: frames.intro.length - 1, to: 0, duration: 1200 });
    startSegmentQueue(seq, "intro");
    targetIntroProgress = 0;
    introProgress = 0;
  }

  /* ===================== UI RENDERING ===================== */
  function updateIntroCaption() {
    document.getElementById("intro-progress").style.transform = `scaleX(${introProgress.toFixed(4)})`;
    const idx = introProgress < 0.34 ? 0 : (introProgress < 0.68 ? 1 : 2);
    if (idx === lastStoryIdx && lang === lastStoryLang) return;
    lastStoryIdx = idx;
    lastStoryLang = lang;
    const story = I18N[lang].introStories[idx];
    document.getElementById("hero-kicker").textContent = story.k;
    document.getElementById("hero-title").textContent = story.t;
    document.getElementById("hero-sub").textContent = story.s;
  }

  function renderHotspots() {
    hotspotLayer.innerHTML = "";
    if (state === "vitrine") {
      PASTRIES.forEach((p) => {
        const btn = document.createElement("button");
        btn.className = "hotspot" + (selectedPastryId === p.id ? " active" : "");
        btn.style.left = p.x + "%";
        btn.style.top = p.y + "%";
        btn.setAttribute("aria-label", p.name[lang]);
        btn.innerHTML = `<span class="hotspot-label">${p.name[lang]} · $${p.price.toFixed(2)}</span>`;
        btn.addEventListener("click", () => selectPastry(p.id));
        hotspotLayer.appendChild(btn);
      });
    } else if (state === "bar") {
      BAR_STATIONS.forEach((st) => {
        const btn = document.createElement("button");
        btn.className = "hotspot" + (activeBarTab === st.id ? " active" : "");
        btn.style.left = st.x + "%";
        btn.style.top = st.y + "%";
        btn.setAttribute("aria-label", st.label[lang]);
        btn.innerHTML = `<span class="hotspot-label">${st.label[lang]}</span>`;
        btn.addEventListener("click", () => {
          activeBarTab = st.id;
          renderBarMenu();
          renderHotspots();
        });
        hotspotLayer.appendChild(btn);
      });
    }
  }

  function renderVitrineStrip() {
    const strip = document.getElementById("pastry-strip");
    strip.innerHTML = "";
    PASTRIES.forEach((p) => {
      const chip = document.createElement("button");
      chip.className = "pastry-chip" + (selectedPastryId === p.id ? " active" : "");
      chip.innerHTML = `
        <img src="${THUMBS[p.id]}" alt="${p.name[lang]}">
        <div class="pastry-chip-meta">
          <div class="pastry-chip-name">${p.name[lang]}</div>
          <div class="pastry-chip-price">$${p.price.toFixed(2)}</div>
        </div>
      `;
      chip.addEventListener("click", () => selectPastry(p.id));
      strip.appendChild(chip);
    });
  }

  function selectPastry(id) {
    selectedPastryId = id;
    const p = PASTRIES.find((x) => x.id === id);
    if (!p) return;
    targetFocalX = p.x / 100;
    const t = I18N[lang];
    document.getElementById("popup-img").src = THUMBS[p.id];
    document.getElementById("popup-title").textContent = p.name[lang];
    document.getElementById("popup-price").textContent = "$" + p.price.toFixed(2);
    document.getElementById("popup-desc").textContent = p.desc[lang];
    document.getElementById("popup-add-btn").textContent = t.addToBag;
    pastryPopup.classList.add("visible");
    renderHotspots();
    renderVitrineStrip();
  }

  function renderBarMenu() {
    const t = I18N[lang];
    document.getElementById("bar-drawer-title").textContent = t.barMenuTitle;
    const tabsEl = document.getElementById("bar-tabs");
    tabsEl.innerHTML = "";
    ["espresso", "signature", "brew"].forEach((cat) => {
      const b = document.createElement("button");
      b.className = "bar-tab" + (activeBarTab === cat ? " active" : "");
      b.textContent = t.tabs[cat];
      b.addEventListener("click", () => {
        activeBarTab = cat;
        renderBarMenu();
        renderHotspots();
      });
      tabsEl.appendChild(b);
    });

    const listEl = document.getElementById("bar-list");
    listEl.innerHTML = "";
    DRINKS.filter((d) => d.cat === activeBarTab).forEach((d) => {
      const row = document.createElement("div");
      row.className = "drink-row";
      row.innerHTML = `
        <div>
          <div class="drink-name">${d.name[lang]}</div>
          <div class="drink-note">${d.note[lang]}</div>
        </div>
        <div class="drink-right">
          <span class="drink-price">$${d.price.toFixed(2)}</span>
          <button class="add-mini" aria-label="${t.addToBag}">+</button>
        </div>
      `;
      row.querySelector(".add-mini").addEventListener("click", () => addToCart(d.id, d.price, "drink"));
      listEl.appendChild(row);
    });
  }

  /* ===================== CART LOGIC ===================== */
  function getItemName(id, kind) {
    const list = kind === "pastry" ? PASTRIES : (kind === "dish" ? TABLE_DISHES : DRINKS);
    const found = list.find((x) => x.id === id);
    return found ? found.name[lang] : id;
  }

  function syncActiveDishFromProgress() {
    let best = TABLE_DISHES[0];
    let minD = 999;
    TABLE_DISHES.forEach((d) => {
      const dist = Math.abs(tableProgress - d.pct);
      if (dist < minD) { minD = dist; best = d; }
    });
    if (best.id !== activeDishId) {
      activeDishId = best.id;
      renderTableUI();
    }
  }

  function renderTableUI() {
    const t = I18N[lang];
    const dish = TABLE_DISHES.find((d) => d.id === activeDishId) || TABLE_DISHES[0];
    document.getElementById("table-dish-title").textContent = dish.name[lang];
    document.getElementById("table-dish-desc").textContent = dish.desc[lang];
    document.getElementById("table-dish-price").textContent = "$" + dish.price.toFixed(2);
    document.getElementById("table-add-btn").textContent = t.addToBag;
    document.getElementById("table-play-btn").textContent = isTableAutoPlay ? t.stopPlay : t.playAll;

    const strip = document.getElementById("table-strip");
    strip.innerHTML = "";
    TABLE_DISHES.forEach((d) => {
      const chip = document.createElement("button");
      chip.className = "pastry-chip" + (d.id === activeDishId ? " active" : "");
      chip.innerHTML = `
        <img src="${THUMBS[d.id]}" alt="${d.name[lang]}">
        <div class="pastry-chip-meta">
          <div class="pastry-chip-name">${d.name[lang]}</div>
          <div class="pastry-chip-price">$${d.price.toFixed(2)}</div>
        </div>
      `;
      chip.addEventListener("click", () => {
        isTableAutoPlay = false;
        activeDishId = d.id;
        targetTableProgress = d.pct;
        renderTableUI();
      });
      strip.appendChild(chip);
    });
  }

  function addToCart(id, price, kind) {
    if (!cart[id]) cart[id] = { id, price, qty: 0, kind };
    cart[id].qty++;
    renderCart();
    showToast(`${getItemName(id, kind)} — ${I18N[lang].addedToast}`);
  }

  function updateQty(id, delta) {
    if (!cart[id]) return;
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    renderCart();
  }

  function renderCart() {
    const t = I18N[lang];
    const items = Object.values(cart);
    const totalQty = items.reduce((s, x) => s + x.qty, 0);
    const totalPrice = items.reduce((s, x) => s + x.qty * x.price, 0);

    document.getElementById("cart-badge").textContent = String(totalQty);
    document.getElementById("cart-title").textContent = t.cartTitle;
    document.getElementById("cart-subtotal-label").textContent = t.subtotal;
    document.getElementById("cart-total-val").textContent = "$" + totalPrice.toFixed(2);
    const checkoutBtn = document.getElementById("checkout-btn");
    checkoutBtn.textContent = t.checkout;
    checkoutBtn.disabled = items.length === 0;

    const list = document.getElementById("cart-items");
    list.innerHTML = "";
    if (!items.length) {
      list.innerHTML = `<div class="cart-empty">${t.cartEmpty}</div>`;
      return;
    }
    items.forEach((it) => {
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `
        <div>
          <div class="cart-row-name">${getItemName(it.id, it.kind)}</div>
          <div class="cart-row-sub">$${(it.price * it.qty).toFixed(2)}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn minus">−</button>
          <span>${it.qty}</span>
          <button class="qty-btn plus">+</button>
        </div>
      `;
      row.querySelector(".minus").addEventListener("click", () => updateQty(it.id, -1));
      row.querySelector(".plus").addEventListener("click", () => updateQty(it.id, 1));
      list.appendChild(row);
    });
  }

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
  }

  /* ===================== MASTER UI SYNC ===================== */
  function updateUI() {
    const t = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    document.getElementById("brand-name").textContent = t.brand;
    document.getElementById("brand-tag").textContent = t.tagline;
    document.getElementById("preload-sub").textContent = t.loading;
    document.getElementById("cart-label").textContent = t.bag;
    document.getElementById("scroll-cue-text").textContent = t.scrollCue;
    document.getElementById("enter-btn").textContent = t.enterNow;
    document.getElementById("hub-heading").textContent = t.hubQuestion;
    document.getElementById("hub-vitrine-img").src = THUMBS["hub-vitrine"];
    document.getElementById("hub-bar-img").src = THUMBS["hub-bar"];
    document.getElementById("hub-vitrine-title").textContent = t.hubVitrineTitle;
    document.getElementById("hub-vitrine-desc").textContent = t.hubVitrineDesc;
    document.getElementById("hub-bar-title").textContent = t.hubBarTitle;
    document.getElementById("hub-bar-desc").textContent = t.hubBarDesc;
    document.getElementById("hub-table-img").src = THUMBS["hub-table"];
    document.getElementById("hub-table-title").textContent = t.hubTableTitle;
    document.getElementById("hub-table-desc").textContent = t.hubTableDesc;

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    // Visibility by state
    introUI.classList.toggle("hidden-el", state !== "intro");
    hubUI.classList.toggle("visible", state === "hub");
    vitrineBar.classList.toggle("visible", state === "vitrine");
    barDrawer.classList.toggle("visible", state === "bar");
    tableBar.classList.toggle("visible", state === "table");

    if (state === "vitrine") {
      backBtn.classList.remove("hidden-el");
      backBtn.textContent = (t.dir === "rtl" ? "→ " : "← ") + t.backToHub;
      switchBtn.classList.remove("hidden-el");
      switchBtn.textContent = t.toBar + (t.dir === "rtl" ? " ←" : " →");
      sceneBanner.textContent = t.vitrineBanner;
      sceneBanner.classList.add("visible");
      renderVitrineStrip();
    } else if (state === "bar") {
      backBtn.classList.remove("hidden-el");
      backBtn.textContent = (t.dir === "rtl" ? "→ " : "← ") + t.backToHub;
      switchBtn.classList.remove("hidden-el");
      switchBtn.textContent = (t.dir === "rtl" ? "→ " : "← ") + t.toVitrine;
      sceneBanner.textContent = t.barBanner;
      sceneBanner.classList.add("visible");
      renderBarMenu();
    } else if (state === "table") {
      backBtn.classList.remove("hidden-el");
      backBtn.textContent = (t.dir === "rtl" ? "→ " : "← ") + t.backToHub;
      switchBtn.classList.remove("hidden-el");
      switchBtn.textContent = t.toVitrine + (t.dir === "rtl" ? " ←" : " →");
      sceneBanner.textContent = t.tableBanner;
      sceneBanner.classList.add("visible");
      renderTableUI();
    } else {
      backBtn.classList.add("hidden-el");
      switchBtn.classList.add("hidden-el");
      sceneBanner.classList.remove("visible");
      pastryPopup.classList.remove("visible");
    }

    updateIntroCaption();
    renderHotspots();
    renderCart();
  }

  /* ===================== EVENT LISTENERS ===================== */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      updateUI();
      if (selectedPastryId && state === "vitrine") selectPastry(selectedPastryId);
    });
  });

  document.getElementById("brand-pill").addEventListener("click", goToExterior);
  document.getElementById("scroll-pill").addEventListener("click", goToHubFromIntro);
  document.getElementById("enter-btn").addEventListener("click", goToHubFromIntro);
  document.getElementById("card-vitrine").addEventListener("click", goToVitrine);
  document.getElementById("card-bar").addEventListener("click", goToBar);
  document.getElementById("card-table").addEventListener("click", goToTable);
  backBtn.addEventListener("click", goBackToHub);
  switchBtn.addEventListener("click", () => {
    if (state === "vitrine") goToBar();
    else if (state === "bar" || state === "table") goToVitrine();
  });
  document.getElementById("table-add-btn").addEventListener("click", () => {
    const dish = TABLE_DISHES.find((d) => d.id === activeDishId);
    if (dish) addToCart(dish.id, dish.price, "dish");
  });
  document.getElementById("table-play-btn").addEventListener("click", () => {
    if (!isTableAutoPlay) {
      if (tableProgress >= 0.96) { tableProgress = 0; targetTableProgress = 0; }
      isTableAutoPlay = true;
    } else {
      isTableAutoPlay = false;
    }
    renderTableUI();
  });

  document.getElementById("popup-close-btn").addEventListener("click", () => {
    selectedPastryId = null;
    pastryPopup.classList.remove("visible");
    renderHotspots();
    renderVitrineStrip();
  });
  document.getElementById("popup-add-btn").addEventListener("click", () => {
    if (!selectedPastryId) return;
    const p = PASTRIES.find((x) => x.id === selectedPastryId);
    if (p) addToCart(p.id, p.price, "pastry");
  });

  function toggleCart(open) {
    cartDrawer.classList.toggle("open", open);
    cartBackdrop.classList.toggle("open", open);
  }
  document.getElementById("cart-open-btn").addEventListener("click", () => toggleCart(true));
  document.getElementById("bar-drawer-head").addEventListener("click", (e) => {
    if (window.innerWidth <= 640 && !e.target.closest(".bar-tab")) {
      barDrawer.classList.toggle("collapsed");
    }
  });
  document.getElementById("cart-close-btn").addEventListener("click", () => toggleCart(false));
  cartBackdrop.addEventListener("click", () => toggleCart(false));
  document.getElementById("checkout-btn").addEventListener("click", () => {
    cart = {};
    renderCart();
    toggleCart(false);
    showToast(I18N[lang].orderDone);
  });

  /* ===================== START ===================== */
  resizeCanvas();
  requestAnimationFrame(tick);
  initPreload();
})();
