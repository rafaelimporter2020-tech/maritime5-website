// Popup/Modal Content Data
const popupContent = {
    // Beranda Popups
    'digital': {
        title: 'Digitalisasi Pelayaran',
        source: 'Sumber: IMO Guidelines on Maritime Cyber Risk Management',
        type: 'internasional',
        content: [
            {
                title: 'Definisi',
                text: 'Digitalisasi pelayaran adalah transformasi menyeluruh proses administrasi, operasional, dan komunikasi maritim melalui teknologi digital, IoT, dan big data analytics.',
                type: 'akademis'
            },
            {
                title: 'Komponen Utama',
                text: '- E-Dokumen Maritim (e-B/L, e-Certificate)\n- Digital Twin Technology\n- Smart Port Systems\n- Maritime Single Window\n- Automated Reporting Systems',
                type: 'internasional'
            },
            {
                title: 'Regulasi Terkait',
                text: 'IMO MSC.1/Circ.1526 Guidelines on Maritime Cyber Risk Management mewajibkan manajemen risiko siber dalam Sistem Manajemen Keselamatan (SMS) kapal sejak 1 Januari 2021.',
                type: 'internasional'
            }
        ]
    },
    
    'otonomi': {
        title: 'Kapal Otonom (Autonomous Ships)',
        source: 'Sumber: IMO MSC Autonomous Shipping Guidelines',
        type: 'internasional',
        content: [
            {
                title: 'Klasifikasi Tingkat Otonomi',
                text: 'Degree One: Ship with automated processes and decision support\nDegree Two: Remotely controlled ship with seafarers on board\nDegree Three: Remotely controlled ship without seafarers on board\nDegree Four: Fully autonomous ship',
                type: 'internasional'
            },
            {
                title: 'Tantangan Hukum',
                text: '- Status hukum kapal tanpa awak dalam UNCLOS dan SOLAS\n- Tanggung jawab hukum atas insiden autonomous vessel\n- Adaptasi COLREGs untuk navigasi otonom\n- Sertifikasi dan standar teknis baru\n- Dampak terhadap STCW Convention',
                type: 'akademis'
            },
            {
                title: 'Perkembangan Terkini',
                text: 'Norwegia telah mengoperasikan kapal kargo otonom Yara Birkeland sejak 2022. Jepang menargetkan 50% armada dagangnya menggunakan teknologi otonom pada tahun 2025.',
                type: 'akademis'
            }
        ]
    },
    
    'lingkungan': {
        title: 'Perlindungan Lingkungan Laut',
        source: 'Sumber: MARPOL Annex VI & IMO GHG Strategy',
        type: 'internasional',
        content: [
            {
                title: 'MARPOL Annex VI',
                text: 'Mengatur pencegahan polusi udara dari kapal, termasuk batasan sulfur content dalam bahan bakar (0.50% global cap sejak 2020) dan emisi NOx dari mesin diesel.',
                type: 'internasional'
            },
            {
                title: 'IMO GHG Strategy 2050',
                text: 'Target mengurangi emisi gas rumah kaca dari pelayaran internasional sebesar 50% pada tahun 2050 dibandingkan level 2008, dengan tujuan akhir dekarbonisasi penuh.',
                type: 'internasional'
            },
            {
                title: 'Teknologi Ramah Lingkungan',
                text: '- Scrubber Systems untuk mengurangi sulfur emissions\n- LNG sebagai bahan bakar alternatif\n- Wind-assisted propulsion\n- Energy Efficiency Design Index (EEDI)\n- Ship Energy Efficiency Management Plan (SEEMP)',
                type: 'akademis'
            }
        ]
    },
    
    'konektivitas': {
        title: 'Konektivitas Maritim Digital',
        source: 'Sumber: ITU-R M.2092 & 5G Maritime Standards',
        type: 'akademis',
        content: [
            {
                title: 'Maritime Communication Systems',
                text: 'Integrasi sistem komunikasi mencakup GMDSS (Global Maritime Distress and Safety System), VSAT, 5G Maritime, dan Maritime IoT Networks untuk konektivitas real-time antara kapal, pelabuhan, dan otoritas.',
                type: 'internasional'
            },
            {
                title: 'Smart Port Ecosystem',
                text: 'Pelabuhan pintar menggunakan sensor IoT, AI analytics, dan automated equipment untuk mengoptimalkan operasional, mengurangi waiting time, dan meningkatkan keamanan.',
                type: 'akademis'
            },
            {
                title: 'Data Standardization',
                text: 'Pengembangan standar data maritim seperti IHO S-100 framework untuk hydrographic data dan Digital Twin Port standards untuk interoperabilitas sistem.',
                type: 'internasional'
            }
        ]
    },
    
    // Hukum Internasional Popups
    'unclos-zona': {
        title: 'Detail Zona Maritim UNCLOS',
        source: 'Sumber: UNCLOS 1982 Articles 2-87',
        type: 'internasional',
        content: [
            {
                title: 'Perairan Pedalaman (Internal Waters)',
                text: 'Perairan di sebelah darat dari garis pangkal lurus, termasuk pelabuhan, teluk, dan muara sungai. Negara pantai memiliki kedaulatan penuh seperti wilayah darat.',
                type: 'internasional'
            },
            {
                title: 'Laut Teritorial (Territorial Sea)',
                text: 'Lebar 12 mil laut dari garis pangkal. Negara pantai memiliki kedaulatan penuh tetapi harus menghormati hak lintas damai (innocent passage) kapal asing sesuai Pasal 17 UNCLOS.',
                type: 'internasional'
            },
            {
                title: 'Zona Tambahan (Contiguous Zone)',
                text: 'Lebar 12 mil laut dari laut teritorial (total 24 mil laut). Negara pantai dapat menegakkan hukum bea cukai, fiskal, imigrasi, dan sanitasi.',
                type: 'internasional'
            },
            {
                title: 'ZEE (Exclusive Economic Zone)',
                text: 'Lebar 200 mil laut dari garis pangkal. Negara pantai memiliki hak berdaulah atas eksplorasi dan eksploitasi sumber daya alam, tetapi negara lain memiliki kebebasan pelayaran dan pemasangan kabel pipa.',
                type: 'internasional'
            },
            {
                title: 'Landas Kontinen (Continental Shelf)',
                text: 'Dasar laut dan tanah di bawahnya di luar laut teritorial hingga kedalaman 200 mil laut atau lebih jika memenuhi kriteria geologis tertentu.',
                type: 'internasional'
            },
            {
                title: 'Laut Lepas (High Seas)',
                text: 'Area di luar yurisdiksi nasional. Terbuka untuk semua negara dengan prinsip mare liberum, tetapi tunduk pada kewajiban melindungi lingkungan laut.',
                type: 'internasional'
            }
        ]
    },
    
    'unclos-pasal': {
        title: 'Penjelasan Pasal-Pasal Penting UNCLOS',
        source: 'Sumber: United Nations Convention on the Law of the Sea 1982',
        type: 'internasional',
        content: [
            {
                title: 'Pasal 17 - Hak Lintas Damai',
                text: 'Kapal semua negara, pantai maupun tidak berpantai, menikmati hak lintas damai melalui laut teritorial. Lintas harus bersifat damai dan tidak mengancam kedaulatan negara pantai.',
                type: 'internasional'
            },
            {
                title: 'Pasal 56 - Hak Negara Pantai di ZEE',
                text: 'Negara pantai memiliki:\n1. Hak berdaulah atas eksplorasi dan eksploitasi sumber daya alam\n2. Hak berdaulah atas kegiatan ekonomi lainnya\n3. Yurisdiksi atas pembuatan dan penggunaan pulau buatan\n4. Yurisdiksi atas perlindungan dan pelestarian lingkungan laut',
                type: 'internasional'
            },
            {
                title: 'Pasal 87 - Kebebasan di Laut Lepas',
                text: 'Kebebasan di laut lepas mencakup:\n1. Kebebasan pelayaran\n2. Kebebasan penerbangan\n3. Kebebasan memasang kabel dan pipa bawah laut\n4. Kebebasan membangun pulau buatan\n5. Kebebasan melakukan penangkapan ikan\n6. Kebebasan melakukan penelitian ilmiah',
                type: 'internasional'
            },
            {
                title: 'Pasal 192 - Kewajiban Perlindungan Lingkungan',
                text: 'Negara memiliki kewajiban untuk melindungi dan melestarikan lingkungan laut. Ini merupakan prinsip fundamental yang mendasari seluruh rezim hukum laut.',
                type: 'internasional'
            },
            {
                title: 'Pasal 298 - Pengecualian Wajib Arbitrase',
                text: 'Negara dapat menyatakan tidak menerima prosedur penyelesaian sengketa wajib untuk sengketa yang menyangkut:\n1. Delimitasi maritim\n2. Aktivitas militer\n3. Penegakan kedaulatan oleh aparat penegak hukum',
                type: 'internasional'
            }
        ]
    },
    
    'solas': {
        title: 'SOLAS Convention (Safety of Life at Sea)',
        source: 'Sumber: International Convention for the Safety of Life at Sea 1974',
        type: 'internasional',
        content: [
            {
                title: 'Sejarah dan Tujuan',
                text: 'SOLAS merupakan konvensi maritim paling penting yang mengatur standar keselamatan kapal. Awalnya diadopsi sebagai respons terhadap tragedi Titanic 1912, versi saat ini adalah SOLAS 1974.',
                type: 'internasional'
            },
            {
                title: 'Chapter Utama',
                text: 'Chapter I: General Provisions\nChapter II-1: Construction - Subdivision and Stability\nChapter II-2: Fire Protection\nChapter III: Life-Saving Appliances\nChapter IV: Radiocommunications (GMDSS)\nChapter V: Safety of Navigation\nChapter VI: Carriage of Cargoes\nChapter VII: Carriage of Dangerous Goods\nChapter XI-1 & XI-2: Special Measures & ISPS Code',
                type: 'internasional'
            },
            {
                title: 'Sertifikasi Wajib',
                text: '- Safety Construction Certificate\n- Safety Equipment Certificate\n- Safety Radio Certificate\n- Cargo Ship Safety Certificate\n- International Ship Security Certificate (ISSC)\n- International Load Line Certificate',
                type: 'internasional'
            },
            {
                title: 'Amendemen Penting',
                text: 'ISM Code (1994): Sistem Manajemen Keselamatan\nISPS Code (2002): Keamanan kapal dan fasilitas pelabuhan\nGoal-Based Standards (2010): Standar berbasis tujuan untuk konstruksi kapal',
                type: 'internasional'
            }
        ]
    },
    
    'marpol': {
        title: 'MARPOL Convention (Marine Pollution)',
        source: 'Sumber: International Convention for the Prevention of Pollution from Ships 1973/78',
        type: 'internasional',
        content: [
            {
                title: 'Enam Lampiran MARPOL',
                text: 'Annex I: Pencegahan polusi oleh minyak (Oil)\nAnnex II: Bahan kimia berbahaya (Noxious Liquid Substances)\nAnnex III: Bahan berbahaya dalam kemasan (Harmful Substances)\nAnnex IV: Air limbah (Sewage)\nAnnex V: Sampah (Garbage)\nAnnex VI: Polusi udara (Air Pollution)',
                type: 'internasional'
            },
            {
                title: 'Annex I - Pencegahan Polusi Minyak',
                text: 'Mengatur konstruksi tanker (double hull requirement), segregated ballast tanks, crude oil washing systems, dan batasan pembuangan minyak (15 ppm oil content limit).',
                type: 'internasional'
            },
            {
                title: 'Annex VI - Polusi Udara',
                text: 'Mengatur:\n- Sulfur content dalam bahan bakar (0.50% global cap sejak 2020)\n- Emisi NOx dari mesin diesel\n- Penggunaan scrubber systems\n- Energy Efficiency Design Index (EEDI)\n- Ship Energy Efficiency Management Plan (SEEMP)',
                type: 'internasional'
            },
            {
                title: 'Sertifikasi',
                text: 'International Oil Pollution Prevention (IOPP) Certificate diperlukan untuk kapal di atas 400 GT. Sertifikat ini dikeluarkan setelah survey oleh Classification Society yang diakui.',
                type: 'internasional'
            }
        ]
    },
    
    'stcw': {
        title: 'STCW Convention (Standards of Training)',
        source: 'Sumber: International Convention on Standards of Training, Certification and Watchkeeping 1978 (Manila Amendments 2010)',
        type: 'internasional',
        content: [
            {
                title: 'Tujuan STCW',
                text: 'Menetapkan standar minimum kompetensi dan sertifikasi untuk pelaut internasional guna memastikan keselamatan pelayaran, perlindungan lingkungan laut, dan kesejahteraan pelaut.',
                type: 'internasional'
            },
            {
                title: 'Level Kompetensi',
                text: 'Regulation II/1: Perwira Dek - Kapal < 500 GT\nRegulation II/2: Nakhoda & Perwira Dek - Kapal < 3000 GT\nRegulation II/3: Nakhoda & Perwira Dek - Kapal ≥ 3000 GT\nRegulation III/1: Perwira Mesin - Kapal < 750 kW\nRegulation III/2: KKM & Perwira Mesin - Kapal < 3000 kW\nRegulation III/3: KKM & Perwira Mesin - Kapal ≥ 3000 kW',
                type: 'internasional'
            },
            {
                title: 'Training Wajib',
                text: '- Basic Safety Training (BST): Personal Survival, Fire Prevention, Elementary First Aid, Personal Safety\n- Advanced Fire Fighting\n- Proficiency in Survival Craft\n- Medical First Aid & Medical Care\n- Security Awareness Training\n- ECDIS Training\n- GMDSS Operator Training',
                type: 'internasional'
            },
            {
                title: 'Manila Amendments 2010',
                text: 'Perubahan besar termasuk:\n- Ketentuan hours of rest/work\n- Training untuk tanker operations\n- Leadership and teamwork training\n- ECDIS competency requirements\n- Security training enhancement',
                type: 'internasional'
            }
        ]
    },
    
    'mlc': {
        title: 'MLC 2006 (Maritime Labour Convention)',
        source: 'Sumber: Maritime Labour Convention 2006 (ILO)',
        type: 'internasional',
        content: [
            {
                title: '"Konstitusi Pelaut"',
                text: 'MLC 2006 sering disebut sebagai "Konstitusi Pelaut" karena komprehensif mengatur hak-hak dasar pelaut, kondisi kerja, akomodasi, kesehatan, dan perlindungan sosial.',
                type: 'internasional'
            },
            {
                title: '5 (Lima) Pilar Utama',
                text: 'Title 1: Minimum Requirements for Seafarers to Work on Ships\nTitle 2: Conditions of Employment\nTitle 3: Accommodation, Recreational Facilities, Food and Catering\nTitle 4: Health Protection, Medical Care, Welfare and Social Security Protection\nTitle 5: Compliance and Enforcement',
                type: 'internasional'
            },
            {
                title: 'Hak-Hak Pelaut',
                text: '- Minimum age 16 years (18 for hazardous work)\n- Medical fitness certificate\n- Training and qualifications\n- Seafarers Employment Agreement (SEA)\n- Hours of work and rest (max 14 hours/day, 72 hours/week)\n- Entitlement to paid annual leave (2.5 days/month)\n- Repatriation rights\n- Social security protection',
                type: 'internasional'
            },
            {
                title: 'Sertifikasi',
                text: 'Maritime Labour Certificate (MLC Certificate) dan Declaration of Maritime Labour Compliance (DMLC) diperlukan untuk kapal di atas 500 GT yang melakukan perjalanan internasional.',
                type: 'internasional'
            }
        ]
    },
    
    'itlos': {
        title: 'ITLOS (International Tribunal for the Law of the Sea)',
        source: 'Sumber: UNCLOS 1982 Part XV, Statute of ITLOS',
        type: 'internasional',
        content: [
            {
                title: 'Pembentukan dan Yurisdiksi',
                text: 'ITLOS dibentuk berdasarkan UNCLOS 1982 sebagai badan yudisial independen untuk menyelesaikan sengketa yang timbul dari interpretasi dan penerapan konvensi. Bermarkas di Hamburg, Jerman.',
                type: 'internasional'
            },
            {
                title: 'Komposisi',
                text: 'Terdiri dari 21 hakim yang dipilih oleh negara-negara peserta UNCLOS untuk masa jabatan 9 tahun. Hakim harus memiliki kualifikasi tinggi dalam hukum laut internasional.',
                type: 'internasional'
            },
            {
                title: 'Yurisdiksi Khusus',
                text: '- Sengketa delimitasi batas maritim\n- Sengketa perikanan dan konservasi sumber daya hayati\n- Sengketa perlindungan lingkungan laut\n- Sengketa navigasi dan lintas damai\n- Provisional measures (langkah sementara)\n- Prompt release of vessels and crews',
                type: 'internasional'
            },
            {
                title: 'Putusan Terkenal',
                text: '- M/V "Saiga" (No. 2) Case (1999): Guinea vs Saint Vincent tentang penahanan kapal\n- Southern Bluefin Tuna Cases (1999): Konservasi sumber daya perikanan\n- Bay of Bengal Maritime Boundary Arbitration (2014): Bangladesh vs India\n- Mauritius vs Maldives (2021): Delimitasi batas maritim',
                type: 'yurisprudensi'
            }
        ]
    },
    
    'icj': {
        title: 'ICJ (International Court of Justice)',
        source: 'Sumber: Statute of the International Court of Justice',
        type: 'internasional',
        content: [
            {
                title: 'Peran dalam Hukum Laut',
                text: 'ICJ merupakan badan utama PBB untuk penyelesaian sengketa hukum antar negara. Meskipun tidak khusus menangani hukum laut, ICJ telah memutus beberapa kasus penting terkait batas maritim dan hak-hak negara di laut.',
                type: 'internasional'
            },
            {
                title: 'Dasar Hukum',
                text: 'ICJ berwenang menyelesaikan sengketa berdasarkan:\n1. Piagam PBB (Article 92)\n2. Statuta ICJ\n3. Persetujuan negara-negara yang bersengketa (consent)\n4. Komitmen dalam perjanjian internasional',
                type: 'internasional'
            },
            {
                title: 'Putusan Penting Hukum Laut',
                text: '- North Sea Continental Shelf Cases (1969): Prinsip equitable principles untuk delimitasi batas\n- Tunisia/Libya Continental Shelf (1982): Metode delimitasi batas landas kontinen\n- Qatar vs Bahrain (2001): Delimitasi batas maritim dan kedaulatan atas pulau\n- Nicaragua vs Honduras (2007): Delimitasi di Laut Karibia\n- Somalia vs Kenya (2021): Delimitasi batas maritim di Samudera Hindia',
                type: 'yurisprudensi'
            },
            {
                title: 'Perbedaan dengan ITLOS',
                text: 'ITLOS khusus menangani sengketa hukum laut berdasarkan UNCLOS, sedangkan ICJ menangani semua jenis sengketa hukum internasional. Negara dapat memilih forum yang sesuai untuk sengketa mereka.',
                type: 'akademis'
            }
        ]
    }
};

