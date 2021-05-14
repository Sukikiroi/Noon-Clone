import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root_root_footer: {
    borderTop: "1px solid rgb(226, 229, 241)",
    flexWrap: "column wrap",
    backgroundColor: "white",
  },
  root_footer: {
    flex: " 1 1 0%",
    padding: "20px",

    justifyContent: "space-between",
    maxWidth: " 1440px",
    margin: "auto",
    display: "flex",
    boxSizing: " border-box",
  },
  electronic: {
    display: "flex",
    flexDirection: "column",
    margin: "0",
    padding: "0",
    border: "0",
    font: "inherit",
    verticalalign: "baseline",
    boxSizing: "border-box",
  },

  category: {
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: "12px",
    fontSize: "1.1rem",
  },
  sub_category: {
    textTransform: "capitalize",
    paddingBottom: "10px",
  },
  social_footer: {
    flex: "1 1 0%",
    margin: "15px auto 25px",
    display: "flex",
    boxSizing: "border-box",
    padding: "20px 0px",
  },

  app2_footer: {
    display: "flex",

    justifyContent: "center",

    alignItems: "center",
  },
  app2_footer_title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgb(64, 69, 83)",
    marginBottom: "8px",
  },
  social_media_footer: {
    flex: " 1 1 0%",
    placeContent: "center space-around",
    margin: "0",
    padding: "0",
    border: "0",
  },
  social_media_footer_title: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgb(64, 69, 83)",
    marginBottom: "8px",
  },
  app_footer: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgb(64, 69, 83)",
    marginBottom: "8px",
    marginLeft: "280px",
  },
  fbfotter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
    border: "0",
    boxSizing: "border-box",
  },
  fbfotter_under:{
cursor: 'pointer',
padding: '7px',
display: 'flex',
justifyContent: 'center', 
alignItems: 'center',
boxSizing:' border-box',
margin: '0px 10px',
  }
}));

