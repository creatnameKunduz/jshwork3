var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

// Создаем объект для хранения результата
var tagCounts = {};

// Итерируем по массиву тегов и увеличиваем счетчик для каждого тега
tags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
});

// Выводим результат
console.log(tagCounts);



//2
var obj = {
    coffee : {
        cappuccino: 'Капучи́но — кофейный напиток итальянской кухни на основе эспрессо с добавлением в него подогретого вспененного молока',
        latte: 'Ла́тте — кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока и кофе эспрессо. Был изобретён в Италии.',
        espresso : 'Ла́тте — кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока и кофе эспрессо. Был изобретён в Италии.',

    },
    tea: {
        blackTea: 'Чёрный чай — вид чая, подвергающийся полной ферментации в течение от двух недель до месяца. Традиционно наиболее популярный вид чая в Европе, включая Россию.',
        greenTea: 'Зелёный чай — чай, подвергнутый минимальной ферментации. И зелёный, и чёрный чай получают из листьев одного и того же чайного куста, однако различными способами.'
    }
}

var question1 = prompt('tea or coffee')
var question2 = prompt(' какой вид напитка')

if( question1 === 'tea' && question2 === 'blackTea' && obj.tea.blackTea){
    console.log('ваш заказ принят')
} else if( question1 === 'tea' && question2 === 'greenTea' && obj.tea.greenTea){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'cappuccino' && obj.coffee.cappuccino){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'latte' && obj.coffee.latte){
    console.log( 'ваш заказ принят')
} else if( question1 === 'coffee' && question2 === 'espresso' && obj.coffee.espresso){
    console.log( 'ваш заказ принят')
}
