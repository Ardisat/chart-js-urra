def generate_js(data):
    
    fact = [i['fact'] for i in data]
    prediction = [i['prediction'] for i in data]
    dt = [i['dt'] for i in data]

    with open('static/js/generated.js', 'w') as  f:
        f.write('var fact = ' + str(fact) + ';\n')
        f.write('var prediction = ' + str(prediction) + ';\n')
        f.write('var dt = ' + str(dt) + ';')
     