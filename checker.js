`use strict`;

{
  // 異体字リスト1  標準字（単独コード）・異体字（単独コード）の順で並ぶ

  const checkString1 = '亜亞悪惡圧壓囲圍為爲医醫壱壹逸逸稲稻飲飮陰隂隠隱羽羽閏閠営營栄榮穎頴衛衞鋭銳益益駅驛悦悅謁謁閲閱円圓園薗煙烟縁緣艶艷塩鹽奥奧応應横橫欧歐殴毆黄黃温溫穏穩仮假価價禍禍画畫会會回囘回囬壊壞悔悔懐懷海海絵繪崖崕慨慨概槪拡擴殻殼覚覺学學岳嶽楽樂潟泻喝喝渇渴褐褐刈苅勧勸巻卷寛寬歓歡漢漢澗㵎缶罐観觀関關陥陷館館館舘岸㟁巌巖顔顏喜㐂器器既既既旣帰歸気氣祈祈亀龜偽僞戯戲犠犧糾糺旧舊拠據挙擧虚虛京亰峡峽挟挾教敎狭狹郷鄕響響尭堯暁曉勤勤謹謹区區駆駈駆驅勲勳薫薰径徑恵惠掲揭渓溪渓谿経經継繼茎莖荊荆蛍螢軽輕鶏鷄芸藝撃擊欠缺倹儉剣劍剣劔剣劒剣剱剣釼圏圈検檢権權献獻研硏県縣険險顕顯験驗厳嚴戸戶呉吳娯娛効效広廣恒恆昂昻晃晄紘綋鉱鑛鉱磺高髙号號轟軣告吿国圀国國穀穀黒黑歳歲済濟砕碎斎齋剤劑崎﨑柵栅桜櫻冊册殺殺雑雜参參惨慘桟棧産產蚕蠶賛贊残殘祉祉糸絲視視飼飼歯齒児兒爾尓辞辭湿濕実實舎舍写寫煮煮社社者者釈釋寿壽収收秋穐臭臭讐讎従從渋澁渋澀獣獸縦縱祝祝粛肅処處暑暑渚渚緒緖署署諸諸叙敍升舛奨奬将將尚尙渉涉焼燒祥祥称稱証證乗乘剰剩壌壤嬢孃条條浄淨状狀畳疊穣穰譲讓醸釀嘱囑触觸寝寢慎愼晋晉真眞神神尽盡図圖粋粹酔醉随隨髄髓数數枢樞杉椙杉杦世卋瀬瀨晴晴清淸精精声聲青靑静靜斉齊税稅摂攝窃竊節節説說絶絕専專戦戰浅淺潜潛繊纖船舩践踐銭錢禅禪曽曾祖祖鼠鼡僧僧双雙壮壯層層捜搜挿插挿揷巣巢争爭痩瘦総總聡聰荘莊装裝騒騷増增憎憎臓臟蔵藏贈贈即卽属屬続續卒卆村邨堕墮体體対對帯帶滞滯台臺第㐧滝瀧択擇沢澤琢琢鐸鈬脱脫単單嘆嘆担擔胆膽団團弾彈断斷痴癡遅遲昼晝虫蟲鋳鑄瀦潴猪猪著著庁廳徴徵懲懲聴聽勅敕鎮鎭塚塚禎禎逓遞鉄銕鉄鐵鉄鐡転轉点點伝傳兎兔都都党黨島嶋島嶌盗盜灯燈当當闘鬪闘鬭同仝徳德独獨読讀突突届屆内內縄繩難難弐貳肉宍禰祢悩惱脳腦覇霸廃廢拝拜杯盃梅梅梅楳売賣麦麥発發髪髮抜拔繁繁飯飯晩晚蛮蠻卑卑碑碑秘祕彦彥姫姬氷冰浜濱賓賓頻頻敏敏瓶甁富冨侮侮風凮福福淵渕払拂仏佛併倂塀塀並竝変變辺邊辺邉勉勉弁辨弁辧弁瓣弁辯舗舖歩步穂穗宝寶峰峯萌萠褒襃豊豐墨墨没沒翻飜毎每槙槇万萬満滿婿聟婿壻免免麺麵黙默餅餠戻戾野埜弥彌薬藥訳譯靖靖祐祐予豫余餘与與誉譽揺搖様樣謡謠遥遙来來頼賴乱亂欄欄蘭蘭覧覽隆隆竜龍虜虜両兩涼凉猟獵糧粮遼遼緑綠塁壘涙泪涙淚類類励勵礼禮霊靈齢齡暦曆歴歷恋戀練練蓮蓮錬鍊炉爐労勞廊廊朗朗楼樓郎郞禄祿録錄亘亙湾灣儘侭喩喻埒埓壺壷彎弯彙彚懺懴拿拏攪撹曠昿枡桝檜桧檮梼櫟檪欅﨔鬱欝濤涛灌潅滲渗濾沪瑶瑤疇畴稟禀竈竃竈灶竈䆴箋䇳箏筝籠篭藪薮蘆芦蠣蛎蠅蝿諫諌賤賎邇迩鉤鈎靱靭頸頚頽頹鰺鯵鶯鴬凜凛熙煕俠侠俱倶剝剥吞呑啞唖噓嘘嚙噛囊嚢塡填姸妍屛屏屢屡幷并搔掻摑掴攢攅潑溌瀆涜焰焔禱祷簞箪繡繍繫繋萊莱蔣蒋﨟臈蟬蝉蠟蝋軀躯醬醤醱醗頰頬顚顛驒騨鷗鴎鹼鹸麴麹'



  // 異体字リスト2 標準字（単独コード）・異体字（サロゲートペア）の順で並ぶ
  const checkString2 = '煙𤇆芽芽吉𠮷橋𣘺稽𥡴隙𨻶剣𠝏眞眞巽巽兎兔曜𫞂卉卉竈𥧄鋏𨦇饒𩜙';


 let inputText = [];

  let countString1 = new Array(checkString1.length);
  let countString2 = new Array(checkString2.length);
  let checkIvsItaiji = [];
  let checkIvsKitei = [];
  let countIvsItaiji = [];
  let countIvsKitei = [];
  let countShikaruJ;
  let countShikaruI;
  let newItaijiAri = 0;
  let surIvsCount = 0;
  let checkSIKitei = [];
  let checkSIItaiji = [];
  let countSIKitei = [];
  let countSIItaiji = [];

  document.getElementById('input').focus();

  let elementChukiTable = document.getElementById('chukiTable');
  elementChukiTable.style.display = 'none';

  //リアルタイムで変換する
  let tid;
  delay = 500;
  document.querySelector('#input').addEventListener('input', function () {
    tid && clearTimeout(tid);

    //カーソルをwaitに変更
    document.body.style.cursor = 'wait';
    document.querySelector('#input').style.cursor = 'wait';
    tid = setTimeout(checkCharacter, delay);

  });

  // チェックボタン押下の処理
  function checkCharacter() {
    // const inputText = document.querySelector('#input').value;
        inputText = document.querySelector('#input').value;
    const outputText = document.querySelector('#output');
    const chuukiText = document.querySelector('#chuuki');
    outputText.textContent = "";
    chuukiText.textContent = "";

    countString1.fill(0);
    countString2.fill(0);

    let bushu = 0;

    checkIvsItaiji = [];
    checkIvsKitei = [];
    countIvsItaiji = [];
    countIvsKitei = [];
    countShikaruJ = 0;
    countShikaruI = 0;
    newItaijiAri = 0;

    surIvsCount = 0;
    checkSIKitei = [];
    checkSIItaiji = [];
    countSIKitei = [];
    countSIItaiji = [];

    let cText = "";


    // let timeGenerate = 0;
    // let timeDOM = 0;

    //Safariでの実行速度向上のため、fragmentを使用
    const fragment = document.createDocumentFragment();

    // const startTime = performance.now();

    // ★以下、全文をチェックするループ
    for (let i = 0; i < inputText.length; i++) {
      let c = inputText[i];
      let d = inputText[i + 1];
      let e = inputText[i + 2];
      let klass = [];
      c = cText + c;


      //改行処理
      if (c === "\n") {
        if (d !== "\n") {
          const br = document.createElement('br');
          fragment.appendChild(br);

        }
        continue;
      }

      //漢字or非漢字
      if (isKanji(c)) { //漢字の処理
        // サロゲートペア文字の対応
        if (isSurrogatePair(c)) {

          // // 「𠮟」の対応
          // if (c + d === "𠮟") {
          //   countShikaruJ = countShikaruJ + 1;
          //   c = c + d;
          //   i++;
          //   klass.push("surro");
          //   generate(c, klass);
          //   cText = "";
          //   continue;
          // }

          // //リスト内のサロゲートペア
          // const checkindex2cd = checkString2.indexOf(c + d);
          // if (checkindex2cd % 3 === 1) {  //checkString2内の奇数番目＝異体字
          //   countString2[checkindex2cd]++;
          //   let hyojun = checkString2[checkindex2cd - 1];
          //   hyojun = tankanjiCheck(hyojun);
          //   c = "<span class=\"itaiji surro\">" + c + d + "</span>[=" + hyojun + "] ";
          //   i++;
          //   const template = document.createElement('template');
          //   template.innerHTML = c;
          //   fragment.appendChild(template.content);


          //   cText = "";
          //   continue;
          // }

          // //リスト外のサロゲートペア…カウントせず
          // let f = inputText[i + 3];
          // if (isItaijiSelector(e)) {  //サロゲートペア＋異体字セレクタ
          //   checkSIKitei[surIvsCount] = c + d;
          //   checkSIItaiji[surIvsCount] = c + d + e + f
          //   surIvsCount++;
          //   c = "<span class=\"itaiji surroivs\">" + c + d + e + f + "</span>[=<span class=\"surro\">" + c + d + "</span>] ";
          //   i = i + 3;
          //   const template = document.createElement('template');
          //   template.innerHTML = c;
          //   fragment.appendChild(template.content);
          //   cText = "";
          //   continue;

          // } else { //サロゲートペアのみ
          //   c = "<span class=\"surro\">" + c + d + "</span>";
          //   i = i + 1;
          //   const template = document.createElement('template');
          //   template.innerHTML = c;
          //   fragment.appendChild(template.content);
          //   cText = "";
          //   continue;
          // }
          // // サロゲートペア文字の対応、終了


          //サロゲートペア…カウントする
          let f = inputText[i + 3];
          if (isItaijiSelector(e)) {  //サロゲートペア＋異体字セレクタ
            const checkit = checkSIItaiji.indexOf(c + d + e + f);

            if (checkit > -1) {  //既出のサロ+IVS
              countSIItaiji[checkit]++;

            } else {     //初出のサロ+IVS
              checkSIItaiji.push(c + d + e + f);
              checkSIKitei.push(c + d);
              countSIItaiji.push(1);
              countSIKitei.push(0);
            }

            surIvsCount++;


            c = "<span class=\"itaiji surroivs\">" + c + d + e + f + "</span>[=" + surroCheck(c + d) + "] ";

            i = i + 3;
            const template = document.createElement('template');
            template.innerHTML = c;
            fragment.appendChild(template.content);
            cText = "";
            continue;

          } else { //サロゲートペアのみ


            // 「𠮟」の対応
            if (c + d === "𠮟") {
              countShikaruJ++;
              c = c + d;
              i++;
              klass.push("surro");
              generate(c, klass);
              cText = "";
              continue;
            }

            //リスト内のサロゲートペア
            const checkindex2cd = checkString2.indexOf(c + d);
            if (checkindex2cd % 3 === 1) {  //checkString2内の奇数番目＝異体字
              countString2[checkindex2cd]++;
              let hyojun = checkString2[checkindex2cd - 1];
              hyojun = tankanjiCheck(hyojun);
              c = "<span class=\"itaiji surro\">" + c + d + "</span>[=" + hyojun + "] ";
              i++;
              const template = document.createElement('template');
              template.innerHTML = c;
              fragment.appendChild(template.content);


              cText = "";
              continue;
            }


            c = "<span class=\"surro\">" + c + d + "</span>";
            i = i + 1;
            const template = document.createElement('template');
            template.innerHTML = c;
            fragment.appendChild(template.content);
            cText = "";
            continue;
          }
          // サロゲートペア文字の対応、終了





        } else {
          //異体字セレクタの対応
          if (isItaijiSelector(d)) {

            newItaijiAri = 1;  //異体字セレクタの文字数カウント
            const checkit = checkIvsItaiji.indexOf(c + d + e);

            if (checkit > -1) {   //既出の異体字セレクタ
              countIvsItaiji[checkit]++;

            } else {    //初出の異体字セレクタ
              checkIvsItaiji.push(c + d + e);
              checkIvsKitei.push(c);
              countIvsItaiji.push(1);
              countIvsKitei.push(0);
            }


            const hyojun = tankanjiCheck(c)
            c = "<span class=\"itaiji ivs\">" + c + d + e + "</span>[=" + hyojun + "] ";
            i = i + 2;
            const template = document.createElement('template');
            template.innerHTML = c;
            fragment.appendChild(template.content);
            cText = "";
            continue;
            //異体字セレクタの対応、終了


          } else { //単体コードの対応
            // 「叱」の対応
            if (c === "叱") {
              countShikaruI++;
              c = "<span class=\"itaiji\">叱</span>[=𠮟] ";
              const template = document.createElement('template');
              template.innerHTML = c;
              fragment.appendChild(template.content);
              cText = "";
              continue;
            }

            //サロゲートペアリストの頻度計算
            const checkindex2c = checkString2.indexOf(c);
            if (checkindex2c % 3 === 0) {  //checkString2内の偶数番目＝標準字
              countString2[checkindex2c]++;
            }


            //CJK部首補助・康熙部首のチェック
            if (cjkhojoBushu(c) || kokiBushu(c)) {
              bushu = bushu + 1;
              c = "<span class=\"itaiji\">" + c + "</span>" + "[←部首] ";
              const template = document.createElement('template');
              template.innerHTML = c;
              fragment.appendChild(template.content);
              cText = "";
              continue;
            }

            //異体字のチェック
            const checkindex1 = checkString1.indexOf(c);
            if (checkindex1 > -1) {
              countString1[checkindex1]++;
              if (checkindex1 % 2 === 1) {   //checkString1内の奇数番目＝異体字
                let hyojun = checkString1[checkindex1 - 1];
                c = "<span class=\"itaiji\">" + c + "</span>" + "[=" + hyojun + "] ";
                // let t = performance.now();
                const template = document.createElement('template');
                template.innerHTML = c;
                fragment.appendChild(template.content);
                // timeDOM += performance.now() - t;
                cText = "";
                continue;
              } else {
                generate(c, klass);
                cText = "";
                continue;
              }
            } else {
              generate(c, klass);
              cText = "";
              continue;
            }

          } //単体コードの処理、終了
        }  //漢字の処理、終了


      } else { //漢字以外の処理
        if (isKanji(d) || i === inputText.length - 1 || d === "\n") {  //可能ならまとめて処理
          // let t = performance.now();
          generate(c, klass);
          // timeGenerate += performance.now() - t;
          cText = "";
          continue;
        } else {
          cText = c;
          continue;
        }
      }  //漢字以外の処理、終了

    }
    // ループ終わり





    //部首の文字コード混入の場合に注記を入れる
    if (bushu > 0) {
      chuukiText.insertAdjacentHTML('afterbegin', "【注意】テキスト中に漢字の部首のコードが" + bushu + "字検出されました。<hr>");
    }

    //異体字セレクタがあった際、基底文字をカウントする
    if (newItaijiAri > 0) {
      for (let i = 0; i < inputText.length; i++) {
        let c = inputText[i];
        let d = inputText[i + 1];

        const checkit = checkIvsKitei.indexOf(c);
        if (checkit > -1 && !(isItaijiSelector(d))) {
          countIvsKitei[checkit]++;
        }
      }
    }


    //サロゲートペア+異体字セレクタがあった際、基底文字をカウントする
    if (surIvsCount > 0) {
      for (let i = 0; i < inputText.length; i++) {
        let c = inputText[i];
        let d = inputText[i + 1];
        let e = inputText[i + 2];

        // let checkit = checkSIItaiji.indexOf(c + d);
        let textcheckSIItaiji = checkSIItaiji.join("");
        const checkit = textcheckSIItaiji.indexOf(c + d)/4;

        if (checkit > -1 && !(isItaijiSelector(e))) { ;
          countSIKitei[checkit]++;
        }
      }
    }




    //カーソルを戻す
    document.body.style.cursor = 'default';
    document.querySelector('#input').style.cursor = 'default';

    //const endTime = performance.now();
    //console.log(`ループの実行時間: ${endTime - startTime} ミリ秒`);
    //console.log("generate:", timeGenerate);
    //console.log("DOM:", timeDOM);

    //HTML生成…文字から
    function generate(text, klass) {
      let spanElement = document.createElement("span");
      spanElement.textContent = text;
      let classList = klass.join(" ");
      if (classList) {
        spanElement.className = classList;
      }
      fragment.appendChild(spanElement);
    }

    //最終生成
    outputText.appendChild(fragment);
    // console.log("最終生成html", outputText);

    listup.style.display = 'block';


  // //テキストから検出回数を返す
  // function countWord(word) {
  //   let count = 0;
  //   let pos = 0;
  //   while ((pos = inputText.indexOf(word, pos)) !== -1) {
  //     count++;
  //     pos += word.length;
  //   }
  //   return count;
  // }


// console.log("checkIvsItaiji",checkIvsItaiji);
// console.log("checkSIItaiji",checkSIItaiji);

  } //funchtion checkCharacter() 終わり





  //以下、文字チェック関数の定義
  //漢字の判定
  function isKanji(c) {
    return /^[\u2E80-\u2EF3\u2F00-\u2FD5\u3400-\u9FFF\uD800-\uDFFF\uF900-\uFAEF]$/.test(c);
  }

  //サロゲートペアをチェック
  function isSurrogatePair(c) {
    return /^[\uD800-\uDBFF]$/.test(c);
  }

  //異体字セレクタをチェック
  function isItaijiSelector(c) {
    return /^[\uFE00-\uFE0F\uDB40]$/.test(c);
  }

  //CJK部首補助のチェック
  function cjkhojoBushu(c) {
    return /^[\u2E80-\u2EFF]$/.test(c);
  }

  //康熙部首のチェック
  function kokiBushu(c) {
    return /^[\u2F00-\u2FDF]$/.test(c);
  }

  //単漢字の異体字を調べ、親字を返す
  function tankanjiCheck(c) {
    const checkit = checkString1.indexOf(c);
    if (checkit > -1 && checkit % 2 === 1) {   //checkString1内の奇数番目＝異体字
      const hyojun = checkString1[checkit - 1];
      c = "<span class=\"itaiji\">" + c + "</span>" + "[=" + hyojun + "] ";
    }
    return c;
  }


  //サロゲートペアの異体字を調べ、親字を返す
  function surroCheck(c) {
    const checkit = checkString2.indexOf(c);
    if (checkit > -1 && checkit % 3 === 1) {
      const hyojun = checkString2[checkit - 1];
      c = "<span class=\"surro itaiji\">" + c + "</span>" + "[=" + hyojun + "] ";
    } else {
      c = "<span class=\"surro\">" + c + "</span>";
    }
    return c;
  }


  //テキストから検出回数を返す
  function countWord(word) {
    let count = 0;
    let pos = 0;
    while ((pos = inputText.indexOf(word, pos)) !== -1) {
      count++;
      pos += word.length;
    }
    return count;
  }




  // クリアボタン押下の処理
  document.querySelector('#clearButton').addEventListener('click', () => {
    document.getElementById('input').value = "";
    location.reload();
  });


  // プリントボタン押下の処理
  //   document.querySelector('#printButton').addEventListener('click', printLists);
  //   function printLists() {
  //     const target = document.getElementById("Lists");

  //     //Blobでプリント図像を作成
  //     const css = `
  //     body { margin: 20px; }
  //     table {
  //     border-collapse: collapse;
  //     margin: 0 2em;
  //     font-family: "YuMincho", "游明朝", "Hiragino Mincho ProN", serif;
  //     font-size: 100%;
  //     font-weight: normal;
  //     }

  //     table th {
  //     border: solid 1px;
  //     font-weight: normal;
  //     }

  //     table td {
  //     font-weight: normal;
  //     border: solid 1px;
  //     margin: 2em;
  //     }

  //     td:nth-of-type(1) {
  //     background: rgb(188, 233, 248);
  //     width: 140px;
  //     font-size: 24px;
  //     text-align: center;
  //     }

  //     td:nth-of-type(2) {
  //     background: rgb(188, 233, 248);
  //     width: 60px;
  //     text-align: center;
  //     }

  //     td:nth-of-type(3) {
  //     background: rgba(255, 192, 203, 0.678);
  //     width: 140px;
  //     font-size: 24px;
  //     text-align: center;
  //     }

  //     td:nth-of-type(4) {
  //     background: rgba(255, 192, 203, 0.678);
  //     width: 60px;
  //     text-align: center;
  //     }

  //     td:nth-of-type(5) {
  //   width: auto;
  //   font-size: 12px;
  // }

  //     [data-color-scheme="greenyellow"] td:nth-of-type(1) {
  //     background: rgb(200, 255, 170);
  //     }

  //     [data-color-scheme="greenyellow"] td:nth-of-type(2) {
  //     background: rgb(200, 255, 170);
  //     }
  //    `;

  //     const html = `<!DOCTYPE html><html lang="ja"><head>
  //         <meta charset="UTF-8">
  //         <style>${css}</style>
  //         </head><body>
  //         <p>字体ごとの出現数リスト</p>
  //         ${target.outerHTML}
  //         </body></html>`;

  //     const blob = new Blob([html], { type: 'text/html' });
  //     const url = URL.createObjectURL(blob);
  //     const printWindow = window.open(url, "PrintWindow", "width=900,height=700");

  //     printWindow.onload = () => {
  //       printWindow.focus();
  //       printWindow.print();
  //       setTimeout(() => {
  //         printWindow.close();
  //         URL.revokeObjectURL(url);
  //       }, 300);
  //     }

  //   }





  //表を表示する
  document.querySelector('#listup').addEventListener('click', () => {
    const allList = document.getElementById("letterList");
    const allTable = document.createElement("table");
    const alltbody = document.createElement("tbody");
    const alltr1 = document.createElement("tr");
    const alltr2 = document.createElement("tr");
    const allth1 = document.createElement("th");
    const allth2 = document.createElement("th");
    const allth3 = document.createElement("th");
    const allth4 = document.createElement("th");
    const alltd1 = document.createElement("td");
    const alltd2 = document.createElement("td");
    const alltd3 = document.createElement("td");
    const alltd4 = document.createElement("td");



    allList.textContent = "";
    allTable.textContent = "";
    allth1.textContent = "　標準的な字体　";
    allth2.textContent = "検出数";
    allth3.textContent = "異体字など";
    allth4.textContent = "検出数";
    // allth5.textContent = "字体選びのヒント";

    alltr1.appendChild(allth1);
    alltr1.appendChild(allth2);
    alltr1.appendChild(allth3);
    alltr1.appendChild(allth4);
    // alltr1.appendChild(allth5);

    alltbody.appendChild(alltr1);
    allTable.appendChild(alltbody);
    allList.appendChild(allTable);


    allTable.id = 'wordTable';


    //𠮟と叱の対応
    if (countShikaruJ + countShikaruI > 0) {
      alltd1.textContent = "𠮟";
      alltd2.textContent = countShikaruJ;
      alltd3.textContent = "叱";
      alltd4.textContent = countShikaruI;

      alltr2.appendChild(alltd1);
      alltr2.appendChild(alltd2);
      alltr2.appendChild(alltd3);
      alltr2.appendChild(alltd4);

      alltbody.appendChild(alltr2);
      allTable.appendChild(alltbody);
    }

    //2行目以降を入れる
    for (let i = 0; i < checkString1.length; i = i + 2) {
      // if (countString1.at(i) + countString1.at(i + 1) > 0) {
      if (countString1.at(i + 1) > 0) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");
        // const cellText5 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkString1.at(i);
        row.appendChild(cellText1);

        //第2列
        cellText2.innerHTML = countString1.at(i);
        row.appendChild(cellText2);

        //第3列
        cellText3.innerHTML = checkString1.at(i + 1);
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countString1.at(i + 1);
        row.appendChild(cellText4);


        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //サロゲートペア対応
    for (let i = 0; i < checkString2.length; i = i + 3) {
      // if (countString2.at(i) + countString2.at(i + 1) > 0) {
      if (countString2.at(i + 1) > 0) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");
        // const cellText5 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkString2.at(i);
        row.appendChild(cellText1);

        //第2列
        cellText2.innerHTML = countString2.at(i);
        row.appendChild(cellText2);

        //第3列
        let salomoji = checkString2.substring(i + 1, i + 3);
        cellText3.innerHTML = salomoji;
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countString2.at(i + 1);
        row.appendChild(cellText4);

        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //異体字セレクタ対応
    for (let i = 0; i < checkIvsItaiji.length; i++) {
      const row = document.createElement("tr");
      const cellText1 = document.createElement("td");
      const cellText2 = document.createElement("td");
      const cellText3 = document.createElement("td");
      const cellText4 = document.createElement("td");
      // const cellText5 = document.createElement("td");

      //第1列
      cellText1.innerHTML = checkIvsKitei.at(i);
      row.appendChild(cellText1);

      //第2列
      cellText2.innerHTML = countIvsKitei.at(i);
      row.appendChild(cellText2);

      //第3列
      cellText3.innerHTML = checkIvsItaiji.at(i);
      row.appendChild(cellText3);

      //第4列
      cellText4.innerHTML = countIvsItaiji.at(i);
      row.appendChild(cellText4);


      alltbody.appendChild(row);
      allTable.appendChild(alltbody);
    }


    //サロゲートペア+IVSがあった際
    if (surIvsCount > 0) {
      nOfSurIvs = checkSIItaiji.length;
      for (let i = 0; i < nOfSurIvs; i++) {
        const row = document.createElement("tr");
        const cellText1 = document.createElement("td");
        const cellText2 = document.createElement("td");
        const cellText3 = document.createElement("td");
        const cellText4 = document.createElement("td");
        // const cellText5 = document.createElement("td");

        //第1列
        cellText1.innerHTML = checkSIKitei.at(i);
        row.appendChild(cellText1);

        //第2列
        // theCount = countWord(checkSIKitei.at(i))-countSIItaiji.at(i);
        // cellText2.innerHTML = theCount;
        cellText2.innerHTML = countSIKitei.at(i);
        row.appendChild(cellText2);

        //第3列
        cellText3.innerHTML = checkSIItaiji.at(i);
        row.appendChild(cellText3);

        //第4列
        cellText4.innerHTML = countSIItaiji.at(i);
        row.appendChild(cellText4);


        alltbody.appendChild(row);
        allTable.appendChild(alltbody);
      }
    }

    //並べ替え 第1列でソートする
    firstsortRows();

    // display: noneを削除
    let elementEndOfTable = document.getElementById('endOfTable');
    let elementChukiTable = document.getElementById('chukiTable');
    elementEndOfTable.style.display = 'block';
    elementChukiTable.style.display = 'block';
  });




  //ソート
  function firstsortRows() {
    const table = document.getElementById("wordTable");
    const records = [];
    for (let i = 1; i < table.rows.length; i++) {
      const record = {};
      record.row = table.rows[i];
      record.key = table.rows[i].cells[0].textContent;
      records.push(record);
    }

    records.sort(compareKeys);

    for (let i = 0; i < records.length; i++) {
      table.appendChild(records[i].row);
    }
  }

  function compareKeys(a, b) {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  }





  //アコーディオンメニュー
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelectorAll('.js-accordion-title');

    for (let i = 0; i < title.length; i++) {
      let titleEach = title[i];
      let content = titleEach.nextElementSibling;
      titleEach.addEventListener('click', () => {
        titleEach.classList.toggle('is-active');
        content.classList.toggle('is-open');
      });
    }
  });




  // 字典へ
  document.querySelector('#toJiten').addEventListener('click', () => {
    const url = 'index.html';
    window.open(url, '_blank');
  });


  // 解説へ
  document.querySelector('#toKaisetsu').addEventListener('click', () => {
    const url = 'kaisetsu.html';
    window.open(url, '_blank');
  });

  //用語説明へ
  document.querySelectorAll('.toInfo').forEach(element => {
    element.addEventListener('click', () => {
      hideAllInformation();
      const information = element.nextElementSibling;
      information.style.display = "inline-block";
    });
  });

  function hideAllInformation() {
    document.querySelectorAll('.information').forEach(info => {
      info.style.display = "none";
    });
  }

  document.querySelectorAll('.information').forEach(element => {
    // document.querySelectorAll('.accordion_content').forEach(element => {
    element.addEventListener('click', hideAllInformation);
  });

}