// Text fly Start
// const text = $($(".text")[0]);

// text.html(text.text().replace(/\S/g, "<span>$&</span>"));

// const animation = anime.timeline({
//   targets: ".text span",
//   easing: "easeInOutExpo",
//   loop: false,
// });

// animation
//   .add({
//     rotate: 0,
//     translateX: 0,
//     translateY: 0,
//     duration: 5000,
//     delay: anime.stagger(20),
//   })
//   .add({
//     rotate: function () {
//       return anime.random(-360, 360);
//     },
//     translateX: function () {
//       return anime.random(-500, 500);
//     },
//     translateY: function () {
//       return anime.random(-500, 500);
//     },
//     duration: 5000,
//     delay: anime.stagger(20),
//   });
// Text fly End

// Page Demo Start

const rotateDeg = 40;
let defaultIndex = 3;
let currentAngle = 0;
let degCorner = 0;
let oldDegCorner = 0;
let mainItem = 1;
let isLoading = false;
let defaultStatus = false;
let windowWidth = $(window).width();
let itemsDisplay = 0;
let indexData = 0;

if (windowWidth <= 992) {
  degCorner = 45;
  itemsDisplay = 8;
} else {
  degCorner = 30;
  itemsDisplay = 12;
}

const countItemOnCircle = 360 / degCorner;

const data = [
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title:
        "ポーション・ボトル・パックへ の O E M 商品 企 画・製 造 。",
      describe_title_sp: "ポーション・ボトル・パックへの受託充填業務。",
      describe:
        "こ れ は ダ ミ ー で す 。最 終 は こ こ に 適 切 な コ ピ ー が 入 り ま す 。こ れ はダ ミ ー で す 。最 終 は こ こ に 適 切 な コ ピ ー が 入 り ま す 。こ れ は ダ ミ ーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left_pc: "てんてきの糖だけじゃない",
    content_left_sp: ["だけじゃない!", "やまと蜂蜜"],
    bg_color: "linear-gradient(to bottom right, blue, yellow)",
    text_btn: "OEM・PB 商品の企画製造につい",
    text_btn_see_more: "詳しく見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_green.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "海外企業に対する液体商品充填業務。",
      describe_title_sp: "ポーション・ボトル・パックへの受託充填業務。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left_pc: "てんてきの糖だけじゃない",
    content_left_sp: ["だけじゃない!", "やまと蜂蜜"],
    bg_color: "linear-gradient(to bottom right, green, pink)",
    text_btn: "海外のお客様へ",
    text_btn_see_more: "詳しく見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "やまと蜂蜜の将来を担う若手社員を積極採用。",
      describe_title_sp: "ポーション・ボトル・パックへの受託充填業務。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left_pc: "てんてきの糖だけじゃない",
    content_left_sp: ["だけじゃない!", "やまと蜂蜜"],
    bg_color: "linear-gradient(to bottom right, purple, orange)",
    text_btn: "採用サイトを見る",
    text_btn_see_more: "詳しく見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_green.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "70年余の歴史を守る、堅実な経営体制。",
      describe_title_sp: "ポーション・ボトル・パックへの受託充填業務。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left_pc: "てんてきの糖だけじゃない",
    content_left_sp: ["だけじゃない!", "やまと蜂蜜"],
    bg_color: "linear-gradient(to bottom right, gray, red)",
    text_btn: "会社概要を見る",
    text_btn_see_more: "詳しく見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "接遇品質にこだわったお客様への丁寧な対応。",
      describe_title_sp: "ポーション・ボトル・パックへの受託充填業務。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left_pc: "てんてきの糖だけじゃない",
    content_left_sp: ["だけじゃない!", "やまと蜂蜜"],
    bg_color: "linear-gradient(to bottom right, red, green)",
    text_btn: "お問い合わせページを見る",
    text_btn_see_more: "詳しく見る",
    store_name: "YAMATO HONEY",
  },
];

