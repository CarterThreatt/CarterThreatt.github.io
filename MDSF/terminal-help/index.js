// Marlie's Closet Terminal Help
// To add a help topic, add an object to the `topics` list below.
// To add a tutorial video to a topic, set its `video` to the file path, e.g. "videos/make-a-sale.mp4".

// ---------- Small icons used in the steps ----------
const icons = {
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/></svg>',
  expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11M3 12h11M3 18h11"/><path d="M17 9l3 3-3 3"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 8H6.2"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z" fill="currentColor"/></svg>',
  chevron: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>'
};

// ---------- Help topics ----------
const topics = [
  {
    id: "make-a-sale",
    icon: icons.cart,
    title: "How to make a sale",
    summary: "Ring up a purchase and run a card.",
    video: null, // e.g. "videos/make-a-sale.mp4"
    steps: [
      {
        html: '<p>Open the <strong>Bloomerang Fundraising</strong> app.</p>' +
              '<span class="look"><img src="images/Bloomerang%20Fundraising%20App%20Icon.png" alt="Bloomerang Fundraising app icon"> Look for this icon on the home screen.</span>'
      },
      {
        html: '<p>Tap <strong>“Marlies Closet Purchases - Virtual Terminal Only.”</strong></p>' +
              '<span class="step-note">You may not need to do this. Depending on how long it has been since the last sale, the app may open straight into the form.</span>'
      },
      {
        html: '<p>Make sure you are in <strong>Registration</strong> mode. Its icon looks like a ticket <span class="ico">' + icons.ticket + '</span> and it is the <strong>second icon</strong> on the left sidebar.</p>' +
              '<span class="step-note">To see the name of each section, tap the three lines with an arrow <span class="ico">' + icons.expand + '</span> at the very top of the left sidebar.</span>'
      },
      {
        html: '<p>Choose what the person is buying and the quantity, then tap <span class="kbd">Continue</span> in the bottom right.</p>'
      },
      {
        html: '<p>Enter their <strong>first name</strong>, <strong>last name</strong>, and <strong>email address</strong>, then tap <span class="kbd">Continue</span> in the bottom right.</p>' +
              '<span class="step-note">Physical address is optional.</span>'
      },
      {
        warn: true,
        html: '<span class="tag">Always</span><p>If they are paying with a <strong>credit card</strong>, turn <strong>Help Cover Fees</strong> on.</p>'
      },
      {
        html: '<p>Tap <span class="kbd">Card Reader</span>.</p>'
      },
      {
        html: '<p>Run the card.</p>'
      }
    ]
  },
  {
    id: "login",
    icon: icons.key,
    title: "The app is asking me to log in",
    summary: "What to do when Bloomerang Fundraising shows a login screen.",
    video: null,
    steps: [
      {
        html: '<p>On the login screen, tap the <span class="kbd">Admin</span> tab.</p>' +
              '<span class="step-note">Not “Access Key.”</span>'
      },
      {
        html: '<p>Enter the terminal’s email address and password.</p>' +
              '<div class="field"><span class="field-label">Email</span><span class="field-value">closetterminal@marliedrusullivan.org</span><button class="copy" type="button" data-copy="closetterminal@marliedrusullivan.org">Copy</button></div>' +
              '<span class="step-note">For the password, contact Carter Threatt (contact info below).</span>'
      },
      {
        html: '<p>Tap <span class="kbd">Login</span> at the bottom of the screen.</p>'
      }
    ]
  }
];

// ---------- Page elements ----------
const home = document.getElementById("home");
const detail = document.getElementById("detail");
const list = document.getElementById("topic-list");
const content = document.getElementById("detail-content");
const backBtn = document.getElementById("back-btn");

// ---------- Build the topic list ----------
topics.forEach((topic) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "topic";
  btn.innerHTML =
    '<span class="topic-num">' + topic.icon + '</span>' +
    '<span class="topic-text"><span class="topic-title">' + topic.title + '</span>' +
    '<span class="topic-sub">' + topic.summary + '</span></span>' +
    icons.chevron;
  btn.onclick = (e) => {
    location.hash = topic.id;
  };
  list.appendChild(btn);
});

// ---------- Show one topic ----------
const showTopic = (topic) => {
  let html = '<div class="detail-head"><h2>' + topic.title + '</h2><p>' + topic.summary + '</p></div>';

  if (topic.video) {
    html += '<div class="video"><video src="' + topic.video + '" controls playsinline preload="metadata"></video></div>';
  } else if (topic.id === "make-a-sale") {
    html += '<div class="video video--soon">' + icons.play + '<span>A tutorial video for this is coming soon.</span></div>';
  }

  html += '<ol class="steps">';
  topic.steps.forEach((step, i) => {
    html += '<li class="step' + (step.warn ? ' step--warn' : '') + '">' +
            '<span class="step-n">' + (i + 1) + '</span>' +
            '<div class="step-body">' + step.html + '</div></li>';
  });
  html += '</ol>';

  content.innerHTML = html;

  // Copy buttons
  content.querySelectorAll(".copy").forEach((btn) => {
    btn.onclick = (e) => {
      copyText(btn.dataset.copy, btn);
    };
  });

  home.hidden = true;
  detail.hidden = false;
  window.scrollTo(0, 0);
};

const showHome = () => {
  detail.hidden = true;
  home.hidden = false;
  content.innerHTML = ""; // stops any playing video
  window.scrollTo(0, 0);
};

// ---------- Copy to clipboard ----------
const copyText = (text, btn) => {
  const done = () => {
    btn.textContent = "Copied!";
    btn.classList.add("is-done");
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.classList.remove("is-done");
    }, 1800);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
};

const fallbackCopy = (text, done) => {
  const box = document.createElement("textarea");
  box.value = text;
  box.setAttribute("readonly", "");
  box.style.position = "fixed";
  box.style.opacity = "0";
  document.body.appendChild(box);
  box.select();
  box.setSelectionRange(0, text.length);
  document.execCommand("copy");
  document.body.removeChild(box);
  done();
};

// ---------- Simple routing (so the iPad's swipe-back and links work) ----------
const route = () => {
  const id = location.hash.replace("#", "");
  const topic = topics.find((t) => t.id === id);
  if (topic) {
    showTopic(topic);
  } else {
    showHome();
  }
};

backBtn.onclick = (e) => {
  location.hash = "";
};

window.onhashchange = (e) => {
  route();
};

route();
