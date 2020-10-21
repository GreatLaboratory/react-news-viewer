import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://newsapi.org';
const apiKey: string = '7fd21d0290fe41afaf181d62965220e6';
export const getNewsList = async (categoryParam: string) => {
    const category: string = categoryParam !== 'all' ? `&category=${categoryParam}` : ''; 
    try {
        const response: AxiosResponse<Data> = await axios.get(`${baseUrl}/v2/top-headlines?country=kr${category}&apiKey=${apiKey}`);    
        return response.data.articles;
    } catch (err) {
        console.log(err);
    }
};

interface Data {
    status:       string;
    totalResults: number;
    articles:  Article[];
}

export interface Article {
    source:      Source;
    author:      null;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

interface Source {
    id:   null;
    name: string;
}
