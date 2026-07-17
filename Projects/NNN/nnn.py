from browser import document

def convert():
  input = document['nnn-input'].value
  result = nullify(input)
  document['nnn-result'] <= result

def nullify(input):
  intput = int(input)
  breakMe = document['breakMe'].value == 'on'
  if intput > 21 and not breakMe:
    return 'Specified number too high'
  else:
    resultMid = []
    for i in range(intput):
      resultMid.append(', '.join(resultMid))
    return f'|{resultMid}|'

def bindInit():
  document['nnn-input'].bind('onKeyUp', convert())
  print('convert() bound')

bindInit()
