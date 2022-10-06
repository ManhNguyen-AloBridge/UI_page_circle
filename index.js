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
let itemDisplay = 0;

if (windowWidth < 992) {
  degCorner = 45;
  itemDisplay = 8;
} else {
  degCorner = 30;
  itemDisplay = 12;
}

console.log("windowWidth " + windowWidth);
console.log("degCorner " + degCorner);
console.log("itemDisplay " + itemDisplay);

const countItemOnCircle = 360 / degCorner;

const data = [
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title:
        "ポーション・ボトル・パックへ の O E M 商品 企 画・製 造 。",
      describe:
        "こ れ は ダ ミ ー で す 。最 終 は こ こ に 適 切 な コ ピ ー が 入 り ま す 。こ れ はダ ミ ー で す 。最 終 は こ こ に 適 切 な コ ピ ー が 入 り ま す 。こ れ は ダ ミ ーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left: "てんてきの糖だけじゃない",
    bg_color: "linear-gradient(to bottom right, blue, yellow)",
    text_btn: "OEM・PB 商品の企画製造につい",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_green.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "海外企業に対する液体商品充填業務。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left: "2てんてきの糖だけじゃない",
    bg_color: "linear-gradient(to bottom right, green, pink)",
    text_btn: "海外のお客様へ",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "やまと蜂蜜の将来を担う若手社員を積極採用。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left: "3てんてきの糖だけじゃない",
    bg_color: "linear-gradient(to bottom right, purple, orange)",
    text_btn: "採用サイトを見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_green.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "70年余の歴史を守る、堅実な経営体制。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left: "4てんてきの糖だけじゃない",
    bg_color: "linear-gradient(to bottom right, gray, red)",
    text_btn: "会社概要を見る",
    store_name: "YAMATO HONEY",
  },
  {
    img: "./assets/images/socks_blue.jpg",
    content: {
      title: ["だけじゃない!", "やまと蜂蜜。"],
      describe_title: "接遇品質にこだわったお客様への丁寧な対応。",
      describe:
        "これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。最終はここに適切なコピーが入ります。これはダミーです。",
    },
    content_left: "5てんてきの糖だけじゃない",
    bg_color: "linear-gradient(to bottom right, red, green)",
    text_btn: "お問い合わせページを見る",
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

    setTimeout(() => {
      console.log("old-mainItem " + mainItem);
      handleRemoveClassForOldItemSelected();
      mainItem = mainItem >= itemDisplay ? 1 : ++mainItem;
      console.log("new-mainItem " + mainItem);
      handleAddClassForCurrentItemSelected();

      // const degCorner = 30;
      handleRotation(degCorner, true);

      setTimeout(() => {
        isLoading = false;
      }, 1000);
    }, 300);
  } else {
    console.log("Scroll down");
    console.log("countItemOnCircle " + countItemOnCircle);

    setTimeout(() => {
      console.log("old-mainItem " + mainItem);
      handleRemoveClassForOldItemSelected();
      mainItem = mainItem < 2 ? itemDisplay : --mainItem;
      console.log("new-mainItem " + mainItem);
      handleAddClassForCurrentItemSelected();

      // const degCorner = -30;
      handleRotation(-1 * degCorner, false);

      setTimeout(() => {
        isLoading = false;
      }, 1000);
    }, 300);
  }
});

console.log($("#parent"));

$(window).resize(function () {
  windowWidth = $(window).width();
  console.log("windowWidth " + windowWidth);

  if (windowWidth < 992) {
    console.log(7777);
    let isGenerate = false;

    console.log("oldDegCorner " + oldDegCorner);
    console.log("degCorner " + degCorner);
    degCorner = 45;
    if (oldDegCorner != degCorner) {
      isGenerate = true;
      oldDegCorner = degCorner;
    }
    itemDisplay = 8;

    if (isGenerate) {
      removeContentChild();
      generateContent();
    }
  } else {
    console.log(8888);
    console.log("oldDegCorner " + oldDegCorner);
    console.log("degCorner " + degCorner);
    let isGenerate = false;
    degCorner = 30;
    if (oldDegCorner != degCorner) {
      isGenerate = true;
      oldDegCorner = degCorner;
    }
    itemDisplay = 12;
    if (isGenerate) {
      removeContentChild();
      generateContent();
    }
  }

  console.log(degCorner);
  generateCircleContent(windowWidth);
});

$(".btn-prev").on("click", function () {
  if (isLoading) {
    return;
  }

  isLoading = true;
  handlePrevItem(isLoading);
});

