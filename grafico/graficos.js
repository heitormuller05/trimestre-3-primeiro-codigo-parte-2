import { criarGrafico } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    // Dados gerais de filmes e séries
    const filmes = {
        romance: 6,
        terror: 4,
        comédia: 6,
        ação: 8,
        "comédia romântica": 2,
        suspense: 2,
        drama: 5,
        anime: 6,
        "desenho infantil": 10,
    };

    const series = {
        romance: 3,
        terror: 3,
        comédia: 4,
        ação: 8,
        "comédia romântica": 0,
        suspense: 7,
        drama: 4,
        anime: 7,
        "desenho infantil": 9,
    };

    // Dados da turma 9D
    const filmes9D = {
        romance: 7,
        terror: 24,
        comédia: 31,
        ação: 26,
        "comédia romântica": 2,
        suspense: 17,
        drama: 3,
        anime: 8,
        "desenho infantil": 23,
    };

    const series9D = {
        romance: 6,
        terror: 18,
        comédia: 23,
        ação: 23,
        "comédia romântica": 3,
        suspense: 13,
        drama: 3,
        anime: 8,
        "desenho infantil": 9,
    };

    // Criação dos gráficos
    criarGrafico("Distribuição Geral de Filmes", filmes);
    criarGrafico("Distribuição Geral de Séries", series);
    criarGrafico("Distribuição de Filmes (9D)", filmes9D);
    criarGrafico("Distribuição de Séries (9D)", series9D);
});
