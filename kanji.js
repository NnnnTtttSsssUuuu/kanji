`use strict`;

// URLのクエリ文字列を取得
const params = new URLSearchParams(window.location.search);
const unicodeValue = params.get('unicode');
let targetKanji = 0;
let jtarget = 0;
let kariItaiji = [];
let kanjiShugo = [];


//ユーザーのリファラ情報
const ref = document.referrer;
console.log("リファラ", ref);
// console.log("location.origin1", location.origin);


// const thisUrls = [
//   location.origin + "/",
//   location.origin + "/index.html"
// ];

// let needJson = !thisUrls.includes(ref);

let needJson = !ref.includes(location.origin);


//外部からならjsonを読み込む
if (needJson) {
  console.log("外部から開く");
  fetch('kanjiFile.json')
    // fetch(location.origin + '/kanjiFile.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
      return response.json();  //内部でparseされ、配列となる
    })
    .then(kanjiFile => {
      kanjiShugo = kanjiFile;
      localStorage.setItem('kanjiLocal', JSON.stringify(kanjiFile));
      // console.log("外部として入手");
      openKanji(unicodeValue);
    })
    .catch(error => console.error('Error loading JSON:', error));
  // alert('JSONの読み込みに失敗しました: ' + error.message)
} else {

  kanjiShugo = JSON.parse(localStorage.getItem('kanjiLocal'));
  console.log("内部から開く");
  setTimeout(() => {
    openKanji(unicodeValue);
  }, 200); //1秒間タイマー
}