$(".btn-next").on("click", function () {
  if (isLoading) {
    return;
  }

  isLoading = true;
  handleNextItem(isLoading);
});

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

    // const degCorner = 30 * step;
    handleRotation(degCorner * step);

    setTimeout(() => {
      isLoading = false;
    }, 1000);
  }, 300);
});

function handleHtmlCircleContent() {
  let dataHtmlContent = "";
  for (let i = 1; i <= itemDisplay; i++) {
    dataHtmlContent += `
    <div id="child-${i}" class="child" index="${i}">
                  <div class="content-left">
                    <p></p>
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
                      <div class="title">
                        <p></p>
                      </div>
                      <div class="describe-title">
                        <p></p>
                      </div>
                      <div class="describe">
                        <p></p>
                      </div>

                      <div class="area-btn-detail">
                        <button class="btn-detail-info"><span class="content-btn"></span> <span class="special-icon">›</span></button>
                      </div>
                      <div class="btns-action">
                        <button class="btn-prev"><span class="special-icon">‹</span></button>
                        <button class="btn-next"><span class="special-icon">›</span></button>
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
  for (let i = 1; i <= itemDisplay; i++) {
    dataHtmlBackground += `
      <div id="child-bg-${i}" class="child" index="${i}">
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
    mainItem = mainItem >= itemDisplay ? 1 : ++mainItem;
    handleAddClassForCurrentItemSelected();

    handleRotation(degCorner, true);

    -setTimeout(() => {
      isLoading = false;
    }, 1000);
  }, 300);
}

function handlePrevItem() {
  console.log("Scroll down");

  setTimeout(() => {
    handleRemoveClassForOldItemSelected();
    mainItem = mainItem < 2 ? itemDisplay : --mainItem;
    handleAddClassForCurrentItemSelected();

    handleRotation(-1 * degCorner, false);

    setTimeout(() => {
      isLoading = false;
    }, 1000);
  }, 300);
}

function handleRemoveClassForOldItemSelected() {
  $(`div[index=${mainItem}]`).removeClass("active");

  $(
    `div[sidebar-index=item-${
      mainItem % data.length == 0 ? data.length : mainItem % data.length
    }`
  ).removeClass("active");
}

function handleAddClassForCurrentItemSelected() {
  $(`div[index=${mainItem}]`).addClass("active");
  $(
    `div[sidebar-index=item-${
      mainItem % data.length == 0 ? data.length : mainItem % data.length
    }`
  ).addClass("active");
}

function handleContentTextLeft(index) {
  const text = $($(`div[index=${index + 1}] .content-left p`));

  text.html(
    text.text().replace(/\S/g, function (value, index) {
      return `<span style="--i:${index + 1}">${value}</span>`;
    })
  );
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
  $(`div[index=${mainItem}]`).addClass("active");
  $(
    `div[sidebar-index=item-${
      mainItem % data.length == 0 ? data.length : mainItem % data.length
    }`
  ).addClass("active");

  $("#circle-bg .child").each(function (index, value) {
    $(this)
      .find(".bg-item")
      .css({ background: `${data[index % data.length].bg_color}` });
    $(this)
      .find(".bg-item .store-name p")
      .text(data[index % data.length].store_name);
  });

  $("#parent .child").each(function (index, value) {
    let title = "";

    data[index % data.length].content.title.forEach(function (value, i) {
      title += `<p>${value}</p>`;
    });

    $(this).find(".content-right-detail .title").append(title);

    $(this)
      .find(".content-right-detail .describe-title p")
      .text(data[index % data.length].content.describe_title);
    $(this)
      .find(".content-right-detail .describe p")
      .text(data[index % data.length].content.describe);
    $(this)
      .find(".image img")
      .attr("src", data[index % data.length].img);
    $(this)
      .find(".content-left p ")
      .text(data[index % data.length].content_left);
    $(this)
      .find(".content-right-detail button .content-btn")
      .text(data[index % data.length].text_btn);
    $(this)
      .find(".content-right-detail .area-btn-detail .sub-btn")
      .text(data[index % data.length].sub_btn);

    const degCircle =
      degCorner * -1 - currentAngle + degCorner - index * degCorner;

    handleContentTextLeft(index);
  });
}

function generateCircleContent(windowWidth) {
  if (windowWidth >= 992) {
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
        console.log(222);
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
  console.log("DELETE");
  $("#parent .child").remove();
  $("#circle-bg .child").remove();
}

async function generateContent() {
  const circleContent = handleHtmlCircleContent();
  const circleBackground = handleHtmlCircleBackground();

  $("#parent").append(circleContent);
  $("#circle-bg").append(circleBackground);

  generateData(data).then(generateCircleContent());

  console.log(3333);
}

generateContent();

// Page Demo End
