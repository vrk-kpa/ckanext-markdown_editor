ckan.module('ckeditor5-markdown', function (jQuery, _) {
  return {
    options: {'language': ''},
    initialize: function () {
      ClassicEditor
        .create(this.el[0], {'language': this.options.language})
        //.then( editor => console.log(editor) )
        .catch( error => console.log(error) );
    },
  }
});

