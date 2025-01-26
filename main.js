`use strict`;
{
  let targetKanji = 0;
  let jtarget = 0;
  let kariItaiji = [];
  let oldQuery = "";
  let queryNo = 0;
  let kanjiShugo = JSON.parse(localStorage.getItem('kanjiLocal'));
  sessionStorage.setItem('checkKanji', 0); 

  window.onload = function () {
    if (!kanjiShugo) {
      getJson();
    }
  }

  document.querySelector('#getJson').addEventListener('click', () => {
    getJson();
  });

  //JSON読み込み
  function getJson() {
    fetch('kanjiFile.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error! status: ' + response.status);
        }
        return response.json();
      })
      .then(kanjiFile => {
        kanjiShugo = kanjiFile;
        // console.log("kanjiShugo", kanjiShugo);
        localStorage.setItem('kanjiLocal', JSON.stringify(kanjiFile));
      })
      .catch(error => console.error('Error loading JSON:', error));
  }

  //List.js対応
  // const options = {
  //   valueNames: [
  //     'menkuten',
  //     'unicode',
  //     'jitai1',
  //     'jishu',
  //     'yomi',
  //     'jitai2',
  //     'jitai3',
  //     'jitai4'
  //   ],
  // };
  // const searchList = new FileList('maintableid', options);


  //大漢字表を作成する
  setTimeout(() => {
    const kanjiHyo = document.querySelector('#kanjiHyo');
    for (let i = 0; i < kanjiShugo.length; i++) {
      if (kanjiShugo[i].junOfJitai < 2) {
        const kanjiRow = document.createElement('tr');
        kanjiRow.className = "kanji";
        kanjiRow.id = kanjiShugo[i].unicode;

        const kanjiMenkuten = document.createElement('td');
        kanjiMenkuten.className = "menkuten_";
        kanjiMenkuten.textContent = kanjiShugo[i].menkuten;

        const kanjiUnicode = document.createElement('td');
        kanjiUnicode.className = "unicode_";
        kanjiUnicode.textContent = kanjiShugo[i].unicode;

        const kanjiMidashi = document.createElement('td');
        kanjiMidashi.className = "midashi_";
        kanjiMidashi.textContent = kanjiShugo[i].midashi;

        const kanjiMojigun = document.createElement('td');
        kanjiMojigun.className = "jishu_";
        kanjiMojigun.textContent = kanjiShugo[i].mojigun;

        const kanjiYomi = document.createElement('td');
        kanjiYomi.className = "yomi_";
        kanjiYomi.textContent = kanjiShugo[i].yomi;

        const kanjiJitai2 = document.createElement('td');
        kanjiJitai2.className = "jitai2_";
        kanjiJitai2.textContent = kanjiShugo[i].jitai2;

        const kanjiJitai3 = document.createElement('td');
        kanjiJitai3.className = "jitai3_";
        kanjiJitai3.textContent = kanjiShugo[i].jitai3;

        const kanjiJitai4 = document.createElement('td');
        kanjiJitai4.className = "jitai4_";
        kanjiJitai4.textContent = kanjiShugo[i].jitai4;

        const kanjiRyakusetsu = document.createElement('td');
        kanjiRyakusetsu.className = "ryakusetsu_";
        kanjiRyakusetsu.textContent = kanjiShugo[i].ryakusetsu;

        kanjiRow.appendChild(kanjiMenkuten);
        kanjiRow.appendChild(kanjiUnicode);
        kanjiRow.appendChild(kanjiMidashi);
        kanjiRow.appendChild(kanjiMojigun);
        kanjiRow.appendChild(kanjiYomi);
        kanjiRow.appendChild(kanjiJitai2);
        kanjiRow.appendChild(kanjiJitai3);
        kanjiRow.appendChild(kanjiJitai4);
        kanjiRow.appendChild(kanjiRyakusetsu);

        kanjiHyo.appendChild(kanjiRow);
      }
    }
    // console.log(kanjiHyo);
  }, 200); //1秒間タイマー


  //検索する
  document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    highlightText(query);
    if (oldQuery === query) {
      queryNo = queryNo + 1;
    } else {
      oldQuery = query;
      queryNo = 0;
    }
    gotoHighlight(queryNo);
  });

  function highlightText(query) {
    document.querySelectorAll(".highlight").forEach(el => {
      el.classList.remove("highlight");
    });
    if (!query) return;// キーワードが空なら何もしない
    const regex = new RegExp(`(${query})`, "gi"); // 検索キーワードを正規表現化
    //body内のツリー構造を探索し、テキストだけを取り出す
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let count = 0;
    let countmatch = 0;
    let currentNode = walker.nextNode(); // 最初のノードを取得
    // while (walker.nextNode()) {
    while (currentNode) {
      // const node = walker.currentNode;
      const node = currentNode; //現在のノードを保存
      currentNode = walker.nextNode(); //探索を続ける
      if (node.nodeValue.match(regex)) {
        const span = document.createElement("span");
        span.innerHTML = node.nodeValue.replace(regex, `<span class="highlight">$1</span>`);
        node.parentNode.replaceChild(span, node);
        countmatch = countmatch + 1;
      }
      count = count + 1;
    }
  }

  function gotoHighlight(queryNo) {
    const highlightsAll = document.querySelectorAll(".highlight");
    if (highlightsAll.length > 0) {
      if (highlightsAll.length > queryNo) {
        highlightsAll[queryNo].scrollIntoView({ behavior: "instant", block: "center" });
      }
    }
  }


  // 解説へ
  document.querySelector('#toKaisetsu').addEventListener('click', () => {
    window.location.href = 'kaisetsu.html';
  });


  // 各文字の説明へ
  const tableClick = document.getElementById('maintableid');
  tableClick.addEventListener('click', (event) => {
    // クリックされた要素が .kanji クラスを持つか確認
    const clickedElement = event.target.closest('.kanji');
    if (clickedElement) {
      openKanji(clickedElement.id);
    }
  });

  function openKanji(theUnicode) {
    const nwin = window.open('kanji.html', '_blank');
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

      let tsukaiwakeEdit = nwin.document.querySelector('#tsukaiwakeEdit_');
      tsukaiwakeEdit.innerHTML = theKanji.tsukaiwake;

      let theTargetKanji = nwin.document.querySelector('#theTargetKanji');
      theTargetKanji.textContent = targetKanji;

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
        newDiv2.className = "midashi";
        newDiv2.textContent = theItaiji.midashi;

        const newDiv3 = document.createElement('div');
        newDiv3.setAttribute('src', theItaiji.jikei);
        let jikeiContent = `画像データ<br><img  src="${theItaiji.jikei}" width="60">`
        newDiv3.innerHTML = jikeiContent;
        newDiv3.className = "jikei";

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