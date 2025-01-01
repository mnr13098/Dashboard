// utils/api.js (Error Handling Example)
export const fetchNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`);
        return response.data.articles;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw new Error("Failed to fetch news articles.");
    }
};