import pandas as pd

class Read():

    def __init__(self):
        code = []
        self.sample = pd.read_csv('./modules/datasets/sample.csv',).drop('Unnamed: 0', axis=1)
        for i in range(len(self.sample)):
            code.append(format(self.sample['회사코드'][i], '06'))
        self.sample['회사코드'] = code

    def select(self,*input_columns):
        self.input = list(set(input_columns))
        self.sample[self.input]
        return(self.sample)
