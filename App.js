/**
 * @author Manandratra
 * @email alin.manandratra@gmail.com
 * @create date 2022-05-25 09:55:49
 * @modify date 2022-06-01 15:44:58
 * @desc [description]
 */
import { Router, Route } from "./react-router";
import HeaderComponent from "./Component/HeaderComponent";
import AuthentificationComponent from "./Component/AuthentificationComponent";
import ListComponent from  "./Component/ListComponent";
import FormulaireComponent from './Component/FormulaireComponent';

const App = () => {
  return (
    <Router>
      <HeaderComponent />
      <Route exact path="/" component={AuthentificationComponent} />
      <Route path="/Home/:nif" component={ListComponent} />
      <Route path="/Form" component={FormulaireComponent}/>
    </Router>
  );
};
export default App;