//漢字ごとの表を作る
function openKanji(theUnicode) {
  // kanjiShugo = JSON.parse(localStorage.getItem('kanjiLocal'));

  //kanjiShugoのなかで、tKanjiと合致するものを選ぶ
  for (let i = 0; i < kanjiShugo.length; i++) {
    if (kanjiShugo[i].unicode === theUnicode) {
      targetKanji = i;
      continue;
    }
  }

  let theKanji = kanjiShugo[targetKanji];

  //親字の情報を入れる
  let title = document.querySelector('#title_');
  title.textContent = theKanji.midashi;

  let jishu = document.querySelector('#jishu_');
  jishu.textContent = theKanji.jishu;

  let midashi = document.querySelector('#midashi_');
  midashi.textContent = theKanji.midashi;

  let midashi2 = document.querySelector('#midashi2_');
  midashi2.textContent = theKanji.midashi;

  let midashi3 = document.querySelector('#midashi3_');
  midashi3.textContent = theKanji.midashi;

  let jikei = document.querySelector('#jikei_');
  jikei.setAttribute('src', theKanji.jikei);

  let mojigun = document.querySelector('#mojigun_');
  mojigun.textContent = theKanji.mojigun;

  let jislevel = document.querySelector('#jislevel_');
  // jislevel.textContent = theKanji.jislevel;
  jislevel.textContent = "第" + theKanji.jislevel + "水準";

  let unicode = document.querySelector('#unicode_');
  unicode.textContent = theKanji.unicode;

  let menkuten = document.querySelector('#menkuten_');
  menkuten.textContent = theKanji.menkuten;

  // let jiscode = document.querySelector('#jiscode_');
  // jiscode.textContent = theKanji.jiscode;

  let bushu = document.querySelector('#bushu_');
  bushu.textContent = theKanji.bushu + "("+theKanji.kakusu1 +")";

 let kakusu2 = document.querySelector('#kakusu2_');
 kakusu2.textContent = theKanji.kakusu2;

  let sokakusu = document.querySelector('#sokakusu_');
  sokakusu.textContent = Number(theKanji.kakusu1) + Number(theKanji.kakusu2);

  let chuui = document.querySelector('#chuui_');
  chuui.textContent = theKanji.chuui;

  let yomi = document.querySelector('#yomi_');
  yomi.textContent = theKanji.yomi;

  let raireki = document.querySelector('#raireki_');
  raireki.innerHTML = theKanji.raireki;


  //異体字のリストを作る
  let thisKanji = [];
  thisKanji[0] = theKanji;
  for (let i = 1; i < theKanji.nOfJitai; i++) {
    oneItaiji = theKanji.kanjiCode + "_" + (i + 1);
    for (let j = 0; j < kanjiShugo.length; j++) {
      if (kanjiShugo[j].kanjiCode === oneItaiji) {
        thisKanji[i] = kanjiShugo[j];
        continue;
      }
    }
  }

  // console.log("thisKanji", thisKanji);


  //JIS字形の表を作成する
  const jisTableBody = document.querySelector('#jisTableBody');
  for (let i = 0; i < theKanji.nOfJitai; i++) {
    // if(thisKanji[i].menkuten === "-") continue;

    let j = 0;
    const jisRow = document.createElement('tr');

    const jisMidashi = document.createElement('td');
    jisMidashi.className = "jisMidashi";
    // jisMidashi.textContent = thisKanji[i].midashi + "(" + `${thisKanji[i].junOfJitai}` + ")";
        jisMidashi.innerHTML = `<img src="${thisKanji[i].jikei}" width="40">` + "(" + `${thisKanji[i].junOfJitai}` + ")";
    // jisMidashi.textContent = "(" + `${thisKanji[i].junOfJitai}` + ")";


    const jisMenkuten = document.createElement('td');
    jisMenkuten.className = "jisMenkuten";
    jisMenkuten.textContent = thisKanji[i].menkuten;


    const jisSuijun = document.createElement('td');
    jisSuijun.className = "jisSuijun";
    jisSuijun.textContent = thisKanji[i].jislevel;



    const jikeiJis78 = document.createElement('td');
    if (thisKanji[i].JIS78) {
      jikeiJis78.innerHTML = `<img src="${thisKanji[thisKanji[i].JIS78 - 1].jikei}" width="40">` + "(" + `${thisKanji[i].JIS78}` + ")";
      j = j + 1;
    }
    jikeiJis78.className = "moji" + `${j}`;

    const jikeiJis83 = document.createElement('td');
    if (thisKanji[i].JIS83) {
      // jikeiJis83.innerHTML = `<img src="${thisKanji[i].JIS83}" width="40">`;
      jikeiJis83.innerHTML = `<img src="${thisKanji[thisKanji[i].JIS83 - 1].jikei}" width="40">` + "(" + `${thisKanji[i].JIS83}` + ")";
      j = j + 1;
    }
    jikeiJis83.className = "moji" + `${j}`;


    const jikeiJis90 = document.createElement('td');
    if (thisKanji[i].JIS90) {
      // jikeiJis90.innerHTML = `<img src="${thisKanji[i].JIS90}" width="40">`;
      jikeiJis90.innerHTML = `<img src="${thisKanji[thisKanji[i].JIS90 - 1].jikei}" width="40">` + "(" + `${thisKanji[i].JIS90}` + ")";
      j = j + 1;
    }
    jikeiJis90.className = "moji" + `${j}`;


    const jikeiJis2000 = document.createElement('td');
    if (thisKanji[i].JIS2000) {
      // jikeiJis2000.innerHTML = `<img src="${thisKanji[i].JIS2000}" width="40">`;
      jikeiJis2000.innerHTML = `<img src="${thisKanji[thisKanji[i].JIS2000 - 1].jikei}" width="40">` + "(" + `${thisKanji[i].JIS2000}` + ")";
      j = j + 1;
    }
    jikeiJis2000.className = "moji" + `${j}`;


    const jikeiJis2004 = document.createElement('td');
    if (thisKanji[i].JIS2004) {
      // jikeiJis2004.innerHTML = `<img src="${thisKanji[i].JIS2004}" width="40">`;
      jikeiJis2004.innerHTML = `<img src="${thisKanji[thisKanji[i].JIS2004 - 1].jikei}" width="40">` + "(" + `${thisKanji[i].JIS2004}` + ")";
      j = j + 1;
    }
    jikeiJis2004.className = "moji" + `${j}`;


    // const jikeiNow = document.createElement('td');
    // jikeiNow.innerHTML = `<img src="${thisKanji[i].jikei}" width="40">` + "(" + `${thisKanji[i].junOfJitai}` + ")";
    // jikeiNow.className = "mojiNow";

    jisRow.appendChild(jisMidashi);
    jisRow.appendChild(jisMenkuten);
    jisRow.appendChild(jisSuijun);
    jisRow.appendChild(jikeiJis78);
    jisRow.appendChild(jikeiJis83);
    jisRow.appendChild(jikeiJis90);
    jisRow.appendChild(jikeiJis2000);
    jisRow.appendChild(jikeiJis2004);
    // jisRow.appendChild(jikeiNow);

    jisTableBody.appendChild(jisRow);
  }



  let tsukaiwake = document.querySelector('#tsukaiwake_');
  tsukaiwake.innerHTML = theKanji.tsukaiwake;

  let sanko = document.querySelector('#sanko_');
  sanko.textContent = theKanji.sanko;

  // let tsukaiwakeEdit = document.querySelector('#tsukaiwakeEdit_');
  // tsukaiwakeEdit.innerHTML = theKanji.tsukaiwake;
  // let theTargetKanji = document.querySelector('#theTargetKanji');
  // theTargetKanji.textContent = targetKanji;

  //異体字の情報を得る
  for (let i = 1; i < theKanji.nOfJitai; i++) {
    kariItaiji[i + 1] = theKanji.kanjiCode + "_" + (i + 1);
    for (let j = 0; j < kanjiShugo.length; j++) {
      if (kanjiShugo[j].kanjiCode === kariItaiji[i + 1]) {
        jtarget = j;
        continue;
      }
    }
    theItaiji = kanjiShugo[jtarget];  //異体字はtheItaiji

    //異体字のデータを追加
    const kanjigun = document.getElementById('kanjigun_');
    const newSection = document.createElement('section');
    newSection.className = "itaiji";
    newSection.textContent = "(" + (i + 1) + ")";

    const newDiv1 = document.createElement('span');
    newDiv1.className = "jishu";
    newDiv1.textContent = theItaiji.jishu;

    const newDiv2 = document.createElement('div');
    newDiv2.setAttribute('src', theItaiji.jikei);
    let jikeiContent = `<img  src="${theItaiji.jikei}" width="80">`
    newDiv2.innerHTML = jikeiContent;
    newDiv2.className = "jikei";

    const newDiv3 = document.createElement('div');
    newDiv3.className = "midashi";
    newDiv3.textContent = theItaiji.midashi;

    const newDiv3b = document.createElement('div');
    newDiv3b.className = "midashi2";
    newDiv3b.textContent = theItaiji.midashi;

    const newDiv3c = document.createElement('div');
    newDiv3c.className = "midashi3";
    newDiv3c.textContent = theItaiji.midashi;

    const newDiv4 = document.createElement('div');
    newDiv4.className = "youso";

    const newDiv5 = document.createElement('div');
    newDiv5.className = "mojigun";
    newDiv5.textContent = theItaiji.mojigun;

    const newDiv6 = document.createElement('div');
    newDiv6.className = "jislevel";
    if (theItaiji.jislevel == "-") {
      newDiv6.textContent =  "-";
    } else {
      newDiv6.textContent = "第" + theItaiji.jislevel + "水準";
    }

    const newDiv7 = document.createElement('div');
    newDiv7.className = "unicode";
    newDiv7.textContent = theItaiji.unicode;

    if (theItaiji.unicode.length > 8) {
      newDiv7.classList.add("narrow");
    }

    const newDiv8 = document.createElement('div');
    newDiv8.className = "menkuten";
    newDiv8.textContent = theItaiji.menkuten;

    // const newDiv9 = document.createElement('div');
    // newDiv9.className = "jiscode";
    // newDiv9.textContent = theItaiji.jiscode;

    const newDiv9 = document.createElement('div');
    newDiv9.className = "bushu";
    newDiv9.textContent = theItaiji.bushu + "("+theItaiji.kakusu1 +")";

    const newDiv10 = document.createElement('div');
    newDiv10.className = "kakusu2";
    newDiv10.textContent = theItaiji.kakusu2;

    const newDiv11 = document.createElement('div');
    newDiv11.className = "sokakusu";
    newDiv11.textContent = Number(theItaiji.kakusu1) + Number(theItaiji.kakusu2);



    const newDiv12 = document.createElement('div');
    newDiv12.className = "chuui";
    newDiv12.textContent = theItaiji.chuui;

    newSection.appendChild(newDiv1);
    newSection.appendChild(newDiv2);
    newSection.appendChild(newDiv3);
    newSection.appendChild(newDiv3b);
    newSection.appendChild(newDiv3c);

    newDiv4.appendChild(newDiv5);
    newDiv4.appendChild(newDiv6);
    newDiv4.appendChild(newDiv7);
    newDiv4.appendChild(newDiv8);
    newDiv4.appendChild(newDiv9);
    newDiv4.appendChild(newDiv10);
    newDiv4.appendChild(newDiv11);
   newDiv4.appendChild(newDiv12);
    newSection.appendChild(newDiv4);
    kanjigun.appendChild(newSection);
  }
}

// document.getElementById('headpart').addEventListener('click', () => {
//   if (needJson === 0) {
//     window.close();
//   } else {
//     const url = 'index.html';
//     window.open(url, '_blank');
//   }
// });


document.getElementById('headpart').addEventListener('click', () => {

    window.close();

});
