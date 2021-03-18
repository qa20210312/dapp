const _locals = [{
    'name': 'English',
    'value': 'en'
},{
    'name': '中文',
    'value': 'zh_CN'
},{
    'name': '日本語',
    'value': 'japan'
},{
    'name': '한글',
    'value': 'korean'
},{
    'name': 'Deutsch, glaube ich.',
    'value': 'german'
},{
    'name': 'En français',
    'value': 'french'
}];

let lan = [];


// English
lan.push( {
    'sys': 'Language',
    'first_tip': 'This website uses cookies for the functions, analysis and advertising purposes described in our privacy policy. If you agree to use cookies, please continue to use our website.',
    'title': 'Klein create a financial myth in the field of smart contract, open, transparent and infinite cycle',
    'menu': ['How', 'TOP5 Day', 'Guide', 'TOP5 7Days'],
    'menu_detail':['How to join', '', 'Guide', ''],
    'part_1': {
        'title': 'Join',
        'cancel': 'Cancel',
        'join': 'Join',
        'edit':'Edit',
        'sponsor' : 'Start',
        'sponsor_info':'Please check recommender address',
        'sponsor_wait':'Please wait...',
        'cvip': 'CVIP',
        'cvip_detal': 'Become cvip',
        'to_be':'Be CVIP',
        'income':'Burning!'
    },
    'part_2': {
        'title': 'Data',
        'content': [{
            'title': 'Contract',
            'data': ['Address', 'Balance peak','Balance(TRX)', 'Recommendation Award', 'Recommendation Award 7Days','Total Address']
        },

            {
                'title': 'Insurance contract',
                'data': ['Insurance balance']
            },

            {
                'title': 'Person Data',
                'data': ['Recommender address',"Countdown", 'Amount', 'To be released', 'Released', 'Total released', 'Recommendation Num', 'To be released(Award)', 'CVIP num','Team num','Team amount']
            }
        ],
        'btns': ['Deposit', 'Withdraw', 'Copy Link','Release']
    },
    'success':'操作成功，请等待确认'
});

// 中文
lan.push( {
    'sys': '系统语言',
    'first_tip': '本网站将cookies用于我们隐私政策中所述的功能、分析和广告目的。如果您同意我们使用cookies，请继续使用我们的网站。',
    'title': '波场克莱因打造智能合约领域的金融神话公开透明无限循环',
    'menu': ['如何加入', '1天TOP5排行榜', '指南', '7天TOP5排行榜'],
    'menu_detail':['如何加入说明', '', '指南说明', 'DONATE说明'],
    'part_1': {
        'title': '加入',
        'cancel': '撤销',
        'join': '加入',
        'edit':'编辑',
        'sponsor' : '开始合约',
        'sponsor_info':'检查你的邀请者身份。',
        'sponsor_wait':'请稍后...',
        'cvip': 'CVIP',
        'cvip_detal': '成为cvip 获取更多收益',
        'to_be':'立即成为CVIP',
        'income':'收益已燃烧'
    },
    'part_2': {
        'title': '数据统计',
        'content': [{
            'title': '智能合约',
            'data': ['智能合约地址', '合约存款峰值','合约当前TRX', '日推荐奖TRX', '7日推荐奖TRX','总地址数']
        },

            {
                'title': '保险合约',
                'data': ['保险金TRX']
            },

            {
                'title': '个人统计信息',
                'data': ['推荐人地址',"释放倒计时", '总合约金额', '未释放收益', '已释放未提取金额', '总释放金额', '直推合约地址', '待释放奖励', '旗下cvip数量','团队人数','团队总金额']
            }
        ],
        'btns': ['复投', '提现', '复制邀请链接','释放']
    },
    'success':'操作成功'
});

