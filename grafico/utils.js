export function criarGrafico(titulo, dados) {
    const container = document.getElementById("graficos-container");

    // Criação do contêiner do gráfico
    const div = document.createElement("div");
    div.style.marginBottom = "2rem";
    container.appendChild(div);

    // Dados para o gráfico
    const data = [
        {
            x: Object.keys(dados),
            y: Object.values(dados),
            type: "bar",
            marker: { color: "#6200ea" },
        },
    ];

    // Configuração do layout
    const layout = {
        title: titulo,
        xaxis: { title: "Gênero" },
        yaxis: { title: "Quantidade" },
    };

    // Renderização do gráfico
    Plotly.newPlot(div, data, layout);
}
