import PropTypes from "prop-types";
TextArea.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func,
  
};
export default function TextArea({ comment, setComment }) {
  return (
    <>
      <div>
        <label htmlFor='comment'>Comentário:</label>
        <textarea
          name="comment"
          id='comment'
          cols="70"
          rows="10"
          placeholder="Digite seu comentário aqui."
          value={comment}
          onChange={(ev) => setComment(ev.target.value)}
        ></textarea>
      </div>
    </>
  );
}
