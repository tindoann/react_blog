import React from 'react'; 
import ArticlesList from '../components/ArticlesList'; 
import articleContent from './article-content'; 

const ArticleListPage = () => (
  <React.Fragment>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
 
  </React.Fragment>
); 

export default ArticleListPage;  