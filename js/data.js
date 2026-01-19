/* ESTÜ MÜHENDİSLİK NOT MERKEZİ - VERİTABANI
   Bu dosya tüm bölümlerin derslerini ve ayarlarını içerir.
*/

// Genel Ayarlar
const SYSTEM_CONFIG = {
    gradeScale: { "AA":4.0, "AB":3.7, "BA":3.3, "BB":3.0, "BC":2.7, "CB":2.3, "CC":2.0, "CD":1.7, "DC":1.3, "DD":1.0, "FF":0.0 },
    semesterLabels: {
        tr: [ "1. Dönem (Güz)", "2. Dönem Sonu (1. Sınıf)", "3. Dönem Sonu", "4. Dönem Sonu (2. Sınıf)", "5. Dönem Sonu", "6. Dönem Sonu (3. Sınıf)", "Manuel / 4. Sınıf" ],
        en: [ "1st Semester (Fall)", "End of 2nd Sem. (Freshman)", "End of 3rd Semester", "End of 4th Sem. (Sophomore)", "End of 5th Semester", "End of 6th Sem. (Junior)", "Manual / Senior" ]
    }
};

// Bölüm Verileri
const DEPARTMENTS = {
    // 1. ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ (PRESTİJ)
    "eee": {
        title: "Elektrik-Elektronik Müh.",
        icon: "⚡",
        color: "#c62828", // EEE Kırmızısı
        core: [
            // 1. DÖNEM
            [ {c:"MAT1011",n:"Calculus I",e:7.5},{c:"FIZ105",n:"Physics I",e:6},{c:"FIZ107",n:"Physics Lab I",e:1.5},{c:"KIM1005",n:"Gen. Chemistry",e:6},{c:"BIM122",n:"Discrete Math",e:5},{c:"TUR125",n:"Turk Dili I",e:2} ],
            // 2. DÖNEM
            [ {c:"MAT1012",n:"Calculus II",e:7.5},{c:"FIZ106",n:"Physics II",e:6},{c:"FIZ108",n:"Physics Lab II",e:1.5},{c:"MAT2021",n:"Linear Algebra",e:4.5},{c:"EEM102",n:"Intro to EE",e:7.5},{c:"EEM104",n:"Prof. Aspects",e:3} ],
            // 3. DÖNEM
            [ {c:"MAT2011",n:"Diff. Eq.",e:4.5},{c:"MAT2093",n:"Eng. Math",e:6},{c:"EEM209",n:"Circuit Anal. I",e:7.5},{c:"EEM206",n:"Circuits Lab",e:3},{c:"BIL200",n:"Comp. Prog.",e:6} ],
            // 4. DÖNEM
            [ {c:"EEM208",n:"Electromag.",e:6},{c:"EEM232",n:"Digital Sys. I",e:6},{c:"EEM238",n:"Digital Lab",e:2},{c:"IST2044",n:"Probability",e:5},{c:"EEM210",n:"Semiconductors",e:5},{c:"TUR126",n:"Turk Dili II",e:2} ],
            // 5. DÖNEM
            [ {c:"EEM301",n:"Sig. & Sys.",e:6},{c:"EEM311",n:"Energy Conv.",e:6},{c:"EEM321",n:"Electronics I",e:5},{c:"EEM328",n:"Elec. Lab",e:3},{c:"IKT151",n:"Economics",e:3},{c:"ISG401",n:"OHS I",e:2},{c:"TAR165",n:"History I",e:2} ],
            // 6. DÖNEM
            [ {c:"EEM308",n:"Comm. I",e:7},{c:"EEM336",n:"Microproc. I",e:7},{c:"EEM342",n:"Controls",e:7},{c:"ISG402",n:"OHS II",e:2},{c:"TAR166",n:"History II",e:2} ]
        ],
        specs: [
            {c:"EEM322",n:"Electronics II",e:5,t:"elektronik"},{c:"EEM403",n:"Optoelectronics",e:5,t:"elektronik"},{c:"EEM449",n:"Embedded Sys.",e:5,t:"elektronik sayisal"},
            {c:"EEM470",n:"Microwaves",e:5,t:"elektronik haberlesme"},{c:"EEM417",n:"Eng. Comp.",e:5,t:"elektronik guc haberlesme kontrol sayisal sinyal"},
            {c:"EEM471",n:"Elec. Machinery",e:5,t:"guc"},{c:"EEM473",n:"Power Sys. I",e:5,t:"guc"},{c:"EEM475",n:"Power Elec. I",e:5,t:"guc kontrol"},
            {c:"EEM409",n:"Random Signals",e:5,t:"haberlesme sinyal"},{c:"EEM467",n:"Digital Comm.",e:5,t:"haberlesme sinyal"},{c:"EEM477",n:"DSP",e:5,t:"haberlesme kontrol sayisal sinyal"},
            {c:"EEM491",n:"Linear Controls",e:5,t:"kontrol sinyal"},{c:"EEM451",n:"Ind. Control",e:5,t:"kontrol"},{c:"EEM334",n:"Digital Sys. II",e:5,t:"sayisal"},
            {c:"EEM480",n:"Algorithms",e:5,t:"sayisal"},{c:"EEM489",n:"Microproc. II",e:5,t:"sayisal"}
        ]
    },

  // 2. BİLGİSAYAR MÜHENDİSLİĞİ
    "bilgisayar": {
        title: "Bilgisayar Mühendisliği",
        icon: "💻",
        color: "#1e293b", // Koyu lacivert/gri tonu
        core: [
            // 1. YARIYIL
            [ 
                {c:"BİM103",n:"Computer Programming I",e:5.0},
                {c:"BİM105",n:"Intro to Computer Eng.",e:2.0},
                {c:"FIZ105",n:"Physics I",e:6.0},
                {c:"FIZ107",n:"Physics Lab I",e:1.5},
                {c:"KIM1005",n:"General Chemistry",e:6.0},
                {c:"MAT1011",n:"Calculus I",e:7.5},
                {c:"TUR125",n:"Türk Dili I",e:2.0}
            ],
            // 2. YARIYIL
            [ 
                {c:"BİM108",n:"Computer Programming II",e:6.0},
                {c:"BİM122",n:"Discrete Comp. Struct.",e:5.0},
                {c:"FIZ106",n:"Physics II",e:6.0},
                {c:"FIZ108",n:"Physics Lab II",e:1.5},
                {c:"MAT1012",n:"Calculus II",e:7.5},
                {c:"TUR126",n:"Türk Dili II",e:2.0}
            ],
            // 3. YARIYIL
            [ 
                {c:"BİM2005",n:"Computer Programming III",e:6.0},
                {c:"BİM203",n:"Logic Design",e:6.0},
                {c:"BİM209",n:"Software Design & Dev.",e:6.0},
                {c:"BİM213",n:"Data Structures & Algo.",e:5.5},
                {c:"MAT2021",n:"Linear Algebra",e:4.5},
                {c:"TAR165",n:"Atatürk İlk. ve İnk. I",e:2.0}
            ],
            // 4. YARIYIL
            [ 
                {c:"BİM2006",n:"Computer Programming IV",e:5.5},
                {c:"BİM2008",n:"Formal Lang. & Automata",e:4.5},
                {c:"BİM216",n:"Database Mgmt. Sys.",e:5.0},
                {c:"BİM222",n:"Internet Programming",e:4.5},
                {c:"IST252",n:"Probability & Statistics",e:4.0},
                {c:"MAT2004",n:"Diff. Eq. & Num. Meth.",e:4.5},
                {c:"TAR166",n:"Atatürk İlk. ve İnk. II",e:2.0}
            ],
            // 5. YARIYIL
            [ 
                {c:"BİM3005",n:"Fund. of Software Eng.",e:4.5},
                {c:"BİM3007",n:"Math Tools for Comp. Eng.",e:6.0},
                {c:"BİM303",n:"Microcomputers",e:7.0},
                {c:"BİM305",n:"Computer Organization",e:5.0}
            ],
            // 6. YARIYIL
            [ 
                {c:"BİM218",n:"Operating Systems",e:4.5},
                {c:"BİM304",n:"Comp. Algorithm Design",e:6.0},
                {c:"BİM308",n:"Web Server Programming",e:4.5},
                {c:"BİM324",n:"Computer Networks",e:4.5},
                {c:"BIMSJ302",n:"Internship I",e:2.5}
            ],
            // 7. YARIYIL
            [ 
                {c:"BİM437",n:"Comp. Eng. Design",e:4.0},
                {c:"BIMSJ401",n:"Internship II",e:2.5},
                {c:"ISG401",n:"İş Sağlığı ve Güvenliği I",e:2.0}
            ],
            // 8. YARIYIL
            [ 
                {c:"BİM444",n:"Comp. Eng. Applications",e:7.0},
                {c:"ISG402",n:"İş Sağlığı ve Güvenliği II",e:2.0}
            ]
        ],
        specs: [
            // MESLEKİ SEÇMELİ DERSLER
            {c:"BİM309",n:"Artificial Intelligence",e:4.5,t:"yapay_zeka"},
            {c:"BİM453",n:"Intro to Machine Learning",e:4.5,t:"yapay_zeka"},
            {c:"BİM454",n:"Prog. Language Concepts",e:4.5,t:"yazilim"},
            {c:"BİM459",n:"AI in Healthcare",e:4.5,t:"yapay_zeka"},
            {c:"BİM461",n:"Intro to Cloud Computing",e:4.5,t:"sistem"},
            {c:"BİM463",n:"Intro to NLP",e:4.5,t:"yapay_zeka"},
            {c:"BİM472",n:"Image Processing",e:4.5,t:"goruntu"},
            {c:"BİM485",n:"Research in CS I",e:4.5,t:"arastirma"},
            {c:"BİM493",n:"Mobile Programming I",e:4.5,t:"yazilim"},
            {c:"BİM447",n:"Intro to Deep Learning",e:4.5,t:"yapay_zeka"},
            {c:"BİM449",n:"Intro to Game Prog.",e:4.5,t:"oyun"},
            {c:"BİM466",n:"Fuzzy Logic",e:4.5,t:"yapay_zeka"},
            {c:"BİM474",n:"Intro to Cryptography",e:4.5,t:"guvenlik"},
            {c:"BİM476",n:"Data Acq. and Processing",e:4.5,t:"veri"},
            {c:"BİM486",n:"Research in CS II",e:4.5,t:"arastirma"},
            {c:"BİM490",n:"Intro to Info. Retrieval",e:4.5,t:"veri"},
            {c:"BİM492",n:"Design Patterns",e:4.5,t:"yazilim"},
            {c:"BİM496",n:"Computer Vision",e:4.5,t:"goruntu"}
        ]
    },
   
    // 3. ENDÜSTRİ MÜHENDİSLİĞİ
    "endustri": {
        title: "Endüstri Mühendisliği",
        icon: "🏭",
        color: "#15803d",
        core: [],
        specs: []
    },

    // 4. MAKİNE MÜHENDİSLİĞİ
    "makine": {
        title: "Makine Mühendisliği",
        icon: "⚙️",
        color: "#ea580c",
        core: [],
        specs: []
    },

    // 5. KİMYA MÜHENDİSLİĞİ
    "kimya": {
        title: "Kimya Mühendisliği",
        icon: "⚗️",
        color: "#0891b2",
        core: [],
        specs: []
    },

    // 6. MALZEME BİLİMİ VE MÜH.
    "malzeme": {
        title: "Malzeme Bilimi ve Müh.",
        icon: "🧪",
        color: "#7c3aed",
        core: [],
        specs: []
    },

    // 7. İNŞAAT MÜHENDİSLİĞİ
    "insaat": {
        title: "İnşaat Mühendisliği",
        icon: "🏗️",
        color: "#b45309",
        core: [],
        specs: []
    },

    // 8. ÇEVRE MÜHENDİSLİĞİ
    "cevre": {
        title: "Çevre Mühendisliği",
        icon: "🌱",
        color: "#16a34a",
        core: [],
        specs: []
    }
};
