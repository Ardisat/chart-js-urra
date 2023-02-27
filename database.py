import pymysql
from pymysql.cursors import DictCursor


class DataBase():

    def __init__(self):
        self.dbh = pymysql.connect(
            host = "185.12.94.106",
            user = "2p1s04",
            password = "251-480-822",
            db = "ithub",
            charset = 'utf8mb4',
            cursorclass = DictCursor,
            autocommit  = True
        )

    def sql(self, sql):
        with self.dbh.cursor() as cur:
            cur.execute(sql)
            rows = cur.fetchall()
            return rows
        
    def get_data(self):
        return self.sql("""
            SELECT 
                income_fact as fact, 
                income_prediction as prediction, 
                CONCAT(YEAR(dt), '-', QUARTER(dt)) as dt
            FROM 
                vd_tsmc
        """)