const Exhibitions = [
    {
        isActive: true,
        country: "tr",
        name: "Detailing Expo",
        logo: "detailing-expo.svg",
        description: {
            tr: "Detaylı Araç Temizliği ve Bakım Fuarı",
            en: "Detailed Car Cleaning and Maintenance Exhibition",
            ru: "Подробная выставка по очистке и уходу за автомобилем"
        },
        date: "28 - 30 August 2025"
    },
    {
        isActive: true,
        country: "KZ",
        name: "Bakery Expo Kazakhstan",
        logo: "bakery-expo-kazakhstan.svg",
        description: {
            tr: "2. Fırıncılık ve Pastacılık Ekipmanları Fuarı",
            en: "Bakery and Pastry Equipment Exhibition",
            ru: "Выставка оборудования для пекарен и кондитерских"
        },
        date: "19 - 21 February 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Windoor Expo Kazakhstan",
        logo: "windoor-expo-kazakhstan.svg",
        description: {
            tr: "Detaylı Araç Temizliği ve Bakım Fuarı",
            en: "",
            ru: ""
        },
        date: "2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Lift Expo Kazakhstan",
        logo: "lift-expo-kazakhstan.svg",
        description: {
            tr: "Uluslararası Asansör & Yürüyen Merdiven Ekipmanları Fuarı",
            en: "International Elevator & Escalator Equipment Exhibition",
            ru: "Международная выставка оборудования для лифтов и эскалаторов"
        },
        date: "2026"
    },
    {
        isActive: true,
        country: "KZ",
        name: "Lift Expo Kenya",
        logo: "lift-expo-kenya.svg",
        description: {
            tr: "Uluslararası Asansör & Yürüyen Merdiven Ekipmanları Fuarı",
            en: "International Elevator & Escalator Equipment Exhibition",
            ru: "Международная выставка оборудования для лифтов и эскалаторов"
        },
        date: "9 - 11 Temmuz 2025"
    },
    {
        isActive: true,
        country: "MX",
        name: "Lift Expo Mexico",
        logo: "lift-expo-mexico.svg",
        description: {
            tr: "Uluslararası Asansör & Yürüyen Merdiven Ekipmanları Fuarı",
            en: "International Elevator & Escalator Equipment Exhibition",
            ru: "Международная выставка оборудования для лифтов и эскалаторов"
        },
        date: "4 - 6 December 2025"
    },
    {
        isActive: true,
        country: "AZ",
        name: "Lift Expo Azerbaijan",
        logo: "lift-expo-azerbaijan.svg",
        description: {
            tr: "Uluslararası Asansör & Yürüyen Merdiven Ekipmanları Fuarı",
            en: "International Elevator & Escalator Equipment Exhibition",
            ru: "Международная выставка оборудования для лифтов и эскалаторов"
        },
        date: "26 - 28 February 2025"
    },
    {
        isActive: false,
        country: "UZ",
        name: "Lift Expo Uzbekistan",
        logo: "lift-expo-uzbekistan.svg",
        description: {
            tr: "Uluslararası Asansör & Yürüyen Merdiven Ekipmanları Fuarı",
            en: "",
            ru: ""
        },
        date: "2025"
    },
    {
        isActive: true,
        country: "KZ",
        name: "GreenHouses Kazakhstan",
        logo: "greenhouses-kazakhstan.svg",
        description: {
            tr: "15. Uluslararası Seracılık ve Ekipmanları Fuarı",
            en: "15th International Greenhouse and Equipment Exhibition",
            ru: "15-я Международная выставка теплиц и оборудования"
        },
        date: "1 - 3 Nisan 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Kitchen & Bath Expo Kazakhstan",
        logo: "kitchen-bath-expo-kazakhstan.svg",
        description: {
            tr: "Detaylı Araç Temizliği ve Bakım Fuarı",
            en: "",
            ru: ""
        },
        date: "1 - 3 Nisan 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Kitchen & Bath Expo Russia",
        logo: "kitchen-bath-expo-russia.svg",
        description: {
            tr: "Detaylı Araç Temizliği ve Bakım Fuarı",
            en: "",
            ru: ""
        },
        date: "1 - 3 Nisan 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Kitchen & Bath Expo Uzbekistan",
        logo: "kitchen-bath-expo-uzbekistan.svg",
        description: {
            tr: "Detaylı Araç Temizliği ve Bakım Fuarı",
            en: "",
            ru: ""
        },
        date: "1 - 3 Nisan 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Electric & Hybrid Vehicle Expo Kazakhstan",
        logo: "electric-hybrid-vehicle-expo-kazakhstan.svg",
        description: {
            tr: "Uluslararası Pil Akü Batarya ve Teknolojileri Fuarı",
            en: "",
            ru: ""
        },
        date: "16 - 18 Ekim 2025"
    },
    {
        isActive: false,
        country: "KZ",
        name: "Battery Expo Kazakhstan",
        logo: "battery-expo-kazakhstan.svg",
        description: {
            tr: "Uluslararası Pil Akü Batarya ve Teknolojileri Fuarı",
            en: "",
            ru: ""
        },
        date: "16 - 18 Ekim 2025"
    },
    {
        isActive: false,
        country: "UZ",
        name: "Tool Expo Uzbekistan",
        logo: "tool-fastener-expo-uzbekistan.svg",
        description: {
            tr: "Uluslararası Hırdavat Fuarı",
            en: "",
            ru: ""
        },
        date: "Kasım 2025"
    },
    {
        isActive: false,
        country: "UZ",
        name: "Battery Expo Uzbekistan",
        logo: "battery-expo-uzbekistan.svg",
        description: {
            tr: "Uluslararası Pil Akü Batarya ve Teknolojileri Fuarı",
            en: "",
            ru: ""
        },
        date: "2025"
    },
    {
        isActive: false,
        country: "UZ",
        name: "Electric & Hybrid Vehicle Expo Uzbekistan",
        logo: "electric-hybrid-vehicle-expo-uzbekistan.svg",
        description: {
            tr: "Uluslararası Pil Akü Batarya ve Teknolojileri Fuarı",
            en: "",
            ru: ""
        },
        date: "2025"
    },
    {
        isActive: false,
        country: "UZ",
        name: "Solar & Energy Technology Uzbekistan",
        logo: "solar-energy-technology-uzbekistan.svg",
        description: {
            tr: "Uluslararası Güneş Enerjisi ve Teknolojisi Fuarı",
            en: "",
            ru: ""
        },
        date: "2025"
    },
    {
        isActive: true,
        country: "ru",
        name: "AgroRus",
        logo: "agrorus.svg",
        description: {
            tr: "33. Uluslararası Tarım Fuarı",
            en: "33rd International Agriculture Exhibition",
            ru: "33-я Международная сельскохозяйственная выставка"
        },
        date: "27 - 29 August 2026"
    },
    {
        isActive: true,
        country: "UZ",
        name: "Jewelry Expo Uzbekistan",
        logo: "jewelry-expo-uzbekistan.svg",
        description: {
            tr: "2. Özbekistan Uluslararası Mücevherat, Değerli Taşlar, Saat & Malzemeleri Fuarı",
            en: "Uzbekistan International Jewelry, Precious Stones, Watches & Materials Exhibition",
            ru: "Узбекистанская международная выставка ювелирных изделий, драгоценных камней, часов и материалов"
        },
        date: "6 - 8 June 2025"
    },
    {
        isActive: true,
        country: "KZ",
        name: "Zoo Expo Kazakhstan",
        logo: "zoo-expo-kazakhstan.svg",
        description: {
            tr: "5. Uluslararası Evcil Hayvan, Ürün, Malzeme & Aksesuar Tedarikçileri Fuarı",
            en: "5th International Pet, Product, Material & Accessory Suppliers Exhibition",
            ru: "5-я Международная выставка поставщиков товаров, материалов и аксессуаров для домашних животных"
        },
        date: "26 - 28 March 2025"
    },
    {
        isActive: true,
        country: "UZ",
        name: "Avit Expo",
        logo: "avit-expo.svg",
        description: {
            tr: "Otomotiv Yedek Parça Fuarı",
            en: "Spare Parts Exhibition",
            ru: "Выставка автозапчастей"
        },
        date: "26 - 28 March 2025"
    },
    {
        isActive: true,
        country: "UZ",
        name: "Zira Fest Uzbekistan",
        logo: "zira-fest-uzbekistan.jpg",
        description: {
            tr: "Hotel, Restoran & Kafe Ekipmanları Fuarı",
            en: "Hotel, Restaurant & Cafe Equipment Exhibition",
            ru: "Выставка оборудования для отелей, ресторанов и кафе"
        },
        date: "September 2025"
    },
    {
        isActive: true,
        country: "UZ",
        name: "Zira Fest Bakery Uzbekistan",
        logo: "zira-fest-uzbekistan.jpg",
        description: {
            tr: "Fırıncılık ve Pastacılık Ekipmanları Fuarı",
            en: "Bakery and Pastry Equipment Exhibition",
            ru: "Выставка оборудования для пекарен и кондитерских"
        },
        date: "September 2025"
    },
    {
        isActive: true,
        country: "kz",
        name: "Flowers Expo",
        logo: "flowers-expo.svg",
        description: {
            tr: "15. Çiçekçilik ve Peyzaj Ekipmanları Fuarı",
            en: "15th Flower and Landscape Equipment Exhibition",
            ru: "15-я Выставка оборудования для флористики и ландшафтного дизайна"
        },
        date: "1 - 3 April 2025"
    },
    {
        isActive: true,
        country: "kz",
        name: "Apple & Garden Expo",
        logo: "apple-garden-expo.svg",
        description: {
            tr: "Meyve Ürünleri Yetiştirme ve Depolama Fuarı",
            en: "Fruit Products Growing and Storage Exhibition",
            ru: "Выставка по выращиванию и хранению фруктовой продукции"
        },
        date: "1 - 3 April 2025"
    },
    {
        isActive: true,
        country: "kz",
        name: "Beauty Expo Erbil",
        logo: "beauty-expo-erbil.svg",
        description: {
            tr: "Kozmetik, Güzellik, Bakım ve Hijyen Ürünleri Fuarı",
            en: "Cosmetics, Beauty, Care, and Hygiene Products Exhibition",
            ru: "Выставка косметических,Beauty, уходовых и гигиенических продуктов"
        },
        date: "20 - 21 February 2025"
    }
]

export default Exhibitions