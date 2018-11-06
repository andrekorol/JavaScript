import urllib.request


local_filename, headers = urllib.request.urlretrieve('http://www.josedornelas.com.br/game/testdb.php')

html = open(local_filename, 'rb')
html_lines = html.read()

print(html_lines[-153:-125])