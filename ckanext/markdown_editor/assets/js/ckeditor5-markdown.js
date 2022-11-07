ckan.module('ckeditor5-markdown', function (jQuery, _) {
  return {
    options: {'language': ''},
    initialize: function () {
      let el = this.el[0];
      ClassicEditor
        .create(el, {'language': this.options.language})
      .then(editor => {
        // Disable dirty check if form is being submitted
        let submitted = false;
        $(el).parents('form').submit((e) => {
          submitted = true
        });

        // Check if data is changed on unload to display browser prompt
        const data = editor.getData();
        addEventListener('beforeunload', (event) => {
          if(!submitted && editor.getData() !== data) {
            return event.returnValue = true;
          }
        });
      })
      .catch( error => console.log(error) );
    },
  }
});

