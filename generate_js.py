def generate_js(data):
    data = [
        {'fact': 16.94, 'prediction': 16.73, 'dt': '2022-1'}, 
        {'fact': 15.85, 'prediction': 15.69, 'dt': '2021-4'}, 
        {'fact': 14.75, 'prediction': 14.81, 'dt': '2021-3'}, 
        {'fact': 13.35, 'prediction': 13.23, 'dt': '2021-2'}, 
        {'fact': 12.77, 'prediction': 12.78, 'dt': '2021-1'}, 
        {'fact': 12.93, 'prediction': 12.85, 'dt': '2020-4'}, 
        {'fact': 12.4, 'prediction': 11.84, 'dt': '2020-3'}, 
        {'fact': 10.55, 'prediction': 10.39, 'dt': '2020-2'}, 
        {'fact': 10.35, 'prediction': 10.31, 'dt': '2020-1'}, 
        {'fact': 10.6, 'prediction': 10.5, 'dt': '2019-4'}, 
        {'fact': 9.58, 'prediction': 9.25, 'dt': '2019-3'}
        ]
    
    fact = [i['fact'] for i in data]
    prediction = [i['prediction'] for i in data]
    dt = [i['dt'] for i in data]

    with open('static/js/generated.js', 'w') as  f:
        f.write('var fact = ' + str(fact) + ';\n')
        f.write('var prediction = ' + str(prediction) + ';\n')
        f.write('var dt = ' + str(dt) + ';')
     