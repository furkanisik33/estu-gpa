/* ESTÜ NOT MERKEZİ - VERİTABANI (FIXED VERSION) */

const SYSTEM_CONFIG = {
    gradeScale: { "AA":4.0, "AB":3.7, "BA":3.3, "BB":3.0, "BC":2.7, "CB":2.3, "CC":2.0, "CD":1.7, "DC":1.3, "DD":1.0, "FF":0.0 },
    semesterLabels: {
        tr: [ "1. Dönem (Güz)", "2. Dönem Sonu (1. Sınıf)", "3. Dönem Sonu", "4. Dönem Sonu (2. Sınıf)", "5. Dönem Sonu", "6. Dönem Sonu (3. Sınıf)", "7. Dönem Sonu", "4. Sınıf / Mezuniyet" ],
        en: [ "1st Semester (Fall)", "End of 2nd Sem. (Freshman)", "End of 3rd Semester", "End of 4th Sem. (Sophomore)", "End of 5th Semester", "End of 6th Sem. (Junior)", "End of 7th Semester", "Manual / Senior" ]
    }
};

const DEPARTMENTS = {
    "eee": {
        title: "Elektrik-Elektronik Müh.",
        icon: "⚡",
        color: "#c62828",
        faculty: "Mühendislik Fakültesi",
        core: [
            [ {c:"MAT1011",n:"Calculus I",e:7.5},{c:"FIZ105",n:"Physics I",e:6},{c:"FIZ107",n:"Physics Lab I",e:1.5},{c:"KIM1005",n:"Gen. Chemistry",e:6},{c:"BIM122",n:"Discrete Math",e:5},{c:"TUR125",n:"Türk Dili I",e:2} ],
            [ {c:"MAT1012",n:"Calculus II",e:7.5},{c:"FIZ106",n:"Physics II",e:6},{c:"FIZ108",n:"Physics Lab II",e:1.5},{c:"MAT2021",n:"Linear Algebra",e:4.5},{c:"EEM102",n:"Intro to EE",e:7.5},{c:"EEM104",n:"Prof. Aspects",e:3} ],
            [ {c:"MAT2011",n:"Diff. Eq.",e:4.5},{c:"MAT2093",n:"Eng. Math",e:6},{c:"EEM209",n:"Circuit Anal. I",e:7.5},{c:"EEM206",n:"Circuits Lab",e:3},{c:"BIL200",n:"Comp. Prog.",e:6} ],
            [ {c:"EEM208",n:"Electromag.",e:6},{c:"EEM232",n:"Digital Sys. I",e:6},{c:"EEM238",n:"Digital Lab",e:2},{c:"IST2044",n:"Probability",e:5},{c:"EEM210",n:"Semiconductors",e:5},{c:"TUR126",n:"Türk Dili II",e:2} ],
            [ {c:"EEM301",n:"Sig. & Sys.",e:6},{c:"EEM311",n:"Energy Conv.",e:6},{c:"EEM321",n:"Electronics I",e:5},{c:"EEM328",n:"Elec. Lab",e:3},{c:"IKT151",n:"Economics",e:3},{c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2} ],
            [ {c:"EEM308",n:"Comm. I",e:7},{c:"EEM336",n:"Microproc. I",e:7},{c:"EEM342",n:"Controls",e:7},{c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2} ]
        ],
        specs: []
    },
    "bilgisayar": {
        title: "Bilgisayar Mühendisliği",
        icon: "💻",
        color: "#1e293b",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "endustri": {
        title: "Endüstri Mühendisliği",
        icon: "🏭",
        color: "#15803d",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "makine": {
        title: "Makine Mühendisliği",
        icon: "⚙️",
        color: "#ea580c",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "kimya": {
        title: "Kimya Mühendisliği",
        icon: "⚗️",
        color: "#0891b2",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "malzeme": {
        title: "Malzeme Bilimi ve Müh.",
        icon: "🧪",
        color: "#7c3aed",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "insaat": {
        title: "İnşaat Mühendisliği",
        icon: "🏗️",
        color: "#b45309",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "cevre": {
        title: "Çevre Mühendisliği",
        icon: "🌱",
        color: "#16a34a",
        faculty: "Mühendislik Fakültesi",
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
        specs: []
    },
    "ugmb": {
        title: "Uçak Gövde Motor Bakım",
        icon: "✈️",
        color: "#0284c7",
        faculty: "Havacılık ve Uzay Bilimleri",
        core: [
            [ {c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"MAT801",n:"Matematik I",e:4.0},{c:"MAT803",n:"Lineer Cebir",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0},{c:"TUR125",n:"Türk Dili I",e:2.0},{c:"UGB105",n:"Uçuş Teorisi",e:3.5} ],
            [ {c:"FIZ231",n:"Dalgalar ve Optik",e:5.0},{c:"HYO116",n:"Havacılık Kuralları",e:4.0},{c:"HYO225",n:"Uçak Bakım Terminolojisi I",e:4.0},{c:"MAT802",n:"Matematik II",e:4.0},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"HYO221",n:"Temel Elektrik I",e:3.0},{c:"HYO226",n:"Uçak Bakım Terminolojisi II",e:4.0},{c:"MEK112",n:"Mekanik",e:3.0},{c:"TER203",n:"Termodinamik",e:4.0} ],
            [ {c:"HYO2006",n:"Uçak Malzeme Bilgisi",e:3.5},{c:"HYO222",n:"Temel Elektrik II",e:3.0},{c:"MEK218",n:"Akışkanlar Mekaniği",e:3.0},{c:"UGB2006",n:"Uçak Yapıları ve Sis. I",e:4.5},{c:"UGB202",n:"Temel Elektronik I",e:3.5},{c:"UGB315",n:"Gaz Türbinli Motor Teo.",e:4.0} ],
            [ {c:"HYO2008",n:"Temel Elektrik Lab.",e:2.0},{c:"HYO3005",n:"Tahribatsız Muayene Yön.",e:2.0},{c:"HYO3007",n:"Uçak Aerodinamiği",e:4.0},{c:"HYO336",n:"Uçak Elektrik Sistemleri",e:4.0},{c:"UGB3009",n:"Temel Elektronik II",e:4.0},{c:"UGB325",n:"Uçak Elektrik Atölyesi",e:5.0},{c:"UGB407",n:"Uçak Yapıları ve Sis. II",e:4.0} ],
            [ {c:"HYO313",n:"Elektrik Makinaları",e:3.0},{c:"HYO420",n:"Elektromanyetik Çevre",e:2.5},{c:"HYO436",n:"Uçuş Kumandaları",e:2.0},{c:"MEK318",n:"Uçuş Mekaniği",e:3.0},{c:"UGB3006",n:"Uçak Donanım ve Uyg.",e:7.0},{c:"UGB322",n:"Gaz Türbinli Motor Sis. I",e:4.5},{c:"UGB326",n:"Aviyonik Sistemler",e:4.0},{c:"UGB412",n:"Uçak Yapıları ve Sis. III",e:4.0} ],
            [ {c:"HYO338",n:"Elektronik Gösterge Sis.",e:4.0},{c:"HYO419",n:"Modern Aviyonik Sis.",e:2.5},{c:"HYO422",n:"İnsan Faktörleri",e:3.0},{c:"UGB4005",n:"Gaz Türbinli Motor Atölyesi",e:4.5},{c:"UGB409",n:"Bakım Uygulamaları",e:6.5},{c:"UGB411",n:"Gaz Türbinli Motor Sis. II",e:5.5},{c:"UGB420",n:"Pervaneler",e:4.0} ],
            [ {c:"UGBSJ402",n:"Staj I",e:5.0} ]
        ],
        specs: []
    },
    "hee": {
        title: "Havacılık Elektrik Elektroniği",
        icon: "⚡✈️",
        color: "#0369a1",
        faculty: "Havacılık ve Uzay Bilimleri",
        core: [
            [ {c:"FIZ105",n:"Fizik I",e:6.0},{c:"FIZ107",n:"Fizik Laboratuvarı I",e:1.5},{c:"HEE105",n:"Uçuş Teorisi",e:3.5},{c:"MAT801",n:"Matematik I",e:4.0},{c:"MAT803",n:"Lineer Cebir",e:3.0},{c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0},{c:"TUR125",n:"Türk Dili I",e:2.0} ],
            [ {c:"FIZ231",n:"Dalgalar ve Optik",e:5.0},{c:"HYO116",n:"Havacılık Kuralları",e:4.0},{c:"MAT802",n:"Matematik II",e:4.0},{c:"MEK112",n:"Mekanik",e:3.0},{c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0},{c:"TUR126",n:"Türk Dili II",e:2.0} ],
            [ {c:"HEE213",n:"Uçak Yapıları ve Sis. I",e:3.0},{c:"HYO2006",n:"Uçak Malzeme Bilgisi",e:3.5},{c:"HYO221",n:"Temel Elektrik I",e:3.0},{c:"HYO225",n:"Uçak Bakım Terminolojisi I",e:4.0},{c:"TER203",n:"Termodinamik",e:4.0} ],
            [ {c:"HEE2006",n:"Temel Elektronik I",e:3.0},{c:"HEE214",n:"Uçak Yapıları ve Sis. II",e:2.0},{c:"HEE236",n:"Haberleşme Sistemleri I",e:3.0},{c:"HYO2008",n:"Temel Elektrik Lab.",e:2.0},{c:"HYO222",n:"Temel Elektrik II",e:3.0},{c:"HYO226",n:"Uçak Bakım Terminolojisi II",e:4.0},{c:"HYO3005",n:"Tahribatsız Muayene Yön.",e:2.0},{c:"MEK218",n:"Akışkanlar Mekaniği",e:3.0} ],
            [ {c:"HEE3005",n:"Bakım Uygulamaları I",e:9.5},{c:"HEE315",n:"Uçak Yapıları ve Sis. III",e:3.0},{c:"HEE327",n:"Temel Elektronik II",e:3.0},{c:"HEE329",n:"Sayısal Devreler I",e:3.0},{c:"HYO3007",n:"Uçak Aerodinamiği",e:4.0},{c:"HYO313",n:"Elektrik Makinaları",e:3.0} ],
            [ {c:"HEE318",n:"Temel Elektronik III",e:2.0},{c:"HEE320",n:"Sayısal Devreler II",e:3.0},{c:"HEE324",n:"Seyrüsefer Sistemleri I",e:4.0},{c:"HEE326",n:"Uçak Elektrik Atölyesi",e:5.0},{c:"HEE328",n:"Sayısal Veri İletimi",e:2.0},{c:"HYO336",n:"Uçak Elektrik Sistemleri",e:4.0},{c:"HYO338",n:"Elektronik Gösterge Sis.",e:4.0},{c:"MEK318",n:"Uçuş Mekaniği",e:3.0} ],
            [ {c:"HEE421",n:"Haberleşme Sistemleri II",e:3.0},{c:"HEE423",n:"Seyrüsefer Sistemleri II",e:3.0},{c:"HEE431",n:"Gaz Türbinli Motorlar",e:3.0},{c:"HEE443",n:"Mikroişlemciler",e:3.0},{c:"HEE453",n:"Uçak Gösterge Sis. I",e:3.0},{c:"HYO420",n:"Elektromanyetik Çevre",e:2.5},{c:"HYO421",n:"Otomatik Uçuş Sistemleri",e:3.0} ],
            [ {c:"HEE432",n:"Gaz Türbinli Motor Atölyesi",e:1.5},{c:"HEE444",n:"Uçak Gösterge Sis. II",e:2.0},{c:"HEE456",n:"Bakım Uygulamaları II",e:3.5},{c:"HEESJ402",n:"Staj I",e:5.0},{c:"HYO419",n:"Modern Aviyonik Sistemler",e:2.5},{c:"HYO422",n:"İnsan Faktörleri",e:3.0},{c:"HYO436",n:"Uçuş Kumandaları",e:2.0} ]
        ],
        specs: []
    }
};
