const DEFAULT_QR_SVG = `
  <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" aria-label="KHQR Payment Code">
    <rect width="180" height="180" rx="14" fill="#FFFFFF"/>
    <path d="M14 26 A12 12 0 0 1 26 14 H154 A12 12 0 0 1 166 26 V36 H14 Z" fill="#E1232E"/>
    <text x="90" y="29" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">KHQR</text>
    <g fill="#1A120E" transform="translate(24, 46)">
      <rect x="0" y="0" width="36" height="36" rx="4"/>
      <rect x="5" y="5" width="26" height="26" rx="2" fill="#FFFFFF"/>
      <rect x="10" y="10" width="16" height="16" rx="1"/>
      <rect x="96" y="0" width="36" height="36" rx="4"/>
      <rect x="101" y="5" width="26" height="26" rx="2" fill="#FFFFFF"/>
      <rect x="106" y="10" width="16" height="16" rx="1"/>
      <rect x="0" y="84" width="36" height="36" rx="4"/>
      <rect x="5" y="89" width="26" height="26" rx="2" fill="#FFFFFF"/>
      <rect x="10" y="94" width="16" height="16" rx="1"/>
      <rect x="44" y="4" width="8" height="8"/>
      <rect x="60" y="4" width="8" height="8"/>
      <rect x="76" y="4" width="8" height="8"/>
      <rect x="44" y="16" width="16" height="8"/>
      <rect x="68" y="16" width="8" height="16"/>
      <rect x="84" y="20" width="8" height="12"/>
      <rect x="4" y="44" width="12" height="8"/>
      <rect x="24" y="44" width="8" height="16"/>
      <rect x="40" y="44" width="12" height="12"/>
      <rect x="80" y="44" width="12" height="8"/>
      <rect x="100" y="44" width="8" height="16"/>
      <rect x="116" y="44" width="16" height="8"/>
      <rect x="4" y="64" width="16" height="8"/>
      <rect x="28" y="68" width="12" height="8"/>
      <rect x="84" y="64" width="16" height="8"/>
      <rect x="112" y="68" width="12" height="12"/>
      <rect x="44" y="84" width="8" height="16"/>
      <rect x="60" y="88" width="16" height="8"/>
      <rect x="84" y="84" width="12" height="12"/>
      <rect x="104" y="88" width="8" height="16"/>
      <rect x="120" y="88" width="12" height="8"/>
      <rect x="44" y="108" width="16" height="12"/>
      <rect x="68" y="104" width="8" height="16"/>
      <rect x="84" y="112" width="16" height="8"/>
      <rect x="108" y="112" width="24" height="8"/>
      <circle cx="66" cy="60" r="14" fill="#E1232E"/>
      <text x="66" y="65" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="800">៛</text>
    </g>
  </svg>
`;

