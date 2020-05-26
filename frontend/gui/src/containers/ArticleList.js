import React, {useState, useEffect, useContext} from 'react';
import Article from "../components/Article";
import axios from 'axios';
import CustomForm from "../components/Form";
import {UserContext} from "../UserContext";



function ArticleList(props){

    const {articles, setArticles, test} = useContext(UserContext);

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                setArticles({
                    articles: res.data
                });
            }
        )
    },[]);

    function updateState(item){
        item["id"] = articles.articles[articles.articles.length - 1].id + 1;
        setArticles( {articles: [...articles.articles, item]})
    }

    return(
        <div>
            <Article data={articles.articles}/>
            <h2>Create an article</h2>
            <CustomForm requestType='post' buttonName='Create' articleID={null} onSubmit={updateState}/>
            {/*<h1>{JSON.stringify(articles.articles)}</h1>*/}
            <h1>{test}</h1>
        </div>
    )
}


export default ArticleList
