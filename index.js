import express from 'express';

const app = express();
const hoje = new Date();
const feriados = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

console.log(hoje.toLocaleDateString())

app.get('/holidays', (req, res) => {
    res.send(feriados);
});

app.get('/is-today-holiday', (req, res) => {
    let flag = false;
    feriados.forEach(feriado => {
        if (hoje.toLocaleDateString() === feriado.date) {
            flag = true;
        }
    });
    if (flag === true) {
        res.send(`Sim, hoje é ${feriado.name}`);
    } else {
        res.send("Não, hoje não é feriado");
    }
});

app.get('/holidays/:mes', (req, res) => {
    const id = req.params.mes;
    let feriadosDoMes = [];
    feriados.forEach(feriado => {
        let string = feriado.date.split('/');
        if (string[0] === id) {
            feriadosDoMes.push(feriado);
        }
    });
    res.send(feriadosDoMes);
})

app.listen(4000);