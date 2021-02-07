import pyodbc

def update(field_update, field, ID ):
    try:
        con_string = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ= C:\Users\steph\OneDrive\Documents\hackathon.accdb;'
        conn = pyodbc.connect(con_string)

        if (field == "First Name"):
            cur = conn.cursor()
            cur.execute('UPDATE users SET "First Name" = ? WHERE ID = ?',(field_update, ID))
            conn.commit()
            print("Data updated")
            return

        if (field == "Last Name"):
            cur = conn.cursor()
            cur.execute('UPDATE users SET "Last Name" = ? WHERE ID = ?',(field_update, ID))
            conn.commit()
            print("Data updated")
            return

        if (field == "Email"):
            cur = conn.cursor()
            cur.execute('UPDATE users SET "Email" = ? WHERE ID = ?',(field_update, ID))
            conn.commit()
            print("Data updated")
            return
        if (field == "Password"):
            cur = conn.cursor()
            cur.execute('UPDATE users SET "Password" = ? WHERE ID = ?',(field_update, ID))
            conn.commit()
            print("Data updated")
            return
        if (field == "pnum"):
            cur = conn.cursor()
            cur.execute('UPDATE users SET "pnum" = ? WHERE ID = ?',(field_update, ID))
            conn.commit()
            print("Data updated")
            return

    except pyodbc.Error as e:
        print("Error in connection", e)