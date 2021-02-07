import pyodbc

def select(ID, password):
    try:
        con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ= C:\Users\steph\OneDrive\Documents\hackathon.accdb;'
        conn = pyodbc.connect(con_string)

        cur = conn.cursor()
        #cur.execute('SELECT * FROM users')
        cur.execute("select * from users where ID=?", ID)
        row = cur.fetchone()
        if row:
            if(row.Password == password):
                return "Login Successful"
            else:
                return "Invalid Password"

        else:
            return "Invalid User"

    except pyodbc.Error as e:
        print("Error in Connection")
