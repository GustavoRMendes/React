import { Link } from "react-router-dom";

function Item  () {
  return (
    <>
    <nav style={{display: 'flex',gap: '2rem'}}>
    <Link to='/'>Início</Link>
    <Link to='/item'>Item</Link>
    </nav>
    <h2>Nosso Item</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi <br />culpa hic unde tempora quo dolor dolores pariatur explicabo odit assumenda <br /> est eaque, commodi doloribus sunt cum nostrum laboriosam animi.</p>
    </>
  );
}

export default Item;
