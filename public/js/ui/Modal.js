/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    this.element = element;
    this.registerEvents()

  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {

    const funkOnClose = (e) => {
      e.preventDefault()
      this.onClose()
    };

    const dataDismiss = document.querySelectorAll('[data-dismiss="modal]');
    
    dataDismiss.forEach(e => {e.addEventListener('click', funkOnClose)});

  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose() {

   this.close(); /// так?


  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {

    this.element.style.display = 'block';
   

  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){

    this.element.style.removeProperty('display');
    

  }
}