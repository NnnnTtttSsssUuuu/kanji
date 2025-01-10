`use strict`;
{

  const nullKanji = {
    "No.": 0,
    "nOfJitai": 3,
    "kanjiCode": "",
    "jishu": "",
    "midashi": "",
    "jikei": "",
    "mojigun": "",
    "jislevel": "",
    "Unicode_": "",
    "menkuten_": "",
    "jiscode_": "",
    "chuki_": "",
    "tsukai_": "",
    "yomi": "",
    "raireki": "",
    "tsukaihoki": "",
    "sanko": ""
  }

  let jsonKanji;
  let target = 0;
  let jtarget = 0;
  let kariItaiji = [];
  // let theItaiji = [];

  //JSON読み込み
  fetch('fortest.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status);
      }
      return response.json();
    })
    .then(fortest => {
      jsonKanji = fortest;

    })
    .catch(error => console.error('Error loading JSON:', error));


  // 解説へ
  document.querySelector('#toKaisetsu').addEventListener('click', () => {
    window.location.href = 'kaisetsu.html';
  });




  // 倶
  // document.getElementById('4FF1').addEventListener('click', () => {
  //   window.open('4FF1.html', '_blank');
  // });


  // 各文字の説明へ
  document.querySelectorAll('.kanji').forEach(tr => {
    tr.addEventListener('click', () => {
      //ユーザーが選んだ漢字（親字）はtKanji
      const tKanji = Array.from(tr.querySelectorAll('td')).map(td => td.textContent.trim());
      // const nwin = window.open('', '_blank');
      const nwin = window.open('kanji.html', '_blank');

      //初期化
      for (let i = 0; i < 5; i++) {
        // theItaiji[i] = nullKanji;
      }


      //jsonKanjiのなかで、tKanjiと合致するものを選ぶ
      for (let i = 0; i < jsonKanji.length; i++) {
        // if(i = jsonKanji.length - 1){alert("漢字が見つかりません");}
        if (jsonKanji[i].unicode === tKanji[1]) {
          target = i;
          continue;
        }
      }
      //ユーザーが選んだ漢字（親字）は、jsonKanji内のtheKanji
      let theKanji = jsonKanji[target];



      nwin.onload = () => {

        //親字の情報を入れる
        let title = nwin.document.querySelector('#title_');
        title.textContent = theKanji.midashi;

        let jishu = nwin.document.querySelector('#jishu_');
        jishu.textContent = theKanji.jishu;

        let midashi = nwin.document.querySelector('#midashi_');
        midashi.textContent = theKanji.midashi;

        let jikei = nwin.document.querySelector('#jikei_');
        // let jikeiSrc = jikei.getAttribute('src');
        jikei.setAttribute('src', theKanji.jikei);
      

        let mojigun = nwin.document.querySelector('#mojigun_');
        mojigun.textContent = theKanji.mojigun;

        let jislevel = nwin.document.querySelector('#jislevel_');
        jislevel.textContent = theKanji.jislevel;

        let unicode = nwin.document.querySelector('#unicode_');
        unicode.textContent = theKanji.unicode;

        let menkuten = nwin.document.querySelector('#menkuten_');
        menkuten.textContent = theKanji.menkuten;

        let jiscode = nwin.document.querySelector('#jiscode_');
        jiscode.textContent = theKanji.jiscode;

        let chuui = nwin.document.querySelector('#chuui_');
        chuui.textContent = theKanji.chuui;

        let yomi = nwin.document.querySelector('#yomi_');
        yomi.textContent = theKanji.yomi;

        let raireki = nwin.document.querySelector('#raireki_');
        raireki.textContent = theKanji.raireki;

        let tsukaiwake = nwin.document.querySelector('#tsukaiwake_');
        tsukaiwake.textContent = theKanji.tsukaiwake;

        let sanko = nwin.document.querySelector('#sanko_');
        sanko.textContent = theKanji.sanko;

        // };


        //異体字の情報を得る
        for (let i = 1; i < theKanji.nOfJitai; i++) {
          kariItaiji[i + 1] = theKanji.kanjiCode + "_" + (i + 1);

          for (let j = 0; j < jsonKanji.length; j++) {
            if (jsonKanji[j].kanjiCode === kariItaiji[i + 1]) {
              jtarget = j;
              continue;
            }
          }
          //異体字はtheItaiji
          theItaiji = jsonKanji[jtarget];

          // console.log("異体字が見つかりました！", theItaiji.midashi);


          //異体字のデータを追加
          const kanjigun = nwin.document.getElementById('kanjigun_');

          const newSection = document.createElement('section');
          newSection.className = "itaiji";
          newSection.textContent = i+1;
          
          const newDiv1 =document.createElement('span');
          newDiv1.className = "jishu";
          newDiv1.textContent = theItaiji.jishu;

          const newDiv2 =document.createElement('div');
          newDiv2.className = "midashi";
          newDiv2.textContent = theItaiji.midashi;

          const newDiv3 =document.createElement('div');
          newDiv3.setAttribute('src', theItaiji.jikei);
          let jikeiContent = `画像データ<br><img  src="${theItaiji.jikei}" width="60">`
          newDiv3.innerHTML =jikeiContent;
          newDiv3.className = "jikei";

          const newDiv4 =document.createElement('div');
          newDiv4.className = "youso";

          const newDiv5 =document.createElement('div');
          newDiv5.className = "mojigun";
          newDiv5.textContent = theItaiji.mojigun;

          const newDiv6 =document.createElement('div');
          newDiv6.className = "jislevel";
          newDiv6.textContent = theItaiji.jislevel;

          const newDiv7 =document.createElement('div');
          newDiv7.className = "unicode";
          newDiv7.textContent = theItaiji.unicode;

          const newDiv8 =document.createElement('div');
          newDiv8.className = "menkuten";
          newDiv8.textContent = theItaiji.menkuten;

          const newDiv9 =document.createElement('div');
          newDiv9.className = "jiscode";
          newDiv9.textContent = theItaiji.jiscode;

          const newDiv10 =document.createElement('div');
          newDiv10.className = "chuui";
          newDiv10.textContent = theItaiji.chuui;


          newSection.appendChild(newDiv1);
          newSection.appendChild(newDiv2);
          newSection.appendChild(newDiv3);

          newDiv4.appendChild(newDiv5);
          newDiv4.appendChild(newDiv6);
          newDiv4.appendChild(newDiv7);
          newDiv4.appendChild(newDiv8);
          newDiv4.appendChild(newDiv9);
          newDiv4.appendChild(newDiv10);
          newSection.appendChild(newDiv4);

          kanjigun.appendChild(newSection);

        }




      };








      // const parser = new DOMParser();
      // const doc = parser.parseFromString(htmlContent, 'text/html');



      // nwin.document.replaceChild(
      //   nwin.document.adoptNode(doc.documentElement),
      //   nwin.document.documentElement
      // );

    })
  })


  //戻る
  // document.getElementById('headpart').addEventListener('click', () => {
  //   window.location.href = 'index.html';
  // });



}