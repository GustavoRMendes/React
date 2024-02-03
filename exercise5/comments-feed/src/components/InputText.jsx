import PropTypes from 'prop-types'
InputText.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func
}
export default function  InputText({email,setEmail}) {
  return (
    <div>
    <label htmlFor="email">Email:</label>
    <input
    type="email"
    name="email"
    id='email'
    value={email}
    onChange={(ev) => setEmail(ev.target.value)}
     />
  </div>
  )
}