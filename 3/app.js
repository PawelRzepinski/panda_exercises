$(function() {

    //KEY: EFA1Ds13xDBCbvSOGuuGJN6Ll0Eo2Iqd
    const $url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=EFA1Ds13xDBCbvSOGuuGJN6Ll0Eo2Iqd";
    const button = $("button");
    const pictureWindow = $("<iframe src='' class='show'></iframe>");
    const idArr = [];
    let data = true;
    
    button.after(pictureWindow);

    const pickId = res => {
        data = res.data

        for(let i=0; i<data.length; i++){
            idArr.push(data[i].id)
        }
        return idArr; 
    }

    const random = () => {
        const min = 0;
        const max = idArr.length;
        const singleElement = Math.floor(Math.random() * (max - min)) + min;
            
        pictureWindow[0].setAttribute("src", `https://giphy.com/gifs/${idArr[singleElement]}/html5`)
    }

    function loadData () {
        $.ajax({
            url: $url,
            dataType: "json"
        }).done (function(res){
            pickId(res);
            random();
        })
    }
    button.on("click", random);
    loadData();
})