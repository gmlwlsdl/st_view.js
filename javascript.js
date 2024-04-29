async function getUsers() {
    const users = await fetch('/users');
    const data = await users.json();
    const list = document.getElementById('list');
    let html = '<ul>';
    for(id in data) {
        console.log(data[id]);
        html += `<li>${data[id]}
        <button onclick='modifyUser(${id})'>수정</button>
        <button onclick='deleteUser(${id})'>삭제</button></li>`;
    }
        html += '</ul>';
        list.innerHTML = html;
}

async function modifyUser(id) {
    const name = prompt('바꿀 이름 입력');
    await fetch('/user/' + id, {method: 'PUT', body: `name=${name}`});
    getUsers();
}

async function deleteUser(id) {
    await fetch('/user/' + id, {method: 'DELETE'});
    getUsers();
}

window.onload = getUsers;
    