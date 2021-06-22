import routes from './router';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          {routes.map((item) => {
            return (
              <Route
                path={item.link}
                key={item.name}
                render={() => {
                  return <item.component />;
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
