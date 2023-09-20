const tbody = document.querySelector('tbody')
const currentUser = localStorage.getItem('currentUser')
const users = localStorage.getItem('users')

const myComputers = users.find((users) => users.name === currentUser).computers

for (let computer of myComputers) {

    tbody.innerHTML += `<tr>
<td>${computer.id}</td>
<td>${computer.mark}</td>
<td><img src=${computer.img} alt="">
</td>
<td>
   <button class="btn btn-danger">Delete</button>
   <button class="btn btn-primary">Chnge</button>
</td>
</tr>`;
}
