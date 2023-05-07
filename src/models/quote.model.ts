import pool from '../database/mysql.db';

class Quote {
    _quote: string;
    _author: string;

    constructor(quote, author) {
        this._quote = quote;
        this._author = author;
    }

    get quote() {
        return this._quote;
    }

    set quote(quote: string) {
        if (!quote) throw new Error('Invalid quote vlaue');
        this._quote = quote;
    }

    async save() {
        const sql = `INSERT INTO quotes (quote, author) VALUES ("${this._quote}","${this._author}")`;
        await pool.execute(sql);
    }

    static async find() {
        const sql = 'SELECT * FROM quotes';
        const [rows, fields] = await pool.execute(sql);
        return rows;
    }

    static async findRandom() {
        const sql = 'SELECT * FROM quotes ORDER BY RAND() LIMIT 1';
        const [rows] = await pool.execute(sql);
        return rows;
    }

    static async findByIdAndUpdate(id, options) {
        const sql = `UPDATE quotes SET quote = '${options.quote}', author = '${options.author}' WHERE id = '${id}'`;
        await pool.execute(sql);
    }

    static async findByIdAndDelete(id) {
        const sql = `DELETE FROM quotes WHERE id = '${id}'`;
        await pool.execute(sql);
    }
}

export default Quote;
