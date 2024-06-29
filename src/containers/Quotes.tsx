import Home from "./Home.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosAPI from '../axios/axiosLink.tsx'
import {Button, Card, CardContent, Typography} from "@mui/material";

interface FormData  {
    id: string;
    quoteCategory: string;
    author: string;
    quote: string;
}

const Quotes = () => {
    const [quotes, setQuotes] = useState<FormData[]>([])
    const {category} = useParams()
    useEffect(() => {
        if(category !== 'all'){
            axiosAPI.get(`/quotes.json?orderBy="quoteCategory"&equalTo="${category}"`)
                .then(response => {
                    const quotesArray = Object.keys(response.data).map(key => ({
                        id: key,
                        ...response.data[key]
                    }));
                    setQuotes(quotesArray);
                    console.log(response.data)
                });
        }else{
            axiosAPI.get('/quotes.json')
                .then(response => {
                    const quotesArray = Object.keys(response.data).map(key => ({
                        id: key,
                        ...response.data[key]
                    }));
                    setQuotes(quotesArray);
                    console.log(response.data)
                });
        }
    }, [category]);
    console.log(quotes)
    const deleteQuote = async (quoteId: string) => {
        try {
            await axiosAPI.delete(`/quotes/${quoteId}.json`);
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== quoteId));
        }catch (error) {
            console.error('Error deleting quote:', error);
        }
    }

    return (
        <div style={{display:"flex", flexDirection: 'row'}}>
            <Home />
            <div>
                {quotes.length > 0 ? (
                    <div>
                        <h1 style={{textAlign: 'center'}}>{category}</h1>
                        {quotes.map(quote => (
                            <div key={quote.id} className="quote-card">
                                <Card className="quote-card" style={{
                                    width: '500px',
                                    marginLeft: '300px',
                                    marginTop: '20px',
                                    textAlign: 'left',
                                    display: "flex",
                                    flexDirection: 'row'
                                }}>
                                    <CardContent>
                                        <Typography variant="body1" component="p">
                                            "{quote.quote}"
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            - {quote.author}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{marginLeft: 'auto', display: "flex", gap: '5px'}}>
                                        <Button variant="outlined"
                                                sx={{color: 'green', borderColor: 'green'}}>Edit</Button>
                                        <Button variant="outlined" sx={{color: 'red', borderColor: 'red'}}
                                                onClick={() => deleteQuote(quote.id)}>Delete</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>

                    </>
                )}
            </div>
        </div>
    );
};

export default Quotes;