const DEFAULT_RECIPES = [
  {
    id: "espresso-pair",
    section: "coffee",
    category: "espresso",
    price: 1.5,
    nameKm: "អេស្ព្រេសសូ",
    nameEn: "Espresso",
    descKm: "ទឹកកាហ្វេសុទ្ធចម្រាញ់ពីម៉ាស៊ីនសម្ពាធខ្ពស់ — ជ្រើសរើសក្តៅ ឬត្រជាក់ ដើម្បីមើលរូបមន្ត។",
    descEn: "Pure pressurized espresso shot — switch between Hot and Ice to view recipes.",
    variants: {
      hot: {
        descKm: "ចម្រាញ់ក្តៅៗដាក់ពែងក្តៅឧណ្ហៗ រសជាតិដិតខាប់ និងរក្សាពពុះ Crema ពណ៌មាសពេញលេញ។",
        descEn: "Pulled hot into a preheated cup with a rich body and full golden crema.",
        ingredients: [
          { nameKm: "ម្សៅគ្រាប់កាហ្វេ (Double Shot)", nameEn: "Ground Coffee (Double Shot)", amount: 18, unit: "g" },
          { nameKm: "ទឹកក្តៅចម្រាញ់ (~93°C)", nameEn: "Extracted Hot Water (~93°C)", amount: 36, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 10, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "កំដៅពែងដោយទឹកក្តៅជាមុន រួចចាក់ទឹកចោល។",
          "កិនគ្រាប់កាហ្វេឱ្យម៉ត់សមល្មម Tamp ឱ្យស្មើ ហើយចម្រាញ់យក 36 ml ក្នុង 25–30 វិនាទី។",
          "បម្រើក្តៅៗភ្លាមៗ ដើម្បីកុំឱ្យ Crema រលាយបាត់។"
        ],
        stepsEn: [
          "Preheat the cup with hot water and discard before pulling.",
          "Grind fine-medium, tamp evenly, and extract 36 ml in 25–30 seconds.",
          "Serve immediately while hot so the crema stays intact."
        ],
        tipKm: "Espresso ក្តៅ ផ្តល់ក្លិនក្រអូបខ្លាំងបំផុតនៅ 30 វិនាទីដំបូងបន្ទាប់ពីចម្រាញ់រួច។",
        tipEn: "Hot espresso expresses its strongest aromatics within the first 30 seconds after extraction."
      },
      ice: {
        descKm: "ចម្រាញ់ Double Espresso ស្រោចលើទឹកកកត្រជាក់ និងទឹកត្រជាក់បន្តិច ដើម្បីឱ្យត្រជាក់ភ្លាមៗដោយមិនបាត់រសជាតិ។",
        descEn: "Double espresso pulled over cold water and ice to chill rapidly while keeping bold depth.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកត្រជាក់", nameEn: "Cold Water", amount: 50, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកកក 150g និងទឹកត្រជាក់ 50ml ចូលកែវ។",
          "ចម្រាញ់ Double Espresso 36 ml ហើយចាក់ស្រោចពីលើទឹកកកភ្លាម។",
          "កូរស្រាលៗឱ្យត្រជាក់ស្មើគ្នា រួចបម្រើ។"
        ],
        stepsEn: [
          "Add 150g ice and 50ml cold water into the glass.",
          "Extract a 36 ml double espresso and pour right over the ice.",
          "Stir lightly to chill evenly and serve."
        ],
        tipKm: "ទឹកកកត្រជាក់ធ្វើឱ្យក្លិនកាហ្វេក្តៅធ្លាក់ចុះបន្តិច គួរប្រើគ្រាប់កាហ្វេរសជាតិដិតល្អ។",
        tipEn: "Cold temperatures mute aromatics slightly, so a bold roast profile works best iced."
      }
    }
  },
  {
    id: "americano-pair",
    section: "coffee",
    category: "espresso",
    price: 1.75,
    nameKm: "អាមេរិកាណូ",
    nameEn: "Americano",
    descKm: "Double Espresso ផ្សំជាមួយទឹក — ក្តៅប្រើទឹកក្តៅ ត្រជាក់ប្រើទឹកត្រជាក់ និងទឹកកក។",
    descEn: "Double espresso with water — hot uses hot water, iced uses cold water and ice.",
    variants: {
      hot: {
        descKm: "Double Espresso លាយទឹកក្តៅ (~85–90°C) ផ្តល់ភាពក្តៅស្រស់ស្រាយ និងមាន Crema នៅពីលើ។",
        descEn: "Double espresso over hot water (~85–90°C) for a warm, clean cup with crema on top.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកក្តៅ (~85–90°C)", nameEn: "Hot Water (~85–90°C)", amount: 180, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចាក់ទឹកក្តៅ (~85–90°C) 180 ml ចូលក្នុងពែង។",
          "ចម្រាញ់ Double Espresso 36 ml ស្រោចពីលើទឹកក្តៅ។",
          "បម្រើក្តៅៗ ដោយអាចកែសម្រួលកម្រិតផ្អែមតាមចិត្ត។"
        ],
        stepsEn: [
          "Pour 180 ml of hot water (~85–90°C) into the cup.",
          "Extract 36 ml double espresso on top of the hot water.",
          "Serve hot with sweetness adjusted to preference."
        ],
        tipKm: "ចាក់ Espresso ពីលើទឹកក្តៅ នឹងរក្សា Crema ពណ៌មាសបានស្អាតជាង។",
        tipEn: "Pouring espresso over hot water preserves the crema better than pouring water over espresso."
      },
      ice: {
        descKm: "Double Espresso ស្រោចពីលើទឹកត្រជាក់ និងទឹកកក ផ្តល់ភាពត្រជាក់ស្រឡះ ដិតកាហ្វេ។",
        descEn: "Double espresso poured over cold water and ice for a crisp, refreshing iced coffee.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកត្រជាក់", nameEn: "Cold Water", amount: 150, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកកក 160g និងទឹកត្រជាក់ 150ml ចូលកែវ។",
          "ចម្រាញ់ Double Espresso រួចចាក់ស្រោចពីលើទឹកកក។",
          "កូរស្រាលៗមុនពេលផឹក។"
        ],
        stepsEn: [
          "Fill glass with 160g ice and 150ml cold water.",
          "Extract a double espresso and pour over the ice.",
          "Stir gently before drinking."
        ],
        tipKm: "ដាក់ទឹកកកពេញកែវល្មម នឹងជួយកុំឱ្យកាហ្វេរលាយទឹកកកសាបលឿន។",
        tipEn: "Using enough ice chills quickly and slows dilution."
      }
    }
  },
  {
    id: "latte-pair",
    section: "coffee",
    category: "espresso",
    price: 2.0,
    nameKm: "ឡាតេ",
    nameEn: "Latte",
    descKm: "Double Espresso ជាមួយទឹកដោះគោស្រស់ — ក្តៅប្រើទឹកដោះគោចំហុយ ត្រជាក់ប្រើទឹកដោះគោត្រជាក់។",
    descEn: "Double espresso with fresh milk — hot uses steamed milk, iced uses chilled milk over ice.",
    variants: {
      hot: {
        descKm: "Double Espresso លាយទឹកដោះគោស្រស់ចំហុយក្តៅ (~62°C) មានពពុះ Microfoam ស្តើងរលោង។",
        descEn: "Double espresso with steamed fresh milk (~62°C) and a thin, glossy microfoam layer.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ (ចំហុយ ~62°C)", nameEn: "Fresh Milk (Steamed ~62°C)", amount: 200, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចម្រាញ់ Double Espresso ដាក់ក្នុងពែងធំ។",
          "ចំហុយទឹកដោះគោស្រស់ឱ្យក្តៅដល់ ~60–65°C និងមានពពុះរលោង។",
          "ចាក់ទឹកដោះគោចូលក្នុង Espresso យឺតៗ ដើម្បីបានផ្ទៃរលោងស្អាត។"
        ],
        stepsEn: [
          "Pull a double espresso into a large cup.",
          "Steam fresh milk to ~60–65°C with glossy microfoam.",
          "Pour steamed milk steadily into the espresso."
        ],
        tipKm: "កុំចំហុយទឹកដោះគោលើស 70°C ដើម្បីរក្សារសជាតិផ្អែមធម្មជាតិ។",
        tipEn: "Keep steaming below 70°C to preserve milk's natural sweetness."
      },
      ice: {
        descKm: "Double Espresso ស្រោចលើទឹកដោះគោស្រស់ត្រជាក់ និងទឹកកក ផ្តល់ភាពត្រជាក់ស្រទន់។",
        descEn: "Double espresso over chilled fresh milk and ice for a smooth, cold latte.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 160, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "លាយទឹកដោះគោស្រស់ត្រជាក់ និងកម្រិតផ្អែមចូលគ្នា។",
          "ដាក់ទឹកកកចូលកែវ រួចចាក់ទឹកដោះគោចូល។",
          "ចាក់ Double Espresso ស្រោចពីលើបង្កើតជាស្រទាប់។"
        ],
        stepsEn: [
          "Stir chilled milk with sweetness.",
          "Add ice to the glass and pour in the milk.",
          "Pour double espresso on top for clean layering."
        ],
        tipKm: "ប្រើទឹកដោះគោស្រស់ត្រជាក់ល្អ នឹងជួយរក្សាកម្រិតត្រជាក់បានយូរ។",
        tipEn: "Well-chilled milk keeps the drink cold longer without excess ice melt."
      }
    }
  },
  {
    id: "cappuccino-pair",
    section: "coffee",
    category: "espresso",
    price: 2.0,
    nameKm: "កាពូឈីណូ",
    nameEn: "Cappuccino",
    descKm: "កាហ្វេទឹកដោះគោមានស្រទាប់ពពុះក្រាស់ — ក្តៅចំហុយពពុះក្តៅ ត្រជាក់វាយពពុះត្រជាក់។",
    descEn: "Foam-topped coffee — hot uses steamed foam, iced uses chilled cold foam on top.",
    variants: {
      hot: {
        descKm: "Double Espresso លាយទឹកដោះគោចំហុយ និងមានពពុះក្តៅក្រាស់ទន់នៅផ្នែកខាងលើ។",
        descEn: "Double espresso with steamed milk and a thick, plush hot foam cap.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ + ពពុះក្តៅក្រាស់ (~62°C)", nameEn: "Fresh Milk + Thick Hot Foam (~62°C)", amount: 170, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចម្រាញ់ Double Espresso ដាក់ពែង។",
          "ចំហុយទឹកដោះគោបញ្ចូលខ្យល់ច្រើនជាង Latte បន្តិច ដើម្បីបានពពុះក្រាស់។",
          "ចាក់ចូលពែង រួចអាចរោយម្សៅកាកាវបន្តិចពីលើ។"
        ],
        stepsEn: [
          "Pull a double espresso into the cup.",
          "Aerate slightly more than a latte for a thicker foam cap.",
          "Pour into the cup and dust lightly with cocoa if desired."
        ],
        tipKm: "ពពុះ Cappuccino ល្អត្រូវមានសាច់ម៉ត់រលោង គ្មានពពុះខ្យល់ធំៗ។",
        tipEn: "Tap and swirl the pitcher before pouring for smooth foam."
      },
      ice: {
        descKm: "Double Espresso លាយទឹកដោះគោស្រស់ត្រជាក់ និងមានពពុះទឹកដោះគោត្រជាក់ក្រាស់ពីលើ។",
        descEn: "Iced espresso and chilled milk topped with thick, creamy cold milk foam.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 130, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ពពុះទឹកដោះគោត្រជាក់", nameEn: "Chilled Milk Foam", amount: 40, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកកក ទឹកដោះគោស្រស់ និង Double Espresso ចូលកែវ។",
          "វាយពពុះទឹកដោះគោត្រជាក់ដោយម៉ាស៊ីនវាយពពុះតូចឱ្យឡើងខាប់រលោង។",
          "ចាក់ពពុះត្រជាក់ស្រោចពីលើផ្នែកខាងលើបំផុត។"
        ],
        stepsEn: [
          "Add ice, chilled milk, and double espresso into the glass.",
          "Froth cold milk with a handheld frother until thick and smooth.",
          "Spoon or pour the cold foam over the top."
        ],
        tipKm: "វាយទឹកដោះគោត្រជាក់ជ្រៅនឹងធ្វើឱ្យពពុះត្រជាក់ឡើងក្រាស់បានល្អ។",
        tipEn: "Cold milk froths into a denser, more stable cold foam."
      }
    }
  },
  {
    id: "flat-white-pair",
    section: "coffee",
    category: "espresso",
    price: 2.0,
    nameKm: "ហ្វ្លាត វ៉ាយ",
    nameEn: "Flat White",
    descKm: "រសជាតិកាហ្វេដិតជាង Latte — ក្តៅប្រើពពុះក្តៅស្តើង ត្រជាក់ប្រើទឹកដោះគោត្រជាក់តិចជាង Latte។",
    descEn: "More coffee-forward than a latte — hot uses thin microfoam, iced uses less chilled milk.",
    variants: {
      hot: {
        descKm: "Double Espresso លាយទឹកដោះគោចំហុយពពុះស្តើងបំផុត (~62°C) ធ្វើឱ្យក្លិនកាហ្វេដិតច្បាស់។",
        descEn: "Double espresso with very thin microfoam (~62°C) for a stronger espresso flavor.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ (ពពុះស្តើង ~62°C)", nameEn: "Fresh Milk (Thin Microfoam ~62°C)", amount: 150, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 10, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចម្រាញ់ Double Espresso ដាក់ពែងទំហំមធ្យម។",
          "ចំហុយទឹកដោះគោ 150 ml ឱ្យមានពពុះស្តើងរលោង។",
          "ចាក់ចូលពែងឱ្យស៊ីសង្វាក់គ្នា រួចបម្រើភ្លាម។"
        ],
        stepsEn: [
          "Pull a double espresso into a medium cup.",
          "Steam 150 ml milk with a thin, glossy microfoam.",
          "Pour evenly and serve right away."
        ],
        tipKm: "ប្រើទឹកដោះគោតិចជាង Latte ដើម្បីរក្សារសជាតិកាហ្វេឱ្យនៅលេចធ្លោ។",
        tipEn: "Using less milk than a latte keeps the espresso character prominent."
      },
      ice: {
        descKm: "Double Espresso លាយទឹកដោះគោស្រស់ត្រជាក់បរិមាណសមល្មម និងទឹកកក ផ្តល់រសជាតិកាហ្វេដិតជាង Latte។",
        descEn: "Double espresso with a balanced splash of chilled milk over ice for a stronger coffee taste.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 115, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 10, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកកក 150g និងទឹកដោះគោត្រជាក់ 115ml ចូលកែវ។",
          "ចម្រាញ់ Double Espresso ចាក់ស្រោចពីលើ។",
          "កូរស្រាលៗ រួចបម្រើត្រជាក់ៗ។"
        ],
        stepsEn: [
          "Add 150g ice and 115ml chilled milk to the glass.",
          "Pull a double espresso and pour over top.",
          "Stir lightly and serve chilled."
        ],
        tipKm: "កាត់បន្ថយទឹកដោះគោពី 160ml មក 115ml នឹងធ្វើឱ្យរសជាតិកាហ្វេមុតជាងមុនច្បាស់។",
        tipEn: "Reducing milk from 160ml to 115ml gives a noticeably bolder iced coffee note."
      }
    }
  },
  {
    id: "mocha-pair",
    section: "coffee",
    category: "espresso",
    price: 2.25,
    nameKm: "ម៉ូកា",
    nameEn: "Mocha",
    descKm: "កាហ្វេផ្សំជាមួយសូកូឡា — ក្តៅជាមួយទឹកដោះគោចំហុយ ត្រជាក់ជាមួយទឹកដោះគោត្រជាក់ និងទឹកកក។",
    descEn: "Chocolate and coffee — hot with steamed milk, iced with chilled milk over ice.",
    variants: {
      hot: {
        descKm: "Double Espresso រំលាយជាមួយសូកូឡា និងទឹកដោះគោចំហុយក្តៅ ផ្អែមឈ្ងុយកាកាវ។",
        descEn: "Double espresso melted with chocolate and steamed milk for a warm cocoa-coffee cup.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "សូកូឡា", nameEn: "Chocolate", amount: 25, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោស្រស់ (ចំហុយ ~62°C)", nameEn: "Fresh Milk (Steamed ~62°C)", amount: 180, unit: "ml" }
        ],
        stepsKm: [
          "ដាក់សូកូឡាចូលពែង រួចចម្រាញ់ Double Espresso ក្តៅពីលើ ហើយកូរឱ្យរលាយ។",
          "ចំហុយទឹកដោះគោស្រស់ឱ្យក្តៅ និងមានពពុះរលោង។",
          "ចាក់ទឹកដោះគោចូល រួចបម្រើក្តៅៗ។"
        ],
        stepsEn: [
          "Add chocolate to the cup, pull hot double espresso over it, and stir smooth.",
          "Steam fresh milk to ~62°C with velvety foam.",
          "Pour steamed milk in and serve hot."
        ],
        tipKm: "កូរសូកូឡាជាមួយ Espresso ក្តៅជាមុន នឹងរលាយស្មើល្អ។",
        tipEn: "Dissolving chocolate in the hot espresso shot first prevents lumps."
      },
      ice: {
        descKm: "Double Espresso លាយសូកូឡា ទឹកដោះគោស្រស់ត្រជាក់ និងទឹកកក ត្រជាក់ឈ្ងុយសូកូឡា។",
        descEn: "Double espresso with chocolate, chilled fresh milk, and ice.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "សូកូឡា", nameEn: "Chocolate", amount: 25, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 145, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "រំលាយសូកូឡាជាមួយ Espresso ក្តៅឱ្យចូលគ្នាល្អ។",
          "ដាក់ទឹកកកចូលកែវ បន្ទាប់មកចាក់ទឹកដោះគោស្រស់ត្រជាក់។",
          "ចាក់ល្បាយសូកូឡាកាហ្វេចូល រួចកូរឱ្យសព្វមុនលើកជូន។"
        ],
        stepsEn: [
          "Stir chocolate into the hot espresso shot until smooth.",
          "Fill glass with ice and pour in chilled milk.",
          "Pour in the chocolate-espresso mix and stir well before serving."
        ],
        tipKm: "រំលាយសូកូឡាពេល Espresso កំពុងក្តៅ នឹងជួយកុំឱ្យកកជាដុំនៅបាតកែវ។",
        tipEn: "Mixing chocolate while the espresso is hot avoids clumping on cold ice."
      }
    }
  },
  {
    id: "caramel-macchiato-pair",
    section: "coffee",
    category: "espresso",
    price: 2.25,
    nameKm: "ការ៉ាមែល ម៉ាគីអាតូ",
    nameEn: "Caramel Macchiato",
    descKm: "Vanilla + ទឹកដោះគោ + Espresso + Caramel — ក្តៅចំហុយទឹកដោះគោ ត្រជាក់ដាក់ទឹកកក។",
    descEn: "Vanilla, milk, espresso, and caramel drizzle — hot with steamed milk, iced over ice.",
    variants: {
      hot: {
        descKm: "ទឹកដោះគោចំហុយក្តៅលាយ Vanilla ស្រោច Espresso ពីលើ និងគូស Caramel ពីលើ។",
        descEn: "Hot vanilla-steamed milk topped with espresso and a caramel drizzle.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "Vanilla", nameEn: "Vanilla", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោស្រស់ (ចំហុយ ~62°C)", nameEn: "Fresh Milk (Steamed ~62°C)", amount: 185, unit: "ml" },
          { nameKm: "Caramel (ស្រោចពីលើ)", nameEn: "Caramel (Drizzle)", amount: 15, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចាក់ Vanilla ចូលពែង រួចចាក់ទឹកដោះគោចំហុយក្តៅចូល។",
          "ចាក់ Double Espresso ស្រោចពីលើពពុះទឹកដោះគោ។",
          "គូស Caramel ពីលើផ្នែកខាងលើបំផុត។"
        ],
        stepsEn: [
          "Pour vanilla into the cup and add steamed milk.",
          "Pour double espresso gently over the milk foam.",
          "Drizzle caramel across the top."
        ],
        tipKm: "ចាក់ Espresso យឺតៗតាមចំណុចកណ្តាល ដើម្បីរក្សាស្រទាប់ពណ៌ស្អាត។",
        tipEn: "Pour espresso slowly at the center for clean layering."
      },
      ice: {
        descKm: "ទឹកដោះគោស្រស់ត្រជាក់លាយ Vanilla ដាក់ទឹកកក ស្រោច Espresso ពីលើ និងបន្ថែម Caramel។",
        descEn: "Chilled vanilla milk over ice topped with espresso and a caramel drizzle.",
        ingredients: [
          { nameKm: "Double Espresso Shot", nameEn: "Double Espresso Shot", amount: 36, unit: "ml" },
          { nameKm: "Vanilla", nameEn: "Vanilla", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 150, unit: "ml" },
          { nameKm: "Caramel (ស្រោចពីលើ)", nameEn: "Caramel (Drizzle)", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "លាយ Vanilla ជាមួយទឹកដោះគោស្រស់ត្រជាក់ រួចចាក់ចូលកែវទឹកកក។",
          "ចាក់ Double Espresso ស្រោចពីលើបង្កើតជាស្រទាប់។",
          "គូសរង្វង់ Caramel ពីលើផ្នែកខាងលើបំផុត។"
        ],
        stepsEn: [
          "Stir vanilla into chilled milk and pour over ice.",
          "Pour double espresso over the top to create layers.",
          "Drizzle caramel across the top."
        ],
        tipKm: "ប្រាប់ភ្ញៀវឱ្យកូរមុនផឹក ប្រសិនបើចង់បានរសជាតិស្មើគ្នាពីលើដល់ក្រោម។",
        tipEn: "Recommend stirring before drinking so caramel blends evenly."
      }
    }
  },
  {
    id: "piccolo-pair",
    section: "coffee",
    category: "espresso",
    price: 1.75,
    nameKm: "ភីកូឡូ / ខូតាដូ",
    nameEn: "Piccolo / Cortado",
    descKm: "កាហ្វេទឹកដោះគោតិច រសជាតិដិតមុត — ក្តៅចំហុយក្តៅ ត្រជាក់ប្រើទឹកដោះគោត្រជាក់ និងទឹកកក។",
    descEn: "Small, punchy milk coffee — hot with steamed milk, iced with chilled milk and ice.",
    variants: {
      hot: {
        descKm: "កាហ្វេទឹកដោះគោកែវតូចក្តៅៗ រសជាតិកាហ្វេដិតខ្លាំង និងមានតុល្យភាពជាមួយទឹកដោះគោចំហុយតិច។",
        descEn: "Small hot glass balancing bold espresso with a modest amount of steamed milk.",
        ingredients: [
          { nameKm: "Espresso", nameEn: "Espresso", amount: 30, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ (ចំហុយ ~60°C)", nameEn: "Fresh Milk (Steamed ~60°C)", amount: 50, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 8, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "ចម្រាញ់ Espresso ដាក់កែវក្តៅតូច។",
          "ចំហុយទឹកដោះគោបរិមាណតិចឱ្យមានពពុះស្តើងរលោង។",
          "ចាក់ចូលកែវហើយបម្រើភ្លាមៗ។"
        ],
        stepsEn: [
          "Extract espresso into a small preheated glass.",
          "Steam a small amount of milk with fine microfoam.",
          "Pour into the glass and serve immediately."
        ],
        tipKm: "ស័ក្តិសមបំផុតសម្រាប់ភ្ញៀវដែលចង់ភ្លក្សរសជាតិគ្រាប់កាហ្វេសុទ្ធលាយទឹកដោះគោតិច។",
        tipEn: "Great for tasting espresso character softened just slightly by milk."
      },
      ice: {
        descKm: "Espresso លាយទឹកដោះគោស្រស់ត្រជាក់តិច និងទឹកកកតូចៗ រសជាតិកាហ្វេដិតត្រជាក់ស្រស់។",
        descEn: "Espresso with a small splash of chilled milk and ice for a bold, chilled mini cup.",
        ingredients: [
          { nameKm: "Espresso", nameEn: "Espresso", amount: 30, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 45, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 8, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 80, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកកក 80g និងទឹកដោះគោត្រជាក់ 45ml ចូលកែវតូច។",
          "ចម្រាញ់ Espresso 30 ml ចាក់ស្រោចពីលើ។",
          "កូរតិចៗ រួចបម្រើភ្លាម។"
        ],
        stepsEn: [
          "Add 80g ice and 45ml chilled milk into a small glass.",
          "Extract 30 ml espresso and pour over top.",
          "Give a quick stir and serve."
        ],
        tipKm: "ប្រើទឹកកកសមល្មមនឹងកែវតូច ដើម្បីកុំឱ្យរលាយទឹកកកធ្វើឱ្យកាហ្វេបាត់ដិត។",
        tipEn: "Keep ice proportional to the small glass so it doesn't dilute the shot."
      }
    }
  },
  {
    id: "khmer-milk-coffee-pair",
    section: "coffee",
    category: "local",
    price: 1.5,
    nameKm: "កាហ្វេទឹកដោះគោ",
    nameEn: "Condensed Milk Coffee",
    descKm: "កាហ្វេផ្អែមឈ្ងុយទឹកដោះគោខាប់ — ក្តៅលាយទឹកក្តៅ ត្រជាក់លាយទឹកកក។",
    descEn: "Classic sweet condensed milk coffee — hot with hot water, iced over ice.",
    variants: {
      hot: {
        descKm: "កាហ្វេក្តៅលាយទឹកដោះគោខាប់ផ្អែម រសជាតិដិតមុត និងឈ្ងុយកាហ្វេប្រពៃណី។",
        descEn: "Hot coffee mixed with sweet condensed milk for a classic bold and sweet cup.",
        ingredients: [
          { nameKm: "កាហ្វេ / Espresso", nameEn: "Coffee / Espresso", amount: 40, unit: "ml" },
          { nameKm: "ទឹកដោះគោខាប់ផ្អែម", nameEn: "Sweetened Condensed Milk", amount: 35, unit: "ml", isSweet: true },
          { nameKm: "ទឹកក្តៅ (~85°C)", nameEn: "Hot Water (~85°C)", amount: 110, unit: "ml" }
        ],
        stepsKm: [
          "ដាក់ទឹកដោះគោខាប់ផ្អែមចូលពែងក្តៅ។",
          "ចាក់កាហ្វេ និងទឹកក្តៅចូល រួចកូរឱ្យរលាយចូលគ្នាស្មើល្អ។",
          "បម្រើក្តៅៗជាមួយតែក្តៅ ១ ពែងនៅចំហៀង។"
        ],
        stepsEn: [
          "Spoon sweetened condensed milk into a hot cup.",
          "Add coffee and hot water, then stir until fully combined.",
          "Serve hot."
        ],
        tipKm: "កែសម្រួលទឹកដោះគោខាប់តាមកម្រិតផ្អែមដែលភ្ញៀវចូលចិត្ត។",
        tipEn: "Adjust condensed milk to match your customer's sweetness preference."
      },
      ice: {
        descKm: "កាហ្វេលាយទឹកដោះគោខាប់ផ្អែម ទឹកដោះគោខាប់មិនផ្អែម និងទឹកកក ត្រជាក់ដិតមុតពេញនិយម។",
        descEn: "Bold coffee blended with sweetened condensed milk, evaporated milk, and ice.",
        ingredients: [
          { nameKm: "កាហ្វេ / Espresso", nameEn: "Coffee / Espresso", amount: 36, unit: "ml" },
          { nameKm: "ទឹកដោះគោខាប់ផ្អែម", nameEn: "Sweetened Condensed Milk", amount: 40, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោខាប់មិនផ្អែម", nameEn: "Evaporated Milk", amount: 20, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ទឹកដោះគោខាប់ផ្អែម និងទឹកដោះគោខាប់មិនផ្អែមចូលកែវ។",
          "ចាក់កាហ្វេចូល រួចកូរឱ្យរលាយចូលគ្នាស្មើល្អ។",
          "ចាក់ទឹកកកពេញកែវ រួចកូរម្តងទៀតមុនពេលបម្រើ។"
        ],
        stepsEn: [
          "Add sweetened condensed milk and evaporated milk to the glass.",
          "Pour in the coffee and stir until smoothly blended.",
          "Fill with ice and stir once more before serving."
        ],
        tipKm: "កូរទឹកដោះគោខាប់ជាមួយកាហ្វេមុនដាក់ទឹកកក នឹងជួយកុំឱ្យកកបាតកែវ។",
        tipEn: "Stir condensed milk into the coffee before adding ice so it doesn't settle."
      }
    }
  },
  {
    id: "ice-black-coffee",
    section: "coffee",
    category: "local",
    price: 1.5,
    nameKm: "កាហ្វេខ្មៅ ទឹកកក",
    nameEn: "Iced Black Coffee",
    descKm: "កាហ្វេខ្មៅលាយជាមួយកម្រិតផ្អែមសមល្មម និងទឹកកក ផ្តល់ភាពស្រស់ស្រាយ និងភ្ញាក់ខ្លួនល្អ។",
    descEn: "Chilled black coffee lightly sweetened over ice.",
    variants: {
      ice: {
        descKm: "កាហ្វេខ្មៅលាយជាមួយកម្រិតផ្អែមសមល្មម និងទឹកកក ផ្តល់ភាពស្រស់ស្រាយ និងភ្ញាក់ខ្លួនល្អ។",
        descEn: "Chilled black coffee lightly sweetened over ice.",
        ingredients: [
          { nameKm: "កាហ្វេ / Espresso", nameEn: "Coffee / Espresso", amount: 40, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 25, unit: "ml", isSweet: true },
          { nameKm: "ទឹកធម្មតា", nameEn: "Water", amount: 60, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "លាយទឹកកាហ្វេ កម្រិតផ្អែម និងទឹកធម្មតាចូលគ្នា។",
          "ភ្លក្សកម្រិតផ្អែមតាមតម្រូវការភ្ញៀវ។",
          "ដាក់ទឹកកកចូលកែវ រួចចាក់ល្បាយកាហ្វេចូល។"
        ],
        stepsEn: [
          "Combine coffee, sweetener, and water.",
          "Adjust sweetness to preference.",
          "Pour over a glass full of ice."
        ],
        tipKm: "ប្រើកម្រិតផ្អែមរាវ នឹងរលាយបានលឿនជាងក្នុងទឹកត្រជាក់។",
        tipEn: "Liquid sweetener dissolves much faster in cold drinks."
      }
    }
  },
  {
    id: "drink-strawberry-soda",
    section: "drinks",
    category: "soda",
    price: 1.75,
    nameKm: "ស្ត្របឺរី សូដា",
    nameEn: "Strawberry Soda",
    descKm: "តំណក់ទឹកស្ត្របឺរីផ្អែមជូរស្រស់ ផ្សំជាមួយទឹកសូដាត្រជាក់មានពពុះស្រស់ស្រាយ។",
    descEn: "Sweet-tart strawberry puree and syrup topped with crisp sparkling soda over ice.",
    variants: {
      ice: {
        descKm: "ស្ត្របឺរីលាយទឹកក្រូចឆ្មារស្រស់បន្តិច និងទឹកសូដាត្រជាក់ ផ្តល់រសជាតិជូរផ្អែមត្រជាក់ចិត្ត។",
        descEn: "Strawberry fruit mix with a splash of lime and chilled sparkling soda over ice.",
        ingredients: [
          { nameKm: "Strawberry Puree", nameEn: "Strawberry Puree", amount: 35, unit: "ml", isSweet: true },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកក្រូចឆ្មារស្រស់", nameEn: "Fresh Lime Juice", amount: 10, unit: "ml" },
          { nameKm: "ទឹកសូដាត្រជាក់", nameEn: "Chilled Soda Water", amount: 150, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "ចាក់ Strawberry Puree កម្រិតផ្អែម និងទឹកក្រូចឆ្មារចូលបាតកែវ រួចកូរចូលគ្នា។",
          "ដាក់ទឹកកកពេញកែវ។",
          "ចាក់ទឹកសូដាត្រជាក់យឺតៗពីលើ រួចតុបតែងដោយផ្លែស្ត្របឺរី ឬជីអង្កាម។"
        ],
        stepsEn: [
          "Stir strawberry puree, sweetener, and lime juice at the bottom of the glass.",
          "Fill the glass with ice cubes.",
          "Slowly top with chilled soda water and garnish with strawberry or mint."
        ],
        tipKm: "ប្រើទឹកសូដាដែលក្លាសេត្រជាក់ខ្លាំង ដើម្បីរក្សាពពុះហ្គាសបានយូរ និងមិនឆាប់រលាយទឹកកក។",
        tipEn: "Use ice-cold soda water so carbonation stays lively and ice melts slowly."
      }
    }
  },
  {
    id: "drink-blueberry-soda",
    section: "drinks",
    category: "soda",
    price: 1.75,
    nameKm: "ប្លូបឺរី សូដា",
    nameEn: "Blueberry Soda",
    descKm: "ទឹកប្លូបឺរីឈ្ងុយផ្អែម លាយជាមួយក្រូចឆ្មារស្រស់ និងទឹកសូដាត្រជាក់ស្រឡះ។",
    descEn: "Aromatic blueberry fruit base balanced with fresh lime and sparkling soda water.",
    variants: {
      ice: {
        descKm: "រសជាតិប្លូបឺរីពណ៌ស្វាយស្រស់ស្អាត ផ្សំទឹកសូដាត្រជាក់ និងទឹកក្រូចឆ្មារបន្តិច។",
        descEn: "Vibrant purple blueberry mix topped with cold soda water and a bright lime twist.",
        ingredients: [
          { nameKm: "Blueberry Puree", nameEn: "Blueberry Puree", amount: 35, unit: "ml", isSweet: true },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកក្រូចឆ្មារស្រស់", nameEn: "Fresh Lime Juice", amount: 10, unit: "ml" },
          { nameKm: "ទឹកសូដាត្រជាក់", nameEn: "Chilled Soda Water", amount: 150, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "លាយ Blueberry Puree កម្រិតផ្អែម និងទឹកក្រូចឆ្មារនៅបាតកែវ។",
          "បន្ថែមទឹកកកឱ្យពេញកែវ។",
          "ចាក់ទឹកសូដាត្រជាក់ស្រោចពីលើបង្កើតជាពណ៌ស្រទាប់ស្អាត។"
        ],
        stepsEn: [
          "Combine blueberry puree, sweetener, and lime juice in the glass.",
          "Fill the glass with ice.",
          "Pour chilled soda water gently over top for a two-tone layer."
        ],
        tipKm: "បន្ថែមទឹកក្រូចឆ្មារ 10ml ជួយឱ្យរសជាតិប្លូបឺរីមិនផ្អែមទ្រលាន់ និងកាន់តែស្រស់ស្រាយ។",
        tipEn: "Adding 10ml fresh lime juice sharpens the blueberry aroma and keeps it refreshing."
      }
    }
  },
  {
    id: "drink-mango-soda",
    section: "drinks",
    category: "soda",
    price: 1.75,
    nameKm: "ស្វាយ សូដា",
    nameEn: "Mango Soda",
    descKm: "ទឹកស្វាយទុំក្រអូបផ្អែម លាយជាមួយទឹកសូដាត្រជាក់ និងក្រូចឆ្មារស្រស់។",
    descEn: "Ripe tropical mango puree with fresh lime and fizzy chilled soda over ice.",
    variants: {
      ice: {
        descKm: "រសជាតិស្វាយទុំឈ្ងុយត្រជាក់ លាយទឹកសូដាមានពពុះស្រស់ស្រាយគ្រប់ពេល។",
        descEn: "Tropical ripe mango flavor lifted by crisp sparkling soda and lime.",
        ingredients: [
          { nameKm: "Mango Puree", nameEn: "Mango Puree", amount: 40, unit: "ml", isSweet: true },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 10, unit: "ml", isSweet: true },
          { nameKm: "ទឹកក្រូចឆ្មារស្រស់", nameEn: "Fresh Lime Juice", amount: 12, unit: "ml" },
          { nameKm: "ទឹកសូដាត្រជាក់", nameEn: "Chilled Soda Water", amount: 150, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "ចាក់ Mango Puree កម្រិតផ្អែម និងទឹកក្រូចឆ្មារចូលបាតកែវ រួចកូរឱ្យសព្វ។",
          "ដាក់ទឹកកកពេញកែវ។",
          "ចាក់ទឹកសូដាត្រជាក់ពីលើ រួចដាក់ក្រូចឆ្មារ ១ ចំណិតតុបតែង។"
        ],
        stepsEn: [
          "Stir mango puree, sweetener, and lime juice together in the glass.",
          "Fill with ice cubes.",
          "Top with cold soda water and garnish with a lime wheel."
        ],
        tipKm: "ប្រើទឹកស្វាយខាប់ នឹងធ្វើឱ្យពណ៌លឿងស្អាត និងក្លិនស្វាយឈ្ងុយធម្មជាតិ។",
        tipEn: "Using real mango puree gives a rich golden hue and authentic tropical aroma."
      }
    }
  },
  {
    id: "drink-kiwi-soda",
    section: "drinks",
    category: "soda",
    price: 1.75,
    nameKm: "គីវី សូដា",
    nameEn: "Kiwi Soda",
    descKm: "រសជាតិគីវីជូរអែមពណ៌បៃតងស្រស់ ផ្សំជាមួយទឹកសូដាត្រជាក់បំបាត់ការស្រេកទឹក។",
    descEn: "Zesty green kiwi fruit mix with sparkling soda water over ice.",
    variants: {
      ice: {
        descKm: "គីវីជូរផ្អែមស្រស់ស្រាយ លាយជាមួយទឹកសូដាត្រជាក់ និងទឹកក្រូចឆ្មារបន្តិច។",
        descEn: "Refreshing sweet-tangy kiwi topped with crisp soda water over ice.",
        ingredients: [
          { nameKm: "Kiwi Puree", nameEn: "Kiwi Puree", amount: 35, unit: "ml", isSweet: true },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកក្រូចឆ្មារស្រស់", nameEn: "Fresh Lime Juice", amount: 10, unit: "ml" },
          { nameKm: "ទឹកសូដាត្រជាក់", nameEn: "Chilled Soda Water", amount: 150, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "ចាក់ Kiwi Puree កម្រិតផ្អែម និងទឹកក្រូចឆ្មារចូលបាតកែវ រួចកូរចូលគ្នា។",
          "ដាក់ទឹកកកពេញកែវ។",
          "ចាក់ទឹកសូដាត្រជាក់ពីលើ រួចបម្រើជាមួយបំពង់បឺត។"
        ],
        stepsEn: [
          "Mix kiwi puree, sweetener, and lime juice at the base of the glass.",
          "Add ice cubes to fill the glass.",
          "Top with chilled soda water and serve with a straw."
        ],
        tipKm: "រំលឹកភ្ញៀវឱ្យកូរពីក្រោមឡើងលើមុនពិសា ដើម្បីឱ្យរសជាតិគីវីចូលសព្វជាមួយសូដា។",
        tipEn: "Remind guests to stir from the bottom so kiwi blends evenly with soda."
      }
    }
  },
  {
    id: "drink-passion-soda",
    section: "drinks",
    category: "soda",
    price: 1.75,
    nameKm: "ផាសិន សូដា",
    nameEn: "Passion Soda",
    descKm: "ទឹកផ្លែផាសិនស្រស់ឈ្ងុយជូរផ្អែម លាយជាមួយទឹកសូដាត្រជាក់មានពពុះស្រស់ស្រាយ។",
    descEn: "Fragrant fresh passion fruit juice and pulp with sparkling soda over ice.",
    variants: {
      ice: {
        descKm: "ផាសិនស្រស់មានគ្រាប់ឈ្ងុយ លាយកម្រិតផ្អែមសមល្មម និងទឹកសូដាត្រជាក់។",
        descEn: "Fresh passion fruit pulp balanced with sweetener and chilled soda water.",
        ingredients: [
          { nameKm: "ទឹកផ្លែផាសិនស្រស់", nameEn: "Fresh Passion Fruit Pulp", amount: 40, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 25, unit: "ml", isSweet: true },
          { nameKm: "អំបិលម៉ត់", nameEn: "Pinch of Salt", amount: 1, unit: "g" },
          { nameKm: "ទឹកសូដាត្រជាក់", nameEn: "Chilled Soda Water", amount: 145, unit: "ml" },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 160, unit: "g" }
        ],
        stepsKm: [
          "លាយទឹកផ្លែផាសិន កម្រិតផ្អែម និងអំបិលបន្តិចចូលគ្នាឱ្យរលាយសព្វ។",
          "ដាក់ទឹកកកពេញកែវ រួចចាក់ល្បាយផាសិនចូល។",
          "ចាក់ទឹកសូដាត្រជាក់ស្រោចពីលើ រួចបម្រើភ្លាម។"
        ],
        stepsEn: [
          "Stir passion fruit pulp, sweetener, and a tiny pinch of salt together.",
          "Fill the glass with ice and pour in the passion mix.",
          "Top with chilled soda water and serve right away."
        ],
        tipKm: "អំបិលបន្តិចបំផុតជួយលើករសជាតិផាសិនឱ្យកាន់តែមុត និងមិនជូរឆ្អែតពេក។",
        tipEn: "A tiny pinch of salt rounds out passion fruit acidity and boosts sweetness."
      }
    }
  },
  {
    id: "drink-strawberry-milk",
    section: "drinks",
    category: "milk-drink",
    price: 2.0,
    nameKm: "ស្ត្របឺរី ទឹកដោះគោស្រស់",
    nameEn: "Strawberry Fresh Milk",
    descKm: "តំណក់ផ្លែស្ត្របឺរីស្រស់កិន លាយជាមួយទឹកដោះគោស្រស់ត្រជាក់ ផ្អែមឈ្ងុយទន់មាត់។",
    descEn: "Crushed strawberry fruit base layered with cold creamy fresh milk over ice.",
    variants: {
      ice: {
        descKm: "ស្ត្របឺរីនៅបាតកែវ ស្រោចដោយទឹកដោះគោស្រស់ត្រជាក់ ២ ស្រទាប់ពណ៌ផ្កាឈូកស្រស់ស្អាត។",
        descEn: "Two-tone pink strawberry puree layered under chilled fresh milk.",
        ingredients: [
          { nameKm: "Strawberry Puree", nameEn: "Strawberry Puree", amount: 45, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 160, unit: "ml" },
          { nameKm: "ទឹកដោះគោខាប់ផ្អែម", nameEn: "Sweetened Condensed Milk", amount: 10, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "ចាក់ Strawberry Puree ដាក់បាតកែវ និងបង្វិលជុំវិញជញ្ជាំងកែវបន្តិច។",
          "ដាក់ទឹកកកពេញកែវ។",
          "លាយទឹកដោះគោស្រស់ជាមួយទឹកដោះគោខាប់ រួចចាក់ស្រោចពីលើ។"
        ],
        stepsEn: [
          "Spoon strawberry puree into the bottom and swirl lightly along the inner glass.",
          "Fill the glass with ice cubes.",
          "Mix fresh milk with condensed milk and pour gently over top."
        ],
        tipKm: "ប្រើទឹកដោះគោស្រស់មានជាតិខ្លាញ់ពេញ នឹងធ្វើឱ្យរសជាតិឈ្ងុយក្រែមល្អ។",
        tipEn: "Full-cream fresh milk gives the richest, creamiest texture with strawberry."
      }
    }
  },
  {
    id: "drink-passion-smoothie",
    section: "drinks",
    category: "smoothie",
    price: 2.25,
    nameKm: "ផាសិន ក្រឡុក",
    nameEn: "Passion Fruit Smoothie",
    descKm: "ផ្លែផាសិនស្រស់ក្រឡុកជាមួយទឹកកកម៉ត់ ផ្អែមជូរត្រជាក់ដល់បេះដូង។",
    descEn: "Blended ice-smooth passion fruit frappe with bright tropical sweetness.",
    variants: {
      ice: {
        descKm: "ផាសិនស្រស់ក្រឡុកម៉ត់ជាមួយកម្រិតផ្អែម និងទឹកដោះគោខាប់បន្តិចឱ្យសាច់រលោងខាប់។",
        descEn: "Smoothly blended passion fruit with sweetener and a touch of condensed milk for body.",
        ingredients: [
          { nameKm: "ទឹកផ្លែផាសិនស្រស់", nameEn: "Fresh Passion Fruit Pulp", amount: 50, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 30, unit: "ml", isSweet: true },
          { nameKm: "ទឹកដោះគោខាប់ផ្អែម", nameEn: "Sweetened Condensed Milk", amount: 15, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកកដុំតូច", nameEn: "Ice Cubes", amount: 220, unit: "g" }
        ],
        stepsKm: [
          "ដាក់ផាសិន កម្រិតផ្អែម ទឹកដោះគោខាប់ និងទឹកកកចូលម៉ាស៊ីនក្រឡុក។",
          "ក្រឡុកល្បឿនលឿនប្រហែល 20–25 វិនាទី រហូតម៉ត់រលោងគ្មានដុំទឹកកក។",
          "ចាក់ដាក់កែវ រួចស្រោចគ្រាប់ផាសិនបន្តិចពីលើដើម្បីតុបតែង។"
        ],
        stepsEn: [
          "Add passion pulp, sweetener, condensed milk, and ice into the blender.",
          "Blend on high for 20–25 seconds until velvety smooth.",
          "Pour into the glass and garnish with a spoonful of passion seeds."
        ],
        tipKm: "កុំក្រឡុកយូរពេក ព្រោះកម្ដៅម៉ាស៊ីនអាចធ្វើឱ្យទឹកកករលាយរាវ។",
        tipEn: "Avoid over-blending so blade friction doesn't melt the smoothie."
      }
    }
  },
  {
    id: "drink-matcha-latte",
    section: "drinks",
    category: "tea",
    price: 2.25,
    nameKm: "ម៉ាត់ឆា ឡាតេ",
    nameEn: "Matcha Latte",
    descKm: "ម្សៅតែបៃតងជប៉ុនសុទ្ធ ផ្សំជាមួយទឹកដោះគោស្រស់ — មានទាំងក្តៅ និងត្រជាក់។",
    descEn: "Japanese green tea whisked with fresh milk — available Hot or Ice.",
    variants: {
      hot: {
        descKm: "តែបៃតងម៉ាត់ឆាវាយជាមួយទឹកក្តៅឧណ្ហៗ រួចចាក់ទឹកដោះគោចំហុយក្តៅ (~62°C) ពីលើ។",
        descEn: "Whisked green matcha topped with velvety steamed fresh milk (~62°C).",
        ingredients: [
          { nameKm: "ម្សៅតែបៃតង Matcha", nameEn: "Matcha Green Tea Powder", amount: 4, unit: "g" },
          { nameKm: "ទឹកក្តៅ (~75°C)", nameEn: "Warm Water (~75°C)", amount: 40, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ (ចំហុយ ~62°C)", nameEn: "Fresh Milk (Steamed ~62°C)", amount: 180, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 15, unit: "ml", isSweet: true }
        ],
        stepsKm: [
          "រែងម្សៅ Matcha 4g ចូលកូនចាន ដាក់ទឹកក្តៅ (~75°C) 40ml រួចវាយឱ្យរលាយម៉ត់គ្មានដុំ។",
          "ចាក់ទឹក Matcha និងកម្រិតផ្អែមចូលពែង។",
          "ចាក់ទឹកដោះគោចំហុយក្តៅចូល រួចបម្រើក្តៅៗ។"
        ],
        stepsEn: [
          "Sift 4g matcha powder, add 40ml warm water (~75°C), and whisk until smooth.",
          "Pour whisked matcha and sweetener into the cup.",
          "Pour steamed milk over top and serve hot."
        ],
        tipKm: "កុំប្រើទឹកពុះ 100°C វាយ Matcha ព្រោះវាធ្វើឱ្យតែមានរសជាតិល្វីងខ្លាំង។",
        tipEn: "Avoid boiling water when whisking matcha to prevent bitterness."
      },
      ice: {
        descKm: "ទឹកដោះគោស្រស់ត្រជាក់ដាក់ទឹកកក ស្រោចដោយទឹកតែបៃតង Matcha ពណ៌បៃតងចាស់ពីលើ។",
        descEn: "Chilled fresh milk over ice topped with rich whisked green matcha.",
        ingredients: [
          { nameKm: "ម្សៅតែបៃតង Matcha", nameEn: "Matcha Green Tea Powder", amount: 4, unit: "g" },
          { nameKm: "ទឹកក្តៅឧណ្ហៗ (~75°C)", nameEn: "Warm Water (~75°C)", amount: 40, unit: "ml" },
          { nameKm: "ទឹកដោះគោស្រស់ត្រជាក់", nameEn: "Chilled Fresh Milk", amount: 160, unit: "ml" },
          { nameKm: "កម្រិតផ្អែម", nameEn: "Sweetness Level", amount: 20, unit: "ml", isSweet: true },
          { nameKm: "ទឹកកក", nameEn: "Ice Cubes", amount: 150, unit: "g" }
        ],
        stepsKm: [
          "វាយម្សៅ Matcha ជាមួយទឹកក្តៅឧណ្ហៗ 40ml រហូតម៉ត់រលោង។",
          "លាយទឹកដោះគោស្រស់ត្រជាក់ និងកម្រិតផ្អែមចាក់ចូលកែវទឹកកក។",
          "ចាក់ទឹក Matcha ស្រោចពីលើបង្កើតជា ២ ស្រទាប់ពណ៌ស និងបៃតង។"
        ],
        stepsEn: [
          "Whisk matcha powder with 40ml warm water until completely smooth.",
          "Stir sweetener into chilled milk and pour over ice.",
          "Pour the whisked matcha gently over top for a green-and-white layer."
        ],
        tipKm: "រែងម្សៅ Matcha តាមកញ្ច្រែងតូចមុនវាយ នឹងជួយកុំឱ្យកកជាគ្រាប់តូចៗ។",
        tipEn: "Sifting matcha through a fine mesh before whisking prevents clumps."
      }
    }
  }
];
