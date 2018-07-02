const activeClassName = 'menu__item-active';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName={activeClassName} exact to="/">Главная</NavLink>
      <NavLink className="menu__item" activeClassName={activeClassName} to="/drift">Дрифт-такси</NavLink>
      <NavLink className="menu__item" activeClassName={activeClassName} to="/timeattack">Time Attack</NavLink>
      <NavLink className="menu__item" activeClassName={activeClassName} to="/forza">Forza Karting</NavLink>
    </nav>
  )
}