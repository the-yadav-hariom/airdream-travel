/* ==========================================================================
   Air Dream Travel & Tourism - Core JavaScript Application
   Author: DeepMind Antigravity Pair Programmer
   Features:
   - Dynamic site state stored in localStorage ('airdream_site_data')
   - Admin authentication with ID: admin@123 and Password: admin@123
   - Live updates to Hero, Services, Visas, Experiences, Deals, and Contact Info
   - Customer Inquiry submission system with WhatsApp integration
   ========================================================================== */

// Default Dataset initialized from the real Air Dream Travel website design
const DEFAULT_SITE_DATA = {
  generalInfo: {
    siteTitle: "Air Dream Travel & Tourism",
    phone: "+971 58 833 8927",
    whatsapp: "+971588338927",
    email: "info@airdreamtravels.com",
    website: "www.airdreamtravels.com",
    address: "Office 401, Al Zarouni Building, Al Rigga, Dubai, UAE",
    heroTitle: "Your Journey Starts With Air Dream",
    heroSubtitle: "Flights • Visas • Tours • Umrah — All in One Place",
    heroBgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
    aboutBlurb: "Your trusted travel partner in Dubai for flights, visas, tours, Umrah and unforgettable experiences worldwide."
  },

  services: [
    {
      id: "srv-1",
      title: "Worldwide Air Tickets",
      icon: "fa-plane-departure",
      imgUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-2",
      title: "Visit Visas",
      icon: "fa-passport",
      imgUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-3",
      title: "GCC Resident Visas",
      icon: "fa-city",
      imgUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-4",
      title: "Umrah Packages",
      icon: "fa-kaaba",
      imgUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-5",
      title: "Dubai Tours & Desert Safari",
      icon: "fa-car-side",
      imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "srv-6",
      title: "Marina Cruise & Activities",
      icon: "fa-ship",
      imgUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80"
    }
  ],

  popularVisas: [
    {
      id: "visa-1",
      title: "Saudi Arabia Multiple Entry Visa",
      flag: "🇸🇦",
      imgUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=600&q=80",
      btnText: "Apply Now",
      btnType: "apply"
    },
    {
      id: "visa-2",
      title: "Qatar Visit Visa",
      flag: "🇶🇦",
      imgUrl: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=600&q=80",
      btnText: "Apply Now",
      btnType: "apply"
    },
    {
      id: "visa-3",
      title: "Oman Visit Visa",
      flag: "🇴🇲",
      imgUrl: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=600&q=80",
      btnText: "Apply Now",
      btnType: "apply"
    },
    {
      id: "visa-4",
      title: "UAE Visit Visa",
      flag: "🇦🇪",
      imgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      btnText: "Apply Now",
      btnType: "apply"
    },
    {
      id: "visa-5",
      title: "Pakistan / India Visa Services",
      flag: "🇵🇰 🇮🇳",
      imgUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
      btnText: "WhatsApp Inquiry",
      btnType: "whatsapp"
    }
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Registered UAE Company",
      desc: "Legally registered and trusted travel company in Dubai.",
      icon: "fa-building-shield"
    },
    {
      id: "why-2",
      title: "Fast Support",
      desc: "Quick response and dedicated support when you need it.",
      icon: "fa-headset"
    },
    {
      id: "why-3",
      title: "Competitive Rates",
      desc: "Best prices and exclusive deals for all travelers.",
      icon: "fa-tags"
    },
    {
      id: "why-4",
      title: "Worldwide Services",
      desc: "Serving customers across the globe with reliable solutions.",
      icon: "fa-globe"
    },
    {
      id: "why-5",
      title: "Secure & Trusted",
      desc: "Your journey is safe with our secure and trusted services.",
      icon: "fa-shield-halved"
    }
  ],

  uaeExperiences: [
    {
      id: "exp-1",
      title: "Desert Safari",
      icon: "fa-sun",
      imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-2",
      title: "Dubai City Tour",
      icon: "fa-building-columns",
      imgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-3",
      title: "Abu Dhabi Tour",
      icon: "fa-mosque",
      imgUrl: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "exp-4",
      title: "Marina Cruise",
      icon: "fa-anchor",
      imgUrl: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=600&q=80"
    }
  ],

  travelDeals: [
    {
      id: "deal-1",
      title: "Dubai Holiday Package",
      badge: "SPECIAL OFFER",
      price: "AED 999",
      imgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "deal-2",
      title: "Umrah Package 14 Days",
      badge: "BEST DEAL",
      price: "AED 2,450",
      imgUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "deal-3",
      title: "Maldives Getaway Package",
      badge: "LIMITED TIME",
      price: "AED 2,999",
      imgUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "deal-4",
      title: "Europe Group Tour Package",
      badge: "GROUP OFFER",
      price: "AED 3,999",
      imgUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
    }
  ],

  inquiries: [
    {
      id: "inq-1",
      date: "2026-09-01 14:30",
      name: "Ahmed Al Mansoori",
      contact: "+971501234567",
      service: "UAE Visit Visa",
      message: "Interested in 30 days UAE Visit Visa for family.",
      status: "New"
    }
  ]
};