$(window).bind("mousewheel DOMMouseScroll", function (event) {
  if (isLoading) {
    return;
  }

  isLoading = true;
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    console.log("Scroll up");

    // setTimeout(() => {
    //   handleRemoveClassForOldItemSelected();
    //   mainItem = mainItem >= itemsDisplay ? 1 : ++mainItem;
    //   handleAddClassForCurrentItemSelected();

    //   handleRotation(degCorner, true);

    //   setTimeout(() => {
    //     isLoading = false;
    //   }, 1000);
    //   handleSetIndexItemDisplay();
    // }, 300);

    handleNextItem();
  } else {
    console.log("Scroll down");

    // setTimeout(() => {
    //   handleRemoveClassForOldItemSelected();
    //   mainItem = mainItem < 2 ? itemsDisplay : --mainItem;
    //   handleAddClassForCurrentItemSelected();

    //   handleRotation(-1 * degCorner, false);

    //   setTimeout(() => {
    //     isLoading = false;
    //   }, 1000);
    //   handleSetIndexItemDisplay();
    // }, 300);

    handlePrevItem();
  }
});

$(window).resize(function () {
  windowWidth = $(window).width();

  if (windowWidth <= 992) {
    let isGenerate = false;
    degCorner = 45;

    if (oldDegCorner != degCorner) {
      isGenerate = true;
      oldDegCorner = degCorner;
    }
    itemsDisplay = 8;

    if (isGenerate) {
      removeContentChild();
      generateContent();
    }
  } else {
    let isGenerate = false;
    degCorner = 30;

    if (oldDegCorner != degCorner) {
      isGenerate = true;
      oldDegCorner = degCorner;
    }
    itemsDisplay = 12;
    if (isGenerate) {
      removeContentChild();
      generateContent();
    }
  }

  generateCircleContent(windowWidth);
});

$(document).on("click", function (e) {
  console.log(e.target);
  const itemTarget = $(e.target);

  const classTarget = itemTarget.attr("class");
  const parentClassTarget = itemTarget.parent().attr("class");

  if (classTarget == "btn-prev" || parentClassTarget == "btn-prev") {
    handleClickBtnPrev();
  }

  if (classTarget == "btn-next" || parentClassTarget == "btn-next") {
    handleClickBtnNext();
  }
});

function handleClickBtnPrev() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  handlePrevItem(isLoading);
}

function handleClickBtnNext() {
  if (isLoading) {
    return;
  }

  isLoading = true;
  handleNextItem(isLoading);
}

$(".sidebar-item").on("click", function () {
  if (isLoading) {
    return;
  }

  isLoading = true;

  setTimeout(() => {
    const indexItemSelect = $(this).attr("sidebar-index").replace("item-", "");
    const step = indexItemSelect - mainItem;
    let isScrollUp = false;

    if (step > 0) {
      isScrollUp = true;
    } else {
      isScrollUp = false;
    }

    handleRemoveClassForOldItemSelected();

    mainItem = indexItemSelect;
    handleAddClassForCurrentItemSelected();

    handleRotation(degCorner * step);

    setTimeout(() => {
      isLoading = false;
    }, 1000);
    handleSetIndexItemDisplay();
  }, 300);
});

$(".btn-show-menu").on("click", function () {
  $("#menu-sp").removeClass("d-none");
});

$("#btn-close-navbar").on("click", function () {
  $("#menu-sp").addClass("d-none");
});

function handleSetIndexItemDisplay() {
  let indexLoopDown = 1;
  let indexLoopUp = 1;
  const indexEleContent = parseInt($(`#child-${mainItem}`).attr("id").slice(6)); //min 1
  const indexEleBg = parseInt($(`#child-bg-${mainItem}`).attr("id").slice(9)); //min 1

  console.log("indexEleBg: " + indexEleBg);

  generateIndexDataDisplayUp(indexLoopUp, indexEleContent, "#child-");
  generateIndexDataDisplayDown(indexLoopDown, indexEleContent, "#child-");

  generateIndexDataDisplayUp(indexLoopUp, indexEleBg, "#child-bg-");
  generateIndexDataDisplayDown(indexLoopDown, indexEleBg, "#child-bg-");
}

