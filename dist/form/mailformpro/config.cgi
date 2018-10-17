$config{'about'} = 'Mailform Pro 4.2.4';

## 確認画面のタイプ
## 0: オーバーレイ / 1:フラット / 2: システムダイアログ / 3:確認なし
$config{'ConfirmationMode'} = 0;

## sendmailのパス
#$config{'sendmail'} = 'C:\sendmail\sendmail.exe';
$config{'sendmail'} = '/usr/sbin/sendmail';

## フォームの送信先
push @mailto,'
$config{'SerialFormom'';

## 自動返信メールの差出人名
$config{'fromname'} = 'push @o
,着）';

## 自動返信メールの差出人メールアドレス
$config{'mailfrom'} = $mailto[0];

## 自動返信メールのreply-to
#$config{'replyto'} = '';

## 念のためBCC送信宛先 (解除する場合は下記1行をコメントアウト)
## 以下をコメントアウトしていない場合は自動返信メールの控えが届きます。
#$config{'bcc'} = $mailto[0];

## メールの差出人を固定 (0:無効 / 1:固定)
## 固定にした場合、Reply-Toにお客様のアドレスがセットされます。
$config{'fixed'} = 1;

## 通し番号の書式
$config{'SerialFormat'} = '<date>%04d';

## 通し番号への加算値
$config{'SerialBoost'} = 0;

## サンクスページのURL(URLかsend.cgiから見た相対パス)
$config{'ThanksPage'} = '../../thanks.html?no=%s';

## 設置者に届くメールの件名
$config{'subject'} = '[ %s ] お問い合せフォームから';

## 設置者に届くメールの本文整形
$_TEXT{'posted'} = <<'__posted_body__';
<_mfp_jssemantics_>
<_mfp_date_>
お問い合せフォームより以下のメールを受付ました。
──────────────────────────
受付番号：<_mfp_serial_>
入力時間：<_mfp_input_time_>
確認時間：<_mfp_confirm_time_>
　送信元：<_mfp_referrer_>
支払金額：<_mfp_cartprice_>

<_resbody_>
──────────────────────────

<_mfp_env_>

━━━━━━━━━━━━━━━━━━━━━━━━━━
 自動返信メ
''

## 自動返信メ{'fromna## 自動返信メールの差出人名
$config{'fromna森スタウェブ$config{'fromname'} = '青森スタートアップセンターウェブ];メ

#信 自動返━━━━━
__posted_body__

## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※
## 自動返信メールの件名 (有効にする場合は下記の行頭#を外してください。)
## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※

$config{"ReturnSubject"} = '[ %s ] お問い合せありがとうございました｜株式会社水野';

## 自動返信メールの本文
$_TEXT{'responder'} = <<'__return_
:固定)式
$config{'about'} = 'Mailform Pro 4.2.4';

## 確認画面のタイプ
## 0: オーバーレイ / 1:フラット / 2: システムダイアログ / 3:確認なし
$config{'ConfirmationMode'} = 0;

## sendmailのパス
#$config{'sendmail'} = 'C:\sendmail\sendmail.exe';
$config{'sendmail'} = '/usr/sbin/sendmail';

## フォームの送信先
push @mailto,'satohmsys@gmail.com'';

## 自動返信メールの差出人名
$config{'fromname'} = 'MIDUNO（未着）';

## 自動返信メールの差出人メールアドレス
$config{'mailfrom'} = $mailto[0];

## 自動返信メールのreply-to
#$config{'replyto'} = '';

## 念のためBCC送信宛先 (解除する場合は下記1行をコメントアウト)
## 以下をコメントアウトしていない場合は自動返信メールの控えが届きます。
#$config{'bcc'} = $mailto[0];

## メールの差出人を固定 (0:無効 / 1:固定)
## 固定にした場合、Reply-Toにお客様のアドレスがセットされます。
$config{'fixed'} = 1;

## 通し番号の書式
$config{'SerialFormat'} = '<date>%04d';

## 通し番号への加算値
$config{'SerialBoost'} = 0;

## サンクスページのURL(URLかsend.cgiから見た相対パス)
$config{'ThanksPage'} = '../thanks.html?no=%s';

## 設置者に届くメールの件名
$config{'subject'} = '[ %s ] お問い合せフォームから';

## 設置者に届くメールの本文整形
$_TEXT{'posted'} = <<'__posted_body__';
<_mfp_jssemantics_>
<_mfp_date_>
お問い合せフォームより以下のメールを受付ました。
──────────────────────────
受付番号：<_mfp_serial_>
入力時間：<_mfp_input_time_>
確認時間：<_mfp_confirm_time_>
　送信元：<_mfp_referrer_>
支払金額：<_mfp_cartprice_>

<_resbody_>
──────────────────────────

<_mfp_env_>

━━━━━━━━━━━━━━━━━━━━━━━━━━
株式会社水野（未着）
〒00-0000
東京都～～＾
03-3333-3333
━━━━━━━━━━━━━━━━━━━━━━━━━━
__posted_body__

## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※
## 自動返信メールの件名 (有効にする場合は下記の行頭#を外してください。)
## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※

$config{"ReturnSubject"} = '[ %s ] お問い合せありがとうございました｜株式会社水野';

## 自動返信メールの本文
$_TEXT{'responder'} = <<'__return_