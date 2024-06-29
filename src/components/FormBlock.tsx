import {Button, TextField} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../axios/axiosLink.tsx";

interface FormData  {
    id?: string;
    quoteCategory: string;
    author: string;
    quote: string;
}

const FormBlock: React.FC = () => {
    const [newQuote , setNewQuote] = useState<FormData>({
        quoteCategory: 'star-wars',
        author: '',
        quote: '',
    })
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            axiosApi.get(`/quotes/${id}.json`)
                .then(response => {
                    setNewQuote({ id, ...response.data });
                })
        }else {
            setNewQuote({
                quoteCategory: 'star-wars',
                author: '',
                quote: '',
            });
        }
    }, [id]);

    const targetValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewQuote({
            ...newQuote,
            [name]: value,
        });
    };

    const createQuote = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (id) {
                await axiosApi.put(`/quotes/${id}.json`, newQuote);
                navigate('/')
            } else {
                await axiosApi.post('/quotes.json', newQuote);
            }
        } finally {
            navigate('/');
        }
    }
    useEffect(() => {
        console.log(newQuote)
    }, [newQuote]);
    return (
        <form onSubmit={createQuote}>
            <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: '0 auto', gap: '10px'}}>
                <select name="quoteCategory" style={{height: '50px'}} value={newQuote.quoteCategory} onChange={targetValues}>
                    <option value="star-wars">Star Wars</option>
                    <option value="motivational">Motivational</option>
                    <option value="inspirational">Inspirational</option>
                    <option value="humor">Humor</option>
                    <option value="love">Love</option>
                </select>
                <TextField id="filled-basic" name="author" label="Author" variant="filled" value={newQuote.author} onChange={targetValues} sx={{
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFilledInput-underline:before': {
                        borderBottomColor: 'white',
                    },
                    '& .MuiFilledInput-underline:hover:before': {
                        borderBottomColor: 'white',
                        color: 'white',
                    },
                    '& .MuiFilledInput-underline:after': {
                        borderBottomColor: 'white',
                    },
                }}/>
                <TextField id="filled-basic" name="quote" label="Message" variant="filled" value={newQuote.quote} onChange={targetValues} sx={{
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFilledInput-underline:before': {
                        borderBottomColor: 'white',
                    },
                    '& .MuiFilledInput-underline:hover:before': {
                        borderBottomColor: 'white',
                        color: 'white',
                    },
                    '& .MuiFilledInput-underline:after': {
                        borderBottomColor: 'white',
                    },
                }}/>
                <Button type={"submit"} variant="contained">Submit!</Button>
            </div>
        </form>
    );
};

export default FormBlock;