function generateIndexDataDisplayUp(indexLoopUp, indexEle, subId) {
  console.log("Handle up");

  while (indexLoopUp <= 3) {
    const indexCurrentItemLoop =
      indexEle + indexLoopUp > itemsDisplay
        ? (indexEle + indexLoopUp) % itemsDisplay
        : indexEle + indexLoopUp;

    const indexNextItemLoop =
      indexCurrentItemLoop - 1 <= 0
        ? indexCurrentItemLoop - 1 == 0
          ? indexCurrentItemLoop
          : Math.abs(indexCurrentItemLoop - 1) + 1
        : indexCurrentItemLoop - 1;

    const nextItem = $(`${subId}${indexNextItemLoop}`);
    const nextDataIndex = parseInt(nextItem.attr("index-data-display"));

    const currentItem = $(`${subId}${indexCurrentItemLoop}`);

    console.log(currentItem);

    currentItem.attr(
      "index-data-display",
      nextDataIndex + 1 >= data.length - 1
        ? nextDataIndex + 1 == data.length
          ? 0
          : (nextDataIndex + 1) % data.length
        : nextDataIndex + 1
    );

    currentItem.attr("is-direction-up", 1);

    indexLoopUp++;
  }
}

function generateIndexDataDisplayDown(indexLoopDown, indexEle, subId) {
  console.log("Handle down");

  while (indexLoopDown <= 3) {
    const indexCurrentItemLoop =
      indexEle - indexLoopDown <= 0
        ? indexEle - indexLoopDown == 0
          ? itemsDisplay
          : itemsDisplay + (indexEle - indexLoopDown)
        : indexEle - indexLoopDown;

    const indexPrevItemLoop =
      (indexCurrentItemLoop + 1) % itemsDisplay >= 0
        ? (indexCurrentItemLoop + 1) % itemsDisplay == 0
          ? itemsDisplay
          : (indexCurrentItemLoop + 1) % itemsDisplay
        : -1;

    if (indexPrevItemLoop == -1) {
      return;
    }

    const prevItem = $(`${subId}${indexPrevItemLoop}`);
    const currentItem = $(`${subId}${indexCurrentItemLoop}`);

    const indexDataPrevItem = parseInt(prevItem.attr("index-data-display"));

    currentItem.attr(
      "index-data-display",
      indexDataPrevItem - 1 < 0
        ? indexDataPrevItem - 1 == -1
          ? data.length - 1
          : data.length - indexDataPrevItem - 1
        : indexDataPrevItem - 1
    );

    currentItem.attr("is-direction-up", 0);
    indexLoopDown++;
  }
}

