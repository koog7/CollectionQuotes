import Home from "./Home.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosAPI from '../axios/axiosLink.tsx'

interface FormData  {
    quoteCategory: string;
    author: string;
    quote: string;
}

const Quotes = () => {
    const [quotes, setQuotes] = useState<FormData | null>(null)
    const {category} = useParams()
    useEffect(() => {

        // let url = '/quotes.json';
        // if (category) {
        //     url += `?orderBy="quoteCategory"&equalTo="${category}"`;
        // }
        if(category !== 'all'){
            axiosAPI.get(`/quotes.json?orderBy="quoteCategory"&equalTo="${category}"`)
                .then(response => {
                    setQuotes(response.data);
                    console.log(response.data)
                });
        }else{
            axiosAPI.get('/quotes.json')
                .then(response => {
                    setQuotes(response.data);
                    console.log(response.data)
                });
        }
    }, [category]);
    return (
        <div>
            <Home />
            <div>
                <p>{quotes?.author}</p>
                <p>{quotes?.quote}</p>
            </div>
        </div>
    );
};

export default Quotes;