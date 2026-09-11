// モバイルメニューの開閉
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// メニュー内のリンクをタップしたら閉じる
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// サムネイルをクリックしたらYouTubeの動画を読み込んで再生する
document.querySelectorAll(".work-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const videoId = thumb.dataset.youtubeId;

    // YOUTUBE_ID_xx が差し替えられていない場合は何もしない
    if (!videoId || videoId.startsWith("YOUTUBE_ID")) {
      alert("この動画のYouTube IDがまだ設定されていません。index.html内のdata-youtube-idを差し替えてください。");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";

    thumb.innerHTML = "";
    thumb.appendChild(iframe);
  });
});
