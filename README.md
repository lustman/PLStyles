# Стиль оформления  для Pоrnоlаb.Net

Темный стиль оформления для форума

[Вот как он выглядит](http://i75.fastpic.ru/big/2016/0325/d4/487886b7daa0478dd974f5e6be55abd4.png)

### Инструкция

1. Для начала нужно установить расширение Stylish ([Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/stylish/), [Opera](https://addons.opera.com/ru/extensions/details/stylish/))

2. Правой кнопкой мыши по значку Stylish, затем `Управление установленными стилями`
3. Выбираем `Создать стиль`
4. Вводим имя на ваше усмотрение
5. Для Firefox
  1. Вставляем в поле `Код`:
    ```css
  @namespace url(http://www.w3.org/1999/xhtml);

  @-moz-document domain("pornolab.net") {
  
  }
    ```
  2. Затем внутрь фигурных скобок - содержимое файла [`css/screen.css`](https://raw.githubusercontent.com/lustman/PLStyles/master/css/screen.css)
6. Для Opera и Chrome:
  1. `Применить к` `URL в домене` `pornolab.net`
  2. Вставляем в поле `Код` содержимое файла [`css/screen.css`](https://raw.githubusercontent.com/lustman/PLStyles/master/css/screen.css)
7. Нажимаем `Сохранить`

### Известные проблемы:

1. Большинство изображений создавались для светлого фона, как следствие светлая тень выделяется на тёмном фоне
2. Я мог пропустить некоторые места. Если обнаружите - напишите и я исправлю (если это возможно)

Предложения приветствуются
