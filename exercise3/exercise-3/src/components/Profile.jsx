/* eslint-disable react/prop-types */

import style from "../styles/App.module.css";
export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  instagramUrl,
}) {
  return (
    <>
      <body>
        <div className={style.card}>
          <img src={avatar} alt={name} className={style.img}/>
          <h2>{name}</h2>
          <hr />
          <p>{bio}</p>
          <hr />
          <p>{phone}</p>
          <hr />
          <p>{email}</p>
          <hr />
          <button><a href={githubUrl} target="blank" className={style.button}>GitHub </a> </button>
          <br />
          <button><a href={linkedinUrl}  target="blank" className={style.button}>Linkedin </a></button>
          <br />
          <button><a href={instagramUrl}  target="blank" className={style.button}>Instagram</a></button>
        </div>
      </body>
    </>
  );
}
