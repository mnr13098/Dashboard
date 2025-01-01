// components/NewsList.js
const NewsList = ({ articles }) => {
    return (
        <div>
            <h2>News Articles</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.url}>
                        <h3>{article.title}</h3>
                        <p>{article.author} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;