// Global App State
let siteData = null;
let isAdminAuthenticated = false;

// Initialize Data Store
function initDataStore() {
  const saved = localStorage.getItem('airdream_site_data');
  if (saved) {
    try {
      siteData = JSON.parse(saved);
    } catch (e) {
      siteData = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    }
  } else {
    siteData = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    saveSiteData();
  }
}

function saveSiteData() {
  localStorage.setItem('airdream_site_data', JSON.stringify(siteData));
  renderSite();
}

// Show Toast Message
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Render Public Website Content
function renderSite() {
  if (!siteData) return;

  const info = siteData.generalInfo;

  // Render Header & Contact Elements
  document.querySelectorAll('.js-phone').forEach(el => el.textContent = info.phone);
  document.querySelectorAll('.js-email').forEach(el => el.textContent = info.email);
  document.querySelectorAll('.js-address').forEach(el => el.textContent = info.address);
  document.querySelectorAll('.js-about-blurb').forEach(el => el.textContent = info.aboutBlurb);

  // Render Hero
  const heroTitleEl = document.getElementById('hero-title');
  if (heroTitleEl) {
    // Format bold Air Dream
    let titleHtml = info.heroTitle;
    if (titleHtml.includes("Air Dream")) {
      titleHtml = titleHtml.replace("Air Dream", "<span>Air Dream</span>");
    }
    heroTitleEl.innerHTML = titleHtml;
  }

  const heroSubtitleEl = document.getElementById('hero-subtitle');
  if (heroSubtitleEl) heroSubtitleEl.textContent = info.heroSubtitle;

  const heroSec = document.getElementById('hero-section');
  if (heroSec && info.heroBgUrl) {
    heroSec.style.backgroundImage = `linear-gradient(180deg, rgba(10,37,64,0.45) 0%, rgba(10,37,64,0.75) 100%), url('${info.heroBgUrl}')`;
  }

  // Render Services Grid
  const srvGrid = document.getElementById('services-grid');
  if (srvGrid) {
    srvGrid.innerHTML = siteData.services.map(srv => `
      <div class="service-card">
        <div class="service-img-wrap">
          <img src="${srv.imgUrl}" alt="${srv.title}">
          <div class="service-icon-badge">
            <i class="fa-solid ${srv.icon || 'fa-plane'}"></i>
          </div>
        </div>
        <h3 class="service-card-title">${srv.title}</h3>
      </div>
    `).join('');
  }

  // Render Popular Visas Grid
  const visasGrid = document.getElementById('visas-grid');
  if (visasGrid) {
    visasGrid.innerHTML = siteData.popularVisas.map(visa => `
      <div class="visa-card">
        <div class="visa-img-box">
          <img src="${visa.imgUrl}" alt="${visa.title}">
          <div class="visa-flag-badge">${visa.flag}</div>
        </div>
        <div class="visa-card-body">
          <h3 class="visa-card-title">${visa.title}</h3>
          ${visa.btnType === 'whatsapp' ? `
            <button onclick="openWhatsAppDirect('${visa.title}')" class="btn-visa-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> ${visa.btnText}
            </button>
          ` : `
            <button onclick="openInquiryModal('${visa.title}')" class="btn-visa-apply">
              ${visa.btnText}
            </button>
          `}
        </div>
      </div>
    `).join('');
  }

  // Render Why Choose Us Grid
  const whyGrid = document.getElementById('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = siteData.whyChooseUs.map(why => `
      <div class="why-card">
        <div class="why-icon-box">
          <i class="fa-solid ${why.icon}"></i>
        </div>
        <h4 class="why-title">${why.title}</h4>
        <p class="why-desc">${why.desc}</p>
      </div>
    `).join('');
  }

  // Render UAE Experiences Grid
  const expGrid = document.getElementById('exp-grid');
  if (expGrid) {
    expGrid.innerHTML = siteData.uaeExperiences.map(exp => `
      <div class="exp-card" onclick="openInquiryModal('${exp.title}')">
        <img src="${exp.imgUrl}" alt="${exp.title}">
        <div class="exp-overlay">
          <div class="exp-badge">
            <i class="fa-solid ${exp.icon}"></i> ${exp.title}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Travel Deals Grid
  const dealsGrid = document.getElementById('deals-grid');
  if (dealsGrid) {
    dealsGrid.innerHTML = siteData.travelDeals.map(deal => `
      <div class="deal-card">
        <div class="deal-badge">${deal.badge}</div>
        <div class="deal-img-box">
          <img src="${deal.imgUrl}" alt="${deal.title}">
        </div>
        <div class="deal-card-body">
          <div>
            <h3 class="deal-title">${deal.title}</h3>
          </div>
          <div class="deal-price-box">
            <span class="deal-price-label">From</span>
            <div class="deal-price-val">${deal.price}</div>
          </div>
          <button onclick="openInquiryModal('${deal.title}')" class="btn-visa-apply" style="margin-top:12px;">
            Book This Deal
          </button>
        </div>
      </div>
    `).join('');
  }
}

// Modal Handlers
function openAdminLoginModal() {
  if (isAdminAuthenticated) {
    openAdminDashboard();
  } else {
    document.getElementById('admin-login-modal').classList.add('active');
  }
}

function closeAdminLoginModal() {
  document.getElementById('admin-login-modal').classList.remove('active');
}

function openInquiryModal(serviceName = 'General Inquiry') {
  document.getElementById('inquiry-service-input').value = serviceName;
  document.getElementById('inquiry-modal-title').textContent = `Inquire for ${serviceName}`;
  document.getElementById('inquiry-modal').classList.add('active');
}

function closeInquiryModal() {
  document.getElementById('inquiry-modal').classList.remove('active');
}

function openWhatsAppDirect(serviceName = 'Air Dream Services') {
  const wa = siteData.generalInfo.whatsapp.replace(/\+/g, '');
  const text = encodeURIComponent(`Hello Air Dream Travel & Tourism, I would like to inquire about ${serviceName}.`);
  window.open(`https://wa.me/${wa}?text=${text}`, '_blank');
}

// Admin Login Form Submit (Credentials: admin@123 / admin@123)
function handleAdminLogin(event) {
  event.preventDefault();
  const idVal = document.getElementById('admin-id-input').value.trim();
  const passVal = document.getElementById('admin-pass-input').value.trim();

  if (idVal === 'admin@123' && passVal === 'admin@123') {
    isAdminAuthenticated = true;
    closeAdminLoginModal();
    openAdminDashboard();
    showToast('Welcome Admin! Login Successful.');
  } else {
    alert('Invalid Admin Credentials! Please enter ID: admin@123 and Password: admin@123');
  }
}

function handleAdminLogout() {
  isAdminAuthenticated = false;
  document.getElementById('admin-dashboard-modal').classList.remove('active');
  showToast('Logged out from Admin Panel.');
}

// Open Admin Dashboard
function openAdminDashboard() {
  document.getElementById('admin-dashboard-modal').classList.add('active');
  populateAdminFields();
}

function closeAdminDashboard() {
  document.getElementById('admin-dashboard-modal').classList.remove('active');
}

// Switch Admin Panel Tabs
function switchAdminTab(tabName, btnEl) {
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

  btnEl.classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// Populate Admin Panel Forms
function populateAdminFields() {
  const info = siteData.generalInfo;
  document.getElementById('adm-phone').value = info.phone;
  document.getElementById('adm-whatsapp').value = info.whatsapp;
  document.getElementById('adm-email').value = info.email;
  document.getElementById('adm-address').value = info.address;
  document.getElementById('adm-hero-title').value = info.heroTitle;
  document.getElementById('adm-hero-sub').value = info.heroSubtitle;
  document.getElementById('adm-hero-bg').value = info.heroBgUrl;

  renderAdminServices();
  renderAdminVisas();
  renderAdminExperiences();
  renderAdminDeals();
  renderAdminInquiries();
}

// Admin Save General Info
function saveAdminGeneralInfo(e) {
  e.preventDefault();
  siteData.generalInfo.phone = document.getElementById('adm-phone').value.trim();
  siteData.generalInfo.whatsapp = document.getElementById('adm-whatsapp').value.trim();
  siteData.generalInfo.email = document.getElementById('adm-email').value.trim();
  siteData.generalInfo.address = document.getElementById('adm-address').value.trim();
  siteData.generalInfo.heroTitle = document.getElementById('adm-hero-title').value.trim();
  siteData.generalInfo.heroSubtitle = document.getElementById('adm-hero-sub').value.trim();
  siteData.generalInfo.heroBgUrl = document.getElementById('adm-hero-bg').value.trim();

  saveSiteData();
  showToast('General Site Info Updated Successfully!');
}

// Render Services Manager in Admin
function renderAdminServices() {
  const container = document.getElementById('adm-services-grid');
  if (!container) return;

  container.innerHTML = siteData.services.map((srv, idx) => `
    <div class="admin-item-box">
      <button class="btn-delete-item" onclick="deleteAdminItem('services', ${idx})"><i class="fa-solid fa-trash"></i></button>
      <div class="form-group">
        <label class="form-label">Service Title</label>
        <input type="text" class="form-input" value="${srv.title}" onchange="updateItemField('services', ${idx}, 'title', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Image URL</label>
        <input type="text" class="form-input" value="${srv.imgUrl}" onchange="updateItemField('services', ${idx}, 'imgUrl', this.value)">
      </div>
    </div>
  `).join('');
}

function addAdminService() {
  siteData.services.push({
    id: "srv-" + Date.now(),
    title: "New Service Title",
    icon: "fa-star",
    imgUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
  });
  saveSiteData();
  renderAdminServices();
  showToast('New Service Added!');
}

// Render Visas Manager in Admin
function renderAdminVisas() {
  const container = document.getElementById('adm-visas-grid');
  if (!container) return;

  container.innerHTML = siteData.popularVisas.map((visa, idx) => `
    <div class="admin-item-box">
      <button class="btn-delete-item" onclick="deleteAdminItem('popularVisas', ${idx})"><i class="fa-solid fa-trash"></i></button>
      <div class="form-group">
        <label class="form-label">Visa Title</label>
        <input type="text" class="form-input" value="${visa.title}" onchange="updateItemField('popularVisas', ${idx}, 'title', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Flag Emoji/Text</label>
        <input type="text" class="form-input" value="${visa.flag}" onchange="updateItemField('popularVisas', ${idx}, 'flag', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Image URL</label>
        <input type="text" class="form-input" value="${visa.imgUrl}" onchange="updateItemField('popularVisas', ${idx}, 'imgUrl', this.value)">
      </div>
    </div>
  `).join('');
}

function addAdminVisa() {
  siteData.popularVisas.push({
    id: "visa-" + Date.now(),
    title: "New Country Visa",
    flag: "✈️",
    imgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    btnText: "Apply Now",
    btnType: "apply"
  });
  saveSiteData();
  renderAdminVisas();
  showToast('New Visa Service Added!');
}

// Render Experiences Manager in Admin
function renderAdminExperiences() {
  const container = document.getElementById('adm-exp-grid');
  if (!container) return;

  container.innerHTML = siteData.uaeExperiences.map((exp, idx) => `
    <div class="admin-item-box">
      <button class="btn-delete-item" onclick="deleteAdminItem('uaeExperiences', ${idx})"><i class="fa-solid fa-trash"></i></button>
      <div class="form-group">
        <label class="form-label">Experience Title</label>
        <input type="text" class="form-input" value="${exp.title}" onchange="updateItemField('uaeExperiences', ${idx}, 'title', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Image URL</label>
        <input type="text" class="form-input" value="${exp.imgUrl}" onchange="updateItemField('uaeExperiences', ${idx}, 'imgUrl', this.value)">
      </div>
    </div>
  `).join('');
}

function addAdminExperience() {
  siteData.uaeExperiences.push({
    id: "exp-" + Date.now(),
    title: "New UAE Experience",
    icon: "fa-compass",
    imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  });
  saveSiteData();
  renderAdminExperiences();
  showToast('New UAE Experience Added!');
}

// Render Deals Manager in Admin
function renderAdminDeals() {
  const container = document.getElementById('adm-deals-grid');
  if (!container) return;

  container.innerHTML = siteData.travelDeals.map((deal, idx) => `
    <div class="admin-item-box">
      <button class="btn-delete-item" onclick="deleteAdminItem('travelDeals', ${idx})"><i class="fa-solid fa-trash"></i></button>
      <div class="form-group">
        <label class="form-label">Deal Package Name</label>
        <input type="text" class="form-input" value="${deal.title}" onchange="updateItemField('travelDeals', ${idx}, 'title', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Badge Text</label>
        <input type="text" class="form-input" value="${deal.badge}" onchange="updateItemField('travelDeals', ${idx}, 'badge', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Price (e.g. AED 999)</label>
        <input type="text" class="form-input" value="${deal.price}" onchange="updateItemField('travelDeals', ${idx}, 'price', this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Image URL</label>
        <input type="text" class="form-input" value="${deal.imgUrl}" onchange="updateItemField('travelDeals', ${idx}, 'imgUrl', this.value)">
      </div>
    </div>
  `).join('');
}

function addAdminDeal() {
  siteData.travelDeals.push({
    id: "deal-" + Date.now(),
    title: "Special Travel Deal",
    badge: "HOT OFFER",
    price: "AED 1,499",
    imgUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
  });
  saveSiteData();
  renderAdminDeals();
  showToast('New Travel Deal Added!');
}

// Render Inquiries in Admin
function renderAdminInquiries() {
  const tbody = document.getElementById('adm-inquiries-tbody');
  if (!tbody) return;

  if (!siteData.inquiries || siteData.inquiries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No customer inquiries received yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = siteData.inquiries.map(inq => `
    <tr>
      <td>${inq.date}</td>
      <td><strong>${inq.name}</strong><br><small>${inq.contact}</small></td>
      <td><span class="badge-inquiry">${inq.service}</span></td>
      <td>${inq.message || '-'}</td>
      <td>
        <a href="https://wa.me/${inq.contact.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)}" target="_blank" class="btn-visa-whatsapp" style="padding:4px 8px; font-size:11px;">
          WhatsApp
        </a>
      </td>
    </tr>
  `).join('');
}

// Helper to update array item property
function updateItemField(arrayKey, index, field, value) {
  if (siteData[arrayKey] && siteData[arrayKey][index]) {
    siteData[arrayKey][index][field] = value;
    saveSiteData();
    showToast('Updated!');
  }
}

// Helper to delete array item
function deleteAdminItem(arrayKey, index) {
  if (confirm('Are you sure you want to delete this item?')) {
    siteData[arrayKey].splice(index, 1);
    saveSiteData();
    populateAdminFields();
    showToast('Item deleted successfully.');
  }
}

// Reset All Site Data to Default
function resetSiteDataToDefault() {
  if (confirm('Are you sure you want to reset all site data to default values? Any custom edits will be restored.')) {
    siteData = JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    saveSiteData();
    populateAdminFields();
    showToast('Site restored to original default configuration!');
  }
}

// Customer Inquiry Form Submit
function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inquiry-name').value.trim();
  const phone = document.getElementById('inquiry-phone').value.trim();
  const service = document.getElementById('inquiry-service-input').value;
  const msg = document.getElementById('inquiry-msg').value.trim();

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);

  const newInquiry = {
    id: "inq-" + Date.now(),
    date: dateStr,
    name: name,
    contact: phone,
    service: service,
    message: msg,
    status: "New"
  };

  if (!siteData.inquiries) siteData.inquiries = [];
  siteData.inquiries.unshift(newInquiry);
  saveSiteData();

  closeInquiryModal();
  showToast('Inquiry Submitted! Our team will contact you shortly.');

  // Optionally launch WhatsApp
  const wa = siteData.generalInfo.whatsapp.replace(/\+/g, '');
  const text = encodeURIComponent(`Hi Air Dream Travel, I just submitted an inquiry for ${service}.\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`);
  window.open(`https://wa.me/${wa}?text=${text}`, '_blank');
}

// App Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  initDataStore();
  renderSite();
});
