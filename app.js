//Дэлгэцтэй ажиллах контролер
var uiController = (function() {
    var x  = 100; 

    function add(y) {
        return x + y ;
    }
    return {
        publicAdd: function(a) {
            a = add(a)
            console.log( "хүлээн авсан утга : " + a);
        }
    };
    console.log("")
})()
//Санхүүтэй  ажиллах контролер
var financeController = (function() {

})()
//Холбох контролер
var connectController = (function(uiControllerl, financeController) {
    var ctrlAddItem = function()  {
        //1, Оруулах өгөгдлийг дэлгэцнээс олж авна.
        console.log(11);

        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контролерт дамжуулан тэнд халгална.
        // 3. Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт гаргана.
        // 4. Төсвийг тооцоолно
        // Эцсийн үлдэгдэль тооцоог дэлгэцэнд гаргана.
    }
    document.querySelector(" .add__btn").addEventListener("click", function(){
        ctrlAddItem();


    })
    document.addEventListener("keypess", function(event){
        if(event.key === 13) {
             ctrlAddItem();
        }
        

    });
}) (uiController, financeController)