const activeClassName = 'tabs__item-active';

class App extends React.Component {
  render() {
    return (
      <Router>
         <div className="tabs">
            <nav className="tabs__items">
              <NavLink className="tabs__item" activeClassName={activeClassName} exact to="/" >Рефераты</NavLink>
              <NavLink className="tabs__item" activeClassName={activeClassName} to="/creator">Криэйтор</NavLink>
              <NavLink className="tabs__item" activeClassName={activeClassName} to="/fortune">Гадалка</NavLink>
            </nav>
            <div className="tabs__content">
              <Switch>
                  <Route path="/creator" component={Creator} />
                  <Route path="/fortune"  component={Fortune} /> 
                  <Route path="/" exact component={Essay} />
              </Switch>
            </div>
          </div>
      </Router>
    );
  }
}
