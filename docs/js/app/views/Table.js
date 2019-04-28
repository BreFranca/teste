class TableView extends Views {

  constructor (element){
    super(element);
  }

  template (model){
    return `
      <table class="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Data</th>
              <th>IP</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(model).map(data => `
              <tr>
                <td>${data[1].name}</td>
                <td>${data[1].email}</td>
                <td>${data[1].currentdate}</td>
                <td>${data[1].ip}</td>
                <td>${data[1].type}</td>
              </tr>
            `).join('')}
          </tbody>
      </table>
    `
  }

}