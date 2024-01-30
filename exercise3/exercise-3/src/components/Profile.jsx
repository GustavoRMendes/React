/* eslint-disable react/prop-types */
import style from "../styles/App.module.css";
import Buttons from "./Buttons";
import Section from "./ProfileSection";
import Title from "./Title";
export default function Profile(props) {
  return (
    <>
      <body>
        <div className={style.card}>
        <img src={props.avatar} alt={props.name} className={style.img}/>
          <Title>
            <span>{props.name}</span>
            <hr />
          </Title>
          <Section>{props.bio}</Section>
          <Section>{props.phone}</Section>
          <Section>{props.email}</Section>
          <Buttons href={props.githubUrl}>
            GitHub
          </Buttons>
          <Buttons href={props.linkedinUrl}>
            Linkedin
          </Buttons>
          <Buttons href={props.instagramUrl}>
            Instagram
          </Buttons>
        </div>
      </body>
    </>
  );
}