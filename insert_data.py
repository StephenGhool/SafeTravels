import pyodbc

def insert(ID, f_name, l_name, email, pword , pnum):
    try:
        con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ= C:\Users\steph\OneDrive\Documents\hackathon.accdb;'
        conn = pyodbc.connect(con_string)

        cursor = conn.cursor()
        myuser = ((ID, f_name, l_name, email, pword , pnum))

        cursor.execute('INSERT INTO users VALUES (?,?,?,?,?,?)', myuser)
        conn.commit()
        print('Data Inserted')
    except pyodbc.Error as e:
        print("Error in connection", e)