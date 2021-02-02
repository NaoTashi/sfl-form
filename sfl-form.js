function send(){

  var start_date = document.getElementById("st-date").value;
  var start_time = document.getElementById("st-time").value;
  var fin_date = document.getElementById("fn-date").value;
  var fin_time = document.getElementById("fn-time").value;
  var name1_1 = document.getElementById("name1-1").value;
  var name1_1_1 = document.getElementById("name1-1-1").value;
  var name1_2 = document.getElementById("name1-2").value;
  var name1_3 = document.getElementById("name1-3").value;
  var name2_1 = document.getElementById("name2-1").value;
  var name2_1_1 = document.getElementById("name2-1-1").value;
  var name2_2 = document.getElementById("name2-2").value;
  var name2_3 = document.getElementById("name2-3").value;
  var name3_1 = document.getElementById("name3-1").value;
  var name3_1_1 = document.getElementById("name3-1-1").value;
  var name3_2 = document.getElementById("name3-2").value;
  var name3_3 = document.getElementById("name3-3").value;
  var opp = document.getElementById("opp").value;
  // var model = document.getElementById("model").value;
  var model_num = document.getElementById("model-num").value;
  var phone_num = document.getElementById("phone-num").value;
  var other = document.getElementById("other").value;

  // --- ここから 時間チェック処理
  if (start_date > fin_date || start_time > fin_time){
    alert("日時が不正です");
  }

  // --- ここから 場所のラジオボタンの処理

  const arr1 = [];
	const place = document.getElementsByName("place");

	for (let i = 0; i < place.length; i++){
		if(place[i].checked){ //(color2[i].checked === true)と同じ
			arr1.push(place[i].value);
		}
	}
  // --- ここまで

  // --- ここから 機種選択

  const arr2 = [];
  const model = document.getElementsByName("model");

  for (let i = 0; i < model.length; i++){
    if(model[i].checked){ //(color2[i].checked === true)と同じ
      arr2.push(model[i].value);
    }
  }

      document.getElementById("out-st-date").innerHTML = "開始日時 " + start_date + "-" + start_time;
      document.getElementById("out-fn-date").innerHTML = "終了日時 " + fin_date + "-" + fin_time;
      document.getElementById("out-place").textContent = arr1;
      document.getElementById("out-name1-1").innerHTML = name1_1 + "・" + name1_1_1;
      document.getElementById("out-name1-2").innerHTML = "所属 " + name1_2;
      document.getElementById("out-name1-3").innerHTML = "肩書 " + name1_3;

      if (name2_1 != ""){
        document.getElementById("out-name2-1").innerHTML = name2_1 + "・" + name2_1_1;
        document.getElementById("out-name2-2").innerHTML = "所属 " + name2_2;
        document.getElementById("out-name2-3").innerHTML = "肩書 " + name2_3;
      }
      if(name3_1 != ""){
        document.getElementById("out-name3-1").innerHTML = name3_1 + "・" + name3_1_1;
        document.getElementById("out-name3-2").innerHTML = "所属 " + name3_2;
        document.getElementById("out-name3-3").innerHTML = "肩書 " + name3_3;
      }

      document.getElementById("out-opp").innerHTML = "使用目的 " + opp;
      document.getElementById("out-model").innerHTML = "使用機種 " + model;
      document.getElementById("out-model-num").innerHTML = "機体番号 " + model_num;
      document.getElementById("out-phone-num").innerHTML = "緊急連絡先 " + phone_num;

      if (other != ""){
        document.getElementById("out-other").innerHTML = "備考 " + opp;
      }



}