function handleHtmlCircleContent() {
  let dataHtmlContent = "";
  for (let i = 1; i <= itemsDisplay; i++) {
    dataHtmlContent += `
    <div id="child-${i}" class="child" index="${i}" index-data-display="${
      i == 1 ? 0 : ""
    }" is-direction-up="${i == 1 ? -1 : ""}" >
      <div class="content-left">
        <div class="display-pc d-none d-lg-block">
          <p></p>
        </div>
        <div class="display-sp d-flex d-lg-none">
        </div>
      </div>
      <div class="d-flex content-right">
        <div class="image">
          <div class="bg-image">
            <div class="circle"></div>
            <div class="child-circle"></div>
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <img src="" class="src-img" alt="">
        </div>
        <div class="content-right-detail">
          <div class="title top-content">
          </div>
          <div class="bottom-content">
            <div class="display-pc d-none d-lg-block">
              <div class="describe-title">
                <p></p>
              </div>
              <div class="describe">
                <p></p>
              </div>

              <div class="area-btn-detail">
                <button class="btn-detail-info"><span class="content-btn"></span> <span class="special-icon">›</span></button>
              </div>
            </div>
            <div class="display-sp d-block d-lg-none">
              <div class="describe-title">
                <p></p>
              </div>
              <a class="see-more"><span class="content-btn"></span><span class="special-icon">›</span></a>
            </div>
            <div class="btns-action d-none d-lg-block">
              <button class="btn-prev"><span class="special-icon">‹</span></button>
              <button class="btn-next"><span class="special-icon">›</span></button>
              </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  return dataHtmlContent;
}

function handleHtmlCircleBackground() {
  let dataHtmlBackground = "";
  for (let i = 1; i <= itemsDisplay; i++) {
    dataHtmlBackground += `
      <div id="child-bg-${i}" class="child" index="${i}" index-data-display="${
      i == 1 ? 0 : ""
    }">
        <div class="bg-item">
          <div class="store-name">
            <p class="m-0"></p>
          </div>
        </div>
      </div>
    `;
  }

  return dataHtmlBackground;
}

function handleNextItem() {
  console.log("Scroll up");

  setTimeout(() => {
    handleRemoveClassForOldItemSelected();
    mainItem = mainItem >= itemsDisplay ? 1 : ++mainItem;
    handleAddClassForCurrentItemSelected();

    handleRotation(degCorner, true);

    -setTimeout(() => {
      isLoading = false;
    }, 1000);
    handleSetIndexItemDisplay();
    updateData();
  }, 300);
}

function handlePrevItem() {
  console.log("Scroll down");

  setTimeout(() => {
    handleRemoveClassForOldItemSelected();
    mainItem = mainItem < 2 ? itemsDisplay : --mainItem;
    handleAddClassForCurrentItemSelected();

    handleRotation(-1 * degCorner, false);

    setTimeout(() => {
      isLoading = false;
    }, 1000);
    handleSetIndexItemDisplay();
    updateData();
  }, 300);
}

function handleRemoveClassForOldItemSelected() {
  indexData = parseInt(
    $(`div[id=child-${mainItem}]`).attr("index-data-display")
  );
  $(`div[id=child-${mainItem}]`).removeClass("active");
  $(`div[id=child-bg-${mainItem}]`).removeClass("active");
  $(
    `#btns-change-content .item-display[index-item=${indexData + 1}]`
  ).removeClass("active");

  $(`div[sidebar-index=item-${indexData + 1}`).removeClass("active");
}

function handleAddClassForCurrentItemSelected() {
  indexData = parseInt(
    $(`div[id=child-${mainItem}]`).attr("index-data-display")
  );
  $(`div[id=child-${mainItem}]`).addClass("active");
  $(`div[id=child-bg-${mainItem}]`).addClass("active");
  $(`#btns-change-content .item-display[index-item=${indexData + 1}]`).addClass(
    "active"
  );
  $(`div[sidebar-index=item-${indexData + 1}`).addClass("active");
}

function handleContentTextLeft(index) {
  const itemTextPc = $(
    $(`div[id=child-${index + 1}] .content-left .display-pc p`)
  );
  const itemTextSp = $(
    $(`div[id=child-${index + 1}] .content-left .display-sp p`)
  );

  itemTextPc.html(
    itemTextPc.text().replace(/\S/g, function (value, index) {
      return `<span style="--i:${index + 1}">${value}</span>`;
    })
  );

  itemTextSp.each(function (index, value) {
    $(this).html(
      $(this)
        .text()
        .replace(/\S/g, function (val, i) {
          return `<span style="--i:${i + 1}">${val}</span>`;
        })
    );
  });
}

function handleRotation(degCorner, isScrollUp) {
  currentAngle += degCorner;

  $("#parent").css({ transform: "rotate(" + currentAngle + "deg)" });
  $("#circle-bg").css({ transform: "rotate(" + currentAngle + "deg)" });

  for (let i = 1; i < 13; i++) {
    $(`#child-${i}`).css({
      transform: `rotate(${
        currentAngle < 0 ? Math.abs(currentAngle) : "-" + currentAngle
      }deg)`,
    });

    $(`#child-bg-${i}`).css({
      transform: `rotate(${
        currentAngle < 0 ? Math.abs(currentAngle) : "-" + currentAngle
      }deg)`,
    });
  }
}

