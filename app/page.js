"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hage() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselaToRight = document.querySelectorAll(".carouselaToRight");
    const carouselaToLeft = document.querySelectorAll(".carouselaToLeft");

    carouselaToRight.forEach((carousel, index) => {
      const groups = carousel.querySelectorAll(".group");

      gsap.to(groups, {
        x: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: carousel,
          start: "top bottom",
          end: "bottom top",
          scrub: 2, // Scroll tezligiga mos ravishda harakatlanadi
        },
        modifiers: {
          x: (x) => {
            return `${parseFloat(x) % 100}%`; // Uzluksiz harakatni ta’minlash
          },
        },
      });
    });

    carouselaToLeft.forEach((carousel, index) => {
      const groups = carousel.querySelectorAll(".group");

      gsap.to(groups, {
        x: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: carousel,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
        modifiers: {
          x: (x) => {
            return `${parseFloat(x) % 100}%`;
          },
        },
      });
    });
  }, []);

  return (
    <>
      <div className="aboutProjectWrapper">
        <div className="aboutPrHeader">
          <p className="aboutPrHeaderTitle">Изучай языки c</p>
          <div className="aboutPrHeaderBody">
            <div className="aboutPrHeaderBodyLeftWrapper">
              <p className="aboutPrHeaderTitle">Uwords AI</p>
              <div className="aboutPrHeaderBodyLeft">
                <img src="/images/aboutProject1.webp" alt="image" />
                <div className="aboutPrHeaderBodyLeftRate">
                  <p>Учите слова легко и эффективно с нашим умным ИИ.</p>
                  <div className="aboutPrHeaderBodyLeftStar">
                    <div className="aboutPrHeaderBodyLeftStars">
                      <p className="aboutPrHeaderBodyLeftStarsPinkText">
                        4.9 rating
                      </p>
                      <div>
                        <img src="/icons/star.svg" alt="icon" />
                        <img src="/icons/star.svg" alt="icon" />
                        <img src="/icons/star.svg" alt="icon" />
                        <img src="/icons/star.svg" alt="icon" />
                        <img src="/icons/star.svg" alt="icon" />
                      </div>
                    </div>
                    <div className="aboutPrHeaderBodyLeftUserPurpose">
                      <div>
                        <img src="/images/aboutUser1.webp" alt="image" />
                        <img
                          src="/images/aboutUser2.webp"
                          alt="image"
                          className="userToLeft"
                        />
                        <img
                          src="/images/aboutUser3.webp"
                          alt="image"
                          className="userToLeft"
                        />
                      </div>
                      <div>
                        <p className="aboutPrHeaderBodyLeftStarsPinkText">
                          +102 k
                        </p>
                        <p>пользователей нам доверяют</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phoneWrapper"></div>
          </div>
        </div>
      </div>
      <div className="downloadFrom">
        <div className="downloadFromPatfrom">
          <a href="/">
            <img src="/images/googlePlay.webp" alt="image" />
          </a>
          <a href="/">
            <img src="/images/AppStore.webp" alt="image" />
          </a>
          <a href="/">
            <img src="/images/ruStore.webp" alt="image" />
          </a>
        </div>
        <div className="downloadFromBody">
          <div className="downloadFromImg"></div>
          <div className="downloadFromBodyText">
            <p>
              <span>анализатор речи</span> <span>и</span> персонализированный
              алгоритм,
            </p>
            <div>
              <p>чтобы подбирать слова, которые реально нужны именно вам. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="invationInStudyWrapper">
        <div className="invationInStudyWrapperTitle">
          <p>Инновации в</p>
          <div className="invationInStudyWrapperTitleBody">
            <p>
              В Uwords AI обучение — это игровая система, которая даёт 100%
              результат в кратчайшие сроки 🚀
            </p>
            <img src="/images/training.webp" alt="image" />
          </div>
        </div>
        <div className="invationInStudyWrapperCards">
          <img
            className="cardItem"
            src="/images/inovationInStudyCard1.webp"
            alt="image"
          />
          <img className="connector" src="/images/Connector.webp" alt="image" />
          <img
            className="connectorGorizoltal"
            src="/images/ConnectorGorizoltal.webp"
            alt="image"
          />
          <img
            className="cardItem"
            src="/images/inovationInStudyCard2.webp"
            alt="image"
          />
          <img className="connector" src="/images/Connector.webp" alt="image" />
          <img
            className="connectorGorizoltal"
            src="/images/ConnectorGorizoltal.webp"
            alt="image"
          />
          <img
            className="cardItem"
            src="/images/inovationInStudyCard3.webp"
            alt="image"
          />
        </div>
        <div className="invationInStudyWrapperDesc">
          <div className="invationInStudyWrapperDescItem">
            <img src="/images/inovationInStudyMan.webp" alt="image" />
            <p>
              <span>Искусственный интеллект запоминает,</span> какие слова вы
              используете в вашей повседневной речи,
            </p>
          </div>
          <div className="invationInStudyWrapperDescItem invationInStudyWrapperDescItem2">
            <img src="/images/inovationInStudyWoman.webp" alt="image" />
            <p>
              и предлагает их для изучения на иностранном языке,{" "}
              <span>
                превращая обучение в естественный и эффективный процесс.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="ourProgram">
        <div className="ourProgramTitle">
          <p className="ourProgramTitleTop"></p>
          <p className="ourProgramTitleBottom"></p>
        </div>
        <div className="ourProgramBody">
          <div className="ourProgramBodyBox">
            <img src="/images/ourProgramBodyBox2.webp" alt="image" />
            <button></button>
          </div>
          <div className="ourProgramBodyBox">
            <img src="/images/ourProgramBodyBox1.webp" alt="image" />
            <button></button>
          </div>
          <div className="ourProgramBodyBox">
            <img src="/images/ourProgramBodyBox3.webp" alt="image" />
            <button></button>
          </div>
        </div>
      </div>
      <div className="telegramChanel">
        <p className="telegramChanelTitle">
          <span>telegram-</span>
          <span>канал</span>
        </p>
        <p className="telegramChanelDesc">
          подпишитесь на наш Telegram-канал и получите доступ к умному боту🤖!
        </p>
        <div className="telegramChanelBody">
          <div className="telegramChanelBodyTop">
            <div className="telegramChanelBodyLeft">
              <p className="telegramChanelBodyLeftText">
                <span> 🎓 Актуальные учебные материалы и подборки </span>—
                только полезные слова и выражения.
              </p>
              <p className="telegramChanelBodyLeftText">
                <span>🤝 Сообщество </span> — общайтесь с единомышленниками и
                обменивайтесь опытом.
              </p>
              <p className="telegramChanelBodyLeftText">
                <span> 🎁 Бонусы и акции — </span> эксклюзивные предложения для
                подписчиков.
              </p>
            </div>
            <img src="/images/telegramBust.svg" alt="image" />
          </div>
          <div className="telegramChanelBodyBottom">
            <button></button>
          </div>
        </div>
      </div>
      <div className="sectionCarouselsWrapper" ref={carouselRef}>
        <div className="carouselBgAnimation">
          <div className="carousel carouselaToRight">
            <div className="group">
              <div className="card">
                <img src="/images/carouselArt.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselPresent.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselGlasses.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselShop.webp" alt="" />
              </div>
            </div>
            <div className="group">
              <div className="card">
                <img src="/images/carouselArt.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselPresent.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselGlasses.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselShop.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="carousel carouselaToLeft">
            <div className="group">
              <div className="card">
                <img src="/images/carouselRoket.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselApple.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLaptop.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselNoteBook.webp" alt="" />
              </div>
            </div>
            <div className="group">
              <div className="card">
                <img src="/images/carouselRoket.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselApple.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLamp.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselNoteBook.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="carousel carouselaToRight">
            <div className="group">
              <div className="card">
                <img src="/images/carouselBallon.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselOrange.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLamp.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselDress.webp" alt="" />
              </div>
            </div>
            <div className="group">
              <div className="card">
                <img src="/images/carouselBallon.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLaptop.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLamp.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselDress.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="carousel carouselaToLeft">
            <div className="group">
              <div className="card">
                <img src="/images/carouselBag.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLove.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselLipstick.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselT-Shirt.webp" alt="" />
              </div>
            </div>
            <div className="group">
              <div className="card">
                <img src="/images/carouselArt.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselPresent.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselGlasses.webp" alt="" />
              </div>
              <div className="card">
                <img src="/images/carouselShop.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src="/images/carouselSmartPhone.webp" alt="image" />
      </div>
    </>
  );
}
