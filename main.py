import sqlite3
import json

connection = sqlite3.connect("users_blog.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT UNIQUE NOT NULL
)             
""")
connection.commit()

def load_users_from_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        users = json.load(file)
    return users

def insert_users(users):
    try:
        cursor.executemany("""
        INSERT INTO users (name, age, email)
        VALUES (?, ?, ?)
        """, [(user['name'], user['age'], user['email']) for user in users])
        connection.commit()
        print(f'{len(users)} пользователей добавлено.')
    except sqlite3.IntegrityError as e:
        print(f'Ошибка: {e}')

json_file_path = 'data.json'

users = load_users_from_json(json_file_path)
insert_users(users)

cursor.close()
connection.close()