// 日文
lan.push( {
    'sys': 'システム言語',
    'first_tip': '当ウェブサイトはcookiesを私達のプライバシーポリシーの中で述べた機能、分析と広告の目的に使用します。私達がcookiesを使うことに同意したら、引き続き私達のウェブサイトを使ってください。',
    'title': '波場クラインは知能契約分野の金融神話を構築し、透明無限ループを公開します。',
    'menu': ['加入する', '1日TOP5', 'ガイド', '7日TOP5'],
    'menu_detail':['どうやって説明しますか', '', 'マニュアル', 'DONATE説明'],
    'part_1': {
        'title': '加入する',
        'cancel': '取り消す',
        'join': '加入する',
        'edit':'編集',
        'sponsor' : '契約を開始する',
        'sponsor_info':'あなたの招待者の身元を確認します。。',
        'sponsor_wait':'ちょっと待ってください...',
        'cvip': 'CVIP',
        'cvip_detal': 'cvipになってより多くの収益を得る',
        'to_be':'すぐCVIPになります',
        'income':'収益が燃焼しました'
    },
    'part_2': {
        'title': 'データ統計',
        'content': [{
            'title': 'スマート契約',
            'data': ['知能契約の住所', '契約預金のピーク','契約現在TRX', '日推奨賞TRX', '7日の推薦賞TRX','総アドレス数']
        },

            {
                'title': '保険契約',
                'data': ['保険金TRX']
            },

            {
                'title': '個人統計情報',
                'data': ['推薦者住所',"リリースカウントダウン", '総契約金額', '未釈放益', '未抽出金額を釈放しました。', '総放出額', '契約の住所を直押しする', '未釈放の奨励', 'cvipの数量を傘下に置きます','团队人数','团队总金额']
            }
        ],
        'btns': ['返上', '現金で出す', 'リンクをコピーする','釈放']
    },
    'success':'操作が成功しました'
});

// 韩文
lan.push( {
    'sys': '체계 적 언어',
    'first_tip': '본 사 이 트 는 cookies 를 저희 프라이버시 정책 에 기 재 된 기능, 분석 과 광고 목적 에 사용 합 니 다.만약 에 귀하 가 저희 가 Cookies 를 사용 하 는 것 을 동의 하신 다 면 저희 사 이 트 를 계속 사용 하 십시오.',
    'title': '파장 클 라인 스마트 계약 분야 금융 신화 공개 투명 무한 순환',
    'menu': ['어떻게 가입 합 니까', '1 일 TOP 5 랭 킹', '지침', '7 일 TOP 5 랭 킹'],
    'menu_detail':['어떻게 설명 에 가입 합 니까', '', '지침 서 설명', 'DONATE 설명'],
    'part_1': {
        'title': '가입 하 다.',
        'cancel': '철회 하 다.',
        'join': '가입 하 다.',
        'edit':'편집 하 다.',
        'sponsor' : '계약 을 시작 하 다',
        'sponsor_info':'당신 의 초청 자의 신분 을 검사 하 세 요.',
        'sponsor_wait':'잠시 후...',
        'cvip': 'CVIP',
        'cvip_detal': 'cvip 가 되 어 더 많은 수익 을 얻 을 수 있 습 니 다.',
        'to_be':'즉시 CVIP 되 기',
        'income':'수익 이 이미 연소 하 였 습 니 다.'
    },
    'part_2': {
        'title': '데이터 통계',
        'content': [{
            'title': '지능 계약',
            'data': ['지능 계약 주소', '계약 예금 피크','계약 현재 TRX', '일 일 추천 상 TRX', '7 일 추천 상 TRX.','총 주소 수']
        },

            {
                'title': '보험 계약',
                'data': ['보험 금 TRX']
            },

            {
                'title': '개인 통계 정보',
                'data': ['추천인 주소',"방출 초읽기", '총 계약 금액', '미 방출 수익', '미 추출 금액 을 방출 하 였 습 니 다', '총 방출 금액', '직 추 계약 주소', '석방 대기 보상', '산하 cvip 수량','단체 인원수','단체 총 금액']
            }
        ],
        'btns': ['다시', '현금 을 인출 하 다.', '초대장 링크 복사','석방']
    },
    'success':'조작 이 성공 하 다'
});