const Footernoon = () => {
  const classes = useStyles();
  return (
    <div className={classes.root_root_footer}>
      <div className={classes.root_footer}>
        <div className={classes.electronic}>
          <p className={classes.category}>electronics</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>

        <div className={classes.electronic}>
          <p className={classes.category}>fashion</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>

        <div className={classes.electronic}>
          <p className={classes.category}>home and kitchen</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>

        <div className={classes.electronic}>
          <p className={classes.category}>beauty</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>

        <div className={classes.electronic}>
          <p className={classes.category}>Kids, Baby & Toys</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>

        <div className={classes.electronic}>
          <p className={classes.category}>top brands</p>
          <a href="/saudi-en/mobiles" className={classes.sub_category}>
            mobiles
          </a>
          <a href="/saudi-en/tablets" className={classes.sub_category}>
            tablets
          </a>
          <a href="/saudi-en/laptops" className={classes.sub_category}>
            laptops
          </a>
          <a href="/saudi-en/home-appliances" className={classes.sub_category}>
            home appliances
          </a>

          <a href="/saudi-en/cameras" className={classes.sub_category}>
            camera, photo &amp; video
          </a>
          <a href="/saudi-en/audio-video" className={classes.sub_category}>
            televisions
          </a>
          <a href="/saudi-en/gaminghub" className={classes.sub_category}>
            gaminghub
          </a>
        </div>
      </div>

      <div className={classes.social_footer}>
        <div className={classes.app_footer}>
          <div className={classes.app2_footer_title}>Shop On The Go</div>
          <div className={classes.app2_footer}>
            <img
              style={{
                marginRight: "7px",
                height: "35px",
                cursor: "pointer",
                transition: "opacity 250ms ease-in-out 0s",
                maxWidth: "100%",
                display: "block",
              }}
              src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
              alt="App Store"
              class="ko4e2j-16 llIndi"
            ></img>

            <img
              style={{
                height: "35px",
                cursor: "pointer",
                transition: "opacity 250ms ease-in-out 0s",
                maxWidth: "100%",
                display: "block",
              }}
              src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
              alt="Google Play"
              class="ko4e2j-16 llIndi"
            ></img>
          </div>
        </div>
        <div className={classes.social_media_footer}>
          <div className={classes.social_media_footer_title}>
            Connect With Us
          </div>
          <div className={classes.fbfotter}>
            <div className={classes.fbfotter_under}>
              <div style={{transform:'scale(1.8)'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title id="title">footer_fb_color</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                    fill="#FEEE00"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.99 18.667v-6.334h1.775L15 10.15h-2.01l.003-1.093c0-.569.055-.874.885-.874h1.11V6h-1.776C11.08 6 10.33 7.059 10.33 8.84v1.31H9v2.183h1.33v6.334h2.66z"
                    fill="#404553"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={classes.fbfotter_under}>
              <div style={{transform:'scale(1.8)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="title">footer_twitter_color</title><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.124C0 5.566 5.304.25 11.846.25s11.846 5.317 11.846 11.875c0 6.56-5.304 11.876-11.846 11.876S0 18.683 0 12.124z" fill="#FEEE00"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.083 10.495l.025.411-.414-.05c-1.508-.193-2.826-.847-3.944-1.946l-.547-.545-.141.403c-.298.897-.108 1.845.514 2.482.331.352.257.403-.315.193-.199-.067-.373-.117-.39-.092-.058.058.141.821.299 1.123.215.42.654.83 1.135 1.074l.406.193-.48.008c-.465 0-.481.008-.432.185.166.545.82 1.123 1.55 1.375l.514.176-.448.268a4.657 4.657 0 01-2.22.621c-.373.008-.68.042-.68.067 0 .084 1.011.553 1.6.738 1.764.545 3.86.31 5.435-.62 1.118-.663 2.237-1.98 2.76-3.254.28-.68.563-1.92.563-2.516 0-.386.024-.436.488-.898.274-.268.53-.561.58-.645.083-.16.075-.16-.348-.017-.704.252-.803.218-.455-.16.256-.268.563-.754.563-.897 0-.025-.124.017-.265.093-.15.083-.48.21-.73.285l-.447.142-.406-.276c-.223-.151-.538-.32-.704-.37-.422-.117-1.069-.1-1.45.034-1.036.377-1.69 1.35-1.616 2.415z" fill="#404553"></path></svg>
              </div>
            </div>
            <div className={classes.fbfotter_under}>
              <div style={{transform:'scale(1.8)'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="title">footer_linkedin_color</title><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#FEEE00"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.777 7.872C8.537 7.872 9 7.319 9 6.636c-.015-.7-.462-1.236-1.193-1.236-.73 0-1.207.537-1.207 1.236 0 .683.462 1.236 1.177 1.236zm-1.117.976V16.8h2.266V8.848H6.66z" fill="#404553"></path><path d="M10.266 11.605c0-.951-.033-1.747-.066-2.433h2.2l.117 1.06h.05C12.9 9.734 13.717 9 15.083 9 16.75 9 18 10.045 18 12.291V16.8h-2.534v-4.228c0-.982-.366-1.653-1.283-1.653-.7 0-1.116.452-1.3.89-.066.155-.083.373-.083.592V16.8h-2.534v-5.195z" fill="#404553"></path></svg>
              </div>
            </div>
            <div className={classes.fbfotter_under}>
              <div style={{transform:'scale(1.8)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="title">footer_instagram_color</title><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z" fill="#FEEE00"></path><mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z" fill="#fff"></path></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.97 5.6c-1.733 0-1.95.008-2.632.039-.68.03-1.143.139-1.55.297-.42.163-.775.382-1.13.738a3.143 3.143 0 00-.737 1.134c-.158.407-.266.872-.297 1.553-.03.683-.038.9-.038 2.64 0 1.737.008 1.955.039 2.637.03.682.138 1.147.296 1.554.163.42.381.778.736 1.134.355.355.711.575 1.13.738.407.158.871.266 1.55.297.682.031.9.04 2.633.04 1.734 0 1.95-.009 2.631-.04.68-.03 1.145-.139 1.55-.297.42-.163.776-.383 1.13-.738.356-.356.574-.713.738-1.134.157-.407.264-.872.296-1.553.03-.683.039-.9.039-2.639 0-1.738-.008-1.956-.039-2.639-.032-.681-.14-1.146-.296-1.553a3.142 3.142 0 00-.737-1.134 3.12 3.12 0 00-1.13-.738c-.408-.158-.872-.266-1.551-.297-.681-.031-.898-.039-2.633-.039h.002zm-.572 1.153h.572c1.705 0 1.907.006 2.58.037.623.029.96.133 1.185.22.298.117.51.255.734.48.224.223.362.437.478.735.087.226.191.564.22 1.188.03.675.037.878.037 2.586 0 1.708-.007 1.91-.037 2.585-.029.624-.133.963-.22 1.188a1.98 1.98 0 01-.478.735 1.973 1.973 0 01-.734.479c-.224.088-.562.192-1.185.22-.673.031-.875.038-2.58.038-1.704 0-1.906-.007-2.58-.038-.622-.028-.96-.133-1.185-.22a1.977 1.977 0 01-.734-.479 1.984 1.984 0 01-.477-.736c-.088-.225-.192-.564-.22-1.188-.03-.674-.037-.877-.037-2.586 0-1.71.006-1.91.037-2.585.028-.624.132-.963.22-1.189.115-.298.254-.512.477-.736a1.98 1.98 0 01.734-.479c.225-.088.563-.192 1.186-.22.589-.027.817-.035 2.007-.036v.001zm3.831 1.063a.618.618 0 10.001 1.235.618.618 0 00-.001-1.235zm-3.258.897A3.283 3.283 0 008.691 12a3.282 3.282 0 003.278 3.286c1.811 0 3.278-1.47 3.278-3.286a3.282 3.282 0 00-3.278-3.287zm0 1.154A2.13 2.13 0 0114.098 12a2.13 2.13 0 01-2.128 2.133A2.13 2.13 0 019.843 12a2.13 2.13 0 012.127-2.133z" fill="#404553"></path></g></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footernoon;
