import { Link } from 'react-router-dom'
function Navbar  () {
  return (
    <>
    <nav style={{display: 'flex',gap: '2rem'}}>
      <Link to='/'>Início</Link>
      <Link to='/item'>Item</Link>
    </nav>
    <h2>Página Inicial</h2>
    </>
  );
}

export default Navbar;
