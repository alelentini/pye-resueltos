import os

# Process AsciiDocs files
DOCS_DIR = r'C:\Users\60048007\Documents\Projects\pye\pye-resueltos\docs'
aDocs = []
for file in os.listdir(DOCS_DIR):   
    if file.endswith('.adoc'):
        with open(os.path.join(DOCS_DIR, file), 'r', encoding='utf-8') as aDocFile:
            aDocs.append({'name': file.replace('.adoc', ''), 'contents': aDocFile.read().replace("\\", "\\\\")})
#print(aDocs)

# Creates config.js file
ADOCS_JS_PATH = r'C:\Users\60048007\Documents\Projects\pye\pye-resueltos\js\adocs.js'
with open(ADOCS_JS_PATH, 'w', encoding='utf-8') as aDocFile:
    aDocFile.write('aDocs = [')
    aDocFile.write('\n')
    for aDoc in aDocs:
        aDocFile.write(f'\t{{"name": "{aDoc["name"]}", "contents": `{aDoc["contents"]}`}},\n')
    aDocFile.write('];')
