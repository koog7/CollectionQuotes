import Home from "./Home.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosAPI from '../axios/axiosLink.tsx'
import {Button, Card, CardContent, Typography} from "@mui/material";

interface FormData  {
    quoteCategory: string;
    author: string;
    quote: string;
}

const Quotes = () => {
    const [quotes, setQuotes] = useState<FormData | null>(null)
    const {category} = useParams()
    useEffect(() => {
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
        <div style={{display:"flex", flexDirection: 'row'}}>
            <Home />
            <div>
                {quotes ? (
                    <div>
                        {Object.entries(quotes).map(([key, quote]) => (
                            <div key={key} className="quote-card">
                                <Card className="quote-card" style={{width:'500px' , marginLeft:'300px',marginTop:'20px', textAlign:'left',display:"flex", flexDirection:'row'}}>
                                    <CardContent>
                                        <Typography variant="body1" component="p">
                                            "{quote.quote}"
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            - {quote.author}
                                        </Typography>
                                    </CardContent>
                                    <CardContent sx={{marginLeft:'auto',display:"flex", gap:'5px'}}>
                                        <Button variant="outlined" sx={{ color: 'green', borderColor: 'green' }}>Edit</Button>
                                        <Button variant="outlined" sx={{ color: 'red', borderColor: 'red' }}>Delete</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                ):(
                    <div>
                        <h1>There is nothing...</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quotes;