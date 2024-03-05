// module "utils.js"
export { buildCardInfo, buildCardShow, buildTable };

function buildCardInfo(user) {
    const h3 = buildH3();
    const p = buildP_1(user.name);
    const hr = document.createElement('hr');
    const p_2 = buildP_2(user.email);
    const input = buildHiddenInput(user);

    const div = document.createElement("div");
    div.setAttribute("class", "box draggable");
    div.setAttribute("draggable", "true");
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(hr);
    div.appendChild(p_2);
    div.appendChild(input);

    return div;
}

function buildCardShow(user) {
    const h3 = buildH3();
    const p = buildP_1(user.name);
    const hr = document.createElement('hr');
    const p_2 = buildP_2(user.email);

    const div = document.createElement("div");
    div.setAttribute("id", "droptarget");
    div.setAttribute("class", "box dropzone");
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(hr);
    div.appendChild(p_2);

    return div;
}

function buildH3() {
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'text-header');
    h3.innerText = 'Identificação do usuário:';
    return h3;
}

function buildP_1(username) {
    const p = document.createElement('p');
    p.setAttribute('class', 'text-name');
    p.innerText = username;
    return p;
}

function buildP_2(email) {
    const p = document.createElement('p');
    p.innerText = "Contato: " + email;
    return p;
}

function buildHiddenInput(user) {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('class', 'user-info');
    input.setAttribute('data-id', user.id);
    input.setAttribute('data-index', user.index);
    input.setAttribute('data-name', user.name);
    input.setAttribute('data-age', user.age);
    input.setAttribute('data-email', user.email);
    input.setAttribute('data-gender', user.gender);
    return input;
}

function buildTable(user) {
    const dados = [
        ['id', user.id],
        ['index', user.index],
        ['name', user.name],
        ['age', user.age],
        ['email', user.email], 
        ['gender', user.gender]
    ];
    
    const table = document.createElement("table");
    table.setAttribute('id', 'tableData');

    dados.forEach(item => {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.innerText = item[0];
        tr.appendChild(th);

        const td = document.createElement("td");
        td.innerText = item[1];
        tr.appendChild(td);

        table.appendChild(tr);
    });
    
    return table;
}

