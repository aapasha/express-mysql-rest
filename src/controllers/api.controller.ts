import Quote from '../models/quote.model';

export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();

        res.send({
            statusCode: 200,
            statusMessage: 'ok',
            message: 'Successfully retrieved all quotes.',
            data: quotes,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal server error',
            message: null,
            data: null,
        });
    }
};

export const getRandomQuote = async (req, res) => {
    try {
        const quote = await Quote.findRandom();
        
        res.send({
            statusCode: 200,
            statusMessage: 'ok',
            message: 'Successfully retrieved random quotes.',
            data: quote,
        })
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal server error',
            message: null,
            data: null,
        });
    }
}

export const addQuote = async (req, res) => {
    const { quote, author } = req.body;
   
    if (!quote || !author) {
        return res
            .status(400)
            .send({
                statusCode: 400,
                statusMessage: 'Bad request',
                message: null,
                data: null,
            });
    }
    
    try {
        const newQuote = new Quote(quote, author);
        await newQuote.save();

        //INSERT INTO quotes (quote, author) VALUES (\"some quote oft-quoted\",\"some oft-quoted guy\"

        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created quote.',
            data: null,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: `Internal server error:  - quote: ${quote}, author: ${author} -- err: ${err}`,
            message: null,
            data: null,
        });
    }
};
