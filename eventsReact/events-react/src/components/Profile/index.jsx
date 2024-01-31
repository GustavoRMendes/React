/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import styles from "./styles.module.css"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"

function handleClick(ev){
  ev.preventDefault()
  alert('Você seguiu este usuário!')
}
export default function Profile(props) {
  return (
        <div className={styles.container}>
          <img className={styles.avatar} src={props.avatar} alt={props.name} />
          <Title>
          <span>{props.name}</span>
          <button
          className={styles.followButton}
          onClick={handleClick}
          >Follow
          </button>
          </Title>
          <ProfileSection>{props.bio}</ProfileSection>
          <ProfileSection>{props.phone}</ProfileSection>  
          <ProfileSection>{props.email}</ProfileSection>
          <ProfileSection
          className={styles.links}
          id='links-section'
          data-test='some value'
          aria-label='social links'
          >
          <LinkButton href={props.githubUrl}>Github</LinkButton>
          <LinkButton href={props.linkedinUrl}>LinkedIN</LinkButton>
          <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
          </ProfileSection>
        </div>
      )
}
  