// 德语
lan.push( {
    'sys': 'Sprache des Systems',
    'first_tip': 'Diese Website verwendet Cookies für die in unserer Datenschutzrichtlinie beschriebenen Funktionen, Analysen und Werbezwecke.Wenn Sie Cookies verwenden, nutzen Sie bitte unsere Website weiter.',
    'title': 'Wave field Klein schafft Finanzmythos im Bereich smart contract, open, transparent und unendlich',
    'menu': ['Wie man sich anschließt', 'Top 1-Tag 5', 'Anleitung', 'Top 5 7 Tage'],
    'menu_detail':['So fügen Sie eine Beschreibung hinzu', '', 'Anmerkungen zum Leitfaden', 'Beschreibung der Spende'],
    'part_1': {
        'title': 'Beitritt',
        'cancel': 'Widerruf',
        'join': 'Beitritt',
        'edit':'edit',
        'sponsor' : 'Vertrag starten',
        'sponsor_info':'Überprüfen Sie die Identität Ihrer Gäste.',
        'sponsor_wait':'Bitte warten Sie....',
        'cvip': 'CVIP',
        'cvip_detal': 'Werden Sie eine CVIP und erhalten Sie mehr Vorteile',
        'to_be':'Jetzt CVIP werden',
        'income':'Einnahmen verbrannt'
    },
    'part_2': {
        'title': 'Statistik der Daten',
        'content': [{
            'title': 'Kluger Vertrag',
            'data': ['Intelligente Vertragsadresse', 'Maximaler Wert der Kontrakteinlagen','Aktueller Vertrag TRX', 'TRX Award', '7 Empfehlung TRX','Adressen insgesamt']
        },

            {
                'title': 'Der Versicherungsvertrag',
                'data': ['Lebensversicherung, TRX.']
            },

            {
                'title': 'Persönliche Statistiken',
                'data': ['Adresse des Empfangers',"Countdown der Freigabe", 'Gesamtbetrag des Auftrags', 'Unerlaubtes Einkommen', 'Unbezahlter Betrag', 'Gesamtbetrag der Freigabe', 'Direkte Vertragsanschrift', 'Belohnung für die Freilassung', 'Anzahl der CVIP','Größe des Teams','Gesamtbetrag des Teams']
            }
        ],
        'btns': ['investition', 'Entzug', 'Link kopieren','Freigabe']
    },
    'success':'Operation erfolgreich'
});

// 法文
lan.push( {
    'sys': 'Langage de système',
    'first_tip': 'Ce site utilise des cookies à des fins fonctionnelles, analytiques et publicitaires, comme indiqué dans notre politique de protection de la vie privée. Si vous acceptez que nous utilisions des cookies, continuez à utiliser notre site web.',
    'title': 'Le mythe financier dans le domaine des contrats intelligents',
    'menu': ['Comment adhérer', '1 jour au TOP5', 'Le guide', '7 jours pour le TOP5'],
    'menu_detail':['Comment y adhérer', '', 'Notes explicatives', 'Notes explicatives sur le DONATE'],
    'part_1': {
        'title': 'l’adhésion',
        'cancel': 'Le retrait',
        'join': 'l’adhésion',
        'edit':'Rédacteur en chef',
        'sponsor' : 'Début du contrat',
        'sponsor_info':'Vérifiez l’identité de votre invité。',
        'sponsor_wait':'Un peu plus tard...',
        'cvip': 'CVIP',
        'cvip_detal': 'Plus de revenus pour devenir un cvip',
        'to_be':'Devenir un CVIP immédiatement',
        'income':'Recettes brûlées'
    },
    'part_2': {
        'title': 'Statistiques des données',
        'content': [{
            'title': 'Contrats intelligents',
            'data': ['Adresse de contrat intelligente', 'Pic des dépôts contractuels','Contrat en cours TRX', 'Prix de référence TRX', 'Référence: prix TRX — bull','Nombre total d’adresses']
        },

            {
                'title': 'Contrats d’assurance',
                'data': ['Prestations en espèces']
            },

            {
                'title': 'Informations statistiques individuelles',
                'data': ['Adresse de la personne de référence',"Compte à rebours", 'Montant total du contrat', 'Recettes non libérées', 'Montants non utilisés', 'Montant total libéré', 'Adresse du contrat', 'Incitations à libérer', 'Nombre de cvip de son pavillon','Nombre d’équipes','Montant total de l’équipe']
            }
        ],
        'btns': ['d’année', 'Retraits d’espèces', 'Copie du lien d’invitation','libération']
    },
    'success':'Succès de l’opération'
});