async function generateData(data) {
  let listItemDisplay = "";

  data.forEach(function (value, index) {
    listItemDisplay += `<li class="item-display ${
      index + 1 == indexData + 1 ? "active" : ""
    }" index-item="${index + 1}"></li>`;
  });

  $(".item-display").remove();

  $("#btns-change-content .list-item-display").append(listItemDisplay);

  $(`div[id=child-${mainItem}]`).addClass("active");
  $(
    `div[sidebar-index=item-${
      mainItem % data.length == 0 ? data.length : mainItem % data.length
    }`
  ).addClass("active");

  $("#circle-bg .child").each(function (index, value) {
    const indexData = $(this).attr("index-data-display");

    if (indexData == "") {
      return;
    }
    const dataForItem = data[indexData];

    $(this)
      .find(".bg-item")
      // .css({ background: `${data[index % data.length].bg_color}` });
      .css({ background: `${dataForItem.bg_color}` });
    $(this)
      .find(".bg-item .store-name p")
      // .text(data[index % data.length].store_name);
      .text(dataForItem.store_name);
  });

  $("#parent .child").each(function (index, value) {
    const indexData = $(this).attr("index-data-display");

    if (indexData == "") {
      return;
    }

    let title = "";
    let titleSp = "";
    const dataForItem = data[indexData];

    dataForItem.content_left_sp.forEach(function (valueSp, i) {
      titleSp += `<p class="append">${valueSp}</p>`;
    });

    dataForItem.content.title.forEach(function (value, i) {
      title += `<p class="append">${value}</p>`;
    });

    $(this).find(".image img").attr("src", dataForItem.img);

    $(this).find(".content-right-detail .title").append(title);
    $(this).find(".content-left .display-sp").append(titleSp);
    $(this)
      .find(".content-left .display-pc p ")
      .text(dataForItem.content_left_pc);

    $(this)
      .find(".content-right-detail .display-pc .describe-title p")
      .text(dataForItem.content.describe_title);
    $(this)
      .find(".content-right-detail .display-sp .describe-title p")
      .text(dataForItem.content.describe_title_sp);
    $(this)
      .find(".content-right-detail .describe p")
      .text(dataForItem.content.describe);
    $(this)
      .find(".content-right-detail .see-more .content-btn")
      .text(dataForItem.text_btn_see_more);
    $(this)
      .find(".content-right-detail .btn-detail-info .content-btn")
      .text(dataForItem.text_btn);
    $(this)
      .find(".content-right-detail .area-btn-detail .sub-btn")
      .text(dataForItem.sub_btn);

    const degCircle =
      degCorner * -1 - currentAngle + degCorner - index * degCorner;

    handleContentTextLeft(index);
  });

  handleSetIndexItemDisplay();
}

function updateData() {
  // let listItemDisplay = "";

  // data.forEach(function (value, index) {
  //   listItemDisplay += `<li class="item-display ${
  //     index + 1 == indexData + 1 ? "active" : ""
  //   }" index-item="${index + 1}"></li>`;
  // });

  $(".item-display").remove();

  // $("#btns-change-content .list-item-display").append(listItemDisplay);

  // $(`div[id=child-${mainItem}]`).addClass("active");
  // $(
  //   `div[sidebar-index=item-${
  //     mainItem % data.length == 0 ? data.length : mainItem % data.length
  //   }`
  // ).addClass("active");

  $("#circle-bg .child").each(function (index, value) {
    const indexData = $(this).attr("index-data-display");

    if (indexData == "") {
      return;
    }
    const dataForItem = data[indexData];

    $(this)
      .find(".bg-item")
      // .css({ background: `${data[index % data.length].bg_color}` });
      .css({ background: `${dataForItem.bg_color}` });
    $(this)
      .find(".bg-item .store-name p")
      // .text(data[index % data.length].store_name);
      .text(dataForItem.store_name);
  });

  $("#parent .child").each(function (index, value) {
    const indexData = $(this).attr("index-data-display");

    if (indexData == "") {
      return;
    }

    let title = "";
    let titleSp = "";
    const dataForItem = data[indexData];

    dataForItem.content_left_sp.forEach(function (valueSp, i) {
      titleSp += `<p class="append">${valueSp}</p>`;
    });

    dataForItem.content.title.forEach(function (value, i) {
      title += `<p class="append">${value}</p>`;
    });

    $(this).find(".image img").attr("src", dataForItem.img);

    $(this).find(".append").remove();
    $(this).find(".content-right-detail .title").append(title);
    $(this).find(".content-left .display-sp").append(titleSp);
    $(this)
      .find(".content-left .display-pc p ")
      .text(dataForItem.content_left_pc);

    $(this)
      .find(".content-right-detail .display-pc .describe-title p")
      .text(dataForItem.content.describe_title);
    $(this)
      .find(".content-right-detail .display-sp .describe-title p")
      .text(dataForItem.content.describe_title_sp);
    $(this)
      .find(".content-right-detail .describe p")
      .text(dataForItem.content.describe);
    $(this)
      .find(".content-right-detail .see-more .content-btn")
      .text(dataForItem.text_btn_see_more);
    $(this)
      .find(".content-right-detail .btn-detail-info .content-btn")
      .text(dataForItem.text_btn);
    $(this)
      .find(".content-right-detail .area-btn-detail .sub-btn")
      .text(dataForItem.sub_btn);

    const degCircle =
      degCorner * -1 - currentAngle + degCorner - index * degCorner;

    handleContentTextLeft(index);
  });

  handleSetIndexItemDisplay();
}

