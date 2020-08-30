with open('pianoKey.txt' , 'w') as File:
  start = -18
  for i in range(1,8):
    temp = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']
    for j in temp:
      File.write(
        "<Col>"+
        str(start) + " : "  + j + str(i) + "</Col>\n"
      )
      start += 0.5