// Source Info Popups
const sourceInfo = {
    'internasional': {
        title: 'Sumber Hukum Internasional',
        content: 'Sumber hukum internasional mencakup:\n\n1. Konvensi Internasional:\n   - UNCLOS 1982 (United Nations Convention on the Law of the Sea)\n   - Konvensi-konvensi IMO (SOLAS, MARPOL, STCW, MLC)\n   - Konvensi ILO terkait ketenagakerjaan maritim\n\n2. Yurisprudensi Internasional:\n   - Putusan ITLOS (International Tribunal for the Law of the Sea)\n   - Putusan ICJ (International Court of Justice)\n   - Putusan Arbitrase Internasional\n\n3. Soft Law:\n   - Resolusi PBB\n   - Guidelines IMO\n   - Kode-kode internasional (ISM Code, ISPS Code, dll)\n\nSumber internasional memiliki kekuatan mengikat bagi negara-negara yang meratifikasi konvensi terkait.'
    },
    
    'nasional': {
        title: 'Sumber Hukum Nasional Indonesia',
        content: 'Sumber hukum nasional Indonesia mencakup:\n\n1. Undang-Undang Dasar 1945\n   - Pasal 25A: Indonesia sebagai negara kepulauan\n\n2. Undang-Undang:\n   - UU No. 17 Tahun 1985: Pengesahan UNCLOS 1982\n   - UU No. 6 Tahun 1996: Perairan Indonesia\n   - UU No. 17 Tahun 2008: Pelayaran\n   - UU No. 32 Tahun 2014: Kelautan\n   - UU Cipta Kerja 2020: Klaster Kelautan\n\n3. Peraturan Pemerintah:\n   - PP No. 39 Tahun 2002: Penyelenggaraan Pelayaran\n   - PP No. 20 Tahun 2010: Penggunaan Kawasan Laut\n\n4. Peraturan Presiden:\n   - Perpres No. 16 Tahun 2017: Kebijakan Kelautan Indonesia\n   - Perpres No. 3 Tahun 2023: Rencana Aksi Nasional Perlindungan Laut'
    },
    
    'akademis': {
        title: 'Sumber Akademis',
        content: 'Sumber akademis mencakup:\n\n1. Buku Referensi:\n   - "The International Law of the Sea" - Rothwell & Stephens\n   - "Admiralty and Maritime Law" - Schoenbaum\n   - "Maritime Power and the Law of the Sea" - Kraska\n   - "Hukum Laut Indonesia" - Hasyim Djalal\n\n2. Jurnal Ilmiah:\n   - International Journal of Marine and Coastal Law\n   - Marine Policy\n   - Ocean Development & International Law\n   - Indonesian Journal of International Law\n\n3. Penelitian dan Disertasi:\n   - Penelitian perguruan tinggi\n   - Disertasi program doktor hukum maritim\n   - Working papers lembaga think tank\n\n4. Konferensi dan Seminar:\n   - Proceedings konferensi internasional\n   - Materi seminar nasional dan internasional\n\nSumber akademis memberikan analisis mendalam dan perspektif kritis terhadap perkembangan hukum maritim.'
    }
};

