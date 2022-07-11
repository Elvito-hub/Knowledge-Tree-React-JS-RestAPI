import React from 'react';
import Header from './Header';
import Home from './Pages/Home';
import QuizHistory from './Pages/QuizHistory';
import QuizTypePage from './Pages/QuizTypePage';
import SetUpQuiz from './Pages/SetUpQuiz';
import QuizTimePage from './Pages/QuizTimePage';
import ResultsPage from './Pages/ResultsPage';
import history from '../history';
import {Router,Route,Switch} from 'react-router-dom';

const App=()=>{
    return(
        <div>
           <Router history={history}>
            <Header/>
            <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/quiztype" exact component={QuizTypePage}/>
                <Route path="/userhistory" exact component={QuizHistory}/>
                <Route path="/setupquiz" exact component={SetUpQuiz}/>
                <Route path="/quiztime" exact component={QuizTimePage}/>
                <Route path="/result" exact component={ResultsPage}/>
            </Switch>
            </div>
          </Router>
        </div>
    )
}

export default App;