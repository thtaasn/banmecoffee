(function () {
  const searchData = [
    {
      title: "Trang chủ",
      type: "Trang",
      description: "Tổng quan về Ban Mê Coffee, sản phẩm nổi bật và tin tức mới.",
      href: "index.html",
      keywords: ["home", "trang chủ", "ban mê", "coffee"],
    },
    {
      title: "Giới thiệu",
      type: "Trang",
      description: "Câu chuyện thương hiệu, giá trị cốt lõi và hành trình phát triển.",
      href: "gioi-thieu.html",
      keywords: ["giới thiệu", "thương hiệu", "câu chuyện", "giá trị"],
    },
    {
      title: "Cà phê Ban Mê",
      type: "Trang",
      description: "Tìm hiểu bản sắc hương vị Ban Mê và gu cà phê Tây Nguyên.",
      href: "ca-phe-ban-me.html",
      keywords: ["cà phê ban mê", "hương vị", "tây nguyên", "gu vị"],
    },
    {
      title: "Sản phẩm",
      type: "Trang",
      description: "Danh sách 10 sản phẩm cà phê Ban Mê Coffee.",
      href: "san-pham.html",
      keywords: ["sản phẩm", "danh mục", "cà phê"],
    },
    {
      title: "Tin tức",
      type: "Trang",
      description: "3 bài viết nổi bật dành cho người yêu cà phê.",
      href: "tin-tuc.html",
      keywords: ["tin tức", "bài viết", "kiến thức cà phê"],
    },
    {
      title: "Liên hệ",
      type: "Trang",
      description: "Thông tin liên hệ và form hỗ trợ từ Ban Mê Coffee.",
      href: "lien-he.html",
      keywords: ["liên hệ", "hỗ trợ", "địa chỉ", "email", "điện thoại"],
    },
    {
      title: "Giỏ hàng",
      type: "Trang",
      description: "Xem sản phẩm đã thêm, tăng giảm số lượng và tổng đơn.",
      href: "gio-hang.html",
      keywords: ["giỏ hàng", "cart", "đơn hàng"],
    },
    {
      title: "Đặt hàng",
      type: "Trang",
      description: "Điền thông tin giao hàng và xác nhận đơn mua.",
      href: "dat-hang.html",
      keywords: ["đặt hàng", "thanh toán", "checkout"],
    },
    {
      title: "Cà phê Robusta 500G",
      type: "Sản phẩm",
      description: "Dòng rang đậm, hợp pha phin truyền thống.",
      href: "chi-tiet-san-pham.html?id=robusta-500g",
      keywords: ["robusta", "500g", "đậm", "pha phin"],
    },
    {
      title: "Cà phê Robusta 250G",
      type: "Sản phẩm",
      description: "Gói nhỏ tiện dùng, giữ trọn vị cà phê đậm.",
      href: "chi-tiet-san-pham.html?id=robusta-250g",
      keywords: ["robusta", "250g", "gói nhỏ"],
    },
    {
      title: "Cà phê Arabica 500G",
      type: "Sản phẩm",
      description: "Dòng hương thơm, vị cân bằng và dễ uống hơn.",
      href: "chi-tiet-san-pham.html?id=arabica-500g",
      keywords: ["arabica", "500g", "thơm", "cân bằng"],
    },
    {
      title: "Cà phê Rang Xay 500G",
      type: "Sản phẩm",
      description: "Xay sẵn tiện pha, phù hợp dùng hằng ngày.",
      href: "chi-tiet-san-pham.html?id=rang-xay-500g",
      keywords: ["rang xay", "500g", "xay sẵn"],
    },
    {
      title: "Cà phê Phin Blend 500G",
      type: "Sản phẩm",
      description: "Blend pha phin cân bằng giữa hương và độ đậm.",
      href: "chi-tiet-san-pham.html?id=phin-blend-500g",
      keywords: ["phin blend", "pha phin", "blend"],
    },
    {
      title: "Cà phê Espresso Blend 500G",
      type: "Sản phẩm",
      description: "Dòng espresso vị dày, hợp máy pha.",
      href: "chi-tiet-san-pham.html?id=espresso-blend-500g",
      keywords: ["espresso", "blend", "máy pha"],
    },
    {
      title: "Cà phê Moka 250G",
      type: "Sản phẩm",
      description: "Dòng hương nổi bật, mềm vị và hợp dùng thử.",
      href: "chi-tiet-san-pham.html?id=moka-250g",
      keywords: ["moka", "250g", "hương nổi bật"],
    },
    {
      title: "Cold Brew Blend 500G",
      type: "Sản phẩm",
      description: "Dòng pha lạnh vị êm và sạch.",
      href: "chi-tiet-san-pham.html?id=cold-brew-blend-500g",
      keywords: ["cold brew", "pha lạnh", "blend"],
    },
    {
      title: "Cà phê Hạt Mộc 1KG",
      type: "Sản phẩm",
      description: "Gói lớn tiết kiệm cho nhu cầu dùng thường xuyên.",
      href: "chi-tiet-san-pham.html?id=hat-moc-1kg",
      keywords: ["hạt mộc", "1kg", "tiết kiệm"],
    },
    {
      title: "Cà phê Túi Lọc 10 Gói",
      type: "Sản phẩm",
      description: "Pha nhanh, gọn, tiện mang theo.",
      href: "chi-tiet-san-pham.html?id=tui-loc-10-goi",
      keywords: ["túi lọc", "10 gói", "tiện dụng"],
    },
    {
      title: "Hành trình hạt cà phê Tây Nguyên",
      type: "Tin tức",
      description: "Từ nương rẫy bazan màu mỡ đến ly cà phê thơm ngon.",
      href: "chi-tiet-tin-tuc.html?id=hanh-trinh-hat-ca-phe-tay-nguyen",
      keywords: ["hành trình", "hạt cà phê", "tây nguyên", "kiến thức"],
    },
    {
      title: "Bí quyết pha phin chuẩn vị",
      type: "Tin tức",
      description: "Mẹo nhỏ để ly cà phê phin đậm hơn và thơm hơn.",
      href: "chi-tiet-tin-tuc.html?id=bi-quyet-pha-phin-chuan-vi",
      keywords: ["pha phin", "chuẩn vị", "mẹo pha chế"],
    },
    {
      title: "Vì sao chọn Ban Mê Coffee?",
      type: "Tin tức",
      description: "Gu thưởng thức nguyên bản, đậm vị và dễ gắn bó.",
      href: "chi-tiet-tin-tuc.html?id=vi-sao-chon-ban-me-coffee",
      keywords: ["vì sao chọn", "ban mê coffee", "thương hiệu"],
    },
  ];

  function normalizeText(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function ensureSearchUi() {
    if (document.getElementById("bmSearchOverlay")) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="bm-search-overlay" id="bmSearchOverlay" hidden>' +
      '<div class="bm-search-dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm">' +
      '<div class="bm-search-head">' +
      '<div class="bm-search-input-wrap">' +
      '<i class="fa-solid fa-magnifying-glass"></i>' +
      '<input type="text" id="bmSearchInput" placeholder="Tìm trang, sản phẩm, bài viết..." />' +
      "</div>" +
      '<button type="button" class="bm-search-close" id="bmSearchClose" aria-label="Đóng tìm kiếm">' +
      '<i class="fa-solid fa-xmark"></i>' +
      "</button>" +
      "</div>" +
      '<div class="bm-search-results" id="bmSearchResults"></div>' +
      "</div>" +
      "</div>";

    document.body.appendChild(wrapper.firstChild);
  }

  function renderResults(query) {
    const resultsNode = document.getElementById("bmSearchResults");
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) {
      resultsNode.innerHTML =
        '<div class="bm-search-empty">Nhập từ khóa để tìm sản phẩm, tin tức hoặc trang bạn cần.</div>';
      return;
    }

    const results = searchData.filter(function (item) {
      const haystack = normalizeText(
        [item.title, item.type, item.description, (item.keywords || []).join(" ")].join(" ")
      );

      return haystack.includes(normalizedQuery);
    });

    if (!results.length) {
      resultsNode.innerHTML =
        '<div class="bm-search-empty">Không tìm thấy nội dung phù hợp.</div>';
      return;
    }

    resultsNode.innerHTML = results
      .slice(0, 8)
      .map(function (item) {
        return (
          '<a class="bm-search-item" href="' +
          item.href +
          '">' +
          '<span class="bm-search-type">' +
          item.type +
          "</span>" +
          "<strong>" +
          item.title +
          "</strong>" +
          "<p>" +
          item.description +
          "</p>" +
          "</a>"
        );
      })
      .join("");
  }

  function openSearch() {
    const overlay = document.getElementById("bmSearchOverlay");
    const input = document.getElementById("bmSearchInput");

    overlay.hidden = false;
    document.body.classList.add("bm-search-open");
    input.value = "";
    renderResults("");
    window.setTimeout(function () {
      input.focus();
    }, 10);
  }

  function closeSearch() {
    const overlay = document.getElementById("bmSearchOverlay");

    if (!overlay) {
      return;
    }

    overlay.hidden = true;
    document.body.classList.remove("bm-search-open");
  }

  function bindSearchTriggers() {
    document.querySelectorAll('[aria-label="Tìm kiếm"]').forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        openSearch();
      });
    });

    document.getElementById("bmSearchClose").addEventListener("click", closeSearch);
    document.getElementById("bmSearchOverlay").addEventListener("click", function (event) {
      if (event.target.id === "bmSearchOverlay") {
        closeSearch();
      }
    });

    document.getElementById("bmSearchInput").addEventListener("input", function (event) {
      renderResults(event.target.value);
    });

    document.getElementById("bmSearchResults").addEventListener("click", function (event) {
      const searchItem = event.target.closest(".bm-search-item");

      if (!searchItem) {
        return;
      }

      event.preventDefault();
      closeSearch();
      window.location.href = searchItem.getAttribute("href");
    });

    document.addEventListener("keydown", function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
      }

      if (event.key === "Escape") {
        closeSearch();
      }
    });
  }

  ensureSearchUi();
  bindSearchTriggers();
})();
