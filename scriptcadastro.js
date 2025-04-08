const form = document.getElementById('formCadastro');
const tabelaDiv = document.getElementById('tabelaCadastro');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Pega os valores dos campos
  const nome = document.getElementById('nomeCompleto').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const cpf = document.getElementById('cpf').value;
  const tipoSanguineo = document.getElementById('tipoSanguineo').value;
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;

  // Cria a tabela com os dados
  tabelaDiv.innerHTML = `
    <h3>Informações Cadastradas:</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Nome Completo</th>
          <th>Data de Nascimento</th>
          <th>CPF</th>
          <th>Tipo Sanguíneo</th>
          <th>Estado</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${nome}</td>
          <td>${dataNascimento}</td>
          <td>${cpf}</td>
          <td>${tipoSanguineo}</td>
          <td>${estado}</td>
          <td>${cidade}</td>
        </tr>
      </tbody>
    </table>
  `;

  // Opcional: limpar o formulário depois de cadastrar
  form.reset();
});