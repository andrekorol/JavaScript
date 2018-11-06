with open('answers.txt') as fin, open('correct_answers.txt', 'w') as fout:
    line_number = 0
    for line in fin:
        for s in line.split('='):
            print(s)
