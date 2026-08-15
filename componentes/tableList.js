export default function TableList(title,elementsList=[], fields=[]) {
    let formatedElementsList = elementsList.map((element) => {
        let row = "<tr>";
        fields.forEach((field) => {
            row += `<td>${element[field]}</td>`;
        });
        row += "</tr>";
        return row;
    });
    return `<div><h1>${title}</h1><table><thead><tr>${fields.map((field) => `<th>${field}</th>`).join("")}</tr></thead><tbody>${formatedElementsList.join("")}</tbody></table></div>`;
}