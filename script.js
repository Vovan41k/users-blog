fetch ('users.json')
.then(res => res.json())
.then(data => {
    // <tbody id="users-list-body">
    // <tr>
    //     <td>1</td>
    //     <td>Alice Johnson</td>
    //     <td>25</td>
    //     <td>alice.johnson@example.com</td>
    // </tr>
    // </tbody>
  const userListEl = document.querySelector('#users-list-body')
  for(const user of data) {
    const trEl = document.createElement('tr')
    trEl.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    `
    userListEl.appendChild(trEl)
  }
  console.log(data)
})