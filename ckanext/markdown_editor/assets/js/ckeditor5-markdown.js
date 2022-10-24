ckan.module('ckeditor5-markdown', function (jQuery, _) {
  return {
    options: {'language': ''},
    initialize: function () {
      ClassicEditor
        .create(this.el[0], {'language': this.options.language})
      .then(editor => {
        // Check if data is changed on unload to display browser prompt
        const data = editor.getData();

        addEventListener('beforeunload', (event) => {
          if(editor.getData() !== data) {
            return event.returnValue = true;
          }
        });
      })
      .catch( error => console.log(error) );
    },
  }
});

