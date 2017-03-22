var $ = require('jquery');

 var url="https://prueba2-ivanarno.c9users.io/mostrarDocente";
    
   $(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON(url, function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.id + ': ' + item.nombre  + ': ' + item.apellido  + ': ' + item.departamento  + ': ' + item.periodo + item.createdAt + item.updatedAt;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});