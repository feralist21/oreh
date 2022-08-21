<?
$to='mebel-chel-174@mail.ru';
$fromMail = 'info@hostim.ru';
$fromName = 'hostim';
$date = date(DATE_RFC2822);
$messageId='<'.time().'-'.md5($fromMail.$to).'@'.$_SERVER['SERVER_NAME'].'>';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/plain; charset=utf-8". "\r\n";
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
$headers .= "Date: ". $date ." \r\n";
$headers .= "Message-ID: ". $messageId ." \r\n";

$act = isset($_POST['act']) ? strip_tags($_POST['act']) : '';

if ($act == 'callback') {
  $name = isset($_POST['req-name']) ? strip_tags($_POST['req-name']) : '';
  $phone = isset($_POST['req-phone']) ? strip_tags($_POST['req-phone']) : '';
  $comment = isset($_POST['req-comment']) ? strip_tags($_POST['req-comment']) : '';
  $theme = 'Заявка на обратный звонок';
  $message .= "Поступила новая заявка на обратный звонок с сайта darsib38.ru\n\n";
  $message .= "Имя: $name\n";
  $message .= "Телефон: $phone\n";
  $message .= "Комментарий: $comment\n";
}

if (mail($to, "=?utf-8?B?".base64_encode($theme)."?=", $message, $headers)) {
    print_r('<div class="modal__ico"><img src="./img/sprite.svg#success-ico" alt="иконка успеха"></div><p>Спасибо за заявку — перезвоним в течение 15 минут в рабочее время</p>');
}
else {
    print_r('<h2>Ошибка, ваше сообщение не отправлено.</h2><p>Попробуйте отправить данные еще раз.</p>');
}
