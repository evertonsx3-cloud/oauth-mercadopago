export default async function handler(req, res) {
    const code = req.query.code || "";
    const state = req.query.state || "";

    res.setHeader("Content-Type", "text/html");

    res.status(200).send(`
        <html>
        <head>
            <title>OAuth Mercado Pago</title>
            <style>
                body{
                    background:#111827;
                    color:white;
                    font-family:Arial;
                    padding:40px;
                    text-align:center;
                }
                textarea{
                    width:90%;
                    height:120px;
                    font-size:16px;
                    margin-top:20px;
                }
            </style>
        </head>
        <body>
            <h1>Conexão Mercado Pago recebida</h1>

            <p>Copie este código e cole no sistema:</p>

            <textarea>${code}</textarea>

            <p>State: ${state}</p>
        </body>
        </html>
    `);
}
