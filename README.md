# react-udemu

9. Создание простого компонента
10. Вывод динамических данных
11. Передача параметров
~~~javascript
<Car name={'Ford'} year={2018} />
~~~
12. Передача контента
~~~javascript
<p style={{ color: 'red', fontWeight: 'bold' }}>COLOR</p>
~~~
13. Создание State
~~~javascript
<h1>{this.state.pageTitle}</h1>
<Car name={cars[0].name} year={cars[0].year} />
~~~
14. Добавление события onClick

15. Изменение State с помощью:
~~~javascript
this.setState({
    pageTitle: newTitle
})
~~~

16. Передача параметров в функцию
(Passing parameters to a function)
~~~javascript
onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
~~~

17. Обработка Input - прослушка инпута и передача event.target.value с помощью setState в компонент pageTitle.
(Listening for input and passing event.target.value using setState to the pageTitle component).
