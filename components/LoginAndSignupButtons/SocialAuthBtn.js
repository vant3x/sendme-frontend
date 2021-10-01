import Image from "next/image";
import styles from "./../../styles/SocialAuthBtn.module.css";

const SocialAuthBtn = ({ type, action, title, onClick }) => {
  return (
    <>
      <div className="container-btn-social-auth" onClick={onClick}>
        <style jsx>
          {`
            .login-btn-container-item {
              border: 1px solid #000;
              padding: 10px;

              background: #fff;
              margin: 0px 10px;
              transition: all 0.3s ease;
            }
            .login-btn-container-item:hover {
              color: #fff;
              background: #000;
            }
            @media screen and (max-width: 1024px) {
              .login-btn-container-item {
                margin: 10px 0px;
              }
            }
            .title-btn {
              margin: 0px 10px;
            }
            .container-btn-social-auth {
              align-items: center;
              display: flex;
              justify-content: center;
            }
            .twitter-icon {
              color: rgb(29, 155, 240);
            }
            .google-icon {
              color: #db4437;
            }
          `}
        </style>
        <a className="login-btn-container-item" href="">
          <span className="title-btn">
            {" "}
            {!action ? "Login" : action} con {title}
          </span>

          {/* <Image
          src={ 
            type === "google"
              ? "/assets/icons/Google.png"
              : type === "github"
              ?  "/assets/icons/github.png"
              : type === "twitter"
              ?  "/assets/icons/twitter3.png    "
              : null
          }
          height="30"
          width="30"
        />*/}
          <span>
            {" "}
            <i
              className={
                type === "google"
                  ? "fab fa-google google-icon"
                  : type === "twitter"
                  ? "fab fa-twitter twitter-icon"
                  : type === "github"
                  ? "fab fa-github"
                  : null
              }
            ></i>
          </span>
        </a>
      </div>
    </>
  );
};

export default SocialAuthBtn;
