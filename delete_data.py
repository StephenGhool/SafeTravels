import pyodbc

def delete(ID):
    try:
        con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ= C:\Users\steph\OneDrive\Documents\hackathon.accdb;'
        conn = pyodbc.connect(con_string)

        cur = conn.cursor()
        cur.execute('DELETE FROM users WHERE id = ?', (ID))
        conn.commit()
        print("Data Deleted ")

    except pyodbc.Error as e:
        print("Error in connection", e)