// Popup Functions
function showPopup(key) {
    const modal = document.getElementById('popup-modal');
    const contentDiv = document.getElementById('popup-content');
    const popupData = popupContent[key];
    
    if (popupData) {
        let html = `
            <div class="popup-header ${popupData.type}">
                <h3>${popupData.title}</h3>
                <span class="popup-source tag-${popupData.type}">${popupData.source}</span>
            </div>
        `;
        
        popupData.content.forEach(item => {
            html += `
                <div class="popup-content-item ${item.type}">
                    <strong>${item.title}</strong>
                    <p>${item.text.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        });
        
        contentDiv.innerHTML = html;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function showSourceInfo(type) {
    const modal = document.getElementById('popup-modal');
    const contentDiv = document.getElementById('popup-content');
    const info = sourceInfo[type];
    
    if (info) {
        let html = `
            <div class="popup-header ${type}">
                <h3>${info.title}</h3>
            </div>
            <div class="popup-content-item ${type}">
                <p>${info.content.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        
        contentDiv.innerHTML = html;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Popup
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('popup-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close when clicking outside modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'rotate(0deg) translate(0, 0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0deg) translate(0, 0)';
            }
        });
        
        // Close menu when clicking on a link (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = hamburger.querySelectorAll('span');
                    spans[0].style.transform = 'rotate(0deg) translate(0, 0)';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'rotate(0deg) translate(0, 0)';
                }
            });
        });
    }
});
