/* eslint-disable react/prop-types */
export default function Section(props) {
  return (
    <>
    <div>
      <p>{props.children}</p>
      <hr />
    </div>
    </>
  );
}
