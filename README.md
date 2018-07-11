У Вас должны быть установлены Node, Npm, Git, Python, Virtualenvwrapper
Нужно создать виртуальное окружение с помощью virtualenvwrapper
Запуск проекта:
    1) git clone https://github.com/Sergey19940808/list-people
    2) cd frontend
    3) npm i
    4) npm start
    5) cd backend
    6 pip freeze > requirements.txt
    7) Потом заходим в list_people/list_people/settings и анстраиваем подключение к базе данных
    8) Создаем базу данных
    9) Заходим в backend/list_people и запускаем python manage.py migrate
    10) Потом из корня запускаем python generation_db.py
    11) Затем из папки backend/list_people запускаем python manage.py runserver
   
Также нужно установить расширение для браузера CORS
    
