import Link from "next/link";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerSocial">
        <a href="/">
          <img src="/images/footerGooglePlay.webp" alt="image" />
        </a>
        <a href="/">
          <img src="/images/footerAppStore.webp" alt="image" />
        </a>
        <a href="/">
          <img src="/images/footerRuStore.webp" alt="image" />
        </a>
      </div>
      <div className="footerMain">
        <div className="footerMainTitle">
          <p>let’s Talk</p>
          <div className="footerMainTitleSocial">
            <a href="/">
              <img src="/images/footerInstagram.webp" alt="image" />
            </a>
            <a href="/">
              <img src="/images/footerTelegram.webp" alt="image" />
            </a>
            <a href="/">
              <img src="/images/footerVk.webp" alt="image" />
            </a>
            <a href="/">
              <img src="/images/footerYouTube.webp" alt="image" />
            </a>
          </div>
        </div>
        <div className="footerBody">
          <img src="/images/footerWomenImg.webp" alt="image" />
          <div className="footerBodyRight">
            <div className="footerBodyRightLinks">
              <div>
                <Link href="/">о нас</Link>
                <Link href="/">об ИИ</Link>
                <Link href="/">скачать</Link>
                <Link href="/">блог</Link>
              </div>
              <div>
                <Link href="/">инвесторам</Link>
                <Link href="/">школам и преподавателям</Link>
                <Link href="/">студентам и школьникам</Link>
                <Link href="/">команда</Link>
              </div>
            </div>
            <a href="https://mojo.com/uwords.app">uwords.app@mojo.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
