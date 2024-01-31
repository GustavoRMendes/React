/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkButton from "../LinkButton";
import { useState } from "react";
export default function Profile(props) {
  const [buttonFollow, setButtonFollow] = useState("Seguir");
  function handleClick() {
    alert("Você seguiu este usuário!");
    setButtonFollow("Seguindo");
  }
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {buttonFollow}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={props.githubUrl}>Github</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIN</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}
