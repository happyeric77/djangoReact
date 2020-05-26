import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Card, Button} from 'antd';
import CustomForm from "../components/Form";
import {useParams} from 'react-router';
import {UserContext} from "../UserContext";


function ArticleDetail(props){

    const {articleID} = useParams();
    const {article, articles, setArticle, setArticles, test, setTest} = useContext(UserContext);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                setArticle({
                    article: res.data
                });
            }
        );
    },[]);
    
    function handleDelete(event) {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
              .then(res => console.log(
                  props.history.push('/')
              )).catch(error=>console.log(error));

        const originArticles = articles.articles;
        const updatedArticles = originArticles.filter(function(item,index,array){
            return JSON.stringify(item) !== JSON.stringify(article.article)
        });
        console.log(updatedArticles);
        setArticles({articles: updatedArticles});

    }
    function updateState(item){
        setArticle( {article: item});
    }
    function changeText() {
        setTest("changed")

    }

    return(
        <div>
            <Card title={article.article.title}>
                <p>{article.article.content}</p>
            </Card>
            <CustomForm requestType='put' buttonName='Update' articleID={articleID} onSubmit={updateState}/>
            <form onSubmit={handleDelete}>
                <Button type='danger' htmlType='submit'>Delete</Button>
            </form>
            {/*<h1>{JSON.stringify(article)}</h1>*/}
            {/*<h1>{JSON.stringify(articles)}</h1>*/}
            <h1>{test}</h1>
            <button onClick={changeText}>chnage</button>
        </div>

    )
}
export default ArticleDetail