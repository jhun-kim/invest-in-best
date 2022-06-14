from flask import Flask, render_template
from modules import read, read_bl


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# rebal model
@app.route('/chart', methods=['GET'])
def chart():
    
    rd = read.Read()
    result = rd.select("Name", "회사코드", "시가총액", "PER", "PBR", "분류기준", "60beta")
    # result['기대수익률'] = result['기대수익률'].round(2)
    result['60beta'] = result['60beta'].round(2)
    result['시가총액'] = (result['시가총액'].round(-8))/100000000
    index_num = result['회사코드']
    lng =len(result)

    return render_template('rebal.html', table_data = result, lng = lng, index_num = index_num)

# capm model
@app.route('/capm', methods=['GET'])
def capm():
    
    rd = read.Read()
    result = rd.select("Name", "회사코드", "시가총액", "PER", "PBR", "분류기준", "60beta")
    # result['기대수익률'] = result['기대수익률'].round(2)
    result['60beta'] = result['60beta'].round(2)
    result['시가총액'] = (result['시가총액'].round(-8))/100000000
    index_num = result['회사코드']
    lng =len(result)

    return render_template('capm.html', table_data = result, lng = lng, index_num = index_num)

# 5factor model
@app.route('/fac5', methods=['GET'])
def fac5():
    
    rd = read.Read()
    result = rd.select("Name", "회사코드", "시가총액", "PER", "PBR", "분류기준", "60beta")
    # result['기대수익률'] = result['기대수익률'].round(2)
    result['60beta'] = result['60beta'].round(2)
    result['시가총액'] = (result['시가총액'].round(-8))/100000000
    index_num = result['회사코드']
    lng =len(result)

    return render_template('fac5.html', table_data = result, lng = lng, index_num = index_num)

# 대형 가치
@app.route('/big', methods=['GET'])
def big():
    
    rd = read_bl.Read()
    result = rd.select_bv('종목명', '종목코드', 'opt1', 'opt2', 'opt3')
    index_num = result['종목코드']
    lng =len(result)
    circle_color = rd.select_color(lng)

    return render_template('big.html', table_data = result, lng = lng, index_num = index_num, circle_color = circle_color)

# 중소형 가치
@app.route('/ms', methods=['GET'])
def ms():
    
    rd = read_bl.Read()
    result = rd.select_msv('종목명', '종목코드', 'opt1', 'opt2', 'opt3')
    index_num = result['종목코드']
    lng =len(result)

    return render_template('ms.html', table_data = result, lng = lng, index_num = index_num)

# 대형 성장
@app.route('/growth', methods=['GET'])
def growth():
    
    rd = read_bl.Read()
    result = rd.select_bg('종목명', '종목코드', 'opt1', 'opt2', 'opt3')
    index_num = result['종목코드']
    lng =len(result)

    return render_template('growth.html', table_data = result, lng = lng, index_num = index_num)

# 중소형 성장
@app.route('/values', methods=['GET'])
def values():
    
    rd = read_bl.Read()
    result = rd.select_msg('종목명', '종목코드', 'opt1', 'opt2', 'opt3')
    index_num = result['종목코드']
    lng =len(result)

    return render_template('values.html', table_data = result, lng = lng, index_num = index_num)

# 모든주
@app.route('/all', methods=['GET'])
def all():
    
    rd = read_bl.Read()
    result = rd.select_all('종목명', '종목코드', 'opt1', 'opt2', 'opt3')
    index_num = result['종목코드']
    lng =len(result)

    return render_template('all.html', table_data = result, lng = lng, index_num = index_num)

@app.route('/info')
def info():
    return render_template('info.html')

if __name__ == '__main__':
    app.run()