async function generateCircleContent(windowWidth) {
  if (windowWidth > 992) {
    $("#parent .child").each(function (index, item) {
      const R = $("#parent").css("width").slice(0, -2) / 16 / 2;
      const heightSubChildItem =
        $($("#parent .child:not(.active)")[0]).css("height").slice(0, -2) / 16;
      if (index == 0) {
        const heightItemDefault =
          $("#parent .child.active").css("height").slice(0, -2) / 16;
        $(item).css({
          left: 0,
          top: `${R - heightItemDefault / 2}rem`,
        });
      }
      if (index == 1) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 6) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 6) * R}rem`,
        });
      }
      if (index == 2) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 3) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 3) * R}rem`,
        });
      }
      if (index == 3) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 2) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 2) * R}rem`,
        });
      }
      if (index == 4) {
        $(item).css({
          left: `${R - Math.cos((2 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((2 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 5) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 6) * R
          }rem`,
        });
      }
      if (index == 6) {
        $(item).css({
          left: `${R - Math.cos(Math.PI) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI) * R}rem`,
        });
      }
      if (index == 7) {
        $(item).css({
          left: `${R - Math.cos((7 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((7 * Math.PI) / 6) * R
          }rem`,
        });
      }
      if (index == 8) {
        $(item).css({
          left: `${R - Math.cos((4 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((4 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 9) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 2) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 2) * R
          }rem`,
        });
      }
      if (index == 10) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 11) {
        $(item).css({
          left: `${R - Math.cos((11 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((11 * Math.PI) / 6) * R
          }rem`,
        });
      }
    });

    $("#circle-bg .child").each(function (index, item) {
      const R = $("#circle-bg").css("width").slice(0, -2) / 16 / 2;
      const heightSubChildItem =
        $($("#circle-bg .child:not(.active)")[0]).css("height").slice(0, -2) /
        16;
      if (index == 0) {
        const heightItemDefault =
          $("#circle-bg .child.active").css("height").slice(0, -2) / 16;
        $(item).css({
          left: 0,
          top: `${R - heightItemDefault / 2}rem`,
        });
      }
      if (index == 1) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 6) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 6) * R}rem`,
        });
      }
      if (index == 2) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 3) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 3) * R}rem`,
        });
      }
      if (index == 3) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 2) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 2) * R}rem`,
        });
      }
      if (index == 4) {
        $(item).css({
          left: `${R - Math.cos((2 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((2 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 5) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 6) * R
          }rem`,
        });
      }
      if (index == 6) {
        $(item).css({
          left: `${R - Math.cos(Math.PI) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI) * R}rem`,
        });
      }
      if (index == 7) {
        $(item).css({
          left: `${R - Math.cos((7 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((7 * Math.PI) / 6) * R
          }rem`,
        });
      }
      if (index == 8) {
        $(item).css({
          left: `${R - Math.cos((4 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((4 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 9) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 2) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 2) * R
          }rem`,
        });
      }
      if (index == 10) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 3) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 3) * R
          }rem`,
        });
      }
      if (index == 11) {
        $(item).css({
          left: `${R - Math.cos((11 * Math.PI) / 6) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((11 * Math.PI) / 6) * R
          }rem`,
        });
      }
    });
  } else {
    $("#parent .child").each(function (index, item) {
      const R = $("#parent").css("width").slice(0, -2) / 16 / 2;
      const heightSubChildItem =
        $($("#parent .child:not(.active)")[0]).css("height").slice(0, -2) / 16;

      if (index == 0) {
        const heightItemDefault =
          $("#parent .child.active").css("height").slice(0, -2) / 16;
        $(item).css({
          left: 0,
          top: `${R - heightItemDefault / 2}rem`,
        });
      }

      if (index == 1) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 4) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 4) * R}rem`,
        });
      }

      if (index == 2) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 2) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 2) * R}rem`,
        });
      }

      if (index == 3) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 4) * R
          }rem`,
        });
      }

      if (index == 4) {
        $(item).css({
          left: `${R - Math.cos(Math.PI) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI) * R}rem`,
        });
      }

      if (index == 5) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 4) * R
          }rem`,
        });
      }

      if (index == 6) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 2) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 2) * R
          }rem`,
        });
      }

      if (index == 7) {
        $(item).css({
          left: `${R - Math.cos((7 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((7 * Math.PI) / 4) * R
          }rem`,
        });
      }
    });

    $("#circle-bg .child").each(function (index, item) {
      const R = $("#parent").css("width").slice(0, -2) / 16 / 2;
      const heightSubChildItem =
        $($("#circle-bg .child:not(.active)")[0]).css("height").slice(0, -2) /
        16;

      if (index == 0) {
        const heightItemDefault =
          $("#circle-bg .child.active").css("height").slice(0, -2) / 16;
        $(item).css({
          left: 0,
          top: `${R - heightItemDefault / 2}rem`,
        });
      }

      if (index == 1) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 4) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 4) * R}rem`,
        });
      }

      if (index == 2) {
        $(item).css({
          left: `${R - Math.cos(Math.PI / 2) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI / 2) * R}rem`,
        });
      }

      if (index == 3) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 4) * R
          }rem`,
        });
      }

      if (index == 4) {
        $(item).css({
          left: `${R - Math.cos(Math.PI) * R}rem`,
          top: `${R - heightSubChildItem / 2 + Math.sin(Math.PI) * R}rem`,
        });
      }

      if (index == 5) {
        $(item).css({
          left: `${R - Math.cos((5 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((5 * Math.PI) / 4) * R
          }rem`,
        });
      }

      if (index == 6) {
        $(item).css({
          left: `${R - Math.cos((3 * Math.PI) / 2) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((3 * Math.PI) / 2) * R
          }rem`,
        });
      }

      if (index == 7) {
        $(item).css({
          left: `${R - Math.cos((7 * Math.PI) / 4) * R}rem`,
          top: `${
            R - heightSubChildItem / 2 + Math.sin((7 * Math.PI) / 4) * R
          }rem`,
        });
      }
    });
  }
}

function removeContentChild() {
  $("#parent .child").remove();
  $("#circle-bg .child").remove();
}

async function generateContent() {
  const circleContent = handleHtmlCircleContent();
  const circleBackground = handleHtmlCircleBackground();

  $("#parent").append(circleContent);
  $("#circle-bg").append(circleBackground);
  $(`div[id=child-bg-${mainItem}]`).addClass("active");

  handleSetIndexItemDisplay();

  generateData(data);
  generateCircleContent(windowWidth);
}

generateContent();

$(document)
  .find("#parent .src-img")
  .on("click", function () {
    parseInt($(`#child-${mainItem}`).attr("id").slice(6));
    const itemSelected = $(this).closest(".child");
    const classItemSelected = itemSelected.attr("class");
    if (!classItemSelected.includes("child")) {
      return;
    }

    const isDirectionUp = itemSelected.attr("is-direction-up");

    if (parseFloat(isDirectionUp)) {
      handleClickBtnNext();
    } else {
      handleClickBtnPrev();
    }
  });

// Page Demo End
