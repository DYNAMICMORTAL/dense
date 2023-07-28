import Head from 'next/head';
import styles from '../styles/style.module.css';
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import { useEffect } from 'react';
import Editor from "../components/editor";
import Header from "../components/header";

const Home: React.FC = () => {

  const { user, error, isLoading } = useUser();
  const [showContent, setShowContent] = useState(false);

  // if (isLoading) return (
  //   <>
  //   <div className={styles.trackinginexpand}>
  //     <h1 className={styles.loadingLogo}>DENSE</h1>
  //   </div>

  //   </>
  // )
  useEffect(() => {
    // Simulate a 2-second delay before showing the content
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  if (isLoading || !showContent) {
    return (
      <>
        <div className={styles.trackinginexpand}>
          <h1 className={styles.loadingLogo}>DENSE</h1>
        </div>
      </>
    );
  }
  if (error) return <div>{error.message}</div>;

  if(user) {
    return (
      <>
      <div>
        Welcome {user.name}! <a href="https://dense-app.vercel.app/api/auth/logout">Logout</a>
      </div>
      <div className="container max-w-4x1">
        <Header />
        <Editor />
      </div>
      </>
    )
  }

  return (
    <div>
      <Head>
        <title>Dense</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <div className={styles.navbar}>
        <div className={styles.nav}>
          <div className={styles.leftnav}>
            <a href="http://dynamicmortal.github.io/dense">
              <p className={styles.logo}>
                D<span>ENS</span>E
              </p>
            </a>
          </div>
          <div className={styles.rightnav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#">Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">Topics</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">About</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">Contact</a>
              </li>
              <li className={styles.navItem}>
                <a href="#startnow">Start Now</a>
              </li>
              <li className={styles.navItem}>
                <a href="https://dense-app.vercel.app/api/auth/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.firstSection}>
        <div className={styles.main}>
          <h1 className={styles.dense}>DENSE</h1>
          <p className={styles.densePara1}>Embrace curiosity.</p>
          <p className={styles.densePara2}>Explore. Engage. Excel.</p>
        </div>
      </section>
      <section className={styles.secSection}>
        <div className={styles.leftSecSection}>
          <div className={styles.secSectionLeft1}>
            <p>
              Stay ahead <br />from <span>others.</span>
            </p>
          </div>
          <div className={styles.secSectionLeft2}>
            Discover stories, thinking, and expertise from writers on any <br />topic.
          </div>
        </div>
        <div className={styles.rightSecSection}>
          <p>stay curious.</p>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <p className={styles.thirdSectionText}>Trending on Dense.</p>
        <div className={`${styles.trending} ${styles.parent}`}>
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>01</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Ananya <span>in</span> UX Collective
                </p>
              </div>
              <div className={styles.unitRight2}>
                Improve your designing journey with Midjourney.
              </div>
              <div className={styles.unitRight3}>
                <p>May 13 - 3 min read</p>
              </div>
            </div>
          </div>
          {/* -------------------------------------- */}
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>02</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Jaby <span>in</span> Music Collective
                </p>
              </div>
              <div className={styles.unitRight2}>
                Phonk Music or Trap Music or EDM? Trending Songs on Spotify.
              </div>
              <div className={styles.unitRight3}>
                <p>Sep 1  -  7 min read</p>
              </div>
            </div>
          </div>
          {/* ------------------------------------------- */}
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>03</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Matthew <span>in</span> Geography Now!
                </p>
              </div>
              <div className={styles.unitRight2}>
                Britain facing now financial crisis on with their 90 years legacy.
              </div>
              <div className={styles.unitRight3}>
                <p>Dec 21  -  5 min read</p>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------- */}
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>04</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Radhika <span>in</span> Corporate Stories
                </p>
              </div>
              <div className={styles.unitRight2}>
                My Amazon interview experience that was shit!
              </div>
              <div className={styles.unitRight3}>
                <p>Dec 25  -  10 min read</p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>05</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Janhavi <span>in</span> Healthify Mind
                </p>
              </div>
              <div className={styles.unitRight2}>
                Memories that define a personality - Good or Bad?
              </div>
              <div className={styles.unitRight3}>
                <p>May 25  -  5 min read</p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------- */}
          <div className={styles.unit}>
            <div className={styles.unitLeft}>
              <p>06</p>
            </div>
            <div className={styles.unitRight}>
              <div className={styles.unitRight1}>
                <img src="" alt="" />
                <p>
                  Romin <span>in</span> Cloud Nuggets
                </p>
              </div>
              <div className={styles.unitRight2}>
                Monoliths vs Microservices - Cloud Nuggets December Update
              </div>
              <div className={styles.unitRight3}>
                <p>Dec 30  -  2 min read</p>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------- */}
          {/* Add other units */}
        </div>
      </section>
      <section className={styles.fourthSection} id="startnow">
        <div className={styles.firstFourthSection}>
          <p>Create your space with Dense. Your own world where you leverage your thinking.</p>
        </div>
        <div className={styles.secFourthSection}>
          <p>
            First article is the door to open sea of knowledge. Create your audience today. It's free and easy with Dense.
            Join us to create your world and have the audience act as characters on your stage.
          </p>
        </div>
        <div className={styles.thirdFourthSection}>

            {/* ------------------Auth0 Authentication login callback--------- */}
          <button className={styles['css-button-retro--blue']} id="writeNow">
            <a href="/api/auth/login">Write on Dense</a>
          </button>
          {/* ---------------------------- */}
        </div>
      </section>
      <section className={styles.fifthSection}>
        <div className={styles.leftFive}>
          <p>Learn more about us. Or join us.</p>
        </div>
        <div className={styles.rightFive}>
          <div className={styles.rightFive1}>
            <p>
              <span>Dense Blog.</span>
              <br />
              Visit our company blog for the latest news, product updates, and tips and tricks.
            </p>
            <div className={styles.button}>
              <button className={styles['css-button-retro--blue2']} id="companyblog">
                Read blog.
              </button>
            </div>
          </div>
          <div className={styles.rightFive2}>
            <p>
              <span>Career at Dense.</span>
              <br />
              Our team is home to engineers, journalists, artists, and creatives of all stripes.
            </p>
            <div className={styles.button}>
              <button className={styles['css-button-retro--blue2']}>View it.</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerSection}>
        <div className={styles.mainFooter}>
          <div className={styles.footerLogo}>
            <h1>Dense</h1>
          </div>
          <div className={styles.credits}>
            <div className={styles.leftOwner}>&#169; Mihir Amin 2023</div>
            <div className={styles.rightOwner}>
              <ul className={styles.footerList}>
                <li>Terms</li>
                <li>Policy</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById("writeNow").onclick = function () {
            location.href = "https://dynamicmortal.github.io/dense/blog.html";
          };document.getElementById("writeNow").onclick = function () {
            location.href = "https://dynamicmortal.github.io/dense/status.html";
          };
        `,
        }}
      ></script>
    </div>
  );
};

export default Home;
