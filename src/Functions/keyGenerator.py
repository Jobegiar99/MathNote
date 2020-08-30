with open('pianoKey.js' , 'w') as File:
  template = "\"media/audio/piano/"
  start = -18
  File.write("export const piano = {\n")
  for i in range(1,8):
    temp = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']
    for j in temp:
      File.write(
        "\""+str(start)+"\"" + " : " + template + j + str(i) + ".mp3\",\n"
      )
      start += 0.5
  File.write("};")