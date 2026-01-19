/* ESTÜ MÜHENDİSLİK NOT MERKEZİ - VERİTABANI */

const SYSTEM_CONFIG = {
    gradeScale: { "AA":4.0, "AB":3.7, "BA":3.3, "BB":3.0, "BC":2.7, "CB":2.3, "CC":2.0, "CD":1.7, "DC":1.3, "DD":1.0, "FF":0.0 },
    semesterLabels: {
        tr: [ "1. Dönem (Güz)", "2. Dönem Sonu (1. Sınıf)", "3. Dönem Sonu", "4. Dönem Sonu (2. Sınıf)", "5. Dönem Sonu", "6. Dönem Sonu (3. Sınıf)", "Manuel / 4. Sınıf" ],
        en: [ "1st Semester (Fall)", "End of 2nd Sem. (Freshman)", "End of 3rd Semester", "End of 4th Sem. (Sophomore)", "End of 5th Semester", "End of 6th Sem. (Junior)", "Manual / Senior" ]
    }
};

const DEPARTMENTS = {
    // 1. ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ
    "eee": {
        title: "Elektrik-Elektronik Müh.",
        icon: "⚡",
        color: "#c62828",
        core: [
            [ {c:"MAT1011",n:"Calculus I",e:7.5},{c:"FIZ105",n:"Physics I",e:6},{c:"FIZ107",n:"Physics Lab I",e:1.5},{c:"KIM1005",n:"Gen. Chemistry",e:6},{c:"BIM122",n:"Discrete Math",e:5},{c:"TUR125",n:"Türk Dili I",e:2} ],
            [ {c:"MAT1012",n:"Calculus II",e:7.5},{c:"FIZ106",n:"Physics II",e:6},{c:"FIZ108",n:"Physics Lab II",e:1.5},{c:"MAT2021",n:"Linear Algebra",e:4.5},{c:"EEM102",n:"Intro to EE",e:7.5},{c:"EEM104",n:"Prof. Aspects",e:3} ],
            [ {c:"MAT2011",n:"Diff. Eq.",e:4.5},{c:"MAT2093",n:"Eng. Math",e:6},{c:"EEM209",n:"Circuit Anal. I",e:7.5},{c:"EEM206",n:"Circuits Lab",e:3},{c:"BIL200",n:"Comp. Prog.",e:6} ],
            [ {c:"EEM208",n:"Electromag.",e:6},{c:"EEM232",n:"Digital Sys. I",e:6},{c:"EEM238",n:"Digital Lab",e:2},{c:"IST2044",n:"Probability",e:5},{c:"EEM210",n:"Semiconductors",e:5},{c:"TUR126",n:"Türk Dili II",e:2} ],
            [ {c:"EEM301",n:"Sig. & Sys.",e:6},{c:"EEM311",n:"Energy Conv.",e:6},{c:"EEM321",n:"Electronics I",e:5},{c:"EEM328",n:"Elec. Lab",e:3},{c:"IKT151",n:"Economics",e:3},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2} ],
            [ {c:"EEM308",n:"Comm. I",e:7},{c:"EEM336",n:"Microproc. I",e:7},{c:"EEM342",n:"Controls",e:7},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2} ]
        ],
        specs: [
            // Kontrol ve Sistem
            {c:"EEM451",n:"Industrial Control Systems",e:5,t:"kontrol"},
            {c:"EEM453",n:"Research in Control I",e:5,t:"kontrol"},
            {c:"EEM454",n:"Research in Control II",e:5,t:"kontrol"},
            {c:"EEM491",n:"Linear Control Systems",e:5,t:"kontrol"},
            {c:"EEM494",n:"Control Systems Lab",e:5,t:"kontrol"},
            {c:"EEM450",n:"Intro to System ID",e:5,t:"kontrol"},
            {c:"EEM452",n:"Intro to Robotics",e:5,t:"kontrol"},

            // Elektronik
            {c:"EEM4501",n:"Analog Electronics",e:5,t:"elektronik"},
            {c:"EEM459",n:"Research in Electronics I",e:5,t:"elektronik"},
            {c:"EEM460",n:"Research in Electronics II",e:5,t:"elektronik"},
            {c:"EEM464",n:"System-on-Chip Design",e:5,t:"elektronik"},
            {c:"EEM403",n:"Optoelectronics & Nanophotonics",e:5,t:"elektronik"},

            // Haberleşme (Telekom)
            {c:"EEM465",n:"Fund. of Data Comm.",e:5,t:"haberlesme"},
            {c:"EEM467",n:"Digital Communications",e:5,t:"haberlesme"},
            {c:"EEM469",n:"Communication Electronics",e:5,t:"haberlesme"},
            {c:"EEM461",n:"Research in Telecom I",e:5,t:"haberlesme"},
            {c:"EEM462",n:"Research in Telecom II",e:5,t:"haberlesme"},
            {c:"EEM470",n:"Microwaves and Antennas",e:5,t:"haberlesme"},
            {c:"EEM496",n:"Communication Sys. Lab",e:5,t:"haberlesme"},
            {c:"EEM482",n:"Fund. of Data Networks",e:5,t:"haberlesme"},

            // Güç Sistemleri
            {c:"EEM471",n:"Electrical Machinery I",e:5,t:"guc"},
            {c:"EEM473",n:"Power Systems Analysis I",e:5,t:"guc"},
            {c:"EEM475",n:"Power Electronics I",e:5,t:"guc"},
            {c:"EEM479",n:"Electrical Install. Sys.",e:5,t:"guc"},
            {c:"EEM483",n:"Power Systems Analysis II",e:5,t:"guc"},
            {c:"EEM456",n:"Research in Power Sys II",e:5,t:"guc"},
            {c:"EEM466",n:"High Voltage Techniques",e:5,t:"guc"},
            {c:"EEM476",n:"Power Electronics II",e:5,t:"guc"},

            // Sinyal İşleme
            {c:"EEM409",n:"Random Signals",e:5,t:"sinyal"},
            {c:"EEM457",n:"Research in Signal Proc. I",e:5,t:"sinyal"},
            {c:"EEM458",n:"Research in Signal Proc. II",e:5,t:"sinyal"},
            {c:"EEM463",n:"Intro to Image Processing",e:5,t:"sinyal"},
            {c:"EEM477",n:"Digital Signal Processing",e:5,t:"sinyal"},

            // Sayısal Sistemler ve Bilgisayar
            {c:"EEM417",n:"Engineering Computations",e:5,t:"bilgisayar"},
            {c:"EEM449",n:"Embedded System Design",e:5,t:"sayisal"},
            {c:"EEM4503",n:"Digital Sys. Des. (FPGA)",e:5,t:"sayisal"},
            {c:"EEM448",n:"Research in Digital Sys II",e:5,t:"sayisal"},
            {c:"EEM480",n:"Algorithms and Complexity",e:5,t:"bilgisayar"},
            {c:"EEM486",n:"Computer Architecture",e:5,t:"bilgisayar"}
        ]
    },
    // 2. BİLGİSAYAR MÜHENDİSLİĞİ
    "bilgisayar": {
        title: "Bilgisayar Mühendisliği",
        icon: "💻",
        color: "#1e293b",
        core: [
            [ {c:"BİM103",n:"Computer Programming I",e:5.0},{c:"BİM105",n:"Intro to Computer Eng.",e:2.0},{c:"FIZ105",n:"Physics I",e:6.0},{c:"FIZ107",n:"Physics Lab I",e:1.5},{c:"KIM1005",n:"General Chemistry",e:6.0},{c:"MAT1011",n:"Calculus I",e:7.5},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"BİM108",n:"Computer Programming II",e:6.0},{c:"BİM122",n:"Discrete Comp. Struct.",e:5.0},{c:"FIZ106",n:"Physics II",e:6.0},{c:"FIZ108",n:"Physics Lab II",e:1.5},{c:"MAT1012",n:"Calculus II",e:7.5},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"BİM2005",n:"Computer Programming III",e:6.0},{c:"BİM203",n:"Logic Design",e:6.0},{c:"BİM209",n:"Software Design & Dev.",e:6.0},{c:"BİM213",n:"Data Structures & Algo.",e:5.5},{c:"MAT2021",n:"Linear Algebra",e:4.5},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0} ],
            [ {c:"BİM2006",n:"Computer Programming IV",e:5.5},{c:"BİM2008",n:"Formal Lang. & Automata",e:4.5},{c:"BİM216",n:"Database Mgmt. Sys.",e:5.0},{c:"BİM222",n:"Internet Programming",e:4.5},{c:"IST252",n:"Probability & Statistics",e:4.0},{c:"MAT2004",n:"Diff. Eq. & Num. Meth.",e:4.5},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0} ],
            [ {c:"BİM3005",n:"Fund. of Software Eng.",e:4.5},{c:"BİM3007",n:"Math Tools for Comp. Eng.",e:6.0},{c:"BİM303",n:"Microcomputers",e:7.0},{c:"BİM305",n:"Computer Organization",e:5.0} ],
            [ {c:"BİM218",n:"Operating Systems",e:4.5},{c:"BİM304",n:"Comp. Algorithm Design",e:6.0},{c:"BİM308",n:"Web Server Programming",e:4.5},{c:"BİM324",n:"Computer Networks",e:4.5},{c:"BIMSJ302",n:"Internship I",e:2.5} ],
            [ {c:"BİM437",n:"Comp. Eng. Design",e:4.0},{c:"BIMSJ401",n:"Internship II",e:2.5},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0} ],
            [ {c:"BİM444",n:"Comp. Eng. Applications",e:7.0},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0} ]
        ],
        specs: [
            {c:"BİM309",n:"Yapay Zeka (Artificial Intel.)",e:4.5,t:"yapay_zeka"},{c:"BİM453",n:"Makine Öğrenmesine Giriş",e:4.5,t:"yapay_zeka"},{c:"BİM454",n:"Programlama Dili Kavramları",e:4.5,t:"yazilim"},{c:"BİM459",n:"Sağlıkta Yapay Zeka",e:4.5,t:"yapay_zeka"},{c:"BİM461",n:"Bulut Hesaplamaya Giriş",e:4.5,t:"sistem"},{c:"BİM463",n:"Doğal Dil İşlemeye Giriş",e:4.5,t:"yapay_zeka"},{c:"BİM472",n:"Görüntü İşleme",e:4.5,t:"goruntu"},{c:"BİM485",n:"Bilgisayar Bilim. Araş. I",e:4.5,t:"arastirma"},{c:"BİM493",n:"Mobil Programlama I",e:4.5,t:"yazilim"},{c:"BİM447",n:"Derin Öğrenmeye Giriş",e:4.5,t:"yapay_zeka"},{c:"BİM449",n:"Oyun Programlamaya Giriş",e:4.5,t:"oyun"},{c:"BİM466",n:"Bulanık Mantık",e:4.5,t:"yapay_zeka"},{c:"BİM474",n:"Kriptolojiye Giriş",e:4.5,t:"guvenlik"},{c:"BİM476",n:"Veri Toplama ve İşleme",e:4.5,t:"veri"},{c:"BİM486",n:"Bilgisayar Bilim. Araş. II",e:4.5,t:"arastirma"},{c:"BİM490",n:"Bilgi Erişimine Giriş",e:4.5,t:"veri"},{c:"BİM492",n:"Tasarım Desenleri",e:4.5,t:"yazilim"},{c:"BİM496",n:"Bilgisayarla Görme",e:4.5,t:"goruntu"}
        ]
    },

    // 3. ENDÜSTRİ MÜHENDİSLİĞİ
    "endustri": {
        title: "Endüstri Mühendisliği",
        icon: "🏭",
        color: "#15803d",
        core: [
            [ {c:"ENM102",n:"Intro to Industrial Eng.",e:3.0},{c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"KIM1005",n:"Genel Kimya",e:6.0},{c:"KIM1010",n:"Genel Kimya Laboratuvarı",e:1.5},{c:"MAT1011",n:"Genel Matematik I",e:7.5},{c:"TRS127",n:"Teknik Resim",e:4.5} ],
            [ {c:"ENM104",n:"Intro to Comp. & Prog.",e:4.5},{c:"FIZ106",n:"Fizik II",e:6.0},{c:"FIZ108",n:"Fizik Laboratuvarı II",e:1.5},{c:"IKT151",n:"Genel İktisat",e:3.0},{c:"MAT1012",n:"Genel Matematik II",e:7.5},{c:"MAT2023",n:"Lin. Ceb. ve Say. Yö.",e:4.5} ],
            [ {c:"BIY243",n:"General & Molecular Bio.",e:4.0},{c:"ENM203",n:"Linear Programming",e:5.5},{c:"ENM207",n:"Advanced Programming",e:4.5},{c:"MAT2011",n:"Diferansiyel Denklemler",e:4.5},{c:"MEK215",n:"Statics & Strength",e:4.5},{c:"MUH210",n:"Genel ve Maliyet Muh.",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"ENM2006",n:"Üretim Tek. ve Malzeme",e:3.0},{c:"ENM212",n:"Integer Prog. & Network",e:6.0},{c:"ENM407",n:"Systems Analysis",e:5.0},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0},{c:"IST244",n:"Mühendislikte Olasılık",e:5.0},{c:"ISL116",n:"Fundamentals of Business",e:3.0},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"BIL409",n:"Decision Support Sys.",e:6.0},{c:"ENM301",n:"İş Etüdü",e:4.0},{c:"ENM317",n:"Mühendislik İstatistiği",e:4.5},{c:"ENM319",n:"Prod. & Ops. Planning I",e:5.0},{c:"IKT356",n:"Engineering Economics",e:4.5} ],
            [ {c:"ENM307",n:"Simulation",e:6.0},{c:"ENM310",n:"Deney Tas. ve Regresyon",e:4.5},{c:"ENM320",n:"Prod. & Ops. Planning II",e:5.0},{c:"ENM426",n:"Ergonomics",e:4.5},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0} ],
            [ {c:"ENM435",n:"Mühendislik Seminerleri I",e:1.5},{c:"ENM457",n:"Bitirme Projesi I",e:4.5},{c:"ENMSJ401",n:"Staj I",e:2.5},{c:"HUK252",n:"İş Hukuku",e:2.5} ],
            [ {c:"ENM458",n:"Bitirme Projesi II",e:5.5},{c:"ENMSJ402",n:"Staj II",e:2.5} ]
        ],
        specs: [
            {c:"ENM309",n:"Endüstriyel Bilgi Sis.",e:6.0,t:"bilisim"},{c:"ENM313",n:"Müh. Mat. Prog. Modelleri",e:4.5,t:"optimizasyon"},{c:"ENM321",n:"Endüstriyel Vaka Analiz.",e:5.0,t:"analiz"},{c:"ENM323",n:"Enerji Sistemleri Plan.",e:5.0,t:"enerji"},{c:"ENM326",n:"Ağ Optimi. ve Algorit.",e:5.0,t:"optimizasyon"},{c:"ENM314",n:"Yatırım Analizi",e:5.0,t:"finans"},{c:"ENM316",n:"İstat. Tahmin ve Zaman S.",e:5.0,t:"istatistik"},{c:"ISL475",n:"Tekno-Girişimcilik",e:4.0,t:"isletme"},{c:"ENM419",n:"Sürdürülebilir Sist. Müh.",e:5.0,t:"sistem"},{c:"ENM421",n:"Veri Bilimine Giriş",e:4.5,t:"veri"},{c:"ENM444",n:"Tedarik Zinciri Modelleme",e:4.5,t:"lojistik"},{c:"ENM454",n:"Risk Değerlendirme",e:4.5,t:"analiz"},{c:"TKY302",n:"Kalite Kontrolü",e:4.5,t:"kalite"},{c:"BIM466",n:"Bulanık Mantık",e:4.5,t:"yapay_zeka"},{c:"ENM312",n:"Üretim Sistemleri Analizi",e:5.0,t:"uretim"},{c:"ENM420",n:"Servis Sistemleri",e:4.5,t:"sistem"},{c:"ENM432",n:"Yalın Düşünce ve Üretim",e:4.5,t:"uretim"},{c:"ENM442",n:"Karar Analizi",e:4.5,t:"karar"},{c:"ENM448",n:"Proje Planlama ve Yön.",e:6.0,t:"yonetim"},{c:"ENM450",n:"İleri Sezgisel Eniyi. Gir.",e:6.0,t:"optimizasyon"},{c:"ENM452",n:"Çok Amaçlı Opt. Gir.",e:5.0,t:"optimizasyon"},{c:"PZL302",n:"Pazarlama Yönetimi",e:4.5,t:"isletme"}
        ]
    },

    // 4. MAKİNE MÜHENDİSLİĞİ
    "makine": {
        title: "Makine Mühendisliği",
        icon: "⚙️",
        color: "#ea580c",
        core: [
            [ {c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0},{c:"KIM1005",n:"Genel Kimya",e:6.0},{c:"MAT1011",n:"Genel Matematik I",e:7.5},{c:"MKM101",n:"Teknik Resim (Makine)",e:3.0},{c:"MKM103",n:"Technical English",e:2.0},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"FIZ106",n:"Fizik II",e:6.0},{c:"FIZ108",n:"Fizik Laboratuvarı II",e:1.5},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0},{c:"MAT1012",n:"Genel Matematik II",e:7.5},{c:"MKM102",n:"Intro to Mech. Eng.",e:4.0},{c:"MKM104",n:"Bilgisayar Des. Tek. Resim",e:5.0},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"BIL200",n:"Computer Programming",e:6.0},{c:"IKT356",n:"Engineering Economics",e:4.5},{c:"IST2001",n:"Mühendislik İstatistiği",e:4.0},{c:"MAT2011",n:"Diferansiyel Denklemler",e:4.5},{c:"MEK217",n:"Statics",e:5.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0},{c:"TER207",n:"Thermodynamics I",e:4.0} ],
            [ {c:"EEM214",n:"Elec. Eng. for Mech.",e:3.5},{c:"MAT2023",n:"Lineer Cebir ve Say. Yön.",e:4.5},{c:"MEK216",n:"Dynamics",e:4.0},{c:"MEK311",n:"Strength of Materials",e:5.5},{c:"MLZ232",n:"Intro to Materials Sci.",e:3.5},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0},{c:"TER208",n:"Thermodynamics II",e:5.0} ],
            [ {c:"MEK323",n:"Fluid Mechanics",e:6.0},{c:"MKM301",n:"Theory of Machines",e:5.0},{c:"MKM302",n:"Machine Design I",e:6.0},{c:"MKM309",n:"Sonlu Elemanlar An. Gir.",e:5.0} ],
            [ {c:"EEM310",n:"Control Systems",e:5.0},{c:"MKM3006",n:"Experimental Eng. I",e:3.0},{c:"MKM303",n:"Heat Transfer",e:6.0},{c:"MKM304",n:"Manufacturing Tech.",e:4.0},{c:"MKM401",n:"Machine Design II",e:6.0} ],
            [ {c:"MAKSJ401",n:"Makine Müh. Stajı I",e:2.5},{c:"MKM4007",n:"Experimental Eng. II",e:3.0},{c:"MKM403",n:"Makine Müh. Tasarım I",e:4.5} ],
            [ {c:"MAKSJ402",n:"Makine Müh. Stajı II",e:2.5},{c:"MKM404",n:"Makine Müh. Tasarım II",e:5.5} ]
        ],
        specs: [
            {c:"MKM220",n:"Problem Çözme Yöntemleri",e:4.5,t:"metot"},{c:"MKM222",n:"Rapor Yazma ve Sunum",e:4.5,t:"iletisim"},{c:"MKM307",n:"Müh. Malzemeleri",e:5.0,t:"malzeme"},{c:"MKM408",n:"Tahribatsız Muayene",e:5.0,t:"malzeme"},{c:"MKM417",n:"Alışılmamış İmalat Yön.",e:5.0,t:"imalat"},{c:"MKM419",n:"Cisimlerin Mukavemeti II",e:5.0,t:"mekanik"},{c:"MKM421",n:"Enerji Yön. ve Verimliliği",e:5.0,t:"enerji"},{c:"MKM427",n:"Kompozit Malz. Giriş",e:5.0,t:"malzeme"},{c:"MKM429",n:"Taşıt Simülasyonu",e:5.0,t:"otomotiv"},{c:"MKM4501",n:"Üç Boyutlu Kinematik",e:5.0,t:"mekanik"},{c:"MEK406",n:"Mekanik Titreşimler",e:5.0,t:"mekanik"},{c:"MKM413",n:"Sonlu Elemanlar Uyg.",e:5.0,t:"analiz"},{c:"MKM420",n:"İmalatta Kalite",e:5.0,t:"imalat"},{c:"MKM422",n:"Mikro/Nano Üretim",e:5.0,t:"imalat"},{c:"MKM424",n:"Aktif Sürüş Destek Sis.",e:5.0,t:"otomotiv"},{c:"MKM426",n:"Kojenerasyon Sis. Analiz",e:5.0,t:"enerji"},{c:"MKM428",n:"Hesaplamalı Akışkanlar D.",e:5.0,t:"akiskanlar"}
        ]
    },

    // 5. KİMYA MÜHENDİSLİĞİ
    "kimya": {
        title: "Kimya Mühendisliği",
        icon: "⚗️",
        color: "#0891b2",
        core: [
            [ {c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"KIM1001",n:"General Chemistry I",e:6.0},{c:"KMH105",n:"Technical English",e:2.0},{c:"MAT1011",n:"Genel Matematik I",e:7.5},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"FIZ106",n:"Fizik II",e:6.0},{c:"FIZ108",n:"Fizik Laboratuvarı II",e:1.5},{c:"KIM1002",n:"General Chemistry II",e:6.0},{c:"KIM1010",n:"General Chem. Lab",e:1.5},{c:"KMH108",n:"Intro to Chemical Eng.",e:2.5},{c:"MAT1012",n:"Genel Matematik II",e:7.5},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"KIM208",n:"Organik Kimya",e:4.0},{c:"KIM211",n:"Analitik Kimya",e:3.0},{c:"KMH213",n:"Chem. Process Calc.",e:6.0},{c:"MAT2011",n:"Diferansiyel Denklemler",e:4.5},{c:"MLZ203",n:"Malzeme Bilimi",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0} ],
            [ {c:"IST2001",n:"Mühendislik İstatistiği",e:4.0},{c:"KIM226",n:"Fizikokimya",e:4.0},{c:"KIM231",n:"Fizikokimya Lab",e:1.5},{c:"KMH2006",n:"Comp. Prog. in Chem. Eng.",e:4.0},{c:"MAT2023",n:"Lin. Ceb. ve Say. Yön.",e:4.5},{c:"MEK317",n:"Akışkanlar Mekaniği",e:5.0},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0} ],
            [ {c:"IKT356",n:"Engineering Economics",e:4.5},{c:"KIMSJ301",n:"Kimya Müh. Lab Stajı",e:2.5},{c:"KMH310",n:"Isı Transferi",e:5.0},{c:"KMH314",n:"Chem. Reaction Eng. I",e:5.0},{c:"KMH317",n:"Kimya Müh. Termo. I",e:4.0} ],
            [ {c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0},{c:"KMH303",n:"Math. Modeling in Chem. Eng.",e:5.0},{c:"KMH308",n:"Kütle Transferi",e:5.0},{c:"KMH318",n:"Kimya Müh. Termo. II",e:4.0},{c:"KMH425",n:"Chem. Reaction Eng. II",e:5.0} ],
            [ {c:"KIMSJ401",n:"Kimya Müh. İşletme Stajı",e:2.5},{c:"KMH415",n:"Process Dynamics & Control",e:5.0},{c:"KMH429",n:"Kimya Müh. Seçme Konular",e:2.0},{c:"KMH431",n:"Chem. Eng. Design I",e:6.0},{c:"KMH435",n:"Chem. Eng. Lab I",e:3.0} ],
            [ {c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0},{c:"KMH406",n:"Separation Processes",e:4.0},{c:"KMH432",n:"Chem. Eng. Design II",e:6.0},{c:"KMH434",n:"Kimya Müh. Uygulamaları",e:5.0},{c:"KMH436",n:"Chem. Eng. Lab II",e:3.0} ]
        ],
        specs: [
            {c:"KMH2501",n:"Müh. Hesap. Giriş",e:3.0,t:"temel"},{c:"KMH210",n:"Aletli Analiz",e:4.0,t:"analiz"},{c:"KMH354",n:"Bor Teknolojisi",e:4.0,t:"teknoloji"},{c:"KMH313",n:"Biyorafineri Prosesleri",e:4.0,t:"biyo"},{c:"KMH323",n:"Biyokimya Müh. Temelleri",e:4.0,t:"biyo"},{c:"KMH326",n:"İlaç Teknolojilerine Giriş",e:4.0,t:"saglik"},{c:"KMH3503",n:"Elektrokimyasal Güç Kay.",e:4.0,t:"enerji"},{c:"KMH353",n:"Hava Kirliliği ve Giderim",e:4.0,t:"cevre"},{c:"KMH357",n:"Elektrokimya",e:4.0,t:"kimya"},{c:"KMH409",n:"Yağ Teknolojisi",e:4.0,t:"gida"},{c:"KIM457",n:"Kimyasal Teknolojiler I",e:4.0,t:"teknoloji"},{c:"KMH316",n:"Biyoteknoloji",e:4.0,t:"biyo"},{c:"KMH320",n:"Boya Teknolojisi",e:4.0,t:"malzeme"},{c:"KMH3502",n:"Kauçuk Teknolojisi",e:4.0,t:"malzeme"},{c:"KMH358",n:"Kimyasal Süreç. Ölçme",e:4.0,t:"kontrol"},{c:"KMH360",n:"Karbon Malzemeler",e:4.0,t:"malzeme"},{c:"KMH3501",n:"Biyomedikal Malzemeler",e:4.0,t:"saglik"},{c:"KMH407",n:"Yakıt ve Enerji Tek.",e:4.0,t:"enerji"},{c:"KMH410",n:"Kömür Teknolojisi",e:4.0,t:"enerji"},{c:"KMH433",n:"K.M. Endüstriyel Ekipman",e:4.0,t:"tasarim"},{c:"KMH437",n:"Alkol Bazlı Yakıtlar",e:4.0,t:"enerji"},{c:"KMH441",n:"Katalizleme",e:4.0,t:"kimya"},{c:"KMH4502",n:"Kimyasal Proses Güvenliği",e:4.0,t:"guvenlik"},{c:"KMH452",n:"Gıda İşlem Süreçleri",e:4.0,t:"gida"},{c:"KIM458",n:"Kimyasal Teknolojiler II",e:4.0,t:"teknoloji"},{c:"KMH440",n:"Polimer Malzeme Bilimi",e:4.0,t:"malzeme"},{c:"KMH4504",n:"Yeşil Kimya Mühendisliği",e:4.0,t:"cevre"},{c:"KMH464",n:"Beton Katkıları",e:4.0,t:"malzeme"}
        ]
    },

    // 6. MALZEME BİLİMİ VE MÜHENDİSLİĞİ
    "malzeme": {
        title: "Malzeme Bilimi ve Müh.",
        icon: "🧪",
        color: "#7c3aed",
        core: [
            [ {c:"FIZ105",n:"Physics I",e:6.0},{c:"FIZ107",n:"Physics Lab I",e:1.5},{c:"KIM1001",n:"General Chemistry I",e:6.0},{c:"MAT1011",n:"Calculus I",e:7.5},{c:"MLZ109",n:"Materials World",e:2.5},{c:"TRS127",n:"Technical Drawing",e:4.5},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"FIZ106",n:"Physics II",e:6.0},{c:"FIZ108",n:"Physics Lab II",e:1.5},{c:"KIM1002",n:"General Chemistry II",e:6.0},{c:"KIM1010",n:"Chemistry Lab",e:1.5},{c:"MAT1012",n:"Calculus II",e:7.5},{c:"MLZ114",n:"Structure of Materials",e:2.5},{c:"MLZ116",n:"Freshman Project",e:1.0},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"IST2001",n:"Engineering Statistics",e:4.0},{c:"MAT2011",n:"Differential Equations",e:4.5},{c:"MAT2023",n:"Lin. Alg. & Num. Meth.",e:4.5},{c:"MEK215",n:"Statics & Strength",e:4.5},{c:"MLZ221",n:"Phys. Prop. of Materials",e:2.5},{c:"MLZ223",n:"Polymer Chemistry",e:3.0},{c:"MLZ225",n:"Raw Mat. & Unit Ops.",e:2.0},{c:"MLZ229",n:"Mat. Char. Tech. I",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0} ],
            [ {c:"BIL814",n:"Computing & Programming",e:4.0},{c:"ETK208",n:"Engineering Ethics",e:2.0},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0},{c:"MLZ216",n:"Mech. Behaviour I",e:3.0},{c:"MLZ218",n:"Ceramic Processing",e:3.0},{c:"MLZ222",n:"Mat. Char. Tech. Lab",e:3.0},{c:"MLZ230",n:"Mat. Char. Tech. II",e:3.5},{c:"MLZ231",n:"Mat. Thermo I",e:4.5},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0} ],
            [ {c:"MLZ315",n:"Electrochemistry",e:2.0},{c:"MLZ329",n:"Mat. Thermo II",e:4.5},{c:"MLZ331",n:"Mat. Proc. Lab I",e:2.0},{c:"MLZ333",n:"Phase Diagrams",e:3.0},{c:"MLZ335",n:"Metallic Materials I",e:3.0},{c:"MLZ337",n:"Transport Phenomena I",e:3.0},{c:"MLZ339",n:"Non-Crystalline Mat.",e:3.0},{c:"MLZSJ301",n:"Internship I",e:2.5} ],
            [ {c:"ILT328",n:"Communication Skills",e:1.0},{c:"MLZ326",n:"Project Management",e:2.0},{c:"MLZ328",n:"Mat. & Energy Balance",e:3.0},{c:"MLZ336",n:"Metallic Materials II",e:3.0},{c:"MLZ338",n:"Transport Phenomena II",e:3.0} ],
            [ {c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0},{c:"MLZ447",n:"Mat. Proc. Lab II",e:3.0},{c:"MLZ449",n:"Innovation & Entrep.",e:1.0},{c:"MLZ457",n:"Manuf. with Materials",e:3.0},{c:"MLZ459",n:"Degradation of Eng. Mat.",e:3.0},{c:"MLZ463",n:"Project Prep.",e:3.0} ],
            [ {c:"MLZ460",n:"Mat. Selection & Design",e:4.0},{c:"MLZ462",n:"Apps. in Mat. Eng.",e:3.5},{c:"MLZ464",n:"Project Practice",e:5.0},{c:"MLZSJ402",n:"Internship II",e:2.5} ]
        ],
        specs: [
            {c:"MLZ208",n:"Elec. Mag. Opt. Props.",e:3.0,t:"fizik"},{c:"IKT356",n:"Engineering Economics",e:4.5,t:"yonetim"},{c:"MLZ327",n:"Mech. Behaviour II",e:3.0,t:"mekanik"},{c:"MLZ330",n:"Silicate Ceramics",e:3.0,t:"seramik"},{c:"MLZ332",n:"Processing of Polymers",e:3.0,t:"polimer"},{c:"MLZ354",n:"Spectroscopic Analysis",e:3.0,t:"analiz"},{c:"MLZ455",n:"Heat Treatment",e:3.0,t:"metal"},{c:"MLZ472",n:"Biomaterials",e:3.0,t:"biyo"},{c:"MLZ474",n:"Aviation Materials",e:3.0,t:"havacilik"},{c:"MLZ475",n:"Polymer Composites",e:3.0,t:"polimer"},{c:"MLZ477",n:"Microscopy in Practice",e:3.0,t:"analiz"},{c:"MLZ482",n:"Refractories",e:3.0,t:"seramik"},{c:"MLZ484",n:"Glass Ceramics",e:3.0,t:"seramik"},{c:"MLZ488",n:"Technical Glasses",e:3.0,t:"cam"},{c:"TKY411",n:"Quality Control",e:3.0,t:"kalite"},{c:"MLZ465",n:"Mach. Tech. of Metals",e:3.0,t:"metal"},{c:"MLZ467",n:"Particle Size Control",e:3.0,t:"uretim"},{c:"MLZ468",n:"Rubber Technology",e:3.0,t:"polimer"},{c:"MLZ470",n:"Cement and Concrete",e:3.0,t:"yapi"},{c:"MLZ471",n:"Nanomaterials",e:3.0,t:"nano"},{c:"MLZ476",n:"Armour Materials",e:3.0,t:"savunma"},{c:"MLZ479",n:"Electroceramic Mat.",e:3.0,t:"seramik"},{c:"MLZ480",n:"Tile and Brick",e:3.0,t:"yapi"},{c:"MLZ486",n:"Strengthening Mech.",e:3.0,t:"mekanik"},{c:"MLZ492",n:"Mat. in Cosmetic Sci.",e:3.0,t:"kimya"}
        ]
    },

    // 7. İNŞAAT MÜHENDİSLİĞİ
    "insaat": {
        title: "İnşaat Mühendisliği",
        icon: "🏗️",
        color: "#b45309",
        core: [
            [ {c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"ING250",n:"Reading & Speaking in English",e:2.0},{c:"INS101",n:"İnşaat Müh. Giriş",e:3.5},{c:"KIM1005",n:"Genel Kimya",e:6.0},{c:"KIM1010",n:"Genel Kimya Lab.",e:1.5},{c:"MAT1011",n:"Genel Matematik I",e:7.5},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"FIZ106",n:"Fizik II",e:6.0},{c:"FIZ108",n:"Fizik Laboratuvarı II",e:1.5},{c:"ING360",n:"English for Business",e:2.0},{c:"INS118",n:"İnşaat Müh. Bilgisayar Uyg.",e:3.5},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0},{c:"MAT1012",n:"Genel Matematik II",e:7.5},{c:"TRS110",n:"Teknik Resim (İnşaat)",e:3.5},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"INS239",n:"İnşaatta Hukuksal Yaklaş.",e:3.0},{c:"INS241",n:"Mat. Sci. in Civil Eng.",e:4.5},{c:"INS246",n:"Comp. Prog. in Civil Eng.",e:3.0},{c:"IST2001",n:"Mühendislik İstatistiği",e:4.0},{c:"MAT2011",n:"Diferansiyel Denklemler",e:4.5},{c:"MAT2023",n:"Lin. Ceb. ve Say. Yön.",e:4.5},{c:"MEK201",n:"Statics",e:4.5},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0} ],
            [ {c:"IKT356",n:"Engineering Economics",e:4.5},{c:"INS240",n:"Hydrology",e:5.0},{c:"MEK206",n:"Dynamics",e:4.0},{c:"MEK212",n:"Strength of Materials I",e:6.0},{c:"MLZ204",n:"Yapı Malzemesi",e:5.0},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0} ],
            [ {c:"INS307",n:"Structural Analysis I",e:6.0},{c:"INS311",n:"Transportation Eng. I",e:6.0},{c:"INS315",n:"Soil Mechanics I",e:4.5},{c:"INS317",n:"Soil Mechanics Lab",e:1.5},{c:"INSSJ301",n:"Staj I",e:2.5},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0},{c:"MEK307",n:"Fluid Mechanics",e:4.5} ],
            [ {c:"INS302",n:"Betonarme I",e:6.0},{c:"INS312",n:"Const. Eng. & Mgmt.",e:4.5},{c:"INS320",n:"Steel Structures",e:4.5},{c:"INS322",n:"Hydraulics",e:6.0},{c:"INS342",n:"Temel İnşaat I",e:4.5},{c:"INSSJ302",n:"Staj II",e:2.5} ],
            [ {c:"INS415",n:"İnşaat Müh. Seçme Konular",e:3.0},{c:"INS417",n:"Tasarım Projesi",e:3.5} ],
            [ {c:"INS414",n:"İnşaat Müh. Dizayn Uyg.",e:4.0} ]
        ],
        specs: [
            {c:"INS401",n:"Betonarme Projesi",e:4.5,t:"yapi"},{c:"INS407",n:"Betonarme II",e:4.5,t:"yapi"},{c:"INS4504",n:"Topoğrafya",e:4.5,t:"geoteknik"},{c:"INS451",n:"GIS Apps in Hydrology",e:4.5,t:"su"},{c:"INS459",n:"Geoteknik Dizaynı",e:4.5,t:"geoteknik"},{c:"INS465",n:"Çelik Yapı Dizaynı",e:4.5,t:"yapi"},{c:"INS469",n:"Yenilenebilir Enerji",e:4.5,t:"enerji"},{c:"INS471",n:"Num. Mod. in Hydro.",e:4.5,t:"su"},{c:"INS472",n:"Trafik Mühendisliğine Giriş",e:4.5,t:"ulastirma"},{c:"INS473",n:"Ahşap Yapılar",e:4.5,t:"yapi"},{c:"INS481",n:"Soil Mechanics II",e:4.5,t:"geoteknik"},{c:"INS482",n:"Zemin İyileştirmesi",e:4.5,t:"geoteknik"},{c:"INS485",n:"Sulama Kurutma",e:4.5,t:"su"},{c:"INS487",n:"Su Yapıları",e:4.5,t:"su"},{c:"INS498",n:"Yapı Dinamiğine Giriş",e:4.5,t:"yapi"},{c:"INS314",n:"Structural Analysis II",e:4.5,t:"yapi"},{c:"INS4502",n:"Ulaştırma Veri Analizi",e:4.5,t:"ulastirma"},{c:"INS452",n:"Hidrolojide Bil. Uyg.",e:4.5,t:"su"},{c:"INS454",n:"Yapıların Deprem Analizi",e:4.5,t:"deprem"},{c:"INS462",n:"Taze/Sertleşmiş Beton",e:4.5,t:"malzeme"},{c:"INS468",n:"Bilgisayar Tab. Proje Yön.",e:4.5,t:"yonetim"},{c:"INS470",n:"Beton Teknolojisi",e:4.5,t:"malzeme"},{c:"INS475",n:"Çok Katlı Çelik Yapı Tas.",e:4.5,t:"yapi"},{c:"INS486",n:"Zemin Dinamiğine Giriş",e:4.5,t:"geoteknik"},{c:"INS489",n:"Açık Kanal Hidroliği",e:4.5,t:"su"},{c:"INS490",n:"Kıyı ve Liman Müh.",e:4.5,t:"su"},{c:"INS492",n:"Su Kaynakları Müh.",e:4.5,t:"su"}
        ]
    },

    // 8. ÇEVRE MÜHENDİSLİĞİ
    "cevre": {
        title: "Çevre Mühendisliği",
        icon: "🌱",
        color: "#16a34a",
        core: [
            [ {c:"CEV203",n:"Çevre Mühendisliğine Giriş",e:2.5},{c:"CEV209",n:"Technical English I",e:2.5},{c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"KIM1001",n:"General Chemistry I",e:6.0},{c:"MAT1011",n:"Genel Matematik I",e:7.5},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"CEV1006",n:"Ekoloji",e:2.0},{c:"FIZ106",n:"Fizik II",e:6.0},{c:"FIZ108",n:"Fizik Laboratuvarı II",e:1.5},{c:"KIM1002",n:"General Chemistry II",e:6.0},{c:"KIM1010",n:"Chemistry Lab",e:1.5},{c:"MAT1012",n:"Genel Matematik II",e:7.5},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"BIY353",n:"Çevre Mikrobiyolojisi",e:3.0},{c:"BIY357",n:"Env. Microbiology Lab",e:2.5},{c:"CEV210",n:"Technical English II",e:2.0},{c:"CEV213",n:"Çevre Kimyası I",e:3.0},{c:"CEV216",n:"Sürdürülebilirlik ve İnovasyon",e:2.5},{c:"MAT2011",n:"Diferansiyel Denklemler",e:4.5},{c:"MLZ203",n:"Materials Science",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0} ],
            [ {c:"CEV2006",n:"Env. Chemistry Lab",e:3.0},{c:"CEV206",n:"Environmental Chem II",e:4.5},{c:"IKT356",n:"Engineering Economics",e:4.5},{c:"IST2001",n:"Mühendislik İstatistiği",e:4.0},{c:"MAT2023",n:"Lineer Cebir ve Say. Yön.",e:4.5},{c:"MEK215",n:"Statics & Strength",e:4.5},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0} ],
            [ {c:"CEV305",n:"Unit Ops & Processes I",e:4.0},{c:"CEV310",n:"Su ve Toprak Kirliliği",e:3.0},{c:"CEV316",n:"Air Pollution",e:3.5},{c:"INS308",n:"Hydrology",e:4.5},{c:"MEK315",n:"Akışkanlar Mekaniği",e:5.0} ],
            [ {c:"CEV312",n:"Su Temini ve Atıksu Uzak.",e:3.0},{c:"CEV324",n:"Unit Ops & Processes II",e:4.0},{c:"CEV342",n:"Unit Ops Lab",e:4.0},{c:"CEV344",n:"Katı Atık Yönetimi",e:4.0},{c:"CEV427",n:"Air Pollution Control",e:3.5},{c:"TER403",n:"Termodinamik",e:3.5} ],
            [ {c:"CEV442",n:"Tehlikeli Atık Yönetimi",e:3.0},{c:"CEV445",n:"Environmental Modeling",e:4.5},{c:"CEV447",n:"Wastewater Engineering",e:4.0},{c:"CEV449",n:"Bitirme Projesi I",e:3.0},{c:"CEVSJ401",n:"Staj I",e:2.5},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0} ],
            [ {c:"CEV438",n:"Çevre Yönetimi",e:5.0},{c:"CEV450",n:"Bitirme Projesi II",e:5.5},{c:"CEVSJ402",n:"Staj II",e:2.5},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0} ]
        ],
        specs: [
            {c:"CEV323",n:"Biyoremediasyon Tek.",e:3.0,t:"biyo"},{c:"CEV325",n:"Çevre Müh. Bilişim Tek.",e:3.0,t:"bilisim"},{c:"CEV327",n:"Yeşil ve Sürd. Tarım",e:3.0,t:"tarim"},{c:"CEV335",n:"Su ve Atıksu Dezenf.",e:3.0,t:"su"},{c:"CEV340",n:"Çevresel İstatistik Analizi",e:3.0,t:"analiz"},{c:"CEV346",n:"Enerji Üretimi ve Çevre",e:3.0,t:"enerji"},{c:"CEV352",n:"Çevre Sağlığı",e:3.0,t:"saglik"},{c:"CEV354",n:"Çevresel Ayak İzleri",e:3.0,t:"surdurulebilirlik"},{c:"CEV356",n:"Atıksuların Yeniden Kul.",e:3.0,t:"su"},{c:"CEV358",n:"Küresel İklim Değişikliği",e:3.0,t:"iklim"},{c:"CEV360",n:"Kurumsal Sürd. Yönetimi",e:3.0,t:"yonetim"},{c:"CEV362",n:"Çevre Ekonomisi",e:3.0,t:"ekonomi"},{c:"CEV398",n:"Çevre Denetimi",e:3.0,t:"yonetim"},{c:"CEV431",n:"Su Arıtımı Projesi",e:4.0,t:"tasarim"},{c:"CEV4501",n:"Çevre Sosyolojisi",e:3.0,t:"sosyal"},{c:"CEV473",n:"Su Kalitesi Değerlendirmesi",e:3.0,t:"su"},{c:"CEV477",n:"Uzaktan Algılama ve CBS",e:3.0,t:"bilisim"},{c:"CEV479",n:"Yeşil Müh. Tas. ve Sürd.",e:3.0,t:"tasarim"},{c:"CEV481",n:"Arıtma Çamurları",e:3.0,t:"atik"},{c:"CEV483",n:"Çevre Toksikolojisi",e:3.0,t:"saglik"},{c:"CEV485",n:"Çevresel Maruz Kalım",e:3.0,t:"analiz"},{c:"CEV493",n:"Mevzuat Yaklaşımı",e:3.0,t:"hukuk"},{c:"CEV495",n:"Hava Kir. Meteorolojisi",e:3.0,t:"hava"},{c:"CEV497",n:"Endüstriyel Atıksu Arıtımı",e:3.0,t:"su"},{c:"CEV499",n:"İleri Arıtım",e:3.0,t:"su"},{c:"CEV432",n:"Atıksu Arıtımı Projesi",e:4.0,t:"tasarim"},{c:"CEV444",n:"Katı Atık Yön. Projesi",e:4.0,t:"tasarim"},{c:"CEV466",n:"Ekolojik Planlama",e:3.0,t:"ekoloji"},{c:"CEV468",n:"Havza Yönetimi",e:3.0,t:"su"},{c:"CEV484",n:"Küçük Ölçekli Arıtım",e:3.0,t:"su"},{c:"CEV492",n:"Hava Kalitesi Yön. Prj.",e:4.0,t:"tasarim"},{c:"CEV498",n:"Tıbbi Atık Yönetimi",e:3.0,t:"atik"}
        ]
    }
};
