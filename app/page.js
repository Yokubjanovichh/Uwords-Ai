export default function Hage() {
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
    </>
  );
}
