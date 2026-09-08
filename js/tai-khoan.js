const ACCOUNT_KEY = "bm-customer-account";
const SESSION_KEY = "bm-customer-session";

const tabs = document.querySelectorAll("#accountTabs button");
const form = document.getElementById("authForm");
const message = document.getElementById("accountMessage");
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
let mode = "login";

function getCartCount() {
  try {
    const items = JSON.parse(localStorage.getItem("bm-cart-items") || "[]");
    return items.reduce((total, item) => total + (item.quantity || 0), 0);
  } catch {
    return 0;
  }
}

function showMessage(text) {
  message.textContent = text;
}

showPassword.addEventListener("change", () => {
  passwordInput.type = showPassword.checked ? "text" : "password";
});

function setMode(nextMode) {
  mode = nextMode;
  const isRegister = mode === "register";

  form.reset();
  showMessage("");
  document.getElementById("nameField").hidden = !isRegister;
  document.getElementById("formTitle").textContent = isRegister ? "Tạo tài khoản mới" : "Chào mừng trở lại";
  document.getElementById("formDescription").textContent = isRegister
    ? "Đăng ký để lưu thông tin và theo dõi đơn hàng."
    : "Đăng nhập để tiếp tục mua sắm.";
  document.getElementById("submitButton").textContent = isRegister ? "Đăng ký" : "Đăng nhập";
  passwordInput.autocomplete = isRegister ? "new-password" : "current-password";
  passwordInput.type = "password";
  showPassword.checked = false;

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
}

function showDashboard(account) {
  document.getElementById("accountTabs").style.display = "none";
  document.getElementById("accountForm").style.display = "none";
  document.getElementById("customerName").textContent = account.name || account.email;
  document.getElementById("accountDashboard").style.display = "block";
}

function getSavedAccount() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
  } catch {
    return null;
  }
}

function saveAccount(account) {
  try {
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
    localStorage.setItem(SESSION_KEY, JSON.stringify({ name: account.name, email: account.email }));
    return true;
  } catch {
    showMessage("Trình duyệt đang chặn lưu dữ liệu. Hãy mở trang bằng Live Server.");
    return false;
  }
}

tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = passwordInput.value;
  const account = getSavedAccount();

  if (!email || !password || (mode === "register" && !name)) {
    showMessage("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password.length < 6) {
    showMessage("Mật khẩu cần có ít nhất 6 ký tự.");
    return;
  }

  if (mode === "register") {
    if (account?.email === email) {
      showMessage("Email này đã được đăng ký. Hãy đăng nhập.");
      return;
    }

    const newAccount = { name, email, password };
    if (saveAccount(newAccount)) showDashboard(newAccount);
    return;
  }

  if (!account || account.email !== email || account.password !== password) {
    showMessage("Email hoặc mật khẩu không đúng.");
    return;
  }

  if (saveAccount(account)) showDashboard(account);
});

document.getElementById("forgotPassword").addEventListener("click", (event) => {
  event.preventDefault();
  showMessage("Trang tĩnh chưa hỗ trợ gửi lại mật khẩu.");
});

document.getElementById("logoutButton").addEventListener("click", () => {
  localStorage.removeItem(SESSION_KEY);
  window.location.reload();
});

document.getElementById("bmCartCount").textContent = getCartCount();

let session = null;

try {
  session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
} catch {
  session = null;
}

if (session) showDashboard(session);

const mobileToggle = document.getElementById("bmMobileToggle");
const header = document.querySelector(".bm-header");

mobileToggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
  mobileToggle.querySelector("i").classList.toggle("fa-bars");
  mobileToggle.querySelector("i").classList.toggle("fa-xmark");
});
