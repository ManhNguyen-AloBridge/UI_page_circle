<?php
$data = [
  [
    'img' => './assets/images/socks_blue.jpg',
    'content' => 'content 1'
  ],
  [
    'img' => './assets/images/socks_green.jpg',
    'content' => 'content 2'
  ],
  [
    'img' => './assets/images/socks_blue.jpg',
    'content' => 'content 3'
  ],
  [
    'img' => './assets/images/socks_green.jpg',
    'content' => 'content 4'
  ],
  [
    'img' => './assets/images/socks_blue.jpg',
    'content' => 'content 5'
  ]
];

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Mastery</title>

  <link rel="stylesheet" href="./assets/styles.css">
  <script src="https://unpkg.com/vue@3.0.0-beta.12/dist/vue.global.js "></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet">

</head>

<body>

  <section>
    <div class="page-demo">
      <div class="header row m-0">
        <div class="header-left col-10 col-lg-6 row m-0">
          <div class="logo col-12 col-lg-4">
            <div>
              <p class="m-0">
                Logo
              </p>
            </div>
          </div>
          <div class="logo-text col-12 col-lg-8">
            <div>
              <p class="m-0">
                ポーションパックの受託充填OEM｜株式会社やまと蜂蜜
              </p>
            </div>
          </div>

        </div>
        <nav class="header-right d-none d-lg-flex col-6 navbar navbar-expand-lg navbar-light p-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">OEM/PB
                <span>会社案内</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SHOP
                <span>オリジナル商品製造</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">RECRUIT
                <span>オンラインショップ</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GLOBAL
                <span>採用について</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">CONTACT
                <span>お問い合わせ</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="area-btn-show-menu col-2 col-lg-6 d-flex d-lg-none">
          <button class="btn-show-menu"><i class="fa-solid fa-bars icon-show-menu"></i></button>
        </div>
        <div id="menu-sp" class="content-menu-sp d-none">
          <button id="btn-close-navbar" class="btn-close-navbar">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <ul class="nav-menu">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">OEM/PB
                <span>会社案内</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SHOP
                <span>オリジナル商品製造</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">RECRUIT
                <span>オンラインショップ</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GLOBAL
                <span>採用について</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT
                <span>お問い合わせ</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar d-none d-lg-flex">
        <?php
        foreach ($data as $key => $item) {
        ?>
          <div class="sidebar-item" sidebar-index="<?= 'item-' . ($key + 1) ?>">
            <div class="item-content">
              <img class="sidebar-img" src="<?= $item['img'] ?>" alt="">
              <!-- <span class="m-0"><?= ++$key  ?></span> -->
            </div>
          </div>
        <?php
        }
        ?>
      </div>

      <div class="content w-100">
        <div class="main-content">

          <div id="content-landing-page">
            <div id="parent">
            </div>

            <div class="content-circle">
              <div id="circle-bg">
              </div>
            </div>
          </div>
        </div>


      </div>

      <div id="btns-change-content" class="d-block d-lg-none">
        <div class="btns-action">
          <button class="btn-prev"><span class="special-icon">‹</span></button>
          <button class="btn-next"><span class="special-icon">›</span></button>
        </div>

        <ul class="list-item-display">
        </ul>
      </div>

      <div class="footer">
        <p>@2022 Yamato Honey Co.,Ltd.</p>
      </div>

      <div class="content-noti d-none d-lg-block">
        <div class="notification">
          <p class="m-0"><span class="pe-2 news">NEWS</span>2022年12月1日 <a href="#">年末年始休業に伴う製造スケジュールについて</a></p>
        </div>
        <div class="see-more">
          <a href="#" class="m-0">全てのお知らせを見る<span class="special-icon">›</span></a>
        </div>
      </div>

    </div>
  </section>


  <script src="./index.js"></script>

</body>

</html>