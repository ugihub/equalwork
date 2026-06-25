/**
 * EqualWork AI Chatbot Engine (Mistral API Integration)
 * Incorporating prompt engineering, website context bounding, navigation control, and 50-message/3-hour session limits.
 * Configuration is loaded dynamically from the root .env file at startup.
 */

(function () {
  // Constants
  const LIMIT_MAX_MESSAGES = 50;
  const LIMIT_RESET_TIME_MS = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
  const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions";
  const DEFAULT_MODEL = "mistral-small-latest";

  // HARDCODED CONFIGURATION FOR TESTING
  // Ganti 'your_actual_api_key_here' dengan API Key Mistral Anda untuk mencoba langsung
  const HARDCODED_API_KEY = "kNAipRWTVk83LqqDi9NoSwlWuh0aWgbt";

  // State Variables
  let chatHistory = [];
  let countdownInterval = null;

  // DOM Elements (will be queried after insertion)
  let triggerBtn = null;
  let chatContainer = null;
  let closeBtn = null;
  let chatMessages = null;
  let chatInput = null;
  let sendBtn = null;
  let typingIndicator = null;
  let limitTxt = null;
  let disabledOverlay = null;
  let countdownSpan = null;

  // Initialize Chatbot when DOM is ready
  document.addEventListener("DOMContentLoaded", async () => {
    initChatbotElements();
    await loadEnv();
    initChatbotLogic();
  });

  // Inject Chatbot HTML Structure
  function initChatbotElements() {
    const chatbotHTML = `
      <!-- Chatbot Trigger Button -->
      <div class="chatbot-trigger" id="chatbotTrigger" title="Tanya AI EqualWork">
        <i class="fas fa-comments"></i>
      </div>

      <!-- Chatbot Window Container -->
      <div class="chatbot-container" id="chatbotContainer">
        <!-- Chat Header -->
        <div class="chatbot-header">
          <div class="chatbot-profile">
            <div class="chatbot-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div class="chatbot-info">
              <span class="chatbot-name">EqualWork AI</span>
              <span class="chatbot-status">Online</span>
            </div>
          </div>
          <div class="chatbot-actions">
            <button class="chatbot-action-btn" id="chatbotCloseBtn" title="Tutup Chat">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <!-- Message List Area -->
        <div class="chatbot-messages" id="chatbotMessages">
          <div class="chatbot-message bot">
            <p>Halo! Saya <strong>EqualWork AI Assistant</strong>. Saya siap membantu Anda menjelaskan aturan hukum, upah minimum, hak pekerja wanita, dan menavigasi bagian website EqualWork secara otomatis.</p>
            <p>Ada yang ingin Anda tanyakan?</p>
          </div>
        </div>

        <!-- Typing Dots Indicator -->
        <div class="chatbot-typing" id="chatbotTyping">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <!-- Chat Input & Footer Section -->
        <div class="chatbot-footer-container" id="chatbotFooterContainer">
          <div class="chatbot-input-wrapper">
            <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Tulis pertanyaan Anda..." autocomplete="off">
            <button class="chatbot-send-btn" id="chatbotSendBtn">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          <div class="chatbot-limit-bar">
            <span class="chatbot-limit-txt" id="chatbotLimitTxt">Sisa obrolan: 50/50</span>
            <span class="chatbot-info-txt" style="opacity: 0.7;">Mistral AI</span>
          </div>
        </div>

        <!-- Limit Reached Disabled Overlay -->
        <div class="chatbot-disabled-overlay" id="chatbotDisabledOverlay">
          <i class="fas fa-exclamation-triangle" style="font-size: 1.5rem; margin-bottom: 0.3rem;"></i>
          <span class="chatbot-disabled-title">Batas Sesi Tercapai</span>
          <span class="chatbot-disabled-desc">Silakan lihat website nya saja.</span>
          <span class="chatbot-disabled-desc" style="font-size: 0.75rem; margin-top: 0.2rem; opacity: 0.9;">
            Sesi obrolan akan di-reset otomatis dalam: <strong id="chatbotCountdown">00:00:00</strong>
          </span>
        </div>
      </div>
    `;

    // Append to body
    const div = document.createElement("div");
    div.innerHTML = chatbotHTML;
    document.body.appendChild(div);

    // Query Elements
    triggerBtn = document.getElementById("chatbotTrigger");
    chatContainer = document.getElementById("chatbotContainer");
    closeBtn = document.getElementById("chatbotCloseBtn");
    chatMessages = document.getElementById("chatbotMessages");
    chatInput = document.getElementById("chatbotInput");
    sendBtn = document.getElementById("chatbotSendBtn");
    typingIndicator = document.getElementById("chatbotTyping");
    limitTxt = document.getElementById("chatbotLimitTxt");
    disabledOverlay = document.getElementById("chatbotDisabledOverlay");
    countdownSpan = document.getElementById("chatbotCountdown");
  }

  // Load configuration from .env file asynchronously
  async function loadEnv() {
    try {
      const response = await fetch("../.env");
      if (!response.ok) {
        console.warn("Could not find or load .env file. Falling back to cache.");
        return;
      }
      const text = await response.text();
      const lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith("#")) continue;

        const parts = line.split("=");
        if (parts.length >= 2) {
          const key = parts[0].trim();
          const value = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");

          if (key === "MISTRAL_API_KEY") {
            localStorage.setItem("ew_chatbot_api_key", value);
          } else if (key === "MISTRAL_MODEL") {
            localStorage.setItem("ew_chatbot_model", value);
          }
        }
      }
    } catch (error) {
      console.warn("Error fetching or parsing .env file:", error);
    }
  }

  // Helper to retrieve API key and Model from localStorage
  function getAPIKey() {
    if (HARDCODED_API_KEY && HARDCODED_API_KEY !== "your_actual_api_key_here") {
      return HARDCODED_API_KEY;
    }
    return localStorage.getItem("ew_chatbot_api_key") || "";
  }

  function getModel() {
    return localStorage.getItem("ew_chatbot_model") || DEFAULT_MODEL;
  }

  // Bind Listeners
  function initChatbotLogic() {
    // Toggle Chat Panel
    triggerBtn.addEventListener("click", () => {
      chatContainer.classList.toggle("active");
      triggerBtn.classList.toggle("active");
      if (chatContainer.classList.contains("active")) {
        chatInput.focus();
        checkSessionLimit();
        startCountdownTimer();
        scrollToBottom();
      } else {
        stopCountdownTimer();
      }
    });

    closeBtn.addEventListener("click", () => {
      chatContainer.classList.remove("active");
      triggerBtn.classList.remove("active");
      stopCountdownTimer();
    });

    // Input Actions (Enter to Send)
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    sendBtn.addEventListener("click", sendMessage);

    // Initial check of API Key to show warning if not set or is placeholder
    const apiKey = getAPIKey();
    if (!apiKey || apiKey === "your_mistral_api_key") {
      setTimeout(() => {
        appendSystemMessage(
          `<strong>Perhatian:</strong> MISTRAL_API_KEY belum dikonfigurasi di file <code>.env</code> Anda.<br>
           Silakan buka file <code>.env</code> di root proyek Anda, isi API Key Anda pada <code>MISTRAL_API_KEY</code>, lalu segarkan halaman ini.`
        );
        scrollToBottom();
      }, 800);
    }

    // Initial session limit check
    checkSessionLimit();
  }

  // Session Limiting Mechanics
  function checkSessionLimit() {
    const now = Date.now();
    let sessionStart = localStorage.getItem("ew_chat_session_start");
    let messageCount = parseInt(localStorage.getItem("ew_chat_message_count") || "0");

    if (sessionStart) {
      sessionStart = parseInt(sessionStart);
      const timeElapsed = now - sessionStart;
      if (timeElapsed >= LIMIT_RESET_TIME_MS) {
        // 3 hours passed: reset session limits
        messageCount = 0;
        localStorage.removeItem("ew_chat_session_start");
        localStorage.setItem("ew_chat_message_count", "0");
        sessionStart = null;
      }
    }

    const limitReached = messageCount >= LIMIT_MAX_MESSAGES;
    updateLimitUI(messageCount, sessionStart, limitReached);
    return limitReached;
  }

  function updateLimitUI(count, startTimestamp, isReached) {
    // Update count display
    limitTxt.innerText = `Sisa obrolan: ${Math.max(0, LIMIT_MAX_MESSAGES - count)}/${LIMIT_MAX_MESSAGES}`;

    if (isReached) {
      chatInput.disabled = true;
      sendBtn.disabled = true;
      disabledOverlay.classList.add("active");
      updateCountdownDisplay(startTimestamp);
    } else {
      chatInput.disabled = false;
      sendBtn.disabled = false;
      disabledOverlay.classList.remove("active");
    }
  }

  function updateCountdownDisplay(startTimestamp) {
    if (!startTimestamp) {
      countdownSpan.innerText = "00:00:00";
      return;
    }
    const now = Date.now();
    const timeElapsed = now - startTimestamp;
    const timeRemaining = Math.max(0, LIMIT_RESET_TIME_MS - timeElapsed);

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    countdownSpan.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    // If countdown hits zero while viewing, trigger auto-reset check
    if (timeRemaining <= 0) {
      checkSessionLimit();
    }
  }

  // Handle User Message Submission
  function sendMessage() {
    if (checkSessionLimit()) return;

    const messageText = chatInput.value.trim();
    if (!messageText) return;

    // Retrieve or initialize session start
    let sessionStart = localStorage.getItem("ew_chat_session_start");
    if (!sessionStart) {
      localStorage.setItem("ew_chat_session_start", Date.now().toString());
    }

    // Increment message count
    let messageCount = parseInt(localStorage.getItem("ew_chat_message_count") || "0");
    messageCount++;
    localStorage.setItem("ew_chat_message_count", messageCount.toString());

    // Update UI session counter
    checkSessionLimit();

    // Render message in chatbox
    appendMessage(messageText, "user");
    chatInput.value = "";
    scrollToBottom();

    // Trigger AI response call
    callAI(messageText);
  }

  // Communication with Mistral API
  async function callAI(userMessage) {
    const apiKey = getAPIKey();
    const model = getModel();

    if (!apiKey || apiKey === "your_mistral_api_key_here") {
      setTimeout(() => {
        appendSystemMessage(
          `<strong>Perhatian:</strong> API Key Mistral belum diatur.<br>
           Silakan buka berkas <code>.env</code> di direktori root proyek Anda, masukkan API Key Mistral Anda pada <code>MISTRAL_API_KEY</code>, lalu segarkan halaman ini.`
        );
        scrollToBottom();
      }, 600);
      return;
    }

    // Show Typing Dot animation
    typingIndicator.style.display = "flex";
    scrollToBottom();

    // Manage Context Memory (Sliding Window of 10 messages)
    chatHistory.push({ role: "user", content: userMessage });
    if (chatHistory.length > 10) {
      chatHistory.shift();
    }

    // Construct Context System Prompt
    const systemPrompt = `Kamu adalah EqualWork AI Assistant, asisten kecerdasan buatan resmi untuk platform EqualWork.
Tugas kamu adalah menjawab pertanyaan pengguna secara ramah, ringkas, dan akurat HANYA berdasarkan database dan informasi platform EqualWork di bawah ini.
Jika ada pertanyaan di luar konteks ketenagakerjaan, upah minimum, hak pekerja wanita, kesetaraan gender, atau platform EqualWork, kamu WAJIB menolak menjawab secara sopan dan menjelaskan bahwa kamu hanya didesain untuk menjawab topik-topik tersebut.

PENTING: Gunakan format markdown tebal \`**teks**\`, miring \`*teks*\`, subjudul \`### Judul\`, dan daftar list \`- butir\` untuk membuat tulisanmu terstruktur dengan rapi, berbobot, dan mudah dibaca. Penulis parser di frontend akan menerjemahkan kode-kode ini secara otomatis ke dalam format HTML yang bersih tanpa menyisakan karakter asteriks (*) atau pagar (#) mentah di layar pengguna.

--- DATABASE PLATFORM EQUALWORK ---
1. TENTANG EQUALWORK:
   Platform dashboard transparansi kerja, pemenuhan hak upah minimum nasional, perlindungan hak buruh perempuan, dan kesetaraan gender industri di Indonesia.

2. PANEL BERANDA (ID: panel-beranda / menu: #beranda):
   - Deskripsi: Halaman sambutan utama. Memiliki tombol analisis UMP dan audit kepatuhan.
   - Statistik Cepat: 50+ Aturan & Regulasi, 38 Provinsi terdaftar, 5 Hak Vital Wanita, 6+ Lembaga Bantuan/Kontak Instansi.
   - Spotlight: Artikel "Motherhood Penalty" (Ibu bekerja yang tersisih dari promosi jabatan karena beban ganda rumah tangga dan bias rekrutmen).

3. PANEL PERATURAN & HUKUM (ID: panel-peraturan / menu: #peraturan):
   - Regulasi Utama:
     * UU Nomor 13 Tahun 2003 (Ketenagakerjaan):
       - Pasal 5 & 6: Menjamin kesempatan dan perlakuan kerja yang sama tanpa diskriminasi.
       - Pasal 76: Batasan kerja malam perempuan hamil/menyusui (pukul 23.00-05.00), wajib angkutan jemputan malam & makanan bergizi.
       - Pasal 81: Cuti haid 2 hari jika terasa sakit pada hari pertama/kedua dengan upah penuh dibayar.
       - Pasal 82: Cuti melahirkan 3 bulan (1.5 bulan sebelum & 1.5 bulan setelah), cuti keguguran 1.5 bulan dengan upah penuh dibayar.
       - Pasal 83: Hak menyusui/memerah ASI selama jam kerja di ruang khusus.
     * UU Nomor 6 Tahun 2023 (Cipta Kerja) / Perpu Cipta Kerja: Mengubah sistem pengupahan minimum, jam kerja, pesangon, dan PHK.
     * PP Nomor 36 Tahun 2021 (Pengupahan): Mengatur teknis penghitungan upah minimum secara objektif berdasarkan inflasi dan pertumbuhan ekonomi.

4. PANEL UPAH MINIMUM (ID: panel-upah / menu: #upah):
   - UMP 2024 (Upah Minimum Provinsi) Indonesia:
     * DKI Jakarta: Rp 5.067.381 (Kenaikan 3.38%)
     * Jawa Barat: Rp 2.057.495 (Kenaikan 3.57%)
     * Jawa Tengah: Rp 2.036.947 (Kenaikan 4.02%)
     * DI Yogyakarta: Rp 2.125.897 (Kenaikan 7.27%)
     * Jawa Timur: Rp 2.165.244 (Kenaikan 4.10%)
     * Banten: Rp 2.727.812 (Kenaikan 2.50%)
     * Bali: Rp 2.813.672 (Kenaikan 3.68%)
     * Aceh: Rp 3.460.672 (Kenaikan 1.38%)
     * Maluku Utara: Rp 3.200.000 (Kenaikan 7.50%)
     * Papua: Rp 4.024.270 (Kenaikan 4.13%)
   - UMK 2024 (Beberapa Kota Besar Jawa Barat): Karawang (Rp 5.257.534 - tertinggi), Kota Bekasi (Rp 5.219.263), Kota Depok (Rp 4.878.612), Kota Bandung (Rp 4.209.309).
   - Perbandingan ASEAN: Singapura tertinggi (~Rp 18-20jt), Malaysia (~Rp 5.1jt), Indonesia (~Rp 3.1jt), Vietnam (~Rp 3.0jt), Laos/Myanmar terendah (< Rp 1.5jt).

5. PANEL HAK PEKERJA WANITA (ID: panel-hak-wanita / menu: #hak-wanita):
   - 5 Hak Vital Wanita:
     1. Cuti Haid (2 hari, Pasal 81 UU 13/2003, berbayar penuh).
     2. Ruang & Waktu Menyusui/Laktasi (Pasal 83 UU 13/2003).
     3. Proteksi Cuti Melahirkan (3 bulan, Pasal 82 UU 13/2003, dilarang PHK).
     4. Kendaraan Jemputan Malam (wajib untuk jam 23.00 - 05.00, Pasal 76 UU 13/2003).
     5. Hak Upah Setara (Equal Pay, upah sama untuk kerja bernilai setara).
   - Alat Audit: Pengguna bisa melakukan "Penilaian Mandiri / Audit Kepatuhan Kantor" terhadap pemenuhan 5 hak tersebut di panel ini.

6. PANEL GENDER INSIGHT (ID: panel-insight / menu: #insight):
   - Gender Pay Gap: Di Indonesia, perempuan dibayar 22% lebih rendah dari laki-laki (BPS).
   - Leadership: Representasi perempuan di posisi manajerial rendah (~30%) karena beban ganda kerja-keluarga.
   - Diskriminasi Rekrutmen: Syarat usia, foto menarik, status pernikahan mendominasi bias perekrutan.
   - Pelecehan Seksual: Tingginya angka pelecehan di tempat kerja, minimnya pelaporan karena rasa takut.

7. PANEL KONTAK INSTANSI (ID: panel-pengaduan / menu: #pengaduan):
   - KEMNAKER RI: Pelaporan pelanggaran UMP/hak kerja via Wajib Lapor Ketenagakerjaan (WLKP) / Call Center 1500-630.
   - Komnas Perempuan: Pengaduan pelecehan & kekerasan seksual (Telp: 021-3903963).
   - YLBHI / LBH: Bantuan hukum gratis bagi buruh kurang mampu.
   - BP2MI: Perlindungan Tenaga Kerja Indonesia di luar negeri.
   - Komnas HAM: Pengaduan pelanggaran HAM berat ketenagakerjaan.
   - BPJS Ketenagakerjaan: Klaim jaminan kecelakaan kerja, kematian, hari tua, pensiun.

8. PANEL REFERENSI (ID: panel-artikel / menu: #artikel):
   - Daftar pustaka resmi, publikasi riset ILO, data statistik BPS yang dirangkum di platform.

--- KENDALI NAVIGASI WEBSITE ---
PENTING: Jika pengguna menanyakan, meminta membuka, atau menunjukkan niat untuk berpindah ke salah satu halaman menu di atas, kamu WAJIB meletakkan kode "[SWITCH_PANEL: panel_id]" pada baris pertama responmu sebelum menjawab.
Pilihlah dari panel_id berikut yang paling relevan:
- beranda (Halaman Utama, Statistik, Motherhood Penalty)
- peraturan (Undang-Undang, Peraturan Hukum, PP)
- upah (UMP, UMK, ASEAN, Kalkulator Upah)
- hak-wanita (Cuti Haid, Melahirkan, Menyusui, Jemputan Malam, Audit Kantor)
- insight (Gender Pay Gap, Manajerial, Pelecehan)
- pengaduan (Kontak Kemnaker, Komnas Perempuan, LBH, BPJS)
- artikel (Referensi, Daftar Pustaka)

Contoh: jika pengguna bilang "Saya ingin mengecek upah minimum Jakarta", respon kamu harus diawali dengan:
[SWITCH_PANEL: upah]
Tentu, saya telah mengarahkan Anda ke Halaman Upah Minimum. Berdasarkan data EqualWork UMP DKI Jakarta 2024 adalah Rp 5.067.381...

Jangan pernah meletakkan tag ini jika pengguna hanya mengobrol biasa tanpa berniat berpindah halaman.`;

    const messagesToSend = [
      { role: "system", content: systemPrompt },
      ...chatHistory
    ];

    try {
      const response = await fetch(MISTRAL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: messagesToSend,
          temperature: 0.2
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }

      const data = await response.json();
      const rawReply = data.choices[0].message.content.trim();

      // Process reply: Check for panel switches
      let displayReply = rawReply;
      const panelRegex = /\[SWITCH_PANEL:\s*([a-zA-Z-]+)\s*\]/;
      const match = rawReply.match(panelRegex);

      if (match) {
        const targetPanel = match[1].trim();
        displayReply = rawReply.replace(panelRegex, "").trim();
        navigateWebsiteTo(targetPanel);
      }

      // Hide typing dots
      typingIndicator.style.display = "none";

      // Render AI response
      appendMessage(displayReply, "bot");
      chatHistory.push({ role: "assistant", content: displayReply });
      if (chatHistory.length > 10) {
        chatHistory.shift();
      }

      scrollToBottom();
    } catch (error) {
      console.error("Chatbot API Call Error:", error);
      typingIndicator.style.display = "none";
      appendSystemMessage(
        `<strong>Gagal memproses pesan:</strong> Gagal terhubung ke Mistral API.<br>
         Pastikan API Key Anda benar, kuota API memadai, dan koneksi internet stabil.`
      );
      scrollToBottom();
    }
  }

  // Trigger site navigation via clicks
  function navigateWebsiteTo(panelId) {
    const menuLink = document.querySelector(`.nav-menu a[href="#${panelId}"]`);
    if (menuLink) {
      menuLink.click();
      if (typeof showToast === "function") {
        showToast(`Navigasi otomatis ke panel: ${menuLink.innerText}`, "info");
      }
    }
  }

  // UI Helpers
  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chatbot-message", sender);
    msgDiv.innerHTML = parseMarkdown(text);
    chatMessages.appendChild(msgDiv);
  }

  function appendSystemMessage(htmlContent) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chatbot-message", "bot");
    msgDiv.style.borderColor = "rgba(239, 68, 68, 0.3)";
    msgDiv.style.background = "#fef2f2";
    msgDiv.style.color = "#991b1b";
    msgDiv.innerHTML = htmlContent;
    chatMessages.appendChild(msgDiv);
  }

  // Parser to clean up and format the text (stripping markdown characters # and * while rendering formatting)
  function parseMarkdown(text) {
    // 1. Escape HTML to prevent XSS
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const lines = html.split("\n");
    let inList = false;
    const processedLines = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (!line) {
        if (inList) {
          processedLines.push("</ul>");
          inList = false;
        }
        processedLines.push("<br>");
        continue;
      }

      // Check for headers (e.g. ### Heading)
      const headerMatch = line.match(/^(#{1,6})\s+(.*)$/);
      let isHeader = false;
      if (headerMatch) {
        isHeader = true;
        if (inList) {
          processedLines.push("</ul>");
          inList = false;
        }
        const headerText = headerMatch[2];
        line = `<h4 class="chatbot-msg-header" style="font-family: var(--font-title); font-weight: 700; margin-top: 0.6rem; margin-bottom: 0.3rem; color: var(--text-dark);">${headerText}</h4>`;
      }

      // Check for list items (e.g. - item or * item)
      const isListItem = line.startsWith("- ") || line.startsWith("* ") || line.startsWith("• ");
      if (isListItem && !isHeader) {
        if (!inList) {
          processedLines.push('<ul style="margin-left: 1.2rem; margin-bottom: 0.5rem; list-style-type: disc;">');
          inList = true;
        }
        const itemText = line.replace(/^[-*•]\s+/, "");
        line = `<li style="margin-bottom: 0.25rem;">${itemText}</li>`;
      } else if (!isHeader && inList) {
        processedLines.push("</ul>");
        inList = false;
      }

      // Replace bold syntax **bold**
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      line = line.replace(/__(.*?)__/g, "<strong>$1</strong>");

      // Replace italic syntax *italic*
      line = line.replace(/\*(.*?)\*/g, "<em>$1</em>");
      line = line.replace(/_(.*?)_/g, "<em>$1</em>");

      // Rogue character cleanup (strip remaining hashes or asterisks)
      line = line.replace(/\*/g, "").replace(/#/g, "");

      processedLines.push(line);
    }

    if (inList) {
      processedLines.push("</ul>");
    }

    return processedLines.join("\n");
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function startCountdownTimer() {
    stopCountdownTimer();
    countdownInterval = setInterval(() => {
      let sessionStart = localStorage.getItem("ew_chat_session_start");
      if (sessionStart) {
        sessionStart = parseInt(sessionStart);
        const limitReached = parseInt(localStorage.getItem("ew_chat_message_count") || "0") >= LIMIT_MAX_MESSAGES;
        if (limitReached) {
          updateCountdownDisplay(sessionStart);
        }
      }
    }, 1000);
  }

  function stopCountdownTimer() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }
})();
