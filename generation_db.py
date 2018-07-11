import random
import pymysql.cursors

FIRST_NAMES = [
    'Акакий', 'Аким' 'Алан', 'Александр', 'Алексей', 'Али',
    'Алик', 'Алим', 'Алихан', 'Алмаз', 'Альберт', 'Амир', 'Амирам',
    'Анар', 'Анастасий', 'Анатолий', 'Анвар', 'Ангел', 'Андрей', 'Анзор',
    'Антон', 'Анфим', 'Арам', 'Аристарх', 'Аркадий', 'Арман', 'Армен',
    'Арсен', 'Арсений', 'Арслан', 'Артём', 'Артемий', 'Артур', 'Архип',
    'Аскар', 'Асхан', 'Ахмет', 'Ашот'

]

LAST_NAMES = [
    'Абрамов', 'Авдеев', 'Агафонов', 'Аксёнов', 'Александров', 'Алексеев', 'Андреев',
    'Анисимов', 'Антонов', 'Артемьев', 'Архипов', 'Афанасьев', 'Баранов', 'Белов',
    'Белозёров', 'Белоусов', 'Беляев', 'Беляков', 'Беспалов', 'Бирюков', 'Блинов',
    'Блохин', 'Бобров', 'Бобылёв', 'Богданов', 'Большаков', 'Борисов', 'Брагин', 'Буров',
    'Быков', 'Васильев', 'Веселов', 'Виноградов', 'Вишняков', 'Владимиров', 'Власов',
    'Волков', 'Воробьёв'
]

GROUPS = ['Руководство', 'Бухгалтерия', 'Отдел кадров', 'Администрация']

list_users = []

for _ in range(300):
    list_users.append(
        {
            'first_name': random.choice(FIRST_NAMES),
            'last_name': random.choice(LAST_NAMES),
            'group': random.choice(GROUPS)
        }
    )

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='nemate666',
                             db='ListUsers',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor
                             )

query = "INSERT INTO `users_user` (`first_name`, `last_name`, `group`) VALUES(%s, %s, %s)"
cursor = connection.cursor()
for i in list_users:
    cursor.execute(query, (i['first_name'], i['last_name'], i['group']))

connection.commit()
connection.close()

