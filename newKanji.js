`use strict`;
{

  let targetKanji = 0;
  let jtarget = 0;
  let kariItaiji = [];

  const params = new URLSearchParams(window.location.search);
  const unicodeValue = params.get("unicode"); // 例: "U+4E00"


  if (unicodeValue) {
    // ここで内容を生成
    // document.body.innerHTML = `<h1>漢字: ${String.fromCodePoint(parseInt(unicodeValue, 16))}</h1>`;
    openKanji(unicodeValue);
    console.log("newKanaji.js実行",unicodeValue);
  }



  function openKanji(theUnicode) {
    // const nwin = window.open('kanji.html', '_blank');


    // const nwin = window.open('kanji.html?unicode=' + theUnicode, '_blank');

    const nwin = document.querySelectorAll('*') ;

     console.log("nwin",nwin);

    kanjiShugo = JSON.parse(localStorage.getItem('kanjiLocal'));

    //kanjiShugoのなかで、tKanjiと合致するものを選ぶ
    for (let i = 0; i < kanjiShugo.length; i++) {
      if (kanjiShugo[i].unicode === theUnicode) {
        targetKanji = i;
        sessionStorage.setItem('checkKanji', targetKanji); //セッション内にtargetKanjiを保存
        continue;
      }
    }

    let theKanji = kanjiShugo[targetKanji];
    nwin.onload = () => {
      //親字の情報を入れる
      let title = nwin.document.querySelector('#title_');
      title.textContent = theKanji.midashi;

      let jishu = nwin.document.querySelector('#jishu_');
      jishu.textContent = theKanji.jishu;

      let midashi = nwin.document.querySelector('#midashi_');
      midashi.textContent = theKanji.midashi;

      let midashi2 = nwin.document.querySelector('#midashi2_');
      midashi2.textContent = theKanji.midashi;

      let midashi3 = nwin.document.querySelector('#midashi3_');
      midashi3.textContent = theKanji.midashi;

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
      raireki.innerHTML = theKanji.raireki;

      let tsukaiwake = nwin.document.querySelector('#tsukaiwake_');
      tsukaiwake.innerHTML = theKanji.tsukaiwake;

      let sanko = nwin.document.querySelector('#sanko_');
      sanko.textContent = theKanji.sanko;

      // let tsukaiwakeEdit = nwin.document.querySelector('#tsukaiwakeEdit_');
      // tsukaiwakeEdit.innerHTML = theKanji.tsukaiwake;

      // let theTargetKanji = nwin.document.querySelector('#theTargetKanji');
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
        const kanjigun = nwin.document.getElementById('kanjigun_');
        const newSection = document.createElement('section');
        newSection.className = "itaiji";
        newSection.textContent = i + 1;

        const newDiv1 = document.createElement('span');
        newDiv1.className = "jishu";
        newDiv1.textContent = theItaiji.jishu;



        const newDiv2 = document.createElement('div');
        newDiv2.setAttribute('src', theItaiji.jikei);
        let jikeiContent = `<img  src="${theItaiji.jikei}" width="80">`
        // let jikeiContent = `画像データ<br><img  src="${theItaiji.jikei}" width="60">`
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

        // const newDiv2 = document.createElement('div');
        // newDiv2.className = "midashi";
        // newDiv2.textContent = theItaiji.midashi;

        // const newDiv3 = document.createElement('div');
        // newDiv3.setAttribute('src', theItaiji.jikei);
        // let jikeiContent = `画像データ<br><img  src="${theItaiji.jikei}" width="60">`
        // newDiv3.innerHTML = jikeiContent;
        // newDiv3.className = "jikei";

        const newDiv4 = document.createElement('div');
        newDiv4.className = "youso";

        const newDiv5 = document.createElement('div');
        newDiv5.className = "mojigun";
        newDiv5.textContent = theItaiji.mojigun;

        const newDiv6 = document.createElement('div');
        newDiv6.className = "jislevel";
        newDiv6.textContent = theItaiji.jislevel;

        const newDiv7 = document.createElement('div');
        newDiv7.className = "unicode";
        newDiv7.textContent = theItaiji.unicode;

        if (theItaiji.unicode.length > 8) {
          newDiv7.classList.add("narrow");
        }


        const newDiv8 = document.createElement('div');
        newDiv8.className = "menkuten";
        newDiv8.textContent = theItaiji.menkuten;

        const newDiv9 = document.createElement('div');
        newDiv9.className = "jiscode";
        newDiv9.textContent = theItaiji.jiscode;

        const newDiv10 = document.createElement('div');
        newDiv10.className = "chuui";
        newDiv10.textContent = theItaiji.chuui;

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
        newSection.appendChild(newDiv4);

        kanjigun.appendChild(newSection);
      }
    };
  }
}