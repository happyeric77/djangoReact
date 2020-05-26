import React, {useState, createContext} from 'react';
import { Route } from 'react-router-dom';
import ArticleList from "./containers/ArticleList";
import ArticleDetail from "./containers/ArticleDetailView";
import {UserContext} from "./UserContext";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

function BaseRouter(){
    const [articles, setArticles] = useState({articles: []});
    const [article, setArticle] = useState({article: {}});
    const [test, setTest] = useState ("Test");
    return(
        <div>
            <UserContext.Provider value={{article, articles, setArticle, setArticles, test, setTest}}>
                <Route exact path='/' component={ArticleList} />
                <Route exact path='/login/' component={Login} />
                <Route exact path='/signup/' component={Signup} />
                <Route exact path='/articles/:articleID/' component={ArticleDetail} />
            </UserContext.Provider>
        </div>
    )
}

export default BaseRouter