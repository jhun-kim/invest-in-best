import pandas as pd

class Read():

    def __init__(self):
        code = []
        self.sample_bv = pd.read_csv('./modules/datasets/대형가치.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample_bv)):
            code.append(format(self.sample_bv['종목코드'][i], '06'))
        self.sample_bv['종목코드'] = code

        code = []
        self.sample_bg = pd.read_csv('./modules/datasets/대형성장.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample_bg)):
            code.append(format(self.sample_bg['종목코드'][i], '06'))
        self.sample_bg['종목코드'] = code

        code = []
        self.sample_msv = pd.read_csv('./modules/datasets/중소형가치.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample_msv)):
            code.append(format(self.sample_msv['종목코드'][i], '06'))
        self.sample_msv['종목코드'] = code

        code = []
        self.sample_msg = pd.read_csv('./modules/datasets/중소형성장.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample_msg)):
            code.append(format(self.sample_msg['종목코드'][i], '06'))
        self.sample_msg['종목코드'] = code

        code = []
        self.sample_all = pd.read_csv('./modules/datasets/all.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample_all)):
            code.append(format(self.sample_all['종목코드'][i], '06'))
        self.sample_all['종목코드'] = code

    def select_color(self, num):
        self.color =['#4e73df', '#6610f2','#6f42c1','#e83e8c','#e74a3b','#fd7e14','#f6c23e','#1cc88a','#20c9a6','#36b9cc','#fff','#858796','#5a5c69','#4e73df','#858796','#1cc88a','#36b9cc','#f6c23e','#e74a3b','#f8f9fc','#5a5c69','#4e73df', '#6610f2','#6f42c1','#e83e8c','#e74a3b','#fd7e14','#f6c23e','#1cc88a','#20c9a6','#36b9cc','#fff','#858796','#5a5c69','#4e73df','#858796','#1cc88a','#36b9cc','#f6c23e','#e74a3b','#f8f9fc','#5a5c69']
        self.color = self.color[:num]
        return(self.color)


    def select_bv(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample_bv[self.input]
        return(self.sample_bv)

    def select_bg(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample_bg[self.input]
        return(self.sample_bg)

    def select_msv(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample_msv[self.input]
        return(self.sample_msv)

    def select_msg(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample_msg[self.input]
        return(self.sample_msg)

    def select_all(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample_all[self.input]
        return(self.sample_all)
