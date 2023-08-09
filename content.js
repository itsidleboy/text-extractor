function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

var textContent = document.body.innerText;
var emails = textContent.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g);
var emailContent = emails ? emails.join('\n') : '';

var title = document.title.replace(/\W+/g, '_');
var timestamp = new Date().toISOString().replace(/:/g, '-');
var filename = title + '_' + timestamp + '.txt';

download(filename, emailContent);
