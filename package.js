Package.describe({

  name: 'branco91:cloudinary-jquery-upload',
  version: '0.1.0',
  summary: 'Support libraries for image uploads to Cloudinary using jQuery.',
  git: 'https://github.com/branco91/cloudinary-jquery-upload',
  documentation: 'README.md'

});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use('jquery', 'client');

  api.add_files([
    'vendor/jquery.ui.widget.js',
    'vendor/jquery.ui.widget.js',
    'vendor/jquery.iframe-transport.js',
    'vendor/jquery.fileupload.js',
    'vendor/jquery.cloudinary.js',
    'vendor/load-image.all.min.js',
    'vendor/canvas-to-blob.min.js',
    'vendor/jquery.fileupload-process.js',
    'vendor/jquery.fileupload-image.js',
    'vendor/jquery.fileupload-validate.js',
    ], 'client');

});
